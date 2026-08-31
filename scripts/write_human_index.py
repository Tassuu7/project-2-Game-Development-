# -*- coding: utf-8 -*-
import sys
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

index_html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NovaForge Studios - Hardware Canvas Arcade Hub</title>
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/hub.css">
    <link rel="stylesheet" href="assets/css/components.css">
    <link rel="stylesheet" href="assets/css/retro.css">
    <link rel="stylesheet" href="assets/css/animations.css">
    <style>
        .modal-overlay {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(8px);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        .modal-overlay.active { display: flex; }
        .modal-box {
            background: #111524;
            border: 1px solid #00e5ff;
            border-radius: 12px;
            box-shadow: 0 0 35px rgba(0, 229, 255, 0.3);
            width: 90%;
            max-width: 480px;
            padding: 28px;
            position: relative;
            color: #fff;
        }
        .modal-close {
            position: absolute;
            top: 16px; right: 18px;
            background: none; border: none;
            color: #8e8eb2; font-size: 22px;
            cursor: pointer;
        }
        .modal-close:hover { color: #ff0055; }
        .auth-tabs {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            border-bottom: 1px solid #2a3356;
            padding-bottom: 8px;
        }
        .auth-tab-btn {
            background: none; border: none;
            color: #8e8eb2; font-size: 15px;
            font-weight: bold; cursor: pointer;
            padding: 6px 12px;
            border-radius: 6px;
        }
        .auth-tab-btn.active {
            color: #00e5ff;
            background: rgba(0, 229, 255, 0.15);
        }
        .form-group { margin-bottom: 15px; }
        .form-group label {
            display: block; font-size: 12px;
            color: #8e8eb2; margin-bottom: 6px;
            text-transform: uppercase; letter-spacing: 0.5px;
        }
        .form-group input {
            width: 100%;
            background: #181d33;
            border: 1px solid #2a3356;
            border-radius: 6px;
            padding: 10px 14px;
            color: #fff;
            font-size: 14px;
            box-sizing: border-box;
            outline: none;
        }
        .form-group input:focus {
            border-color: #00e5ff;
            box-shadow: 0 0 10px rgba(0, 229, 255, 0.3);
        }
    </style>
</head>
<body>
    <div id="toast-container"></div>

    <!-- MAIN ARCADE HUB SCREEN -->
    <div id="hub-screen" class="app-screen active">
        <header class="hub-header">
            <div class="brand-wrapper">
                <img src="assets/images/brand/brand_logo.svg" alt="NovaForge Studios" style="height: 38px;">
                <span class="studio-badge">Indie Arcade v2.4</span>
            </div>

            <div class="header-actions">
                <!-- User Profile Pill -->
                <div id="user-profile-btn" class="user-pill" title="Click to view pilot stats">
                    <div class="user-avatar-circle" id="user-avatar-initial">P</div>
                    <div class="user-meta">
                        <span class="user-name" id="user-display-name">PlayerOne</span>
                        <span class="user-rank" id="user-rank-title">Cadet Pilot</span>
                    </div>
                </div>

                <button class="btn btn-secondary" id="btn-auth-trigger">Sign In / Register</button>
                <button class="btn btn-secondary" id="btn-open-tests">Run QA Tests</button>
                <button class="btn btn-secondary" id="btn-toggle-audio">Audio: ON</button>
                <button class="btn btn-secondary" id="btn-toggle-fullscreen" title="Toggle Fullscreen">Fullscreen</button>
            </div>
        </header>

        <main style="max-width: 1360px; margin: 0 auto; padding: 24px 28px;">
            <!-- Hero Banner -->
            <div style="background: linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(157, 78, 221, 0.1)); border: 1px solid var(--border-color); border-radius: 12px; padding: 24px 28px; margin-bottom: 24px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <h1 style="font-size: 26px; margin: 0 0 6px 0; color: #fff; display: flex; align-items: center; gap: 10px;">
                        NovaForge Arcade Showcase
                        <span style="font-size: 12px; background: rgba(57, 255, 20, 0.15); color: var(--accent-green); padding: 3px 10px; border-radius: 20px; border: 1px solid rgba(57, 255, 20, 0.4);">60 FPS Hardware Canvas</span>
                    </h1>
                    <p style="color: var(--text-muted); font-size: 14px; margin: 0;">Eight full-featured playable games crafted with zero external dependencies, authentic physics simulation, and Web Audio synthesizers.</p>
                </div>
            </div>

            <!-- Genre Filter Bar -->
            <div class="filter-bar">
                <button class="filter-chip active" data-filter="all">All Games (8)</button>
                <button class="filter-chip" data-filter="action">Space & Action</button>
                <button class="filter-chip" data-filter="rpg">Action RPG</button>
                <button class="filter-chip" data-filter="platformer">Platformer</button>
                <button class="filter-chip" data-filter="3d">3D Raycasting</button>
                <button class="filter-chip" data-filter="physics">Physics Lab</button>
                <button class="filter-chip" data-filter="strategy">Tower Defense</button>
                <button class="filter-chip" data-filter="puzzle">Logic Puzzle</button>
                <button class="filter-chip" data-filter="rhythm">Rhythm Slasher</button>
            </div>

            <!-- Game Cards Grid -->
            <div class="game-grid">
                <!-- Game 1: Cosmic Vanguard -->
                <div class="game-card" data-game="cosmic_vanguard" data-category="action">
                    <div class="game-thumb">
                        <span class="game-badge">Featured</span>
                        <span class="game-rating">4.9 ?</span>
                        <img src="assets/images/games/cosmic_vanguard.svg" alt="Cosmic Vanguard">
                    </div>
                    <div class="game-info">
                        <div>
                            <div class="game-title">Cosmic Vanguard</div>
                            <div class="game-desc">Bullet-hell space warfare with 4 weapon loadouts, power-up drops, boss phases, and particle explosions.</div>
                        </div>
                        <div class="game-tags">
                            <span class="tag">Space Shooter</span>
                            <span class="tag">Bullet Hell</span>
                            <span class="tag">Boss Battles</span>
                        </div>
                    </div>
                </div>

                <!-- Game 2: Shadow Quest RPG -->
                <div class="game-card" data-game="shadow_quest" data-category="rpg">
                    <div class="game-thumb">
                        <span class="game-badge">RPG Quest</span>
                        <span class="game-rating">4.8 ?</span>
                        <img src="assets/images/games/shadow_quest.svg" alt="Shadow Quest RPG">
                    </div>
                    <div class="game-info">
                        <div>
                            <div class="game-title">Shadow Quest: Eldoria</div>
                            <div class="game-desc">2D Top-down Action RPG with elemental magic casting (Fireball, Frost Nova), melee combat, and NPCs.</div>
                        </div>
                        <div class="game-tags">
                            <span class="tag">Action RPG</span>
                            <span class="tag">Magic Spells</span>
                            <span class="tag">Dungeon Rooms</span>
                        </div>
                    </div>
                </div>

                <!-- Game 3: Cyber Runner 2099 -->
                <div class="game-card" data-game="cyber_runner" data-category="platformer">
                    <div class="game-thumb">
                        <span class="game-badge">Speedrun</span>
                        <span class="game-rating">5.0 ?</span>
                        <img src="assets/images/games/cyber_runner.svg" alt="Cyber Runner 2099">
                    </div>
                    <div class="game-info">
                        <div>
                            <div class="game-title">Cyber Runner 2099</div>
                            <div class="game-desc">Precision cyberpunk platformer with double jumps, cyber air dashes, crumbling tiles, and ghost replay trails.</div>
                        </div>
                        <div class="game-tags">
                            <span class="tag">Platformer</span>
                            <span class="tag">Cyber Dash</span>
                            <span class="tag">Momentum</span>
                        </div>
                    </div>
                </div>

                <!-- Game 4: Dungeon Raycaster 3D -->
                <div class="game-card" data-game="dungeon_raycast3d" data-category="3d">
                    <div class="game-thumb">
                        <span class="game-badge">Retro 3D</span>
                        <span class="game-rating">4.7 ?</span>
                        <img src="assets/images/games/dungeon_raycast3d.svg" alt="Dungeon Raycaster 3D">
                    </div>
                    <div class="game-info">
                        <div>
                            <div class="game-title">Dungeon Raycaster 3D</div>
                            <div class="game-desc">Classic 3D FPS raycasting dungeon crawler with muzzle flash, demon shooting, and radar minimap.</div>
                        </div>
                        <div class="game-tags">
                            <span class="tag">3D Raycast</span>
                            <span class="tag">FPS Crawler</span>
                            <span class="tag">Minimap</span>
                        </div>
                    </div>
                </div>

                <!-- Game 5: Gravity Sandbox -->
                <div class="game-card" data-game="gravity_sandbox" data-category="physics">
                    <div class="game-thumb">
                        <span class="game-badge">Physics Lab</span>
                        <span class="game-rating">4.9 ?</span>
                        <img src="assets/images/games/gravity_sandbox.svg" alt="Gravity Sandbox">
                    </div>
                    <div class="game-info">
                        <div>
                            <div class="game-title">Gravity Sandbox & Physics Lab</div>
                            <div class="game-desc">Interactive physics laboratory featuring rigid bodies, Verlet ragdolls, SPH fluids, and explosions.</div>
                        </div>
                        <div class="game-tags">
                            <span class="tag">Rigid Bodies</span>
                            <span class="tag">Verlet Ragdoll</span>
                            <span class="tag">SPH Fluids</span>
                        </div>
                    </div>
                </div>

                <!-- Game 6: Neon Tower Defense -->
                <div class="game-card" data-game="neon_tower_defense" data-category="strategy">
                    <div class="game-thumb">
                        <span class="game-badge">Strategy</span>
                        <span class="game-rating">4.8 ?</span>
                        <img src="assets/images/games/neon_tower_defense.svg" alt="Neon Tower Defense">
                    </div>
                    <div class="game-info">
                        <div>
                            <div class="game-title">Neon Tower Defense</div>
                            <div class="game-desc">Strategic pathway defense with customizable pulse towers, creep waves, upgrade paths, and economy.</div>
                        </div>
                        <div class="game-tags">
                            <span class="tag">Tower Defense</span>
                            <span class="tag">Creep Waves</span>
                            <span class="tag">Strategy</span>
                        </div>
                    </div>
                </div>

                <!-- Game 7: Chrono Puzzle -->
                <div class="game-card" data-game="chrono_puzzle" data-category="puzzle">
                    <div class="game-thumb">
                        <span class="game-badge">Time Shift</span>
                        <span class="game-rating">4.9 ?</span>
                        <img src="assets/images/games/chrono_puzzle.svg" alt="Chrono Puzzle">
                    </div>
                    <div class="game-info">
                        <div>
                            <div class="game-title">Chrono Puzzle: Time Shift</div>
                            <div class="game-desc">Sokoban grid puzzle with magnetic block pushing, multiple chambers, and instant time-rewind history.</div>
                        </div>
                        <div class="game-tags">
                            <span class="tag">Logic Puzzle</span>
                            <span class="tag">Time Rewind</span>
                            <span class="tag">Sokoban</span>
                        </div>
                    </div>
                </div>

                <!-- Game 8: Rhythm Blaster -->
                <div class="game-card" data-game="rhythm_blaster" data-category="rhythm">
                    <div class="game-thumb">
                        <span class="game-badge">Synthwave</span>
                        <span class="game-rating">5.0 ?</span>
                        <img src="assets/images/games/rhythm_blaster.svg" alt="Rhythm Blaster">
                    </div>
                    <div class="game-info">
                        <div>
                            <div class="game-title">Rhythm Blaster: SynthWave</div>
                            <div class="game-desc">4-lane high-speed synthwave rhythm beat slasher with hit rating judgments (PERFECT, GREAT).</div>
                        </div>
                        <div class="game-tags">
                            <span class="tag">Rhythm Slasher</span>
                            <span class="tag">Web Audio DSP</span>
                            <span class="tag">Combo System</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <!-- Footer -->
        <footer class="hub-footer">
            <div>Crafted with passion by NovaForge Studios &bull; Zero External Dependencies &bull; 100% Offline Hardware Canvas</div>
            <div>Build v2.4.0 (2026.08 Production Release)</div>
        </footer>
    </div>

    <!-- GAMEPLAY VIEWPORT SCREEN -->
    <div id="game-screen" class="app-screen">
        <header class="hub-header" style="height: 52px; background: #080a14; border-bottom: 1px solid var(--border-color); padding: 0 20px;">
            <button class="btn btn-secondary" id="btn-back-hub">Back to Hub</button>
            <div id="active-game-title" style="font-weight: 800; color: var(--accent-cyan); font-size: 16px; letter-spacing: 1px;">Playing Game</div>
            <div style="display: flex; gap: 8px;">
                <button class="btn btn-secondary" id="btn-restart-game">Restart Game</button>
            </div>
        </header>

        <div id="canvas-container">
            <canvas id="game-canvas" width="1280" height="720"></canvas>
        </div>
    </div>

    <!-- AUTHENTICATION MODAL -->
    <div id="auth-modal" class="modal-overlay">
        <div class="modal-box">
            <button class="modal-close" id="btn-close-auth">&times;</button>
            <div class="auth-tabs">
                <button class="auth-tab-btn active" id="tab-btn-signin">Sign In</button>
                <button class="auth-tab-btn" id="tab-btn-signup">Create Account</button>
            </div>

            <!-- Sign In Form -->
            <form id="form-signin">
                <div class="form-group">
                    <label>Username or Email</label>
                    <input type="text" id="signin-username" placeholder="PlayerOne" required>
                </div>
                <div class="form-group">
                    <label>Password</label>
                    <input type="password" id="signin-password" placeholder="Password" required>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">Sign In to NovaForge</button>
            </form>

            <!-- Sign Up Form -->
            <form id="form-signup" style="display: none;">
                <div class="form-group">
                    <label>Pilot Username</label>
                    <input type="text" id="signup-username" placeholder="CyberPilot" required>
                </div>
                <div class="form-group">
                    <label>Email Address</label>
                    <input type="email" id="signup-email" placeholder="pilot@arcade.dev" required>
                </div>
                <div class="form-group">
                    <label>Create Password</label>
                    <input type="password" id="signup-password" placeholder="Minimum 6 characters" required>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 10px;">Register Account</button>
            </form>
        </div>
    </div>

    <!-- PROFILE MODAL -->
    <div id="profile-modal" class="modal-overlay">
        <div class="modal-box">
            <button class="modal-close" id="btn-close-profile">&times;</button>
            <h2 style="color: var(--accent-cyan); margin: 0 0 14px 0; font-size: 20px;">Pilot Profile & Statistics</h2>
            <div style="background: #181d33; padding: 16px; border-radius: 8px; margin-bottom: 16px; border: 1px solid var(--border-color);">
                <div style="font-size: 18px; font-weight: 800;" id="prof-name">PlayerOne</div>
                <div style="font-size: 12px; color: var(--text-muted);" id="prof-email">player@novaforge.dev</div>
                <div style="margin-top: 12px; display: flex; gap: 20px; font-size: 13px;">
                    <div>Rank: <b id="prof-rank" style="color: var(--accent-cyan);">Cadet</b></div>
                    <div>Level: <b id="prof-level" style="color: var(--accent-green);">1</b></div>
                    <div>Credits: <b id="prof-credits" style="color: var(--accent-gold);">$1,500</b></div>
                </div>
            </div>
            <h3 style="font-size: 14px; color: var(--text-muted); margin-bottom: 8px; text-transform: uppercase;">High Scores Record</h3>
            <div id="prof-scores-list" style="background: #181d33; padding: 12px; border-radius: 8px; max-height: 160px; overflow-y: auto; font-size: 12px; font-family: monospace; border: 1px solid var(--border-color);"></div>
            <div style="margin-top: 20px;">
                <button class="btn btn-secondary" id="btn-logout" style="width: 100%; border-color: var(--accent-pink); color: var(--accent-pink);">Sign Out Session</button>
            </div>
        </div>
    </div>

    <!-- MASTER ENGINE BOOTSTRAPPER SCRIPT -->
    <script type="module">
        import { NovaEngine } from './src/core/Engine.js';
        import { SoundBank } from './src/audio/SoundBank.js';
        import { UIManager } from './src/ui/UIManager.js';
        import { NotificationSystem } from './src/ui/NotificationSystem.js';
        import { AuthManager } from './src/auth/AuthManager.js';
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

        // Initialize Engine & Services
        const canvas = document.getElementById('game-canvas');
        const engine = new NovaEngine(canvas);
        const soundBank = new SoundBank();
        const ui = new UIManager();
        const auth = new AuthManager();

        // Sync Auth UI
        function updateAuthUI(user) {
            const displayName = document.getElementById('user-display-name');
            const avatarInitial = document.getElementById('user-avatar-initial');
            const rankTitle = document.getElementById('user-rank-title');
            const authBtn = document.getElementById('btn-auth-trigger');

            if (user && !user.isGuest) {
                displayName.textContent = user.username;
                avatarInitial.textContent = user.username.charAt(0).toUpperCase();
                rankTitle.textContent = user.level > 5 ? 'Ace Pilot' : 'Cadet Pilot';
                authBtn.textContent = 'Account';
            } else {
                displayName.textContent = 'Guest';
                avatarInitial.textContent = 'G';
                rankTitle.textContent = 'Guest Mode';
                authBtn.textContent = 'Sign In / Register';
            }
        }
        auth.onAuthChange = updateAuthUI;
        updateAuthUI(auth.currentUser);

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
                NotificationSystem.notify(`Loaded ${title || gameKey}! Enjoy playing.`, 'info');
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

        // Filter chips handler
        document.querySelectorAll('.filter-chip').forEach(chip => {
            chip.addEventListener('click', () => {
                document.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
                chip.classList.add('active');
                const filter = chip.getAttribute('data-filter');

                document.querySelectorAll('.game-card').forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Navigation
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
                NotificationSystem.notify('All automated engine unit tests passed (100%)!', 'success');
            } else {
                NotificationSystem.notify('Automated tests encountered errors.', 'error');
            }
        });

        // Audio Toggle
        let audioActive = true;
        document.getElementById('btn-toggle-audio').addEventListener('click', (e) => {
            audioActive = !audioActive;
            soundBank.enabled = audioActive;
            e.target.textContent = audioActive ? 'Audio: ON' : 'Audio: OFF';
        });

        // Fullscreen Toggle
        document.getElementById('btn-toggle-fullscreen').addEventListener('click', () => {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => {});
            } else {
                document.exitFullscreen().catch(() => {});
            }
        });

        // Auth Modal
        const authModal = document.getElementById('auth-modal');
        const profileModal = document.getElementById('profile-modal');
        const tabSignIn = document.getElementById('tab-btn-signin');
        const tabSignUp = document.getElementById('tab-btn-signup');
        const formSignIn = document.getElementById('form-signin');
        const formSignUp = document.getElementById('form-signup');

        document.getElementById('btn-auth-trigger').addEventListener('click', () => {
            if (auth.currentUser && !auth.currentUser.isGuest) {
                openProfileModal();
            } else {
                authModal.classList.add('active');
            }
        });

        document.getElementById('user-profile-btn').addEventListener('click', () => {
            if (auth.currentUser && !auth.currentUser.isGuest) {
                openProfileModal();
            } else {
                authModal.classList.add('active');
            }
        });

        document.getElementById('btn-close-auth').addEventListener('click', () => authModal.classList.remove('active'));
        document.getElementById('btn-close-profile').addEventListener('click', () => profileModal.classList.remove('active'));

        tabSignIn.addEventListener('click', () => {
            tabSignIn.classList.add('active');
            tabSignUp.classList.remove('active');
            formSignIn.style.display = 'block';
            formSignUp.style.display = 'none';
        });

        tabSignUp.addEventListener('click', () => {
            tabSignUp.classList.add('active');
            tabSignIn.classList.remove('active');
            formSignUp.style.display = 'block';
            formSignIn.style.display = 'none';
        });

        formSignIn.addEventListener('submit', (e) => {
            e.preventDefault();
            const u = document.getElementById('signin-username').value;
            const p = document.getElementById('signin-password').value;
            const res = auth.login(u, p);
            if (res.success) {
                NotificationSystem.notify(`Welcome back, ${res.user.username}!`, 'success');
                authModal.classList.remove('active');
            } else {
                NotificationSystem.notify(res.message, 'error');
            }
        });

        formSignUp.addEventListener('submit', (e) => {
            e.preventDefault();
            const u = document.getElementById('signup-username').value;
            const em = document.getElementById('signup-email').value;
            const p = document.getElementById('signup-password').value;
            const res = auth.register(u, em, p);
            if (res.success) {
                NotificationSystem.notify(`Account registered! Welcome, ${res.user.username}!`, 'success');
                authModal.classList.remove('active');
            } else {
                NotificationSystem.notify(res.message, 'error');
            }
        });

        function openProfileModal() {
            const u = auth.currentUser;
            document.getElementById('prof-name').textContent = u.username;
            document.getElementById('prof-email').textContent = u.email || 'N/A';
            document.getElementById('prof-level').textContent = u.level || 1;
            document.getElementById('prof-credits').textContent = `$${u.credits || 0}`;

            const scoresList = document.getElementById('prof-scores-list');
            scoresList.innerHTML = '';
            for (const [game, score] of Object.entries(u.highScores || {})) {
                const item = document.createElement('div');
                item.style.padding = '3px 0';
                item.textContent = `${game.replace(/_/g, ' ').toUpperCase()}: ${score} pts`;
                scoresList.appendChild(item);
            }
            if (scoresList.children.length === 0) {
                scoresList.textContent = 'No high scores recorded yet. Play a game to set records!';
            }

            profileModal.classList.add('active');
        }

        document.getElementById('btn-logout').addEventListener('click', () => {
            auth.logout();
            profileModal.classList.remove('active');
            NotificationSystem.notify('Signed out session.', 'info');
        });

        console.info('? NovaForge Studios - 100% Zero-Dependency Hardware Canvas Arcade Ready.');
    </script>
</body>
</html>
"""
write_file("index.html", index_html)
print("Wrote index.html successfully!")
