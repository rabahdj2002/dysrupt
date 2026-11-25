"""DYSRUPT API — MVP scaffold.

Single FastAPI service organised by domain routers. Simulation runs
client-side in the browser for MVP (see docs/architecture.md); this API
owns identity, catalogues, experiment sessions, telemetry ingestion and
the fault registry.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from .routers import auth, labs, experiments, sessions, faults, telemetry

app = FastAPI(title="DYSRUPT API", version="0.1.0", root_path="/api/v1")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

for r in (auth, labs, experiments, sessions, faults, telemetry):
    app.include_router(r.router)


@app.get("/health")
def health():
    return {"status": "ok", "service": "dysrupt-api", "version": "0.1.0"}
