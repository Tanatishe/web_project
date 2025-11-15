from fastapi import FastAPI
from app.core.config import settings
from app.api.routes import test

app = FastAPI(title=settings.app_name, debug=settings.debug)

app.include_router(test.router, prefix="/api", tags=["test"])


@app.get("/")
async def root():
    return {"message": "FastAPI Web Project"}

