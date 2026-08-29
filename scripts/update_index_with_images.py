# -*- coding: utf-8 -*-
import sys
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

def update_index():
    html_content = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NovaForge Game Engine & Arcade Studio</title>
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/hub.css">
    <link rel="stylesheet" href="assets/css/components.css">
    <link rel="stylesheet" href="assets/css/retro.css">
    <link rel="stylesheet" href="assets/css/animations.css">
    <style>
        .game-thumb {
            height: 180px;
            background: #0d0d1a;
            position: relative;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .game-thumb img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.3s ease;
        }
        .game-card:hover .game-thumb img {
            transform: scale(1.06);
        }
        .play-overlay {
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 229, 255, 0.25);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: opacity 0.2s;
        }
        .game-card:hover .play-overlay {
            opacity: 1;
        }
        .play-btn-circle {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: #00e5ff;
            color: #000;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            font-weight: bold;
            box-shadow: 0 0 20px rgba(0, 229, 255, 0.8);
        }
    </style>
</head>
<body>
    <div id="toast-container"></div>

    <!-- ARCADE HUB SCREEN -->
    <div id="hub-screen" class="app-screen active">
        <header class="hub-header">
            <div class="brand-logo" style="height: 48px; display: flex; align-items: center;">
                <img src="assets/images/brand/brand_logo.svg" alt="NovaForge" style="height: 42px; width: auto;">
            </div>
            <div style="display: flex; gap: 12px; align-items: center;">
                <button class="btn btn-secondary" id="btn-open-tests">?? Run Tests</button>
                <button class="btn btn-secondary" id="btn-toggle-audio">?? Audio: ON</button>
                <button class="btn btn-primary" id="btn-open-studio">??? Open Studio</button>
            </div>
        </header>

        <main class="hub-content">
            <div style="margin-bottom: 28px;">
                <h1 style="font-size: 28px; margin-bottom: 8px; color: #fff; display: flex; align-items: center; gap: 10px;">
                    Featured Games & Simulation Suite
                    <span style="font-size: 13px; font-weight: normal; background: rgba(0,229,255,0.15); color: var(--accent-cyan); padding: 4px 10px; border-radius: 20px; border: 1px solid rgba(0,229,255,0.4);">8 Playable Experiences</span>
                </h1>
                <p style="color: var(--text-muted); font-size: 14px;">Select any title below to launch immediately into the zero-dependency hardware-accelerated canvas engine.</p>
            </div>

            <div class="game-grid">
                <!-- Game 1: Cosmic Vanguard -->
                <div class="game-card" data-game="cosmic_vanguard">
                    <div class="game-thumb">
                        <img src="assets/images/games/cosmic_vanguard.svg" alt="Cosmic Vanguard">
                        <div class="play-overlay"><div class="play-btn-circle">?</div></div>
                    </div>
                    <div class="game-info">
                        <div>
                            <div class="game-title">Cosmic Vanguard</div>
                            <div class="game-desc">Bullet-hell space shooter with starfields, weapon spreads, drone swarms, and particle explosions.</div>
                        </div>
                        <div class="game-tags">
                            <span class="tag">Space Shooter</span>
                            <span class="tag">Bullet Hell</span>
                            <span class="tag">Particle FX</span>
                        </div>
                    </div>
                </div>

                <!-- Game 2: Shadow Quest RPG -->
                <div class="game-card" data-game="shadow_quest">
                    <div class="game-thumb">
                        <img src="assets/images/games/shadow_quest.svg" alt="Shadow Quest RPG">
                        <div class="play-overlay"><div class="play-btn-circle">?</div></div>
                    </div>
                    <div class="game-info">
                        <div>
                            <div class="game-title">Shadow Quest: Eldoria</div>
                            <div class="game-desc">2D Top-down Action RPG with NPC dialogues, melee combat, level progression, and dungeons.</div>
                        </div>
                        <div class="game-tags">
                            <span class="tag">Action RPG</span>
                            <span class="tag">Quests & Combat</span>
                            <span class="tag">Magic Spells</span>
                        </div>
                    </div>
                </div>

                <!-- Game 3: Cyber Runner 2099 -->
                <div class="game-card" data-game="cyber_runner">
                    <div class="game-thumb">
                        <img src="assets/images/games/cyber_runner.svg" alt="Cyber Runner 2099">
                        <div class="play-overlay"><div class="play-btn-circle">?</div></div>
                    </div>
                    <div class="game-info">
                        <div>
                            <div class="game-title">Cyber Runner 2099</div>
                            <div class="game-desc">Precision neon platformer with double jumping, platform mechanics, and energy cores.</div>
                        </div>
                        <div class="game-tags">
                            <span class="tag">Platformer</span>
                            <span class="tag">Cyberpunk</span>
                            <span class="tag">Speedrun</span>
                        </div>
                    </div>
                </div>

                <!-- Game 4: Dungeon Raycaster 3D -->
                <div class="game-card" data-game="dungeon_raycast3d">
                    <div class="game-thumb">
                        <img src="assets/images/games/dungeon_raycast3d.svg" alt="Dungeon Raycaster 3D">
                        <div class="play-overlay"><div class="play-btn-circle">?</div></div>
                    </div>
                    <div class="game-info">
                        <div>
                            <div class="game-title">Dungeon Raycaster 3D</div>
                            <div class="game-desc">Classic 3D FPS raycasting dungeon crawler with depth buffers and sprite billboard sorting.</div>
                        </div>
                        <div class="game-tags">
                            <span class="tag">3D Raycast</span>
                            <span class="tag">Retro FPS</span>
                            <span class="tag">DDA Solver</span>
                        </div>
                    </div>
                </div>

                <!-- Game 5: Gravity Sandbox -->
                <div class="game-card" data-game="gravity_sandbox">
                    <div class="game-thumb">
                        <img src="assets/images/games/gravity_sandbox.svg" alt="Gravity Sandbox">
                        <div class="play-overlay"><div class="play-btn-circle">?</div></div>
                    </div>
                    <div class="game-info">
                        <div>
                            <div class="game-title">Gravity Sandbox & Physics Lab</div>
                            <div class="game-desc">Interactive physics laboratory featuring rigid bodies, ragdoll Verlet physics, and SPH fluids.</div>
                        </div>
                        <div class="game-tags">
                            <span class="tag">Physics Simulation</span>
                            <span class="tag">SPH Fluids</span>
                            <span class="tag">Verlet Ragdoll</span>
                        </div>
                    </div>
                </div>

                <!-- Game 6: Neon Tower Defense -->
                <div class="game-card" data-game="neon_tower_defense">
                    <div class="game-thumb">
                        <img src="assets/images/games/neon_tower_defense.svg" alt="Neon Tower Defense">
                        <div class="play-overlay"><div class="play-btn-circle">?</div></div>
                    </div>
                    <div class="game-info">
                        <div>
                            <div class="game-title">Neon Tower Defense</div>
                            <div class="game-desc">Strategic pathway defense with customizable pulse towers, creep waves, and credits.</div>
                        </div>
                        <div class="game-tags">
                            <span class="tag">Tower Defense</span>
                            <span class="tag">Strategy</span>
                            <span class="tag">Creep Waves</span>
                        </div>
                    </div>
                </div>

                <!-- Game 7: Chrono Puzzle -->
                <div class="game-card" data-game="chrono_puzzle">
                    <div class="game-thumb">
                        <img src="assets/images/games/chrono_puzzle.svg" alt="Chrono Puzzle">
                        <div class="play-overlay"><div class="play-btn-circle">?</div></div>
                    </div>
                    <div class="game-info">
                        <div>
                            <div class="game-title">Chrono Puzzle: Time Shift</div>
                            <div class="game-desc">Sokoban grid puzzle with magnetic block pushing and full instant temporal rewind history.</div>
                        </div>
                        <div class="game-tags">
                            <span class="tag">Logic Puzzle</span>
                            <span class="tag">Temporal Rewind</span>
                            <span class="tag">Sokoban Grid</span>
                        </div>
                    </div>
                </div>

                <!-- Game 8: Rhythm Blaster -->
                <div class="game-card" data-game="rhythm_blaster">
                    <div class="game-thumb">
                        <img src="assets/images/games/rhythm_blaster.svg" alt="Rhythm Blaster">
                        <div class="play-overlay"><div class="play-btn-circle">?</div></div>
                    </div>
                    <div class="game-info">
                        <div>
                            <div class="game-title">Rhythm Blaster: SynthWave</div>
                            <div class="game-desc">4-lane high-speed synthwave rhythm beat slasher with combo multipliers and audio synths.</div>
                        </div>
                        <div class="game-tags">
                            <span class="tag">Rhythm Slasher</span>
                            <span class="tag">Synthwave</span>
                            <span class="tag">Audio DSP</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <!-- GAMEPLAY VIEWPORT SCREEN -->
    <div id="game-screen" class="app-screen">
        <header class="hub-header" style="height: 52px; background: #000; border-bottom: 1px solid #222; padding: 0 20px;">
            <button class="btn btn-secondary" id="btn-back-hub" style="padding: 6px 14px; font-size: 13px;">? Back to Hub</button>
            <div id="active-game-title" style="font-weight: bold; color: var(--accent-cyan); font-size: 16px; letter-spacing: 1px;">Playing Game</div>
            <div style="display: flex; gap: 8px;">
                <button class="btn btn-secondary" id="btn-restart-game" style="padding: 6px 14px; font-size: 13px;">?? Restart</button>
            </div>
        </header>

        <div id="canvas-container">
            <canvas id="game-canvas" width="1280" height="720"></canvas>
        </div>
    </div>

    <!-- MASTER ENGINE BOOTSTRAPPER SCRIPT -->
    <script type="module">
        import { NovaEngine } from './src/core/Engine.js';
        import { SoundBank } from './src/audio/SoundBank.js';
        import { UIManager } from './src/ui/UIManager.js';
        import { NotificationSystem } from './src/ui/NotificationSystem.js';
        import { TestRunner } from './src/tests/test_runner.js';
        import { registerMathTests } from './src/tests/test_math.js';
        import { registerPhysicsTests } from './src/tests/test_physics.js';
        import { registerCollisionTests } from './src/tests/test_collision.js';
        import { registerAITests } from './src/tests/test_ai.js';

        // Games
        import { CosmicGame } from './src/games/cosmic_vanguard/CosmicGame.js';
        import { RPGGame } from './src/games/shadow_quest/RPGGame.js';
        import { PlatformerGame } from './src/games/cyber_runner/PlatformerGame.js';
        import { RaycastGame } from './src/games/dungeon_raycast3d/RaycastGame.js';
        import { SandboxGame } from './src/games/gravity_sandbox/SandboxGame.js';
        import { TowerDefenseGame } from './src/games/neon_tower_defense/TowerDefenseGame.js';
        import { PuzzleGame } from './src/games/chrono_puzzle/PuzzleGame.js';
        import { RhythmGame } from './src/games/rhythm_blaster/RhythmGame.js';

        // Initialize Master Engine & UI
        const canvas = document.getElementById('game-canvas');
        const engine = new NovaEngine(canvas);
        const soundBank = new SoundBank();
        const ui = new UIManager();

        // Register All 8 Scenes
        engine.registerScene('cosmic_vanguard', new CosmicGame(engine));
        engine.registerScene('shadow_quest', new RPGGame(engine));
        engine.registerScene('cyber_runner', new PlatformerGame(engine));
        engine.registerScene('dungeon_raycast3d', new RaycastGame(engine));
        engine.registerScene('gravity_sandbox', new SandboxGame(engine));
        engine.registerScene('neon_tower_defense', new TowerDefenseGame(engine));
        engine.registerScene('chrono_puzzle', new PuzzleGame(engine));
        engine.registerScene('rhythm_blaster', new RhythmGame(engine));

        let currentGameKey = 'cosmic_vanguard';

        function launchGame(gameKey, title) {
            currentGameKey = gameKey;
            document.getElementById('active-game-title').textContent = title || gameKey;
            ui.showScreen('game-screen');
            engine.switchScene(gameKey).then(() => {
                engine.start();
                soundBank.play('coin');
                NotificationSystem.notify(`Loaded ${title || gameKey}!`, 'info');
            });
        }

        // Attach Card Listeners
        document.querySelectorAll('.game-card').forEach(card => {
            card.addEventListener('click', () => {
                const gameKey = card.getAttribute('data-game');
                const title = card.querySelector('.game-title').textContent;
                launchGame(gameKey, title);
            });
        });

        // Navigation Controls
        document.getElementById('btn-back-hub').addEventListener('click', () => {
            engine.stop();
            ui.showScreen('hub-screen');
        });

        document.getElementById('btn-restart-game').addEventListener('click', () => {
            engine.switchScene(currentGameKey);
        });

        // Test Suite Runner
        document.getElementById('btn-open-tests').addEventListener('click', async () => {
            const runner = new TestRunner();
            registerMathTests(runner);
            registerPhysicsTests(runner);
            registerCollisionTests(runner);
            registerAITests(runner);

            const passed = await runner.run();
            if (passed) {
                NotificationSystem.notify('All automated engine tests passed (100%)!', 'success');
            } else {
                NotificationSystem.notify('Automated tests failed. Check console.', 'error');
            }
        });

        // Audio Toggle
        let audioActive = true;
        document.getElementById('btn-toggle-audio').addEventListener('click', (e) => {
            audioActive = !audioActive;
            soundBank.enabled = audioActive;
            e.target.textContent = audioActive ? '?? Audio: ON' : '?? Audio: OFF';
        });

        // In-Browser Studio
        document.getElementById('btn-open-studio').addEventListener('click', () => {
            launchGame('gravity_sandbox', 'Studio & Physics Lab');
        });

        console.info('? NovaForge Arcade Studio Ready with 8 Playable Games.');
    </script>
</body>
</html>
"""
    write_file("index.html", html_content)

update_index()
