# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file, git_commit

def build_partB():
    # 3. docs/API_REFERENCE.md
    write_file("docs/API_REFERENCE.md", """# NovaForge API Reference Manual

## Core Module (`src/core/`)
- `NovaEngine`: Central orchestration class holding references to `InputManager`, `Timer`, `EventBus`, `StorageManager`, `StateMachine`, and `GameLoop`.
- `EventBus`: Priority-sorted subscriber/publisher pattern with wildcard support.
- `StateMachine`: Hierarchical finite state machine supporting enter, update, exit, and guard hooks.

## Math Module (`src/math/`)
- `Vector2`: 2D vector class with `add`, `sub`, `scale`, `dot`, `cross`, `length`, `normalize`, `distanceTo`, `rotate`, `lerp`, `reflect`.
- `Matrix3x3`: 3x3 transform matrix for affine 2D transformations.
- `Matrix4x4`: 4x4 matrix for 3D perspective projection and view transforms.
- `Quaternion`: 3D rotation representation with spherical linear interpolation (`slerp`).
- `PerlinNoise` / `SimplexNoise`: Procedural gradient noise generators with multi-octave fractal brownian motion.

## Physics Module (`src/physics/`)
- `PhysicsWorld`: Master 2D physics world integrating sub-stepping, spatial hashing, and contact impulse solvers.
- `RigidBody`: Dynamic, static, and kinematic physics bodies with linear and angular inertia.
- `SATCollision`: Separating Axis Theorem collision detector for convex polygons and circles.
- `FluidSimulation2D`: SPH particle fluid simulator.
- `RagdollPhysics`: Multi-bone Verlet skeleton physics.

## Graphics Module (`src/graphics/`)
- `Renderer2D`: Multi-layer Canvas 2D rendering pipeline.
- `Camera2D`: Viewport transformation with zoom, follow deadzones, and trauma shake.
- `Raycast3DRenderer`: Wolfenstein-style pseudo-3D raycaster.

## Audio Module (`src/audio/`)
- `AudioContextManager`: Web Audio API graph coordinator.
- `SoundFXSynthesizer`: Real-time programmatic sound synthesis.
- `ChiptuneMusicTracker`: 4-channel retro music sequencer.
""")

    # 4. docs/PHYSICS_ENGINE_GUIDE.md
    write_file("docs/PHYSICS_ENGINE_GUIDE.md", """# Physics Engine & Numerical Simulation Guide

## 1. Velocity Verlet Integration
NovaForge employs Velocity Verlet numerical integration for stable, energy-conserving physics updates:

```javascript
// Step 1: Update velocities by half delta time
velocity += acceleration * (dt * 0.5);

// Step 2: Update positions
position += velocity * dt;

// Step 3: Compute new accelerations from forces
acceleration = forceAccumulator * invMass + gravity;

// Step 4: Finalize velocities
velocity += acceleration * (dt * 0.5);
```

## 2. Separating Axis Theorem (SAT)
Collision detection projects all vertices onto potential separating axes (edge normals). If projections overlap on all axes, a collision is guaranteed, with the minimum overlap defining the Minimum Translation Vector (MTV).
""")

    # 5. docs/AUDIO_SYNTHESIS.md
    write_file("docs/AUDIO_SYNTHESIS.md", """# Procedural Web Audio Synthesis Manual

## 1. Sound FX Synthesis Pipeline
All audio in NovaForge is generated programmatically in real-time without relying on external `.wav` or `.mp3` files:
- **Lasers / Blasters**: Exponential frequency decay on sawtooth oscillators.
- **Explosions**: White noise buffer passed through a resonant lowpass filter with decaying cutoff frequency.
- **Coins / Pickups**: Two-tone sequential sine wave pitch arpeggios.
""")

    # 6. docs/LEVEL_DESIGN_MANUAL.md
    write_file("docs/LEVEL_DESIGN_MANUAL.md", """# In-Browser Studio & Level Design Manual

## 1. Level Editor Workflow
1. Open the NovaForge Studio from the main Arcade Hub.
2. Select the **Level Editor** tab.
3. Choose the entity or tile type from the side palette.
4. Click or drag on the viewport canvas to place tiles with grid snapping.
5. Click **Export JSON** to save the level configuration.
""")

    # 7. docs/CONTRIBUTING.md
    write_file("docs/CONTRIBUTING.md", """# Contributing to NovaForge

## Guidelines
1. **Zero External Dependencies**: All features must use pure vanilla JavaScript (ES6+), HTML5 Canvas, or Web Audio API.
2. **Deterministic Mechanics**: Always use fixed-timestep integration and deterministic PRNGs for simulation consistency.
3. **Automated Tests**: Ensure all unit tests in `npm test` pass before committing changes.
""")

    git_commit("docs: add comprehensive architecture manuals, API references, physics guides, and documentation")
