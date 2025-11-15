from fastapi import FastAPI

from app.api.routes import test
from app.core.config import settings

app = FastAPI(title=settings.app_name, debug=settings.debug)

app.include_router(test.router, prefix="/api", tags=["test"])


@app.get("/")
async def root() -> dict[str, str]:
    return {"message": "FastAPI Web Project"}

