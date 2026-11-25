# DYSRUPT

**Build it. Break it. Understand it. Rebuild it better.**

An engineering experimentation platform — students build systems, inject
controlled failures, investigate what breaks and engineer better solutions.
See **[SPEC.md](SPEC.md)** for the full product vision and technical blueprint.

## Repository layout

```
apps/web/         React + TypeScript + Vite + Tailwind — the platform frontend
  src/labs/       lab modules, each with a pure-TS simulation core
    dc-motor/     MVP Phase-2 lab: real ODE motor model + PID + fault registry
services/api/     FastAPI backend — domain routers per SPEC §16.4
docs/             architecture decisions
SPEC.md           product vision, platform specification, technical blueprint
docker-compose.yml  postgres + redis + api + web dev environment
```

## Key architecture decision: simulation runs client-side

For MVP, all physics executes **in the browser** as pure TypeScript —
proven by [robot-arm-sim](https://rabahdj2002.github.io/robot-arm-sim/),
which runs full DH kinematics + numerical IK + collision detection
client-side at 60 fps. The backend owns identity, catalogues, experiment
sessions and telemetry storage — not physics workers. This removes the
heaviest infrastructure cost (isolated sim environments, quotas, sandboxing)
until hardware-in-the-loop or server-grade solvers actually require it.
Faults act by mutating plant parameters — real propagation through coupled
ODEs, not scripted symptom sequences.

## Dev quickstart

```bash
# frontend (no backend needed — sim is client-side)
cd apps/web && npm install && npm run dev        # http://localhost:5173

# backend
cd services/api && pip install -r requirements.txt
uvicorn app.main:app --reload                     # http://localhost:8000/api/v1/docs

# full stack
docker compose up
```

## Current state (MVP scaffold)

- [x] SPEC.md — complete product blueprint
- [x] `apps/web` — app shell, routes (Home / Dashboard / Explore / Labs / Workbench), DYSRUPT design tokens
- [x] **DC Motor Laboratory workbench** — coupled electrical/mechanical/thermal ODEs, PID with anti-windup + saturation, oscilloscope, telemetry, event timeline
- [x] **Disruption panel** — 8 fault definitions (encoder noise/bias/freeze, bearing wear, demagnetization, blockage, PSU droop, cooling failure) that mutate plant parameters
- [x] `services/api` — FastAPI skeleton: auth, labs, experiments, sessions, fault registry, telemetry ingestion
- [ ] Auth + persistence (Phase 1)
- [ ] Experiment session recording + replay (Phase 3)
- [ ] Assessment loop (Phase 4)
