# FastAPI Web Project

Базовое FastAPI приложение с тестовой ручкой.

## Установка

1. Установите uv (если еще не установлен):
```bash
pip install uv
```

2. Создайте виртуальное окружение и установите зависимости:
```bash
uv venv
uv pip install -e ".[dev]"
```

Или используйте uv напрямую:
```bash
uv sync
```

## Запуск

### Локально
```bash
uv run uvicorn main:app --reload
```

### Через Docker Compose
```bash
docker-compose up --build
```

Приложение будет доступно по адресу: http://localhost:8000

## Тестирование

Запуск тестов:
```bash
uv run pytest
```

## Линтинг и проверка типов

### Ruff
```bash
uv run ruff check .
uv run ruff format .
```

### MyPy
```bash
uv run mypy .
```

## API Endpoints

- `GET /` - Корневой endpoint
- `GET /api/test` - Тестовая ручка

## Документация

После запуска приложения доступна автоматическая документация:
- Swagger UI: http://localhost:8000/docs
- ReDoc: http://localhost:8000/redoc

