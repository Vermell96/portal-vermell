# ---------- Imagen base ----------
FROM python:3.13-slim

# ---------- Dependencias de sistema ----------
ENV DEBIAN_FRONTEND=noninteractive
RUN apt-get update \
 && apt-get install -y --no-install-recommends \
        build-essential \
        libpq-dev \
 && rm -rf /var/lib/apt/lists/*

# ---------- Directorio de trabajo ----------
WORKDIR /app

# ---------- Dependencias Python ----------
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# ---------- Copia del código ----------
COPY . .

# ---------- Exponer puerto ----------
EXPOSE 8000

# ---------- Comando de arranque ----------
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
