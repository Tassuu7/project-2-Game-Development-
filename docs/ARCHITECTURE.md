# NovaForge Architectural Overview & Subsystem Design

## 1. Engine Core Pipeline

The NovaForge engine operates on a decoupled Fixed-Timestep Simulation / Interpolated Render game loop model.

```
[Browser Animation Frame]
       |
       v
[GameLoop.js] --- (Time Accumulator) ---> [Fixed Updates (60 Hz)]
       |                                       |
       |                                       |---> [InputManager.update()]
       |                                       |---> [PhysicsWorld.step(dt)]
       |                                       |       |-- Sub-step Integration
       |                                       |       |-- Spatial Hash Broadphase
       |                                       |       `-- SAT Narrowphase Collision
       |                                       `---> [ActiveScene.update(dt)]
       |
       v
[Renderer2D.render(alpha)]
       |-- Clear Canvas
       |-- Camera Viewport Transform (Zoom, Shake, Translate)
       |-- Tilemap & Background Layers
       |-- Scene Entities (Vector / Sprites)
       |-- Particle Systems
       |-- 2D Lighting Multiplicative Composite
       `-- UI / HUD Overlays
```

## 2. Decoupled Event System

Subsystems communicate via the asynchronous typed EventBus:
- engine:ready: Dispatched when all databases and AudioContexts are initialized.
- scene:changed: Notifies UI and audio tracker of active scene transitions.
- player:damage: Triggers screen trauma and damage sound synthesis.
