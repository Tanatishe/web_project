FROM python:3.11-slim

WORKDIR /app

RUN pip install uv

COPY pyproject.toml ./
COPY uv.lock* ./

RUN if [ -f uv.lock ]; then uv sync --frozen --no-install-project; else uv sync --no-install-project; fi

COPY . .

EXPOSE 8000

CMD ["uv", "run", "uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]

