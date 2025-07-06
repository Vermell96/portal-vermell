from fastapi import FastAPI
from .database import engine, Base
from .routes import router as task_router
from .auth_routes import router as auth_router

app = FastAPI()
app.include_router(auth_router)
app.include_router(task_router)

@app.on_event("startup")
async def startup():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

@app.get("/")
async def root():
    return {"msg": "¡Funciona!"}
