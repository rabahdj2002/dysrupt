"""Telemetry ingestion — time-series measurement upload/export stubs."""
from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/telemetry", tags=["telemetry"])


class TelemetryBatch(BaseModel):
    session_id: str
    channel: str          # e.g. "omega_meas", "current", "temp"
    t0: float             # epoch of first sample
    dt: float             # uniform sample period, seconds
    values: list[float]


@router.post("/batch", status_code=202)
def ingest(batch: TelemetryBatch):
    # TODO: persist to a time-series store (TimescaleDB when Postgres lands)
    return {"accepted": len(batch.values), "channel": batch.channel}
