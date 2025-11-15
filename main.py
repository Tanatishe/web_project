from pathlib import Path

from fastapi import FastAPI, Request
from starlette.responses import HTMLResponse
from starlette.templating import Jinja2Templates

from app.api.routes import test
from app.core.config import settings

app = FastAPI(title=settings.app_name, debug=settings.debug)

app.include_router(test.router, prefix="/api", tags=["test"])

templates = Jinja2Templates(directory=str(Path(__file__).parent / "app" / "templates"))


@app.get("/", response_class=HTMLResponse)
async def root(request: Request) -> HTMLResponse:
    return templates.TemplateResponse("index.html", {"request": request})

