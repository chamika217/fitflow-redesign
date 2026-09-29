from fastapi import FastAPI

app = FastAPI(title="FitFlow AI Service")


@app.get("/health")
def health():
    return {"status": "ok"}
