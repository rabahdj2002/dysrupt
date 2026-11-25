"""Laboratories — the DC Motor lab ships as the Phase-2 reference."""
from fastapi import APIRouter

router = APIRouter(prefix="/laboratories", tags=["laboratories"])

LABS = [
    {
        "slug": "dc-motor",
        "name": "DC Motor Laboratory",
        "discipline": "control-systems",
        "description": "Speed control of a brushed DC motor — transfer function, PID, encoder, load, thermal effects, fault injection.",
        "components": ["dc-motor", "pid", "encoder", "load", "oscilloscope", "fault-injection"],
        "experiments": ["unstable-motor", "lying-sensor"],
        "status": "ready",
    }
]


@router.get("/")
def list_labs():
    return LABS


@router.get("/{slug}")
def get_lab(slug: str):
    for lab in LABS:
        if lab["slug"] == slug:
            return lab
    return {"detail": "not found"}
