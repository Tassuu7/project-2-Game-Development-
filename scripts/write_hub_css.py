# -*- coding: utf-8 -*-
import sys
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

hub_css = """/**
 * NovaForge Studio - Clean Fullscreen Game Arcade UI
 * Authentic Human-Crafted Game Covers & Fullscreen Viewport
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

:root {
    --bg-dark: #08090f;
    --bg-surface: #10121d;
    --bg-card: #151827;
    --bg-card-hover: #1c2035;
    --border: #232840;
    --border-hover: #00e5ff;
    --accent-cyan: #00e5ff;
    --accent-pink: #ff0055;
    --accent-gold: #fbbf24;
    --accent-green: #22c55e;
    --accent-purple: #a855f7;
    --accent-blue: #3b82f6;
    --text-primary: #f8fafc;
    --text-secondary: #94a3b8;
    --text-muted: #64748b;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    background-color: var(--bg-dark);
    color: var(--text-primary);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
}

.app-header {
    background: rgba(16, 18, 29, 0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    padding: 12px 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
}

.brand-section {
    display: flex;
    align-items: center;
    gap: 12px;
}

.brand-icon {
    width: 34px;
    height: 34px;
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 18px;
    color: #000;
    box-shadow: 0 0 15px rgba(0, 229, 255, 0.4);
}

.brand-title {
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 0.5px;
    color: #fff;
}

.brand-badge {
    background: rgba(0, 229, 255, 0.1);
    color: var(--accent-cyan);
    border: 1px solid rgba(0, 229, 255, 0.3);
    font-size: 11px;
    font-weight: 700;
    padding: 2px 8px;
    border-radius: 20px;
}

.header-controls {
    display: flex;
    align-items: center;
    gap: 10px;
}

.btn {
    padding: 7px 14px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid var(--border);
    background: var(--bg-card);
    color: var(--text-primary);
}

.btn:hover {
    background: var(--bg-card-hover);
    border-color: var(--border-hover);
    color: #fff;
}

.btn-primary {
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
    border-color: transparent;
    color: #000;
    font-weight: 700;
}

.btn-primary:hover {
    box-shadow: 0 0 15px rgba(0, 229, 255, 0.5);
    transform: translateY(-1px);
}

.user-pill {
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    padding: 5px 12px;
    border-radius: 20px;
    cursor: pointer;
    font-size: 13px;
    transition: border-color 0.2s;
}

.user-pill:hover {
    border-color: var(--accent-cyan);
}

.user-avatar {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: var(--accent-cyan);
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 11px;
}

.hub-main {
    flex: 1;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;
    padding: 24px 28px;
}

.hero-box {
    background: linear-gradient(135deg, rgba(16, 24, 40, 0.8), rgba(21, 24, 39, 0.8));
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px 28px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.hero-box h1 {
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 6px;
    color: #fff;
}

.hero-box p {
    color: var(--text-secondary);
    font-size: 14px;
}

.filter-row {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 16px;
    margin-bottom: 12px;
}

.filter-btn {
    background: var(--bg-surface);
    border: 1px solid var(--border);
    color: var(--text-secondary);
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
}

.filter-btn:hover, .filter-btn.active {
    background: rgba(0, 229, 255, 0.12);
    border-color: var(--accent-cyan);
    color: #fff;
}

.games-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 22px;
    margin-bottom: 30px;
}

.game-card {
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
    overflow: hidden;
}

.game-card:hover {
    border-color: var(--border-hover);
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 229, 255, 0.2);
}

.card-banner {
    width: 100%;
    height: 180px;
    position: relative;
    overflow: hidden;
    background: #060812;
}

.card-banner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
}

.game-card:hover .card-banner img {
    transform: scale(1.05);
}

.card-play-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s ease;
}

.game-card:hover .card-play-overlay {
    opacity: 1;
}

.play-circle {
    width: 46px;
    height: 46px;
    border-radius: 50%;
    background: var(--accent-cyan);
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: bold;
    box-shadow: 0 0 20px rgba(0, 229, 255, 0.8);
}

.card-body {
    padding: 16px 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
}

.game-title {
    font-size: 17px;
    font-weight: 800;
    color: #fff;
    margin-bottom: 6px;
}

.game-description {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.45;
    margin-bottom: 14px;
}

.card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 14px;
}

.tag-pill {
    background: var(--bg-card);
    border: 1px solid var(--border);
    color: var(--text-muted);
    font-size: 11px;
    font-weight: 600;
    padding: 2px 8px;
    border-radius: 4px;
}

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--border);
    padding-top: 12px;
}

.card-controls {
    font-size: 11px;
    color: var(--text-muted);
    font-family: monospace;
}

.card-rating {
    font-size: 12px;
    font-weight: 700;
    color: var(--accent-gold);
}

#game-screen {
    position: fixed;
    top: 0; left: 0; right: 0; bottom: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    z-index: 500;
    display: none;
    flex-direction: column;
}

#game-screen.active {
    display: flex;
}

.viewport-header {
    background: rgba(10, 12, 20, 0.95);
    border-bottom: 1px solid #1f2438;
    padding: 8px 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    z-index: 10;
}

.viewport-title {
    font-size: 15px;
    font-weight: 800;
    color: var(--accent-cyan);
    letter-spacing: 0.5px;
}

.viewport-canvas-wrapper {
    flex: 1;
    width: 100%;
    height: calc(100vh - 48px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: #05060a;
    position: relative;
    overflow: hidden;
}

#game-canvas {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.9);
}

.app-footer {
    border-top: 1px solid var(--border);
    padding: 20px 28px;
    background: var(--bg-surface);
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--text-muted);
    font-size: 12px;
    margin-top: auto;
}
"""
write_file("assets/css/hub.css", hub_css)
print("Wrote assets/css/hub.css successfully!")
