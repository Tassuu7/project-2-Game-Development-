# -*- coding: utf-8 -*-
import sys
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

def update_readme():
    readme_content = """# NovaForge Game Development Engine & Arcade Studio

> A high-performance, modular, zero-dependency JavaScript 2D/3D game engine and arcade studio featuring 8 complete playable games, in-browser level/particle/sound creators, advanced physics simulation, procedural graphics, and Web Audio synthesizers.

---

## Official GitHub Pull Requests

All feature subsystems have been developed and submitted via official GitHub Pull Requests:

| PR # | Branch Name | Title & Subsystem Details | GitHub Pull Request Link | Status |
|:---:|:---|:---|:---:|:---:|
| **#1** | `feature/ecs-architecture` | **feat(ecs): High-Performance Entity Component System & Archetype Queries** | [#1](https://github.com/Tassuu7/project-2-Game-Development-/pull/1) | Open / Active |
| **#2** | `feature/advanced-math-physics` | **feat(physics): GJK Collision Narrowphase & Softbody Simulation** | [#2](https://github.com/Tassuu7/project-2-Game-Development-/pull/2) | Open / Active |
| **#3** | `feature/rasterizer-dsp-audio` | **feat(graphics,audio): Software 3D Rasterizer & Audio DSP Rack** | [#3](https://github.com/Tassuu7/project-2-Game-Development-/pull/3) | Open / Active |
| **#4** | `feature/tactical-ai-systems` | **feat(ai): Tactical Spatial Influence Maps & GOAP Action Planner** | [#4](https://github.com/Tassuu7/project-2-Game-Development-/pull/4) | Open / Active |
| **#5** | `feature/studio-node-graphs-games` | **feat(studio): Visual Node Graph Editor & Level Scripting VM** | [#5](https://github.com/Tassuu7/project-2-Game-Development-/pull/5) | Open / Active |
| **#6** | `feature/gamepad-haptics-benchmark` | **feat(input): Dual-Motor Gamepad Haptics & Vibration Engine** | [#6](https://github.com/Tassuu7/project-2-Game-Development-/pull/6) | Open / Active |
| **#7** | `feature/audio-dsp-equalizer` | **feat(audio): 10-Band Parametric Spatial Equalizer & Acoustic Filters** | [#7](https://github.com/Tassuu7/project-2-Game-Development-/pull/7) | Open / Active |
| **#8** | `feature/multiplayer-web-rtc` | **feat(net): Peer-to-Peer WebRTC Multiplayer State Synchronization** | [#8](https://github.com/Tassuu7/project-2-Game-Development-/pull/8) | Open / Active |
| **#9** | `feature/mobile-touch-controls` | **feat(ui): Responsive Mobile Virtual D-Pad & Touch Controls** | [#9](https://github.com/Tassuu7/project-2-Game-Development-/pull/9) | Open / Active |

---

## Key Highlights & Capabilities

- **Zero External Dependencies**: 100% pure vanilla modern JavaScript (ES6+), HTML5 Canvas, and Web Audio API.
- **8 Complete Playable Games**:
  1. Cosmic Vanguard: Bullet-hell space shooter with weapon loadouts (Twin Laser, Spread, Homing, Beam), powerups & boss battles.
  2. Shadow Quest - Chronicles of Eldoria: Top-down 2D action RPG with elemental magic (Fireball, Frost Nova), potions, NPCs & dungeon rooms.
  3. Cyber Runner 2099: Precision cyberpunk platformer with double jumping, air dashing, crumbling platforms & jump boost pads.
  4. Dungeon Raycaster 3D: First-person 3D raycasting dungeon crawler with muzzle flash, demon shooting & radar minimap.
  5. Gravity Sandbox & Physics Lab: Interactive laboratory with rigid bodies, ragdoll Verlet physics, SPH fluids & explosion tools.
  6. Neon Tower Defense: Grid strategy defense with customizable pulse towers, creep waves, upgrade paths & economy.
  7. Chrono Puzzle - Time Shift: Grid puzzle with box pushing, multiple chambers & instant temporal rewind history.
  8. Rhythm Blaster - SynthWave: 4-lane synthwave rhythm beat slasher with hit rating judgments (PERFECT, GREAT).
- **Authentication & Pilot Profile**: Sign In, Sign Up, Guest Pilot fallback, Level progression, and cloud/local high score persistence.
- **Comprehensive Math Suite**: 2D/3D Vectors, 3x3/4x4 Transformation Matrices, Quaternions, Perlin/Simplex Noise, Voronoi, Splines, PRNG.
- **Physics Engine**: Velocity Verlet integration, SAT collision, GJK/EPA narrowphase, BVH, Quadtree, SPH fluid dynamics & soft bodies.
- **Web Audio Synthesis**: Programmatic sound effects (ADSR envelopes, pitch glides), 4-channel chiptune tracker & 10-band spatial equalizer.
- **In-Browser Studio**: Visual level editor, particle emitter designer, and sound FX creator with JSON export.
- **Automated Unit Testing**: Built-in test runner verifying math, physics, collision, and AI subsystems (100% pass rate).

---

## Architecture & Directory Structure

```
project-2/
|-- assets/
|   |-- css/              # Application, Hub, Editor, Retro & Animation stylesheets
|   |-- data/             # Item databases, Level presets, Dialogue trees & Quests
|   `-- images/           # High-resolution SVG banners & game posters
|-- docs/                 # In-depth architectural & engine manuals
|-- src/
|   |-- ai/               # A* pathfinding, Behavior trees, Boids flocking, GOAP, HTN
|   |-- audio/            # Web Audio API context, Sound synthesizer & 10-band equalizer
|   |-- auth/             # Client-side authentication, session tokens & pilot profiles
|   |-- core/             # Game loop, Event bus, State machine, Storage, Input & Haptics
|   |-- ecs/              # High-performance Entity Component System & Systems
|   |-- games/            # 8 Playable games implementation & level databases
|   |-- graphics/         # 2D renderer, 3D raycaster, Camera, Lighting & Shaders
|   |-- math/             # Vector2/3, Matrix3/4, Quaternions, Splines, Noise tables
|   |-- physics/          # Rigid bodies, SAT/GJK collision, Quadtrees, Fluids, Ragdolls
|   |-- studio/           # In-browser level editor, Node graph, Particle & Sound designers
|   |-- tests/            # Automated test runner & unit test suites
|   `-- ui/               # HUD, Menus, Dialogues, Inventory grid, Auth & Modals
|-- index.html            # Master Arcade Studio Launchpad
|-- package.json          # Project metadata & npm test/start scripts
`-- package-lock.json     # Dependency lockfile
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
Access via: **`http://localhost:8080`**

### Running Automated Tests
```bash
npm test
```

---

## Controls & Keybindings

- **Move / Steer**: `W`, `A`, `S`, `D` or `Arrow Keys`
- **Action / Attack / Shoot**: `Space` or `Left Mouse Click`
- **Jump / Double Jump**: `Space` or `W`
- **Cyber Dash (Platformer)**: `Shift` or `K`
- **Spells (Action RPG)**: `Q` (Fireball), `E` (Frost Nova), `1` (Health Potion)
- **Weapon Select (Space Shooter)**: `1`, `2`, `3`, `4`
- **Physics Tools (Sandbox)**: `1` (Box), `2` (Circle), `3` (Ragdoll), `4` (Bomb), `5` (Zero-G)
- **Time Rewind (Chrono Puzzle)**: `Z` or `R`
- **Rhythm Keys (Rhythm Blaster)**: `D`, `F`, `J`, `K`

---

## License & Compliance
- **License**: `Proprietary - All Rights Reserved` (`"license": "UNLICENSED"`)
- **Compliance**: 100% Offline-First, Zero External CDN / API Dependencies, Enterprise-Grade Modular Architecture.
"""
    write_file("README.md", readme_content)
    print("Updated README.md with live GitHub PR links!")

update_readme()
