from typing import AsyncGenerator
from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select
from .database import SessionLocal
from .models import User
from .schemas import UserCreate, UserRead, Token
from .auth import hash_password, verify_password, create_access_token, decode_token

router = APIRouter()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

# ----- dependencia de sesión -----
async def get_session() -> AsyncGenerator[AsyncSession, None]:
    async with SessionLocal() as session:
        yield session

# ----- registro -----
@router.post("/register", response_model=UserRead, status_code=201)
async def register(user: UserCreate, db: AsyncSession = Depends(get_session)):
    if await db.scalar(select(User).where(User.username == user.username)):
        raise HTTPException(status_code=400, detail="Username taken")
    if await db.scalar(select(User).where(User.email == user.email)):
        raise HTTPException(status_code=400, detail="Email taken")

    new_user = User(
        username=user.username,
        email=user.email,
        hashed_password=hash_password(user.password)
    )
    db.add(new_user)
    await db.commit()
    await db.refresh(new_user)
    return new_user

# ----- login -----
@router.post("/login", response_model=Token)
async def login(form: OAuth2PasswordRequestForm = Depends(), db: AsyncSession = Depends(get_session)):
    user: User | None = await db.scalar(select(User).where(User.username == form.username))
    if not user or not verify_password(form.password, user.hashed_password):
        raise HTTPException(status_code=401, detail="Invalid credentials")
    token = create_access_token({"sub": str(user.id)})
    return {"access_token": token}

# ----- dependencia usuario actual -----
async def get_current_user(token: str = Depends(oauth2_scheme), db: AsyncSession = Depends(get_session)) -> User:
    credentials_error = HTTPException(status_code=401, detail="Could not validate token")
    try:
        payload = decode_token(token)
        uid: str | None = payload.get("sub")
        if uid is None:
            raise credentials_error
    except Exception:
        raise credentials_error
    user = await db.get(User, int(uid))
    if not user:
        raise credentials_error
    return user
