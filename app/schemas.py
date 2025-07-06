from pydantic import BaseModel, EmailStr
from datetime import datetime

# ---------- User ----------
class UserCreate(BaseModel):
    username: str
    email: EmailStr
    password: str

class UserRead(BaseModel):
    id: int
    username: str
    email: EmailStr
    is_active: bool
    created_at: datetime
    class Config:
        from_attributes = True

class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"

# ---------- Task ----------
class TaskCreate(BaseModel):
    title: str
    description: str | None = None

class TaskRead(TaskCreate):
    id: int
    done: bool
    created_at: datetime
    class Config:
        from_attributes = True

class TaskUpdate(BaseModel):
    title: str
    description: str | None = None
    done: bool | None = None
