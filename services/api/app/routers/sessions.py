"""Experiment sessions — lifecycle stubs (create, control, timeline).

Sessions track what happened during an experiment: parameter changes,
fault injections, pauses, diagnoses. That event stream is the evidence
the assessment engine later grades.
"""
from fastapi import APIRouter, WebSocket
from pydantic import BaseModel

router = APIRouter(prefix="/simulation/sessions", tags=["sessions"])


class SessionCreate(BaseModel):
    experiment_slug: str
    config: dict = {}


@router.post("/", status_code=201)
def create_session(body: SessionCreate):
    # TODO: persist ExperimentSession + SimulationInstance rows
    return {"id": "stub-session", "experiment": body.experiment_slug, "state": "created"}


@router.post("/{session_id}/control")
def control(session_id: str, action: str):
    # actions: run | pause | stop | reset | step
    return {"id": session_id, "action": action, "ok": True}


@router.websocket("/{session_id}/events")
async def events(ws: WebSocket):
    """Event/timeline stream — fault injections, interventions, telemetry
    markers. Client-side sims push events here; the API persists them."""
    await ws.accept()
    await ws.send_json({"type": "hello", "session": session_id})
    try:
        while True:
            await ws.receive_json()  # events arrive; persist + echo ack later
    except Exception:
        pass
