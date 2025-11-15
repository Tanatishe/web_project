import pytest
from httpx import ASGITransport, AsyncClient

from main import app


@pytest.mark.asyncio
async def test_root():
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        response = await client.get("/")
        assert response.status_code == 200
        assert "text/html" in response.headers.get("content-type", "")
        assert "FastAPI Web Project" in response.text


@pytest.mark.asyncio
async def test_test_endpoint():
    transport = ASGITransport(app=app)
    async with AsyncClient(transport=transport, base_url="http://test") as client:
        response = await client.get("/api/test")
        assert response.status_code == 200
        data = response.json()
        assert data["message"] == "Test endpoint works!"
        assert data["status"] == "ok"

