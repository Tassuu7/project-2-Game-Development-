# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file, git_commit

def build_partB():
    # 1. assets/css/main.css
    write_file("assets/css/main.css", """/**
 * NovaForge Game Engine & Arcade Studio
 * Core Application Stylesheet & Responsive Layout
 */

:root {
    --bg-primary: #0a0a14;
    --bg-secondary: #121224;
    --bg-card: #1a1a36;
    --border-color: #2a2a5a;
    --text-primary: #ffffff;
    --text-muted: #8e8eb2;
    --accent-cyan: #00e5ff;
    --accent-magenta: #ff0055;
    --accent-green: #39ff14;
    --accent-yellow: #ffe600;
    --font-main: 'Segoe UI', system-ui, -apple-system, sans-serif;
    --font-retro: 'Courier New', monospace;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    user-select: none;
}

body {
    background-color: var(--bg-primary);
    color: var(--text-primary);
    font-family: var(--font-main);
    overflow: hidden;
    width: 100vw;
    height: 100vh;
}

.app-screen {
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.app-screen.active {
    display: flex;
    flex-direction: column;
}

#canvas-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #000;
    position: relative;
}

canvas#game-canvas {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    image-rendering: pixelated;
    box-shadow: 0 0 30px rgba(0, 229, 255, 0.2);
}
""")

    # 2. assets/css/hub.css
    write_file("assets/css/hub.css", """/**
 * NovaForge Arcade Hub Portal Styles
 */

.hub-header {
    height: 70px;
    background: var(--bg-secondary);
    border-bottom: 2px solid var(--border-color);
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
}

.brand-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 24px;
    font-weight: 800;
    letter-spacing: 2px;
    color: var(--accent-cyan);
    text-shadow: 0 0 10px rgba(0, 229, 255, 0.6);
}

.hub-content {
    flex: 1;
    padding: 30px;
    overflow-y: auto;
}

.game-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 25px;
}

.game-card {
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    overflow: hidden;
    transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
    cursor: pointer;
    display: flex;
    flex-direction: column;
}

.game-card:hover {
    transform: translateY(-5px);
    border-color: var(--accent-cyan);
    box-shadow: 0 10px 25px rgba(0, 229, 255, 0.3);
}

.game-thumb {
    height: 160px;
    background: #0d0d1a;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    border-bottom: 1px solid var(--border-color);
}

.game-info {
    padding: 16px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.game-title {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 6px;
    color: #fff;
}

.game-desc {
    font-size: 13px;
    color: var(--text-muted);
    margin-bottom: 12px;
    line-height: 1.4;
}

.game-tags {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
}

.tag {
    font-size: 10px;
    padding: 3px 8px;
    border-radius: 4px;
    background: rgba(0, 229, 255, 0.1);
    color: var(--accent-cyan);
    border: 1px solid rgba(0, 229, 255, 0.3);
}
""")

    # 3. assets/css/components.css
    write_file("assets/css/components.css", """/**
 * NovaForge UI Components (Buttons, Sliders, Modals)
 */

.btn {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    font-weight: 700;
    cursor: pointer;
    transition: background 0.2s, transform 0.1s;
    display: inline-flex;
    align-items: center;
    gap: 8px;
}

.btn-primary {
    background: var(--accent-cyan);
    color: #000;
}

.btn-primary:hover {
    background: #5df2ff;
    box-shadow: 0 0 15px rgba(0, 229, 255, 0.5);
}

.btn-secondary {
    background: var(--bg-card);
    color: #fff;
    border: 1px solid var(--border-color);
}

.btn-secondary:hover {
    border-color: var(--accent-cyan);
}

#toast-container {
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 9999;
}

.toast-message {
    padding: 12px 20px;
    border-radius: 6px;
    background: var(--bg-card);
    border-left: 4px solid var(--accent-cyan);
    color: #fff;
    font-size: 14px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
    animation: slideIn 0.3s forwards;
}
""")

    # 4. assets/css/retro.css
    write_file("assets/css/retro.css", """/**
 * NovaForge Retro CRT & Arcade Aesthetics
 */

.crt-effect::before {
    content: " ";
    display: block;
    position: absolute;
    top: 0; left: 0; bottom: 0; right: 0;
    background: linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06));
    z-index: 20;
    background-size: 100% 3px, 6px 100%;
    pointer-events: none;
}
""")

    # 5. assets/css/animations.css
    write_file("assets/css/animations.css", """/**
 * NovaForge Keyframe Animations
 */

@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes pulseGlow {
    0%, 100% {
        box-shadow: 0 0 10px rgba(0, 229, 255, 0.4);
    }
    50% {
        box-shadow: 0 0 25px rgba(0, 229, 255, 0.8);
    }
}
""")

    git_commit("feat(ui): design modern game hub UI, HUD systems, dialogue engine, and theme styles")
