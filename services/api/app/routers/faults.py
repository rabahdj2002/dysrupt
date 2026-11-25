"""Fault registry — central catalogue of injectable failures (SPEC §8.1)."""
from fastapi import APIRouter

router = APIRouter(prefix="/faults", tags=["faults"])

FAULTS = [
    {"id": "enc-noise", "name": "Noisy encoder", "category": "sensor", "target": "encoder",
     "severity": "moderate", "params": {"sigma_rads": 4.0}},
    {"id": "enc-bias", "name": "Encoder bias", "category": "sensor", "target": "encoder",
     "severity": "moderate", "params": {"bias_rads": 15.0}},
    {"id": "enc-freeze", "name": "Frozen encoder", "category": "sensor", "target": "encoder",
     "severity": "severe", "params": {}},
    {"id": "bearing-wear", "name": "Bearing wear", "category": "mechanical", "target": "dc-motor",
     "severity": "moderate", "params": {"friction_mult": 6.0}},
    {"id": "demag", "name": "Demagnetized rotor", "category": "motor", "target": "dc-motor",
     "severity": "severe", "params": {"torque_mult": 0.6}},
    {"id": "blockage", "name": "Mechanical blockage", "category": "mechanical", "target": "dc-motor",
     "severity": "severe", "params": {"load_torque_nm": 0.08}},
    {"id": "psu-droop", "name": "Weak power supply", "category": "power", "target": "psu",
     "severity": "moderate", "params": {"droop_v": 6.0}},
    {"id": "cooling-fail", "name": "Cooling failure", "category": "motor", "target": "dc-motor",
     "severity": "severe", "params": {"heat_rate_cps": 3.0}},
]


@router.get("/")
def list_faults(discipline: str | None = None):
    return FAULTS
