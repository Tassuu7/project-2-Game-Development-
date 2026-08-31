# -*- coding: utf-8 -*-
import sys
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

index_html = """<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NovaForge Arcade - Hardware Canvas Game Studio</title>
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/hub.css">
    <link rel="stylesheet" href="assets/css/components.css">
    <link rel="stylesheet" href="assets/css/retro.css">
    <link rel="stylesheet" href="assets/css/animations.css">
    <style>
        .modal-backdrop {
            position: fixed;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(0, 0, 0, 0.85);
            backdrop-filter: blur(8px);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 1000;
        }
        .modal-backdrop.open { display: flex; }
        .modal-card {
            background: #111422;
            border: 1px solid #00e5ff;
            border-radius: 12px;
            box-shadow: 0 0 35px rgba(0, 229, 255, 0.25);
            width: 90%;
            max-width: 480px;
            padding: 24px;
            position: relative;
            color: #fff;
        }
        .close-btn {
            position: absolute;
            top: 14px; right: 16px;
            background: none; border: none;
            color: #94a3b8; font-size: 20px;
            cursor: pointer;
        }
        .close-btn:hover { color: #ff0055; }
        .auth-nav {
            display: flex;
            gap: 8px;
            margin-bottom: 18px;
            border-bottom: 1px solid #232840;
            padding-bottom: 8px;
        }
        .auth-nav-btn {
            background: none; border: none;
            color: #94a3b8; font-size: 14px;
            font-weight: 700; cursor: pointer;
            padding: 6px 12px;
            border-radius: 6px;
        }
        .auth-nav-btn.active {
            color: #00e5ff;
            background: rgba(0, 229, 255, 0.12);
        }
        .input-group { margin-bottom: 14px; }
        .input-group label {
            display: block; font-size: 11px;
            color: #94a3b8; margin-bottom: 5px;
            text-transform: uppercase; letter-spacing: 0.5px;
        }
        .input-group input {
            width: 100%;
            background: #151827;
            border: 1px solid #232840;
            border-radius: 6px;
            padding: 9px 12px;
            color: #fff;
            font-size: 13px;
            box-sizing: border-box;
            outline: none;
        }
        .input-group input:focus {
            border-color: #00e5ff;
        }
    </style>
</head>
<body>
    <div id="toast-container"></div>

    <!-- MAIN ARCADE HUB VIEW -->
    <div id="hub-screen" class="app-screen active">
        <header class="app-header">
            <div class="brand-section">
                <div class="brand-icon">&#9889;</div>
                <div class="brand-title">NOVAFORGE</div>
                <span class="brand-badge">Arcade Studio v2.4</span>
            </div>

            <div class="header-controls">
                <div id="user-profile-btn" class="user-pill" title="Player Profile">
                    <div class="user-avatar" id="user-avatar-initial">P</div>
                    <span id="user-display-name" style="font-weight: 700;">PlayerOne</span>
                </div>
                <button class="btn" id="btn-auth-trigger">Sign In / Register</button>
                <button class="btn" id="btn-open-tests">QA Test Suite</button>
                <button class="btn" id="btn-toggle-audio">Audio: ON</button>
                <button class="btn" id="btn-toggle-fullscreen">Fullscreen</button>
            </div>
        </header>

        <main class="hub-main">
            <!-- Fullscreen Header Banner -->
            <div class="hero-box">
                <div>
                    <h1>NovaForge Arcade Showcase</h1>
                    <p>Eight complete hardware-accelerated Canvas games built with zero external dependencies, authentic physics, and Web Audio synthesis.</p>
                </div>
                <div style="font-family: monospace; font-size: 12px; color: var(--accent-cyan); background: rgba(0,229,255,0.1); padding: 8px 14px; border-radius: 8px; border: 1px solid rgba(0,229,255,0.3);">
                    60 FPS &bull; Pure Canvas 2D &bull; Offline Ready
                </div>
            </div>

            <!-- Filter Buttons -->
            <div class="filter-row">
                <button class="filter-btn active" data-filter="all">All Titles (8)</button>
                <button class="filter-btn" data-filter="action">Space & Action</button>
                <button class="filter-btn" data-filter="rpg">Action RPG</button>
                <button class="filter-btn" data-filter="platformer">Platformer</button>
                <button class="filter-btn" data-filter="3d">3D Retro FPS</button>
                <button class="filter-btn" data-filter="physics">Physics Lab</button>
                <button class="filter-btn" data-filter="strategy">Tower Defense</button>
                <button class="filter-btn" data-filter="puzzle">Logic Puzzle</button>
                <button class="filter-btn" data-filter="rhythm">Rhythm Slasher</button>
            </div>

            <!-- Games Grid (Pure CSS Component Cards) -->
            <div class="games-grid">
                <!-- Game 1: Cosmic Vanguard -->
                <div class="game-card" data-game="cosmic_vanguard" data-category="action">
                    <div class="card-top">
                        <div class="card-icon-badge" style="background: rgba(0, 229, 255, 0.15); color: #00e5ff;">&#128640;</div>
                        <span class="card-rating">4.9 &#9733;</span>
                    </div>
                    <div class="game-title">Cosmic Vanguard</div>
                    <div class="game-description">High-intensity bullet-hell space shooter with 4 selectable weapon loadouts, power-up drops, boss encounters, and screen shake.</div>
                    <div class="card-tags">
                        <span class="tag-pill">Space Shooter</span>
                        <span class="tag-pill">Bullet Hell</span>
                        <span class="tag-pill">4 Weapons</span>
                    </div>
                    <div class="card-footer">
                        <span class="card-controls">WASD + Space + 1-4</span>
                        <button class="card-play-btn">&#9654; Play Game</button>
                    </div>
                </div>

                <!-- Game 2: Shadow Quest RPG -->
                <div class="game-card" data-game="shadow_quest" data-category="rpg">
                    <div class="card-top">
                        <div class="card-icon-badge" style="background: rgba(168, 85, 247, 0.15); color: #c084fc;">&#9876;</div>
                        <span class="card-rating">4.8 &#9733;</span>
                    </div>
                    <div class="game-title">Shadow Quest: Eldoria</div>
                    <div class="game-description">Top-down action RPG with elemental magic casting (Fireball, Frost Nova), melee sword slashing, NPC dialogues, and dungeons.</div>
                    <div class="card-tags">
                        <span class="tag-pill">Action RPG</span>
                        <span class="tag-pill">Magic Spells</span>
                        <span class="tag-pill">Quests</span>
                    </div>
                    <div class="card-footer">
                        <span class="card-controls">WASD + Space + Q,E</span>
                        <button class="card-play-btn">&#9654; Play Game</button>
                    </div>
                </div>

                <!-- Game 3: Cyber Runner 2099 -->
                <div class="game-card" data-game="cyber_runner" data-category="platformer">
                    <div class="card-top">
                        <div class="card-icon-badge" style="background: rgba(244, 63, 94, 0.15); color: #f43f5e;">&#127939;</div>
                        <span class="card-rating">5.0 &#9733;</span>
                    </div>
                    <div class="game-title">Cyber Runner 2099</div>
                    <div class="game-description">Precision cyberpunk platformer featuring double jumps, cyber air dashes, crumbling platforms, jump pads, and ghost replay trails.</div>
                    <div class="card-tags">
                        <span class="tag-pill">Platformer</span>
                        <span class="tag-pill">Air Dash</span>
                        <span class="tag-pill">Speedrun</span>
                    </div>
                    <div class="card-footer">
                        <span class="card-controls">A/D + Space + Shift</span>
                        <button class="card-play-btn">&#9654; Play Game</button>
                    </div>
                </div>

                <!-- Game 4: Dungeon Raycaster 3D -->
                <div class="game-card" data-game="dungeon_raycast3d" data-category="3d">
                    <div class="card-top">
                        <div class="card-icon-badge" style="background: rgba(245, 158, 11, 0.15); color: #f59e0b;">&#128126;</div>
                        <span class="card-rating">4.7 &#9733;</span>
                    </div>
                    <div class="game-title">Dungeon Raycaster 3D</div>
                    <div class="game-description">Classic 3D FPS raycasting dungeon crawler with muzzle flash animation, demon battles, ammo pick-ups, and radar minimap.</div>
                    <div class="card-tags">
                        <span class="tag-pill">3D Raycasting</span>
                        <span class="tag-pill">Retro FPS</span>
                        <span class="tag-pill">Minimap</span>
                    </div>
                    <div class="card-footer">
                        <span class="card-controls">WASD / Arrows + Space</span>
                        <button class="card-play-btn">&#9654; Play Game</button>
                    </div>
                </div>

                <!-- Game 5: Gravity Sandbox -->
                <div class="game-card" data-game="gravity_sandbox" data-category="physics">
                    <div class="card-top">
                        <div class="card-icon-badge" style="background: rgba(34, 211, 238, 0.15); color: #22d3ee;">&#9883;</div>
                        <span class="card-rating">4.9 &#9733;</span>
                    </div>
                    <div class="game-title">Gravity Sandbox & Physics Lab</div>
                    <div class="game-description">Interactive physics playground with rigid bodies, Verlet ragdolls, SPH fluid dynamics, zero-gravity toggle, and bomb tools.</div>
                    <div class="card-tags">
                        <span class="tag-pill">Physics Lab</span>
                        <span class="tag-pill">Verlet Ragdolls</span>
                        <span class="tag-pill">Fluid Particles</span>
                    </div>
                    <div class="card-footer">
                        <span class="card-controls">Mouse Click + 1-5</span>
                        <button class="card-play-btn">&#9654; Play Game</button>
                    </div>
                </div>

                <!-- Game 6: Neon Tower Defense -->
                <div class="game-card" data-game="neon_tower_defense" data-category="strategy">
                    <div class="card-top">
                        <div class="card-icon-badge" style="background: rgba(74, 222, 128, 0.15); color: #4ade80;">&#128737;</div>
                        <span class="card-rating">4.8 &#9733;</span>
                    </div>
                    <div class="game-title">Neon Tower Defense</div>
                    <div class="game-description">Grid-based tactical defense with upgradable pulse towers, creep waves, range visualizers, and credit-based economy.</div>
                    <div class="card-tags">
                        <span class="tag-pill">Tower Defense</span>
                        <span class="tag-pill">Creep Waves</span>
                        <span class="tag-pill">Grid Strategy</span>
                    </div>
                    <div class="card-footer">
                        <span class="card-controls">Mouse Click (Place/Upgrade)</span>
                        <button class="card-play-btn">&#9654; Play Game</button>
                    </div>
                </div>

                <!-- Game 7: Chrono Puzzle -->
                <div class="game-card" data-game="chrono_puzzle" data-category="puzzle">
                    <div class="card-top">
                        <div class="card-icon-badge" style="background: rgba(251, 191, 36, 0.15); color: #fbbf24;">&#9203;</div>
                        <span class="card-rating">4.9 &#9733;</span>
                    </div>
                    <div class="game-title">Chrono Puzzle: Time Shift</div>
                    <div class="game-description">Sokoban block-pushing logic puzzle with target detection, multi-room chambers, and instant time-rewind history.</div>
                    <div class="card-tags">
                        <span class="tag-pill">Logic Puzzle</span>
                        <span class="tag-pill">Time Rewind</span>
                        <span class="tag-pill">Sokoban</span>
                    </div>
                    <div class="card-footer">
                        <span class="card-controls">WASD / Arrows + Z, R</span>
                        <button class="card-play-btn">&#9654; Play Game</button>
                    </div>
                </div>

                <!-- Game 8: Rhythm Blaster -->
                <div class="game-card" data-game="rhythm_blaster" data-category="rhythm">
                    <div class="card-top">
                        <div class="card-icon-badge" style="background: rgba(232, 121, 249, 0.15); color: #f0abfc;">&#127925;</div>
                        <span class="card-rating">5.0 &#9733;</span>
                    </div>
                    <div class="game-title">Rhythm Blaster: SynthWave</div>
                    <div class="game-description">4-lane high-speed synthwave beat slasher with precision hit ratings (PERFECT, GREAT), combo multipliers, and audio synths.</div>
                    <div class="card-tags">
                        <span class="tag-pill">Rhythm Game</span>
                        <span class="tag-pill">Web Audio DSP</span>
                        <span class="tag-pill">Combos</span>
                    </div>
                    <div class="card-footer">
                        <span class="card-controls">D, F, J, K Keys</span>
                        <button class="card-play-btn">&#9654; Play Game</button>
                    </div>
                </div>
            </div>
        </main>

        <footer class="app-footer">
            <div>NovaForge Studio &bull; 100% Zero-Dependency Hardware Canvas &bull; Offline First</div>
            <div>Version 2.4.0 Production Release</div>
        </footer>
    </div>

    <!-- FULLSCREEN GAMEPLAY SCREEN -->
    <div id="game-screen">
        <div class="viewport-header">
            <button class="btn" id="btn-back-hub">&larr; Back to Arcade Hub</button>
            <div id="active-game-title" class="viewport-title">Game Viewport</div>
            <div style="display: flex; gap: 8px;">
                <button class="btn" id="btn-restart-game">&#8635; Restart</button>
                <button class="btn" id="btn-fs-toggle">&#x26F6; Fullscreen</button>
            </div>
        </div>

        <div class="viewport-canvas-wrapper">
            <canvas id="game-canvas" width="1280" height="720"></canvas>
        </div>
    </div>

    <!-- AUTH MODAL -->
    <div id="auth-modal" class="modal-backdrop">
        <div class="modal-card">
            <button class="close-btn" id="btn-close-auth">&times;</button>
            <div class="auth-nav">
                <button class="auth-nav-btn active" id="tab-btn-signin">Sign In</button>
                <button class="auth-nav-btn" id="tab-btn-signup">Create Account</button>
            </div>

            <!-- Sign In -->
            <form id="form-signin">
                <div class="input-group">
                    <label>Username</label>
                    <input type="text" id="signin-username" placeholder="PlayerOne" required>
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input type="password" id="signin-password" placeholder="Password" required>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 8px;">Sign In</button>
            </form>

            <!-- Sign Up -->
            <form id="form-signup" style="display: none;">
                <div class="input-group">
                    <label>Username</label>
                    <input type="text" id="signup-username" placeholder="PilotName" required>
                </div>
                <div class="input-group">
                    <label>Email</label>
                    <input type="email" id="signup-email" placeholder="pilot@arcade.dev" required>
                </div>
                <div class="input-group">
                    <label>Password</label>
                    <input type="password" id="signup-password" placeholder="Min 6 characters" required>
                </div>
                <button type="submit" class="btn btn-primary" style="width: 100%; margin-top: 8px;">Create Account</button>
            </form>
        </div>
    </div>

    <!-- PROFILE MODAL -->
    <div id="profile-modal" class="modal-backdrop">
        <div class="modal-card">
            <button class="close-btn" id="btn-close-profile">&times;</button>
            <h2 style="color: var(--accent-cyan); font-size: 18px; margin-bottom: 14px;">Pilot Statistics</h2>
            <div style="background: #151827; padding: 14px; border-radius: 8px; border: 1px solid #232840; margin-bottom: 14px;">
                <div style="font-size: 16px; font-weight: 800;" id="prof-name">PlayerOne</div>
                <div style="font-size: 12px; color: var(--text-secondary);" id="prof-email">player@novaforge.dev</div>
                <div style="margin-top: 10px; display: flex; gap: 16px; font-size: 12px;">
                    <div>Rank: <b id="prof-rank" style="color: var(--accent-cyan);">Cadet</b></div>
                    <div>Level: <b id="prof-level" style="color: var(--accent-green);">1</b></div>
                    <div>Credits: <b id="prof-credits" style="color: var(--accent-gold);">$1,500</b></div>
                </div>
            </div>
            <h3 style="font-size: 13px; color: var(--text-secondary); margin-bottom: 8px;">Personal Records</h3>
            <div id="prof-scores-list" style="background: #151827; padding: 10px; border-radius: 8px; max-height: 140px; overflow-y: auto; font-size: 12px; font-family: monospace; border: 1px solid #232840;"></div>
            <div style="margin-top: 16px;">
                <button class="btn" id="btn-logout" style="width: 100%; border-color: var(--accent-pink); color: var(--accent-pink);">Sign Out</button>
            </div>
        </div>
    </div>

    <!-- SCRIPT RUNNER -->
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

        // 8 Playable Games
        import { CosmicGame } from './src/games/cosmic_vanguard/CosmicGame.js';
        import { RPGGame } from './src/games/shadow_quest/RPGGame.js';
        import { PlatformerGame } from './src/games/cyber_runner/PlatformerGame.js';
        import { RaycastGame } from './src/games/dungeon_raycast3d/RaycastGame.js';
        import { SandboxGame } from './src/games/gravity_sandbox/SandboxGame.js';
        import { TowerDefenseGame } from './src/games/neon_tower_defense/TowerDefenseGame.js';
        import { PuzzleGame } from './src/games/chrono_puzzle/PuzzleGame.js';
        import { RhythmGame } from './src/games/rhythm_blaster/RhythmGame.js';

        const canvas = document.getElementById('game-canvas');
        const engine = new NovaEngine(canvas);
        const soundBank = new SoundBank();
        const ui = new UIManager();
        const auth = new AuthManager();

        function updateAuthUI(user) {
            const displayName = document.getElementById('user-display-name');
            const avatarInitial = document.getElementById('user-avatar-initial');
            const authBtn = document.getElementById('btn-auth-trigger');

            if (user && !user.isGuest) {
                displayName.textContent = user.username;
                avatarInitial.textContent = user.username.charAt(0).toUpperCase();
                authBtn.textContent = 'Account';
            } else {
                displayName.textContent = 'Guest';
                avatarInitial.textContent = 'G';
                authBtn.textContent = 'Sign In';
            }
        }
        auth.onAuthChange = updateAuthUI;
        updateAuthUI(auth.currentUser);

        // Register scenes
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
            
            // Activate Fullscreen Game Viewport
            document.getElementById('hub-screen').classList.remove('active');
            document.getElementById('game-screen').classList.add('active');

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

        // Filter chips
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                const filter = btn.getAttribute('data-filter');

                document.querySelectorAll('.game-card').forEach(card => {
                    if (filter === 'all' || card.getAttribute('data-category') === filter) {
                        card.style.display = 'flex';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });

        // Back to Hub
        document.getElementById('btn-back-hub').addEventListener('click', () => {
            engine.stop();
            document.getElementById('game-screen').classList.remove('active');
            document.getElementById('hub-screen').classList.add('active');
        });

        document.getElementById('btn-restart-game').addEventListener('click', () => {
            engine.switchScene(currentGameKey);
        });

        // Test runner
        document.getElementById('btn-open-tests').addEventListener('click', async () => {
            const runner = new TestRunner();
            registerMathTests(runner);
            registerPhysicsTests(runner);
            registerCollisionTests(runner);
            registerAITests(runner);

            const passed = await runner.run();
            if (passed) {
                NotificationSystem.notify('All 8 engine QA tests passed (100%)!', 'success');
            } else {
                NotificationSystem.notify('Engine QA tests encountered errors.', 'error');
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
        function toggleFullscreen() {
            if (!document.fullscreenElement) {
                document.documentElement.requestFullscreen().catch(() => {});
            } else {
                document.exitFullscreen().catch(() => {});
            }
        }
        document.getElementById('btn-toggle-fullscreen').addEventListener('click', toggleFullscreen);
        document.getElementById('btn-fs-toggle').addEventListener('click', toggleFullscreen);

        // Modals
        const authModal = document.getElementById('auth-modal');
        const profileModal = document.getElementById('profile-modal');
        const tabSignIn = document.getElementById('tab-btn-signin');
        const tabSignUp = document.getElementById('tab-btn-signup');
        const formSignIn = document.getElementById('form-signin');
        const formSignUp = document.getElementById('form-signup');

        document.getElementById('btn-auth-trigger').addEventListener('click', () => {
            if (auth.currentUser && !auth.currentUser.isGuest) {
                openProfile();
            } else {
                authModal.classList.add('open');
            }
        });

        document.getElementById('user-profile-btn').addEventListener('click', () => {
            if (auth.currentUser && !auth.currentUser.isGuest) {
                openProfile();
            } else {
                authModal.classList.add('open');
            }
        });

        document.getElementById('btn-close-auth').addEventListener('click', () => authModal.classList.remove('open'));
        document.getElementById('btn-close-profile').addEventListener('click', () => profileModal.classList.remove('open'));

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
                NotificationSystem.notify(`Welcome, ${res.user.username}!`, 'success');
                authModal.classList.remove('open');
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
                NotificationSystem.notify(`Registered! Welcome, ${res.user.username}!`, 'success');
                authModal.classList.remove('open');
            } else {
                NotificationSystem.notify(res.message, 'error');
            }
        });

        function openProfile() {
            const u = auth.currentUser;
            document.getElementById('prof-name').textContent = u.username;
            document.getElementById('prof-email').textContent = u.email || 'N/A';
            document.getElementById('prof-level').textContent = u.level || 1;
            document.getElementById('prof-credits').textContent = `$${u.credits || 0}`;

            const list = document.getElementById('prof-scores-list');
            list.innerHTML = '';
            for (const [g, s] of Object.entries(u.highScores || {})) {
                const item = document.createElement('div');
                item.style.padding = '3px 0';
                item.textContent = `${g.replace(/_/g, ' ').toUpperCase()}: ${s} pts`;
                list.appendChild(item);
            }
            if (list.children.length === 0) {
                list.textContent = 'No high scores recorded yet. Play a game to record stats!';
            }
            profileModal.classList.add('open');
        }

        document.getElementById('btn-logout').addEventListener('click', () => {
            auth.logout();
            profileModal.classList.remove('open');
            NotificationSystem.notify('Signed out.', 'info');
        });

        console.info('? NovaForge Studio: Fullscreen Arcade Engine Active.');
    </script>
</body>
</html>
"""
write_file("index.html", index_html)
print("Wrote fullscreen index.html successfully!")
