# -*- coding: utf-8 -*-
import sys
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

hub_css = """/**
 * NovaForge Game Engine & Arcade Studio
 * Human-Crafted Game Hub & Arcade Stylesheet
 * Inspired by Steam, itch.io & Cyberpunk aesthetics
 * @author NovaForge Design & Engineering Team
 * @license Proprietary - All Rights Reserved
 */

:root {
    --bg-main: #0a0c16;
    --bg-surface: #121626;
    --bg-card: #181d33;
    --bg-card-hover: #202744;
    --border-color: #2a3356;
    --accent-cyan: #00e5ff;
    --accent-pink: #ff0055;
    --accent-gold: #ffe600;
    --accent-green: #39ff14;
    --accent-purple: #9d4edd;
    --text-main: #f0f4fc;
    --text-muted: #8e9bb8;
    --shadow-glow: 0 0 24px rgba(0, 229, 255, 0.25);
}

body {
    background-color: var(--bg-main);
    color: var(--text-main);
    font-family: 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
}

.hub-header {
    background: rgba(18, 22, 38, 0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border-color);
    padding: 12px 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
}

.brand-wrapper {
    display: flex;
    align-items: center;
    gap: 14px;
}

.studio-badge {
    background: linear-gradient(135deg, rgba(0, 229, 255, 0.15), rgba(255, 0, 85, 0.15));
    border: 1px solid rgba(0, 229, 255, 0.4);
    color: var(--accent-cyan);
    font-size: 11px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 4px;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.header-actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

.user-pill {
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--bg-card);
    border: 1px solid var(--border-color);
    padding: 6px 14px;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.user-pill:hover {
    border-color: var(--accent-cyan);
    box-shadow: 0 0 14px rgba(0, 229, 255, 0.3);
    transform: translateY(-1px);
}

.user-avatar-circle {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-pink));
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
    font-weight: bold;
    color: #000;
}

.user-meta {
    display: flex;
    flex-direction: column;
    line-height: 1.2;
}

.user-name {
    font-size: 13px;
    font-weight: 700;
    color: #fff;
}

.user-rank {
    font-size: 10px;
    color: var(--accent-cyan);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.btn {
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid transparent;
}

.btn-primary {
    background: linear-gradient(135deg, var(--accent-cyan), #0099ff);
    color: #000;
    font-weight: 700;
}

.btn-primary:hover {
    box-shadow: 0 0 16px rgba(0, 229, 255, 0.6);
    transform: translateY(-1px);
}

.btn-secondary {
    background: var(--bg-card);
    border-color: var(--border-color);
    color: var(--text-main);
}

.btn-secondary:hover {
    background: var(--bg-card-hover);
    border-color: var(--accent-cyan);
    color: #fff;
}

.filter-bar {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding: 8px 0 20px 0;
    margin-bottom: 8px;
}

.filter-chip {
    background: var(--bg-surface);
    border: 1px solid var(--border-color);
    color: var(--text-muted);
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
}

.filter-chip:hover, .filter-chip.active {
    background: rgba(0, 229, 255, 0.15);
    border-color: var(--accent-cyan);
    color: #fff;
}

.game-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 22px;
    margin-bottom: 40px;
}

.game-card {
    background: var(--bg-surface);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.25s ease;
    display: flex;
    flex-direction: column;
}

.game-card:hover {
    border-color: var(--accent-cyan);
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.6), var(--shadow-glow);
}

.game-thumb {
    height: 190px;
    background: #090c16;
    position: relative;
    overflow: hidden;
}

.game-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.game-card:hover .game-thumb img {
    transform: scale(1.08);
}

.game-badge {
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 10px;
    font-weight: 800;
    padding: 3px 8px;
    border-radius: 4px;
    color: var(--accent-cyan);
    text-transform: uppercase;
}

.game-rating {
    position: absolute;
    top: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.75);
    backdrop-filter: blur(4px);
    font-size: 11px;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 4px;
    color: var(--accent-gold);
}

.game-info {
    padding: 18px;
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

.game-desc {
    font-size: 13px;
    color: var(--text-muted);
    line-height: 1.45;
    margin-bottom: 14px;
}

.game-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.tag {
    background: rgba(42, 51, 86, 0.6);
    color: #b8c7e0;
    font-size: 11px;
    padding: 2px 8px;
    border-radius: 4px;
    border: 1px solid rgba(255, 255, 255, 0.05);
}

.hub-footer {
    border-top: 1px solid var(--border-color);
    padding: 24px 28px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--bg-surface);
    color: var(--text-muted);
    font-size: 12px;
}

.app-screen {
    display: none;
}

.app-screen.active {
    display: block;
}

#canvas-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 54px);
    background: #000;
    position: relative;
}

#game-canvas {
    max-width: 100%;
    max-height: 100%;
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.9);
}
"""
write_file("assets/css/hub.css", hub_css)
print("Wrote assets/css/hub.css")
