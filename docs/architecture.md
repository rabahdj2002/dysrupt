# Architecture decisions

## ADR-001: Client-side simulation for MVP

**Decision:** All physics for MVP labs runs in the browser as pure
TypeScript modules (`apps/web/src/labs/*/`), not on server-side workers.

**Rationale:**

- `robot-arm-sim` already proves the pattern — real kinematics, numerical
  IK and collision detection at 60 fps, zero backend.
- Server-side isolated sim environments (SPEC §16.3) are the platform's
  largest infrastructure cost; deferring them removes the biggest MVP risk.
- Lab sim cores stay framework-free and unit-testable in Node/Vitest,
  same as the robot-arm-sim math modules.
- Latency for interactive manipulation is zero — no telemetry round-trip.

**Consequences:**

- The FastAPI backend owns identity, catalogues, experiment sessions,
  fault registry and telemetry *records* — not physics.
- Server-side sim workers get revisited at Phase 5 (hardware-in-the-loop)
  or when heavier solvers (MuJoCo, PLC runtimes) are needed.
- Telemetry is uploaded in batches to `/telemetry/batch` for
  evidence/replay rather than streamed live.

## ADR-002: Faults mutate plant parameters, not symptoms

**Decision:** The fault registry (`services/api/app/routers/faults.py` ↔
`apps/web/src/labs/dc-motor/faults.ts`) defines faults as parameter
mutations on the physical model — never as scripted output effects.

**Rationale:** SPEC §8.3 requires real propagation: bearing wear raises
`b`, which raises current, which raises winding temperature, which trips
the student's instruments in sequence. A "Bearing failure" banner teaches
nothing; watching i²R heating climb after friction rises teaches the
chain. Mutating parameters gives emergent symptoms for free.

## ADR-003: Single FastAPI service, domain routers

**Decision:** One backend app, routers split by SPEC §16.2 domains —
auth, labs, experiments, sessions, faults, telemetry for MVP.

**Rationale:** SPEC §16 says don't start with microservices. One app with
clean router boundaries can split later along the same seams.
