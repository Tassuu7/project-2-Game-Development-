# NovaForge API Reference Manual

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
