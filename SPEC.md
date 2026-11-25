# DYSRUPT
## Product Vision, Platform Specification & Technical Blueprint

**Tagline:** Build it. Break it. Understand it. Rebuild it better.

**Product category:** Engineering Experimentation, Simulation & Education Platform

**Product vision:** Create a digital and physical environment where people learn engineering by experimenting with systems, introducing controlled failures, investigating their behavior, and developing better solutions.

**Platform type:** Web-based engineering ecosystem with virtual laboratories, physical hardware integration, educational workflows, simulation engines and engineering analytics.

**Primary audience:** University engineering students, engineering educators, researchers, technical schools and industrial training centers.

**Core disciplines:** Robotics, control engineering, industrial automation, electronics, embedded systems, mechatronics and mechanical engineering.

---

# 1. Executive Summary

DYSRUPT is an interactive engineering experimentation platform designed around the concept of productive failure.

Traditional engineering education frequently teaches students how systems should work. Students learn mathematical models, study theoretical principles, follow laboratory instructions and implement solutions to predefined problems.

However, real engineering involves something much more complicated:

- Systems behave differently from theoretical models.
- Sensors produce inaccurate measurements.
- Motors deteriorate.
- Controllers become unstable.
- Communication networks experience delays.
- Mechanical components wear out.
- Unexpected disturbances affect system performance.
- Multiple failures can interact.

DYSRUPT makes these situations part of the learning experience.

Students enter an engineering environment, interact with a functioning system, experiment with its parameters, introduce faults, observe consequences, diagnose problems and implement corrective solutions.

The platform should support three types of experimentation:

1. **Virtual experimentation:** Everything happens inside a simulated environment.
2. **Hardware-in-the-loop experimentation:** Virtual systems interact with real electronic components and hardware.
3. **Physical experimentation:** Students investigate and control actual robots, machines and laboratory equipment.

DYSRUPT is not intended to replace conventional engineering software. It should provide an educational and experimental layer that connects existing engineering technologies into one coherent environment.

# 2. Product Philosophy

The platform should be built around six principles.

### 2.1 Failure is an experiment

A failure is not automatically a negative outcome.

When students introduce a disturbance, damage a simulated component or destabilize a controller, they are performing an experiment.

The platform should encourage controlled experimentation rather than punish mistakes.

### 2.2 Understand before solving

Students should not immediately receive the answer.

They should investigate the system using available measurements, documentation, instruments and observations.

### 2.3 Theory must connect to reality

Every important theoretical concept should have a practical counterpart.

For example:

- Transfer functions connect to simulated motor behavior.
- PID parameters connect to actual motor speed.
- Encoder measurements connect to mechanical position.
- Communication delays connect to control-system instability.
- Mechanical friction connects to actuator performance.

### 2.4 Every experiment generates evidence

Experiments should produce measurable results.

The platform should record:

- System parameters.
- Initial conditions.
- Injected faults.
- Sensor measurements.
- Control signals.
- System responses.
- Student interventions.
- Final results.

### 2.5 Failure should have consequences

If a student damages a simulated motor, the motor should behave differently.

If a student introduces excessive proportional gain, the controller should exhibit the resulting behavior.

The platform must use meaningful physical and mathematical models rather than cosmetic animations.

### 2.6 Learning should be measurable

DYSRUPT should evaluate more than the final answer.

It should evaluate the student's hypotheses, diagnostic procedures, use of measurements, understanding of causes and effectiveness of corrective actions.

---

# 3. Target Users and Roles

DYSRUPT should support six primary user roles.

## 3.1 Student

The main platform user.

Students can:

- Discover available laboratories.
- Enroll in courses.
- Perform experiments.
- Build and modify systems.
- Introduce failures.
- Access simulation instruments.
- Write engineering reports.
- Submit assignments.
- Track their progress.
- Participate in challenges.

## 3.2 Instructor

Teachers and university lecturers.

Instructors can:

- Create courses.
- Create laboratory assignments.
- Configure experimental conditions.
- Select allowed failure scenarios.
- Define evaluation criteria.
- Monitor student experiments.
- Review reports.
- Compare student performance.
- Provide feedback.

## 3.3 Laboratory Designer

A specialized role responsible for creating engineering environments.

They can:

- Build virtual machines.
- Configure component models.
- Connect sensors and actuators.
- Define system parameters.
- Create fault scenarios.
- Configure experiments.
- Publish laboratories.

## 3.4 Researcher

Researchers can use DYSRUPT for controlled experimentation.

They can:

- Create custom experiments.
- Define initial conditions.
- Configure disturbances.
- Run repeated experiments.
- Compare results.
- Export datasets.
- Analyze system behavior.
- Share reproducible experimental configurations.

## 3.5 Organization Administrator

Universities and training centers.

They can:

- Manage members.
- Create departments.
- Manage courses.
- Allocate laboratory resources.
- Manage hardware devices.
- Configure access policies.
- Review organizational analytics.

## 3.6 Platform Administrator

Internal DYSRUPT administration.

Responsible for:

- User management.
- Laboratory approval.
- Component registry.
- Simulation infrastructure.
- System monitoring.
- Content moderation.
- Platform configuration.
- Security and audit logs.

---

# 4. Main Platform Structure

DYSRUPT should have the following primary navigation.

1. Home
2. Explore
3. Laboratories
4. Experiments
5. Workbench
6. Challenges
7. Courses
8. Research
9. Community
10. My Workspace

The application should also provide a contextual dashboard depending on the user's role.

# 5. Detailed Page Structure and Routes

Use a clean, modern engineering interface.

The main application should have a persistent navigation sidebar, a contextual top navigation bar, notifications, profile access and a central workspace.

## 5.1 Public Website

These pages introduce the product to visitors.

| Page | Route | Purpose |
|---|---|---|
| Homepage | `/` | Introduce DYSRUPT |
| About | `/about` | Explain the philosophy |
| How It Works | `/how-it-works` | Explain the experimentation workflow |
| Explore Labs | `/explore` | Discover laboratories |
| Explore Experiments | `/experiments` | Discover individual experiments |
| Disciplines | `/disciplines` | Browse engineering subjects |
| For Universities | `/institutions` | Institutional offering |
| For Educators | `/educators` | Teaching features |
| Research | `/research` | Research and experimental applications |
| Pricing | `/pricing` | Subscription plans |
| Documentation | `/docs` | Technical documentation |
| Blog | `/blog` | Articles and announcements |
| Contact | `/contact` | Contact and partnerships |
| Login | `/login` | Authentication |
| Register | `/register` | Account creation |

### Homepage structure

The homepage should communicate the concept immediately.

**Hero section**

Headline:

"Engineering isn't learned by avoiding failure."

Subheadline:

"Enter an experimental engineering environment. Build systems, challenge their limits, investigate failures and discover how things really work."

Primary CTA: `Enter the Laboratory`

Secondary CTA: `Explore Experiments`

The hero visual should show an interactive engineering environment: a robotic arm, a motor system, a virtual industrial installation and visualized fault propagation.

**Section 2 — The DYSRUPT method**

Present five stages:

1. Build.
2. Experiment.
3. Disrupt.
4. Diagnose.
5. Improve.

**Section 3 — Explore engineering disciplines**

Show interactive discipline cards for:

- Robotics.
- Control systems.
- Electronics.
- Industrial automation.
- Mechatronics.
- Mechanical systems.

**Section 4 — Featured experiments**

Show examples such as:

- Stabilize an unstable inverted pendulum.
- Diagnose an overheating motor.
- Investigate an encoder failure.
- Recover an industrial conveyor.
- Identify an unknown dynamic system.

**Section 5 — Virtual meets physical**

Explain how simulations can connect to actual electronic devices, motors, sensors and laboratory hardware.

**Section 6 — For educators and universities**

Show how institutions can create courses, assign experiments, assess student performance and manage shared laboratories.

**Section 7 — Final CTA**

"Stop memorizing how machines work. Start discovering why they fail."

---

## 5.2 Authenticated Student Application

Base route: `/app`

### Dashboard

Route: `/app/dashboard`

The dashboard should display:

- Welcome message.
- Active courses.
- Recent experiments.
- Current challenges.
- Learning progress.
- Experiment completion rate.
- Recent achievements.
- Recommended laboratories.
- Pending assignments.
- Recent activity.

It should have a section called **Continue Experimenting**, which takes students directly back into unfinished experiments.

### Explore

Route: `/app/explore`

A discovery interface for engineering content.

Filters:

- Discipline.
- Difficulty.
- Experiment duration.
- Simulation or physical hardware.
- Required knowledge.
- Available tools.
- Individual or collaborative.
- Beginner, intermediate or advanced.

Each result should contain:

- Experiment name.
- Description.
- Discipline.
- Difficulty.
- Estimated duration.
- Required components.
- Learning objectives.
- Available execution modes.

### Laboratories

Routes:

- `/app/labs`
- `/app/labs/:slug`
- `/app/labs/:slug/overview`
- `/app/labs/:slug/components`
- `/app/labs/:slug/experiments`
- `/app/labs/:slug/resources`

A laboratory is a collection of related engineering systems and experiments.

For example:

**DC Motor Laboratory**

Contains:

- DC motor model.
- Motor driver.
- Encoder.
- Power supply.
- Load model.
- PID controller.
- Oscilloscope.
- Fault injection module.

A laboratory should contain an overview, available experiments, component inventory, documentation and required skills.

### Experiments

Routes:

- `/app/experiments`
- `/app/experiments/:slug`
- `/app/experiments/:slug/instructions`
- `/app/experiments/:slug/workspace`
- `/app/experiments/:slug/history`
- `/app/experiments/:slug/report`

An experiment is a defined engineering activity with objectives, conditions, components and evaluation criteria.

The experiment page should include:

- Introduction.
- Learning objectives.
- Required knowledge.
- Equipment.
- System description.
- Starting conditions.
- Experiment instructions.
- Safety instructions.
- Submission requirements.

### Workbench

Route: `/app/workbench`

This is one of the most important areas of the platform.

The Workbench is where students interact with engineering systems.

It should provide a unified environment for:

- System visualization.
- Component configuration.
- Parameter adjustment.
- Fault injection.
- Live measurements.
- Controller programming.
- Experiment execution.
- Data recording.

More details are provided in Section 6.

### Challenges

Routes:

- `/app/challenges`
- `/app/challenges/:slug`
- `/app/challenges/:slug/attempt`
- `/app/challenges/:slug/results`
- `/app/leaderboard`

Challenges are practical engineering problems.

Examples:

- Stabilize an inverted pendulum.
- Identify an unknown motor model.
- Diagnose three hidden faults.
- Reduce system settling time.
- Improve energy efficiency.
- Recover an automated production line.

### Courses

Routes:

- `/app/courses`
- `/app/courses/:slug`
- `/app/courses/:slug/lessons`
- `/app/courses/:slug/assignments`
- `/app/courses/:slug/progress`

Courses organize laboratories and experiments into structured educational programs.

DYSRUPT should not become a conventional LMS. Courses should always connect theoretical lessons with practical experimentation.

### Research

Routes:

- `/app/research`
- `/app/research/projects`
- `/app/research/projects/:id`
- `/app/research/datasets`
- `/app/research/experiments`
- `/app/research/exports`

Researchers should be able to create repeatable experiments, store configurations, compare results and export data.

### Community

Routes:

- `/app/community`
- `/app/community/discussions`
- `/app/community/projects`
- `/app/community/showcase`
- `/app/community/members`

Users can publish projects, share experiments, discuss failures and showcase engineering solutions.

Community submissions must not expose private institutional data or hardware credentials.

### My Workspace

Routes:

- `/app/workspace`
- `/app/workspace/projects`
- `/app/workspace/saved`
- `/app/workspace/history`
- `/app/workspace/reports`
- `/app/workspace/settings`

Contains the user's personal engineering work.

---

# 6. The Core Product: Engineering Workbench

The Workbench should be the central differentiator of DYSRUPT.

It should feel like a combination of an engineering laboratory, simulation environment and development IDE.

## 6.1 Workbench layout

Use a multi-panel interface.

**Left panel — Component Explorer**

Categories:

- Mechanical components.
- Electrical components.
- Sensors.
- Actuators.
- Controllers.
- Communication devices.
- Industrial equipment.
- Measurement instruments.
- Power systems.

Students can drag components into the workspace.

**Center panel — Simulation Environment**

This is the main interactive area.

Depending on the experiment, it can show:

- A 3D robotic arm.
- An industrial production line.
- An electrical circuit.
- A mechanical assembly.
- A control-system block diagram.
- A water pumping installation.
- A mobile robot environment.

**Right panel — Properties and Configuration**

Selecting a component opens its properties.

For example, selecting a DC motor displays:

- Rated voltage.
- Rated current.
- Resistance.
- Inductance.
- Torque constant.
- Back EMF constant.
- Rotor inertia.
- Friction coefficient.
- Current temperature.
- Health condition.

The student can modify parameters when the experiment permits it.

**Bottom panel — Instruments and Telemetry**

Tabs:

- Oscilloscope.
- Live charts.
- Event logs.
- Sensor readings.
- Control signals.
- System diagnostics.
- Simulation console.

## 6.2 Experiment toolbar

The toolbar should include:

- Run.
- Pause.
- Stop.
- Reset.
- Single-step execution.
- Simulation speed.
- Save checkpoint.
- Record experiment.
- Undo.
- Redo.
- Export data.

Students should be able to pause the system and inspect its internal state.

## 6.3 The Disruption Panel

This is a signature feature.

A dedicated interface where students introduce controlled faults.

Categories:

**Sensor failures**
- Disconnect sensor.
- Add noise.
- Introduce bias.
- Freeze measurements.
- Simulate calibration drift.
- Change sampling frequency.

**Motor failures**
- Reduce torque.
- Increase friction.
- Simulate overheating.
- Introduce mechanical blockage.
- Reduce efficiency.
- Simulate intermittent operation.

**Control failures**
- Excessive proportional gain.
- Incorrect integral gain.
- Incorrect derivative gain.
- Reverse feedback polarity.
- Introduce controller saturation.
- Introduce sampling delays.

**Communication failures**
- Packet loss.
- Communication latency.
- Intermittent disconnection.
- Corrupted data.
- Communication timeout.

**Mechanical failures**
- Increased backlash.
- Bearing wear.
- Gear damage.
- Increased load.
- Mechanical misalignment.
- Structural deformation.

Every fault should have configurable parameters where physically meaningful.

For example, an encoder failure could be configured as:

- Failure type: Signal dropout.
- Probability: 20%.
- Duration: 300 ms.
- Activation: Random or manually triggered.

The platform should distinguish between realistic faults, simplified teaching models and intentionally exaggerated scenarios.

## 6.4 The Experiment Timeline

Every experiment should have a timeline.

The timeline records:

- Experiment started.
- Parameters changed.
- Fault injected.
- System response detected.
- Student paused execution.
- Diagnosis submitted.
- Corrective action performed.
- Experiment completed.

Students should be able to replay the experiment and compare different execution stages.

## 6.5 The Evidence Panel

Students should be able to save observations and attach evidence.

Evidence types:

- Screenshots.
- Oscilloscope measurements.
- CSV datasets.
- Mathematical calculations.
- Code snippets.
- Written hypotheses.
- Diagnostic conclusions.

This evidence becomes part of the final engineering report.

---

# 7. Engineering Simulation Systems

DYSRUPT should use a modular simulation architecture.

Do not build one giant simulation engine.

Instead, create specialized engines that share common interfaces.

## 7.1 Control Systems Engine

Purpose: Simulate dynamic systems and controllers.

Capabilities:

- Transfer functions.
- State-space models.
- PID controllers.
- Open-loop and closed-loop systems.
- Stability analysis.
- System identification.
- Disturbance generation.
- Parameter estimation.
- Step and impulse responses.

Example experiments:

- Stabilize an inverted pendulum.
- Control DC motor speed.
- Maintain water tank level.
- Compare PID tuning methods.
- Investigate time delays and instability.

## 7.2 Robotics Engine

Purpose: Simulate robotic systems.

Capabilities:

- Forward kinematics.
- Inverse kinematics.
- Joint control.
- Trajectory planning.
- Collision detection.
- Sensor simulation.
- Mobile robot navigation.
- Manipulator dynamics.

Support importing compatible robot models and connecting to ROS 2 environments.

## 7.3 Electronics Engine

Purpose: Simulate electronic systems and embedded components.

Capabilities:

- Circuit behavior.
- Microcontroller interfaces.
- Digital and analog signals.
- Sensor models.
- Motor drivers.
- Communication interfaces.
- Component fault simulation.

## 7.4 Industrial Automation Engine

Purpose: Simulate production systems.

Capabilities:

- PLC execution.
- Ladder Logic.
- Function Block Diagram.
- Structured Text.
- Conveyor systems.
- Sorting systems.
- Pneumatic actuators.
- Industrial sensors.
- Modbus TCP.
- OPC UA connectivity.

Where possible, integrate existing PLC runtimes rather than implementing an IEC 61131-3 compiler from scratch.

## 7.5 Mechanical Systems Engine

Purpose: Simulate mechanical behavior.

Capabilities:

- Mass and inertia.
- Friction.
- Torque.
- Gear systems.
- Springs and dampers.
- Vibration.
- Mechanical backlash.
- Structural loads.
- Wear models.

---

# 8. The Failure Injection System

This should be an independent core subsystem.

It should be responsible for introducing, managing and recording failures across all supported simulation engines.

## 8.1 Fault Registry

Maintain a central registry of supported fault definitions.

Each fault should contain:

- Unique identifier.
- Fault name.
- Discipline.
- Target component type.
- Description.
- Severity.
- Parameters.
- Activation method.
- Expected effects.
- Supported simulation engines.
- Safety classification.
- Educational objectives.

## 8.2 Fault Activation Modes

Support:

1. Manual activation.
2. Scheduled activation.
3. Random activation.
4. Threshold-based activation.
5. Instructor-triggered activation.
6. Hidden activation.

## 8.3 Fault Propagation

The platform should model how faults affect interconnected systems.

Example:

A motor bearing develops excessive friction.

This causes:

1. Increased mechanical resistance.
2. Higher motor current.
3. Increased temperature.
4. Reduced motor speed.
5. Controller compensation.
6. Potential controller saturation.
7. Reduced system performance.

This is much more educational than simply displaying a warning that says "Bearing failure."

## 8.4 Multiple Fault Scenarios

Advanced experiments should introduce interacting faults.

For example:

- An encoder begins producing noisy measurements.
- A controller attempts to compensate.
- Communication delays increase.
- The system becomes unstable.

Students must identify the relationship between the failures.

## 8.5 Hidden Failure Challenges

Instructors can create experiments where the fault is not disclosed.

The student receives the system and its symptoms, not the answer.

The platform evaluates the diagnostic process.

---

# 9. Engineering Intelligence and AI

AI should be a supporting subsystem, not the foundation of the entire platform.

Call it the **DYSRUPT Engineering Intelligence System**.

Its responsibilities should include:

### AI Experiment Assistant

Helps students understand the experiment, interpret observations and ask engineering questions.

### Diagnostic Assistant

Analyzes available measurements and suggests possible causes.

It must distinguish between evidence and hypotheses.

### Report Assistant

Helps students organize experimental evidence into structured technical reports.

### Adaptive Experiment Generator

Creates variations of existing experiments by modifying parameters, disturbances and initial conditions.

### Instructor Assistant

Helps teachers create assignments, generate fault scenarios and review student submissions.

### Engineering Evaluation Engine

Evaluates:

- Hypothesis quality.
- Experimental procedure.
- Measurement selection.
- Diagnostic accuracy.
- Engineering reasoning.
- Corrective action.
- Final system performance.

AI-generated evaluations should be explainable and reviewable by instructors.

AI must never invent experimental measurements or claim a fault was detected without supporting telemetry.

---

# 10. Learning and Assessment System

DYSRUPT should organize education around practical engineering competencies.

## 10.1 Learning Paths

Examples:

**Control Engineering**
- Dynamic system modeling.
- Transfer functions.
- System response.
- Stability.
- PID control.
- System identification.
- Robust control.

**Robotics**
- Coordinate systems.
- Kinematics.
- Dynamics.
- Actuator control.
- Motion planning.
- Sensor integration.
- Robot diagnostics.

**Industrial Automation**
- PLC programming.
- Digital and analog I/O.
- Motor control.
- Industrial communication.
- Sequencing.
- Fault diagnosis.

## 10.2 Competency Tracking

Each student should have a competency profile.

Example:

| Competency | Status |
|---|---|
| PID tuning | Developing |
| System identification | Intermediate |
| Fault diagnosis | Advanced |
| PLC programming | Developing |
| Robot kinematics | Intermediate |

Competencies should be based on actual experiment performance, not simply course completion.

## 10.3 Assessment Categories

Each experiment can be evaluated across several dimensions:

| Dimension | Suggested weight |
|---|---:|
| Problem understanding | 15% |
| Experimental methodology | 20% |
| Diagnostic reasoning | 25% |
| Corrective solution | 20% |
| Verification and reporting | 20% |

Instructors must be able to customize these weights.

---

# 11. Physical Hardware Integration

This is an important long-term differentiator.

DYSRUPT should not remain limited to virtual experiments.

## 11.1 Hardware Gateway

Develop a small software agent called **DYSRUPT Gateway**.

It runs on a local computer or compatible edge device and connects the platform to physical hardware.

It should support:

- ESP32.
- Arduino.
- Raspberry Pi.
- Modbus TCP.
- Modbus RTU through supported adapters.
- MQTT.
- OPC UA.
- Compatible industrial I/O modules.
- ROS 2 integrations.

## 11.2 Hardware Architecture

Cloud platform:

- Manages users.
- Stores experiments.
- Configures experiments.
- Receives telemetry.
- Stores results.

Local gateway:

- Connects to devices.
- Executes authorized commands.
- Reads sensors.
- Sends measurements.
- Enforces safety constraints.
- Handles connectivity interruptions.

Physical hardware:

- Motors.
- Sensors.
- Relays.
- Encoders.
- Controllers.
- Robotic systems.

## 11.3 Hardware Experiment Modes

**Virtual mode:** No physical equipment required.

**Hybrid mode:** Simulation interacts with selected real components.

**Physical mode:** The student operates actual laboratory equipment.

## 11.4 Safety Requirements

Physical disruption must be treated differently from virtual disruption.

The platform should have:

- Hardwired emergency stops.
- Electrical isolation.
- Current and voltage limits.
- Thermal protection.
- Mechanical travel limits.
- Authorized hardware access.
- Command validation.
- Independent safety interlocks.
- Automatic safe shutdown on communication loss.

Never rely on a cloud application or an ESP32 alone as an industrial safety system.

Physical experiments should be supervised and restricted to approved equipment and operating envelopes.

---

# 12. Instructor and Institution Portal

Base route: `/institution`

This should be a separate role-based experience.

## Instructor Dashboard

Route: `/institution/dashboard`

Displays:

- Total students.
- Active courses.
- Active experiments.
- Pending submissions.
- Average performance.
- Common failure scenarios.
- Student competency distribution.

## Course Management

Routes:

- `/institution/courses`
- `/institution/courses/create`
- `/institution/courses/:id`
- `/institution/courses/:id/students`

## Experiment Management

Routes:

- `/institution/experiments`
- `/institution/experiments/create`
- `/institution/experiments/:id`
- `/institution/experiments/:id/scenarios`
- `/institution/experiments/:id/evaluation`

Teachers should be able to configure:

- Starting system state.
- Permitted modifications.
- Available instruments.
- Fault scenarios.
- Experiment duration.
- Submission requirements.
- Assessment criteria.

## Student Monitoring

Route: `/institution/students`

Teachers can inspect:

- Student progress.
- Experiment attempts.
- Submitted evidence.
- Diagnostic reasoning.
- Results.
- Feedback history.

## Laboratory Management

Route: `/institution/laboratories`

Manage:

- Virtual laboratory availability.
- Physical devices.
- Hardware status.
- Reservations.
- Device permissions.
- Maintenance records.

---

# 13. Research Environment

DYSRUPT should eventually support serious experimental research.

Researchers should be able to:

- Create reproducible experiments.
- Define mathematical models.
- Control initial conditions.
- Introduce controlled disturbances.
- Run multiple trials.
- Compare system responses.
- Export datasets.
- Record model versions.
- Document experimental methodology.

Every experiment should have a reproducibility record containing its configuration, simulation engine version, random seed where applicable, parameters and results.

Supported exports:

- CSV.
- JSON.
- PDF reports.
- Python-compatible datasets.
- MATLAB-compatible data exports.

A future feature could allow researchers to publish reusable experimental scenarios.

---

# 14. Component and System Registry

Create a reusable engineering component registry.

Each component should have a standardized digital representation.

Example:

**DC Motor**

Identity:
- Component ID.
- Manufacturer, if applicable.
- Model.
- Component category.

Technical model:
- Resistance.
- Inductance.
- Torque constant.
- Back EMF constant.
- Rotor inertia.
- Friction.

Interfaces:
- Electrical input.
- Mechanical output.
- Encoder output.
- Temperature measurement.

Behavior:
- Mathematical model.
- Simulation model.
- Supported fault definitions.
- Operating constraints.

Documentation:
- Datasheet.
- Connection diagram.
- Educational explanation.
- Supported experiments.

This registry should eventually support third-party component contributions.

---

# 15. Community and Experiment Sharing

DYSRUPT should have an ecosystem where users share engineering knowledge.

Users can publish:

- Experiments.
- Fault scenarios.
- Virtual machines.
- Robot models.
- Engineering projects.
- Reports.
- Datasets.

Every public experiment should have:

- Title.
- Author.
- Description.
- Discipline.
- Difficulty.
- Requirements.
- Learning objectives.
- Components.
- Execution instructions.
- Version.
- License.
- Discussion section.

Introduce a review and validation process before community experiments become featured educational content.

---

# 16. Technical Architecture

The platform should use a modular architecture.

Do not start with dozens of microservices. Begin with a well-structured backend and independently deployable simulation workers.

## 16.1 Recommended Technology Stack

**Frontend**
- React.
- TypeScript.
- Vite or Next.js.
- Tailwind CSS.
- Three.js.
- React Three Fiber.
- Plotly.js.
- Monaco Editor.

**Backend**
- Django REST Framework.
- FastAPI for specialized real-time and simulation interfaces.
- PostgreSQL.
- Redis.
- Celery.

**Real-time communication**
- WebSockets.
- MQTT.
- Modbus TCP.
- OPC UA where supported.

**Simulation**
- Python Control Systems Library.
- SciPy.
- NumPy.
- MuJoCo.
- Gazebo.
- Webots.
- OpenPLC or CODESYS integrations.

**Infrastructure**
- Docker.
- Linux.
- Nginx.
- Object storage.
- Background workers.
- Monitoring and logging.

## 16.2 Main Backend Modules

Organize the backend into these domains:

1. `accounts` — authentication and user profiles.
2. `organizations` — institutions and memberships.
3. `education` — courses, lessons and learning paths.
4. `laboratories` — laboratory definitions.
5. `experiments` — experiment lifecycle and configurations.
6. `components` — engineering component registry.
7. `simulation` — simulation orchestration.
8. `faults` — fault definitions and injection.
9. `telemetry` — time-series measurements.
10. `hardware` — physical device management.
11. `assessment` — evaluation and grading.
12. `research` — research projects and datasets.
13. `community` — shared content and discussions.
14. `analytics` — progress and performance.
15. `notifications` — user notifications.
16. `billing` — subscriptions and institutional plans.
17. `audit` — security and activity records.

## 16.3 Simulation Architecture

The simulation engine should operate independently from the main application.

The backend should:

1. Receive an experiment execution request.
2. Validate its configuration.
3. Allocate an isolated simulation environment.
4. Load the relevant system model.
5. Initialize its parameters.
6. Execute the simulation.
7. Stream telemetry.
8. Accept authorized interventions.
9. Record events.
10. Store the final results.
11. Release resources.

Simulation jobs should be isolated so one student's experiment cannot interfere with another's.

## 16.4 Suggested API Structure

Base prefix: `/api/v1`

| Resource | Endpoint |
|---|---|
| Authentication | `/auth/` |
| Users | `/users/` |
| Organizations | `/organizations/` |
| Courses | `/courses/` |
| Laboratories | `/laboratories/` |
| Experiments | `/experiments/` |
| Components | `/components/` |
| Fault definitions | `/faults/` |
| Simulation sessions | `/simulation/sessions/` |
| Simulation controls | `/simulation/sessions/:id/control/` |
| Telemetry | `/telemetry/` |
| Hardware devices | `/hardware/devices/` |
| Assignments | `/assignments/` |
| Submissions | `/submissions/` |
| Assessments | `/assessments/` |
| Research projects | `/research/projects/` |
| Datasets | `/research/datasets/` |
| Reports | `/reports/` |

Real-time connections should use dedicated authenticated WebSocket channels.

## 16.5 Main Data Models

The initial data model should include:

- User
- Profile
- Organization
- OrganizationMembership
- Course
- Enrollment
- Lesson
- Laboratory
- LaboratoryVersion
- Component
- ComponentModel
- Experiment
- ExperimentVersion
- ExperimentSession
- SimulationInstance
- SimulationEvent
- FaultDefinition
- FaultScenario
- FaultActivation
- TelemetryRecord
- Evidence
- ExperimentReport
- Assignment
- Submission
- Assessment
- Competency
- StudentCompetency
- HardwareDevice
- HardwareGateway
- DeviceReservation
- ResearchProject
- Dataset
- CommunityPublication
- AuditEvent

Experiment sessions should be versioned and traceable.

Never overwrite historical experiment configurations when the original experiment definition changes.

---

# 17. User Experience and Visual Identity

DYSRUPT should look like an engineering platform, not a traditional educational website.

## Design direction

**Visual personality:**
- Technical.
- Industrial.
- Scientific.
- Precise.
- Experimental.
- Modern.

**Suggested color palette:**

| Role | Color |
|---|---|
| Main background | `#0B0F14` |
| Secondary background | `#121923` |
| Panel background | `#18222D` |
| Primary accent | `#B8F34A` |
| Secondary accent | `#35B9D8` |
| Warning | `#FFB547` |
| Critical failure | `#F05252` |
| Primary text | `#F2F5F7` |
| Secondary text | `#94A3B8` |

The green accent should represent active experimentation, not success in every context.

Failure states should be visually distinguishable without turning the entire interface red.

## Typography

Use a clean technical sans-serif such as Inter or Geist.

Use a monospace font such as JetBrains Mono for:

- Measurements.
- Logs.
- Code.
- Mathematical parameters.
- Device information.

## Interface behavior

- Dark mode as the default Workbench theme.
- Light mode for reading and documentation.
- Responsive layouts.
- Keyboard shortcuts.
- Persistent experiment state.
- Context-sensitive help.
- Clear loading and execution states.
- Accessible color contrast.
- Tooltips for technical parameters.

---

# 18. Subscription and Business Model

DYSRUPT should support individual users and institutional customers.

## Free

- Public experiments.
- Introductory courses.
- Limited virtual simulation hours.
- Personal workspace.
- Basic experiment reports.

## Student — €9/month (proposed)

- Expanded simulation access.
- Intermediate and advanced experiments.
- Experiment history.
- Data exports.
- Engineering reports.
- Personal project workspace.

## Professional — €29/month (proposed)

- Advanced engineering tools.
- Custom experiments.
- Research datasets.
- Advanced analytics.
- Extended simulation resources.
- Hardware gateway access.

## Institution — Custom pricing

- Multiple departments.
- Instructor accounts.
- Student management.
- Private laboratories.
- Shared hardware.
- Course management.
- Institutional analytics.
- Dedicated deployment options.

These are initial pricing hypotheses, not validated market prices.

---

# 19. MVP: What Should Actually Be Built First?

Do not attempt to implement the entire vision in the first release.

The first version should prove one central proposition:

**Can students learn engineering more effectively by interacting with systems and deliberately introducing controlled failures?**

## MVP Phase 1 — Foundation

Build:

- Authentication.
- Student dashboard.
- Laboratory catalogue.
- Experiment catalogue.
- Basic experiment sessions.
- User workspace.
- Experiment history.

## MVP Phase 2 — Control Engineering Laboratory

Build one complete control laboratory.

Include:

- DC motor model.
- Transfer function.
- PID controller.
- Setpoint adjustment.
- Load disturbances.
- Encoder noise.
- Motor friction.
- Current measurements.
- Speed response.
- Oscilloscope.
- Experiment recording.

The student should be able to observe how the motor responds to changes and failures.

## MVP Phase 3 — Failure Injection

Implement:

- Fault registry.
- Fault activation.
- Fault configuration.
- Event logging.
- Fault propagation.
- Experiment replay.
- Diagnostic submission.

## MVP Phase 4 — Assessment

Implement:

- Student hypotheses.
- Experimental observations.
- Diagnostic explanations.
- Corrective actions.
- Final reports.
- Instructor evaluation.

## MVP Phase 5 — Hardware Integration

Connect one physical DC motor experiment using:

- ESP32.
- Motor driver.
- Encoder.
- Current sensor.
- Temperature sensor.
- Appropriate isolated power and protection.
- DYSRUPT Gateway.

Support safe low-voltage hardware experiments first.

## MVP Phase 6 — Robotics Laboratory

Introduce:

- Two-degree-of-freedom robotic arm.
- Forward kinematics.
- Inverse kinematics.
- Joint control.
- Motor faults.
- Encoder faults.
- Mechanical disturbances.

## MVP Phase 7 — Institutional Features

Add:

- Instructor dashboards.
- Course management.
- Assignments.
- Student monitoring.
- Grading.
- Laboratory reservations.

---

# 20. First Five Official Experiments

These should be the first flagship experiences.

### Experiment 001 — The Unstable Motor

Objective: Maintain DC motor speed under changing mechanical loads.

Students investigate:

- PID tuning.
- Load disturbances.
- Encoder noise.
- Motor friction.
- Controller saturation.

### Experiment 002 — The Lying Sensor

Objective: Identify an inaccurate sensor.

Students encounter:

- Measurement bias.
- Random noise.
- Signal freezing.
- Calibration drift.

They must distinguish actual system behavior from misleading measurements.

### Experiment 003 — The Impossible Robot Arm

Objective: Diagnose a robotic arm that cannot reach its desired position.

Possible causes:

- Incorrect kinematic parameters.
- Encoder offset.
- Joint limitations.
- Mechanical backlash.
- Incorrect trajectory.

### Experiment 004 — The Failing Production Line

Objective: Recover an automated conveyor and sorting system.

Students investigate:

- Sensor failure.
- Motor failure.
- PLC logic errors.
- Communication delays.
- Incorrect sequencing.

### Experiment 005 — The Unknown System

Objective: Identify and control a system without receiving its mathematical model.

Students must:

1. Apply controlled inputs.
2. Measure outputs.
3. Estimate system parameters.
4. Construct a mathematical model.
5. Design a controller.
6. Validate performance.

This should be one of DYSRUPT's signature challenges.

---

# 21. Quality, Security and Reliability

DYSRUPT must be treated as an engineering execution platform, not just a content website.

Important requirements:

- Tenant isolation for institutions.
- Role-based access control.
- Secure simulation environments.
- Execution time limits.
- CPU and memory quotas.
- Sandboxed user code.
- Restricted network access.
- Device authentication.
- Signed hardware commands.
- Experiment audit trails.
- Versioned simulation models.
- Data backups.
- Rate limiting.
- Encrypted communications.

User-submitted code must never run directly inside the main application server.

Physical hardware operations must be constrained by local safety systems, independent of cloud authorization.

---

# 22. Long-Term Roadmap

### Stage 1 — Virtual engineering experimentation

Establish the platform and prove the learning methodology.

### Stage 2 — Multi-discipline engineering laboratories

Add robotics, electronics, mechanical systems and industrial automation.

### Stage 3 — Physical laboratory connectivity

Connect virtual experiments to real devices and remote hardware.

### Stage 4 — Engineering intelligence

Introduce adaptive experiments, diagnostic assistance and automated assessment.

### Stage 5 — Community ecosystem

Allow researchers, educators and engineers to create and share laboratories.

### Stage 6 — Institutional adoption

Provide universities with complete engineering experimentation environments.

### Stage 7 — Open Engineering Ecosystem

Develop standardized component models, reusable fault scenarios, simulation interfaces and third-party integrations.

---

# 23. What DYSRUPT Should Never Become

There are some product decisions worth explicitly avoiding.

DYSRUPT should not become:

- Another generic LMS.
- A video course marketplace.
- A chatbot with engineering terminology.
- A collection of disconnected simulators.
- A superficial 3D factory game.
- A platform that rewards students only for obtaining correct answers.
- An unsafe remote hardware control service.
- A replacement for every existing professional engineering tool.

Its purpose is to connect learning, experimentation, failure, diagnosis and engineering improvement.

---

# 24. Final Product Definition

**DYSRUPT is an engineering experimentation ecosystem that enables students, educators and researchers to build, simulate, disrupt, diagnose and improve engineered systems through interactive virtual and physical laboratories.**

It transforms failure from something students are taught to avoid into something they can systematically investigate.

Its core value is not the ability to break a machine.

Its core value is the ability to understand why it broke, predict what happens next, and engineer a better solution.

**DYSRUPT**

*Build it. Break it. Understand it. Rebuild it better.*

**Product vision:** Make engineering experimentation accessible, measurable, reproducible and interactive.
