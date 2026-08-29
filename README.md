# NovaForge Game Development Engine & Arcade Studio

> A high-performance, modular, zero-dependency JavaScript 2D/3D game engine and arcade studio featuring 8 complete playable games, in-browser level/particle/sound creators, advanced physics simulation, procedural graphics, and Web Audio synthesizers.

---

## Key Highlights & Capabilities

- Zero External Dependencies: 100% pure vanilla modern JavaScript (ES6+), HTML5 Canvas, and Web Audio API.
- 8 Complete Playable Games:
  1. Cosmic Vanguard: Bullet-hell space shooter with procedural starfields & particle effects.
  2. Shadow Quest - Chronicles of Eldoria: Top-down 2D action RPG with NPCs, combat & quests.
  3. Cyber Runner 2099: Precision cyberpunk platformer with wall jumping and dashing.
  4. Dungeon Raycaster 3D: First-person 3D raycasting dungeon crawler with depth buffers.
  5. Gravity Sandbox & Physics Lab: Interactive laboratory with rigid bodies, ragdolls & SPH fluid particles.
  6. Neon Tower Defense: Grid strategy defense with creeps, tower upgrades & projectile paths.
  7. Chrono Puzzle - Time Shift: Grid puzzle with box pushing and instant temporal rewind.
  8. Rhythm Blaster - SynthWave: 4-lane synthwave rhythm beat slasher.
- Comprehensive Math Suite: 2D/3D Vectors, 3x3/4x4 Transformation Matrices, Quaternions, Perlin/Simplex Noise, Voronoi Cellular Automata, Catmull-Rom Splines, Mulberry32 PRNG.
- Physics & Collision Engine: Velocity Verlet integration, SAT (Separating Axis Theorem), OBB/AABB/Circle/Polygon colliders, Quadtree/Spatial Hash Grid, SPH fluid dynamics, and Verlet ragdolls.
- Visuals & Dynamic Lighting: Dynamic 2D light sources with radial falloff, camera trauma screen shake, CRT scanlines, and bloom effects.
- Web Audio Synthesis: Programmatic sound effects (ADSR envelopes, pitch glides) and 4-channel retro chiptune tracker.
- In-Browser Studio: Visual level editor, particle emitter designer, and sound FX creator with JSON import/export.
- Automated Testing Suite: Built-in unit test runner verifying math, physics, collision, and AI subsystems.

---

## Architecture & Directory Structure

```
project-2/
|-- assets/
|   |-- css/              # Application, Hub, Editor, Retro & Animation stylesheets
|   |-- data/             # Item databases, Level presets, Dialogue trees & Quests
|-- docs/                 # In-depth architectural & engine manuals
|-- src/
|   |-- ai/               # A* pathfinding, Behavior trees, Boids flocking, Utility AI
|   |-- audio/            # Web Audio API context, Sound synthesizer & Chiptune tracker
|   |-- core/             # Game loop, Event bus, State machine, Storage & Input manager
|   |-- games/            # 8 Playable games implementation
|   |-- graphics/         # 2D renderer, 3D raycaster, Camera, Lighting & Particle systems
|   |-- math/             # Vector2/3, Matrix3/4, Quaternions, Splines, Perlin noise
|   |-- physics/          # Rigid bodies, SAT collision, Quadtrees, Fluids, Ragdolls
|   |-- studio/           # In-browser level editor, Particle & Sound designers
|   |-- tests/            # Automated test runner & unit test suites
|   |-- ui/               # HUD, Menus, Dialogues, Inventory grid & Modals
|-- index.html            # Master Arcade Studio Launchpad
|-- package.json          # Project metadata & npm test/start scripts
```

---

## Getting Started

### Running Locally (No Build Steps Required)
Simply open `index.html` in any modern web browser, or serve it using any local static file server:

```bash
# Option 1: Using Python
python -m http.server 8080

# Option 2: Using Node.js
npx serve .
```

### Running Automated Tests
```bash
npm test
```

---

## Controls & Keybindings

- Move Up / Forward: W or Arrow Up
- Move Down / Backward: S or Arrow Down
- Move Left / Rotate Left: A or Arrow Left
- Move Right / Rotate Right: D or Arrow Right
- Action / Attack / Shoot: Space or Left Mouse Click
- Jump / Double Jump: Space or W
- Time Rewind (Chrono Puzzle): Z or R
- Rhythm Keys (Rhythm Blaster): D, F, J, K

---

## License & Compliance
- License: Proprietary (All Rights Reserved)
- Compliance: 100% Offline-First, Zero External CDN / API Dependencies, Enterprise-Grade Modular Architecture.
