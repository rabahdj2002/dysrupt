"""Experiments — catalog + detail stubs."""
from fastapi import APIRouter

router = APIRouter(prefix="/experiments", tags=["experiments"])

EXPERIMENTS = [
    {
        "slug": "unstable-motor",
        "lab": "dc-motor",
        "title": "The Unstable Motor",
        "objective": "Maintain DC motor speed under changing mechanical loads.",
        "investigate": ["PID tuning", "load disturbances", "encoder noise", "friction", "saturation"],
        "difficulty": "beginner",
    },
    {
        "slug": "lying-sensor",
        "lab": "dc-motor",
        "title": "The Lying Sensor",
        "objective": "Identify an inaccurate sensor by distinguishing real system behavior from misleading measurements.",
        "investigate": ["bias", "noise", "frozen signal", "calibration drift"],
        "difficulty": "beginner",
    },
]


@router.get("/")
def list_experiments():
    return EXPERIMENTS


@router.get("/{slug}")
def get_experiment(slug: str):
    for e in EXPERIMENTS:
        if e["slug"] == slug:
            return e
    return {"detail": "not found"}
