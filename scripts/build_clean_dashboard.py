# -*- coding: utf-8 -*-
import sys
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

# 1. assets/css/hub.css - Organized, Polished Dashboard Stylesheet
hub_css = """/**
 * NovaForge Arcade Studio - Professional Game Dashboard
 * Structured Grid Layout, Hero Highlights & Fullscreen Viewport
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

:root {
    --bg-main: #090b14;
    --bg-surface: #101424;
    --bg-card: #161b30;
    --bg-card-hover: #1e2542;
    --border: #232a48;
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
    background-color: var(--bg-main);
    color: var(--text-primary);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}

/* 1. TOP HEADER */
.dashboard-header {
    background: rgba(16, 20, 36, 0.95);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    padding: 12px 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 100;
}

.brand-box {
    display: flex;
    align-items: center;
    gap: 12px;
}

.brand-logo-icon {
    width: 36px;
    height: 36px;
    background: linear-gradient(135deg, var(--accent-cyan), var(--accent-blue));
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 18px;
    color: #000;
    box-shadow: 0 0 16px rgba(0, 229, 255, 0.35);
}

.brand-text {
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 0.5px;
    color: #fff;
    line-height: 1.1;
}

.brand-subtext {
    font-size: 11px;
    font-weight: 600;
    color: var(--accent-cyan);
    letter-spacing: 1px;
    text-transform: uppercase;
}

/* SEARCH BAR */
.search-wrapper {
    flex: 1;
    max-width: 420px;
    margin: 0 24px;
    position: relative;
}

.search-input {
    width: 100%;
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 8px 16px 8px 36px;
    color: #fff;
    font-size: 13px;
    outline: none;
    transition: all 0.2s;
}

.search-input:focus {
    border-color: var(--accent-cyan);
    box-shadow: 0 0 12px rgba(0, 229, 255, 0.2);
}

.search-icon {
    position: absolute;
    left: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    font-size: 14px;
    pointer-events: none;
}

/* HEADER CONTROLS */
.header-actions {
    display: flex;
    align-items: center;
    gap: 10px;
}

.user-profile-card {
    display: flex;
    align-items: center;
    gap: 10px;
    background: var(--bg-card);
    border: 1px solid var(--border);
    padding: 5px 14px;
    border-radius: 24px;
    cursor: pointer;
    transition: all 0.2s ease;
}

.user-profile-card:hover {
    border-color: var(--accent-cyan);
    box-shadow: 0 0 14px rgba(0, 229, 255, 0.25);
}

.user-avatar-circle {
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: var(--accent-cyan);
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 12px;
}

.btn {
    padding: 7px 14px;
    border-radius: 6px;
    font-size: 12px;
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
    box-shadow: 0 0 16px rgba(0, 229, 255, 0.5);
    transform: translateY(-1px);
}

/* 2. MAIN DASHBOARD CONTENT */
.dashboard-main {
    flex: 1;
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding: 28px 32px;
}

/* HERO STATS BANNER */
.hero-banner {
    background: linear-gradient(135deg, rgba(16, 24, 44, 0.9), rgba(22, 27, 48, 0.9));
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 24px 30px;
    margin-bottom: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
}

.hero-left h1 {
    font-size: 24px;
    font-weight: 800;
    margin-bottom: 6px;
    color: #fff;
}

.hero-left p {
    font-size: 14px;
    color: var(--text-secondary);
}

.hero-metrics {
    display: flex;
    gap: 16px;
}

.metric-pill {
    background: rgba(10, 14, 26, 0.7);
    border: 1px solid var(--border);
    padding: 8px 14px;
    border-radius: 8px;
    text-align: center;
}

.metric-value {
    font-size: 16px;
    font-weight: 800;
    color: var(--accent-cyan);
}

.metric-label {
    font-size: 10px;
    color: var(--text-muted);
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* CATEGORY TABS */
.category-filter-bar {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 14px;
    margin-bottom: 16px;
}

.category-chip {
    background: var(--bg-surface);
    border: 1px solid var(--border);
    color: var(--text-secondary);
    padding: 7px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
}

.category-chip:hover, .category-chip.active {
    background: rgba(0, 229, 255, 0.12);
    border-color: var(--accent-cyan);
    color: #fff;
}

/* 3. STRUCTURED GAMES GRID (Clean 4-Column Layout) */
.games-dashboard-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    gap: 22px;
    margin-bottom: 36px;
}

.arcade-card {
    background: var(--bg-surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
}

.arcade-card:hover {
    border-color: var(--accent-cyan);
    transform: translateY(-5px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.6), 0 0 20px rgba(0, 229, 255, 0.2);
}

.card-media {
    width: 100%;
    height: 175px;
    position: relative;
    overflow: hidden;
    background: #060812;
}

.card-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.35s ease;
}

.arcade-card:hover .card-media img {
    transform: scale(1.06);
}

.card-media-overlay {
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: rgba(0, 0, 0, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.2s ease;
}

.arcade-card:hover .card-media-overlay {
    opacity: 1;
}

.play-action-btn {
    width: 48px;
    height: 48px;
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

.card-content {
    padding: 16px 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
}

.card-header-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6px;
}

.card-title {
    font-size: 16px;
    font-weight: 800;
    color: #fff;
}

.card-score-badge {
    font-size: 11px;
    font-weight: 700;
    color: var(--accent-gold);
}

.card-desc {
    font-size: 13px;
    color: var(--text-secondary);
    line-height: 1.45;
    margin-bottom: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.card-tags-row {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 14px;
}

.card-tag {
    background: var(--bg-card);
    border: 1px solid var(--border);
    color: var(--text-muted);
    font-size: 11px;
    font-weight: 600;
    padding: 2px 7px;
    border-radius: 4px;
}

.card-action-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 1px solid var(--border);
    padding-top: 12px;
}

.card-keys {
    font-size: 11px;
    color: var(--text-muted);
    font-family: monospace;
}

.card-launch-text {
    font-size: 12px;
    font-weight: 700;
    color: var(--accent-cyan);
}

/* 4. FULLSCREEN CINEMATIC GAMEPLAY VIEWPORT */
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

.viewport-bar {
    background: rgba(12, 16, 28, 0.95);
    border-bottom: 1px solid #232a48;
    padding: 8px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    z-index: 10;
}

.viewport-game-title {
    font-size: 15px;
    font-weight: 800;
    color: var(--accent-cyan);
    letter-spacing: 0.5px;
}

.viewport-stage {
    flex: 1;
    width: 100%;
    height: calc(100vh - 48px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: #040508;
    position: relative;
    overflow: hidden;
}

#game-canvas {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.9);
}

/* 5. FOOTER */
.dashboard-footer {
    border-top: 1px solid var(--border);
    padding: 20px 32px;
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
print("Wrote structured assets/css/hub.css successfully!")
