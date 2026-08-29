# -*- coding: utf-8 -*-
import os
import sys
import math
sys.path.insert(0, '.')

def generate_svg_art():
    os.makedirs("assets/images/games", exist_ok=True)
    os.makedirs("assets/images/brand", exist_ok=True)

    # 1. Cosmic Vanguard SVG Banner
    cv_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGradCV" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050515"/>
      <stop offset="50%" stop-color="#0a1033"/>
      <stop offset="100%" stop-color="#1a0033"/>
    </linearGradient>
    <linearGradient id="shipGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00e5ff"/>
      <stop offset="100%" stop-color="#7000ff"/>
    </linearGradient>
    <filter id="glow">
      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="600" height="340" fill="url(#bgGradCV)"/>
  <!-- Stars -->
  <circle cx="50" cy="40" r="1.5" fill="#fff" opacity="0.8"/>
  <circle cx="120" cy="90" r="2" fill="#00e5ff" opacity="0.6"/>
  <circle cx="280" cy="30" r="1" fill="#fff" opacity="0.5"/>
  <circle cx="450" cy="80" r="2" fill="#ff0055" opacity="0.7"/>
  <circle cx="520" cy="150" r="1.5" fill="#fff" opacity="0.9"/>
  <circle cx="80" cy="220" r="1.2" fill="#ffe600" opacity="0.6"/>
  <circle cx="390" cy="260" r="1.8" fill="#fff" opacity="0.8"/>
  <circle cx="540" cy="40" r="1" fill="#fff" opacity="0.4"/>
  <!-- Nebula Clouds -->
  <path d="M 100 200 Q 200 120 350 180 T 550 120" fill="none" stroke="#7000ff" stroke-width="60" opacity="0.15" filter="url(#glow)"/>
  <path d="M 50 100 Q 250 80 450 140" fill="none" stroke="#00e5ff" stroke-width="40" opacity="0.12" filter="url(#glow)"/>
  <!-- Player Spaceship -->
  <g transform="translate(300, 210)" filter="url(#glow)">
    <!-- Engine Flames -->
    <polygon points="-8,45 0,75 8,45" fill="#ffaa00"/>
    <polygon points="-4,45 0,65 4,45" fill="#ffe600"/>
    <!-- Hull -->
    <polygon points="0,-45 35,35 15,25 0,35 -15,25 -35,35" fill="url(#shipGrad)" stroke="#00e5ff" stroke-width="2"/>
    <!-- Cockpit -->
    <polygon points="0,-20 8,10 0,5 -8,10" fill="#ff0055"/>
    <!-- Lasers -->
    <line x1="-28" y1="20" x2="-28" y2="-120" stroke="#00e5ff" stroke-width="3" opacity="0.9"/>
    <line x1="28" y1="20" x2="28" y2="-120" stroke="#00e5ff" stroke-width="3" opacity="0.9"/>
  </g>
  <!-- Enemy Invaders -->
  <g transform="translate(180, 80) scale(0.6)" filter="url(#glow)">
    <polygon points="0,40 30,-30 0,-15 -30,-30" fill="#ff0055" stroke="#ff3366" stroke-width="2"/>
  </g>
  <g transform="translate(420, 75) scale(0.6)" filter="url(#glow)">
    <polygon points="0,40 30,-30 0,-15 -30,-30" fill="#ff0055" stroke="#ff3366" stroke-width="2"/>
  </g>
  <g transform="translate(300, 60) scale(0.8)" filter="url(#glow)">
    <polygon points="0,50 40,-35 0,-20 -40,-35" fill="#ff0055" stroke="#ff3366" stroke-width="2"/>
  </g>
  <!-- Game Title Badge -->
  <rect x="20" y="270" width="220" height="45" rx="6" fill="rgba(10,16,51,0.85)" stroke="#00e5ff" stroke-width="1.5"/>
  <text x="35" y="298" font-family="'Segoe UI', monospace, sans-serif" font-size="16" font-weight="900" fill="#00e5ff" letter-spacing="2">COSMIC VANGUARD</text>
</svg>"""
    with open("assets/images/games/cosmic_vanguard.svg", "w", encoding="utf-8") as f:
        f.write(cv_svg)

    # 2. Shadow Quest RPG SVG Banner
    sq_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGradSQ" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0f1d"/>
      <stop offset="50%" stop-color="#141a29"/>
      <stop offset="100%" stop-color="#05070d"/>
    </linearGradient>
    <linearGradient id="bladeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#00e5ff"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
    <filter id="goldGlow">
      <feGaussianBlur stdDeviation="4" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="600" height="340" fill="url(#bgGradSQ)"/>
  <!-- Stone Dungeon Pillars -->
  <rect x="60" y="40" width="50" height="260" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <rect x="490" y="40" width="50" height="260" fill="#1e293b" stroke="#334155" stroke-width="2"/>
  <!-- Archway -->
  <path d="M 60 100 Q 300 -20 540 100" fill="none" stroke="#334155" stroke-width="20"/>
  <!-- Mystical Magic Circle -->
  <circle cx="300" cy="180" r="85" fill="none" stroke="#ffe600" stroke-width="2" stroke-dasharray="6,6" opacity="0.6" filter="url(#goldGlow)"/>
  <circle cx="300" cy="180" r="60" fill="none" stroke="#ff0055" stroke-width="1.5" opacity="0.4"/>
  <!-- Cross Swords -->
  <g transform="translate(300, 175)" filter="url(#goldGlow)">
    <g transform="rotate(45)">
      <rect x="-4" y="-70" width="8" height="110" fill="url(#bladeGrad)" rx="2"/>
      <rect x="-16" y="20" width="32" height="6" fill="#ffe600" rx="2"/>
      <rect x="-3" y="26" width="6" height="25" fill="#854d0e"/>
      <circle cx="0" cy="54" r="5" fill="#ffe600"/>
    </g>
    <g transform="rotate(-45)">
      <rect x="-4" y="-70" width="8" height="110" fill="url(#bladeGrad)" rx="2"/>
      <rect x="-16" y="20" width="32" height="6" fill="#ffe600" rx="2"/>
      <rect x="-3" y="26" width="6" height="25" fill="#854d0e"/>
      <circle cx="0" cy="54" r="5" fill="#ffe600"/>
    </g>
  </g>
  <rect x="20" y="270" width="220" height="45" rx="6" fill="rgba(15,23,42,0.9)" stroke="#ffe600" stroke-width="1.5"/>
  <text x="35" y="298" font-family="'Segoe UI', monospace, sans-serif" font-size="16" font-weight="900" fill="#ffe600" letter-spacing="2">SHADOW QUEST RPG</text>
</svg>"""
    with open("assets/images/games/shadow_quest.svg", "w", encoding="utf-8") as f:
        f.write(sq_svg)

    # 3. Cyber Runner 2099 SVG Banner
    cr_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGradCR" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#090514"/>
      <stop offset="60%" stop-color="#1f0a38"/>
      <stop offset="100%" stop-color="#ff0077"/>
    </linearGradient>
    <filter id="neonGlow">
      <feGaussianBlur stdDeviation="5" result="glow"/>
      <feMerge><feMergeNode in="glow"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="600" height="340" fill="url(#bgGradCR)"/>
  <!-- Perspective Cyber Grid -->
  <g stroke="#00e5ff" stroke-width="1" opacity="0.4">
    <line x1="0" y1="240" x2="600" y2="240"/>
    <line x1="0" y1="260" x2="600" y2="260"/>
    <line x1="0" y1="285" x2="600" y2="285"/>
    <line x1="0" y1="315" x2="600" y2="315"/>
    <line x1="300" y1="220" x2="0" y2="340"/>
    <line x1="300" y1="220" x2="100" y2="340"/>
    <line x1="300" y1="220" x2="200" y2="340"/>
    <line x1="300" y1="220" x2="300" y2="340"/>
    <line x1="300" y1="220" x2="400" y2="340"/>
    <line x1="300" y1="220" x2="500" y2="340"/>
    <line x1="300" y1="220" x2="600" y2="340"/>
  </g>
  <!-- Cyber City Skyline -->
  <rect x="40" y="100" width="50" height="120" fill="#120524" stroke="#ff0055" stroke-width="1"/>
  <rect x="110" y="70" width="70" height="150" fill="#120524" stroke="#00e5ff" stroke-width="1"/>
  <rect x="200" y="120" width="40" height="100" fill="#120524" stroke="#ff0055" stroke-width="1"/>
  <rect x="380" y="90" width="65" height="130" fill="#120524" stroke="#ffe600" stroke-width="1"/>
  <rect x="470" y="60" width="80" height="160" fill="#120524" stroke="#00e5ff" stroke-width="1"/>
  <!-- Runner Silhouette jumping -->
  <g transform="translate(280, 130)" filter="url(#neonGlow)">
    <circle cx="20" cy="0" r="10" fill="#00e5ff"/>
    <path d="M 15 12 L 28 35 L 45 42 M 15 25 L -5 32 L -15 50 M 15 15 L 2 5 M 20 20 L 38 15" stroke="#00e5ff" stroke-width="5" stroke-linecap="round" fill="none"/>
  </g>
  <rect x="20" y="270" width="220" height="45" rx="6" fill="rgba(18,5,36,0.9)" stroke="#00e5ff" stroke-width="1.5"/>
  <text x="35" y="298" font-family="'Segoe UI', monospace, sans-serif" font-size="16" font-weight="900" fill="#00e5ff" letter-spacing="2">CYBER RUNNER 2099</text>
</svg>"""
    with open("assets/images/games/cyber_runner.svg", "w", encoding="utf-8") as f:
        f.write(cr_svg)

    # 4. Dungeon Raycaster 3D SVG Banner
    dr_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%">
  <defs>
    <linearGradient id="ceilingGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#0b0f19"/><stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="floorGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#111827"/><stop offset="100%" stop-color="#030712"/>
    </linearGradient>
  </defs>
  <rect width="600" height="170" fill="url(#ceilingGrad)"/>
  <rect y="170" width="600" height="170" fill="url(#floorGrad)"/>
  <!-- 3D Perspective Corridor -->
  <polygon points="0,0 160,70 160,270 0,340" fill="#1e1b4b" stroke="#4338ca" stroke-width="2"/>
  <polygon points="600,0 440,70 440,270 600,340" fill="#1e1b4b" stroke="#4338ca" stroke-width="2"/>
  <polygon points="160,70 240,110 240,230 160,270" fill="#312e81" stroke="#6366f1" stroke-width="2"/>
  <polygon points="440,70 360,110 360,230 440,270" fill="#312e81" stroke="#6366f1" stroke-width="2"/>
  <!-- Back Wall with Torches -->
  <rect x="240" y="110" width="120" height="120" fill="#0f172a" stroke="#6366f1" stroke-width="2"/>
  <circle cx="260" cy="150" r="6" fill="#ffaa00"/>
  <circle cx="340" cy="150" r="6" fill="#ffaa00"/>
  <!-- Crosshair -->
  <circle cx="300" cy="170" r="12" fill="none" stroke="#00e5ff" stroke-width="1.5" opacity="0.8"/>
  <line x1="300" y1="152" x2="300" y2="188" stroke="#00e5ff" stroke-width="1.5" opacity="0.8"/>
  <line x1="282" y1="170" x2="318" y2="170" stroke="#00e5ff" stroke-width="1.5" opacity="0.8"/>
  <rect x="20" y="270" width="220" height="45" rx="6" fill="rgba(15,23,42,0.9)" stroke="#6366f1" stroke-width="1.5"/>
  <text x="30" y="298" font-family="'Segoe UI', monospace, sans-serif" font-size="15" font-weight="900" fill="#00e5ff" letter-spacing="1.5">DUNGEON RAYCASTER 3D</text>
</svg>"""
    with open("assets/images/games/dungeon_raycast3d.svg", "w", encoding="utf-8") as f:
        f.write(dr_svg)

    # 5. Gravity Sandbox SVG Banner
    gs_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGradGS" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0a0a14"/><stop offset="100%" stop-color="#14142b"/>
    </linearGradient>
  </defs>
  <rect width="600" height="340" fill="url(#bgGradGS)"/>
  <!-- Newton's Cradle & Pendulum -->
  <line x1="200" y1="40" x2="400" y2="40" stroke="#475569" stroke-width="8" stroke-linecap="round"/>
  <line x1="240" y1="40" x2="240" y2="150" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="240" cy="150" r="18" fill="#00e5ff"/>
  <line x1="280" y1="40" x2="280" y2="150" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="280" cy="150" r="18" fill="#00e5ff"/>
  <line x1="320" y1="40" x2="320" y2="150" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="320" cy="150" r="18" fill="#00e5ff"/>
  <line x1="360" y1="40" x2="420" y2="120" stroke="#94a3b8" stroke-width="2"/>
  <circle cx="420" cy="120" r="18" fill="#00e5ff"/>
  <!-- Fluid Particles Splash -->
  <circle cx="150" cy="220" r="10" fill="rgba(0,229,255,0.7)"/>
  <circle cx="170" cy="240" r="14" fill="rgba(0,229,255,0.8)"/>
  <circle cx="135" cy="250" r="12" fill="rgba(0,229,255,0.6)"/>
  <!-- Stacking Rigid Blocks -->
  <rect x="450" y="220" width="40" height="40" fill="#ff0055" stroke="#fff" stroke-width="1.5" transform="rotate(12, 470, 240)"/>
  <rect x="470" y="170" width="36" height="36" fill="#ffe600" stroke="#fff" stroke-width="1.5" transform="rotate(-8, 488, 188)"/>
  <rect x="20" y="270" width="220" height="45" rx="6" fill="rgba(20,20,43,0.9)" stroke="#00e5ff" stroke-width="1.5"/>
  <text x="35" y="298" font-family="'Segoe UI', monospace, sans-serif" font-size="16" font-weight="900" fill="#00e5ff" letter-spacing="2">GRAVITY SANDBOX</text>
</svg>"""
    with open("assets/images/games/gravity_sandbox.svg", "w", encoding="utf-8") as f:
        f.write(gs_svg)

    # 6. Neon Tower Defense SVG Banner
    ntd_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGradNTD" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#030712"/><stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
  <rect width="600" height="340" fill="url(#bgGradNTD)"/>
  <!-- Pathway Winding -->
  <path d="M 0 170 Q 150 170 150 80 T 350 80 T 350 240 T 600 240" fill="none" stroke="#1e293b" stroke-width="44" stroke-linecap="round"/>
  <path d="M 0 170 Q 150 170 150 80 T 350 80 T 350 240 T 600 240" fill="none" stroke="#00e5ff" stroke-width="2" stroke-dasharray="8,8" opacity="0.6"/>
  <!-- Defense Turrets -->
  <g transform="translate(150, 160)">
    <rect x="-18" y="-18" width="36" height="36" fill="#1e1b4b" stroke="#00e5ff" stroke-width="2" rx="6"/>
    <circle cx="0" cy="0" r="10" fill="#00e5ff"/>
    <line x1="0" y1="0" x2="25" y2="-20" stroke="#00e5ff" stroke-width="4"/>
  </g>
  <g transform="translate(350, 160)">
    <rect x="-18" y="-18" width="36" height="36" fill="#1e1b4b" stroke="#ff0055" stroke-width="2" rx="6"/>
    <circle cx="0" cy="0" r="10" fill="#ff0055"/>
    <line x1="0" y1="0" x2="-25" y2="20" stroke="#ff0055" stroke-width="4"/>
  </g>
  <!-- Laser Beam -->
  <line x1="165" y1="145" x2="280" y2="80" stroke="#00e5ff" stroke-width="3" opacity="0.9"/>
  <!-- Enemy Creeps -->
  <circle cx="280" cy="80" r="12" fill="#39ff14"/>
  <circle cx="240" cy="80" r="10" fill="#39ff14"/>
  <circle cx="480" cy="240" r="14" fill="#ffe600"/>
  <rect x="20" y="270" width="220" height="45" rx="6" fill="rgba(15,23,42,0.9)" stroke="#39ff14" stroke-width="1.5"/>
  <text x="32" y="298" font-family="'Segoe UI', monospace, sans-serif" font-size="15" font-weight="900" fill="#39ff14" letter-spacing="1.5">NEON TOWER DEFENSE</text>
</svg>"""
    with open("assets/images/games/neon_tower_defense.svg", "w", encoding="utf-8") as f:
        f.write(ntd_svg)

    # 7. Chrono Puzzle SVG Banner
    cp_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGradCP" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#180b2b"/><stop offset="100%" stop-color="#0b172a"/>
    </linearGradient>
  </defs>
  <rect width="600" height="340" fill="url(#bgGradCP)"/>
  <!-- Isometric Puzzle Grid -->
  <g transform="translate(300, 160) scale(1, 0.6) rotate(45)" stroke="#6366f1" stroke-width="1.5">
    <rect x="-120" y="-120" width="240" height="240" fill="rgba(99,102,241,0.1)"/>
    <line x1="-60" y1="-120" x2="-60" y2="120"/><line x1="0" y1="-120" x2="0" y2="120"/><line x1="60" y1="-120" x2="60" y2="120"/>
    <line x1="-120" y1="-60" x2="120" y2="-60"/><line x1="-120" y1="0" x2="120" y2="0"/><line x1="-120" y1="60" x2="120" y2="60"/>
    <!-- Goal Tiles -->
    <rect x="0" y="0" width="60" height="60" fill="rgba(57,255,20,0.4)"/>
    <rect x="-60" y="-60" width="60" height="60" fill="rgba(57,255,20,0.4)"/>
  </g>
  <!-- Time Rewind Clock Dial Overlay -->
  <circle cx="300" cy="160" r="100" fill="none" stroke="#ffe600" stroke-width="2" stroke-dasharray="4,8" opacity="0.7"/>
  <path d="M 300 70 A 90 90 0 1 0 390 160" fill="none" stroke="#00e5ff" stroke-width="4" stroke-linecap="round"/>
  <polygon points="390,140 405,165 375,165" fill="#00e5ff"/>
  <rect x="20" y="270" width="220" height="45" rx="6" fill="rgba(24,11,43,0.9)" stroke="#ffe600" stroke-width="1.5"/>
  <text x="35" y="298" font-family="'Segoe UI', monospace, sans-serif" font-size="16" font-weight="900" fill="#ffe600" letter-spacing="2">CHRONO PUZZLE</text>
</svg>"""
    with open("assets/images/games/chrono_puzzle.svg", "w", encoding="utf-8") as f:
        f.write(cp_svg)

    # 8. Rhythm Blaster SVG Banner
    rb_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGradRB" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#050510"/><stop offset="100%" stop-color="#240038"/>
    </linearGradient>
  </defs>
  <rect width="600" height="340" fill="url(#bgGradRB)"/>
  <!-- 4 Rhythm Highway Lanes -->
  <polygon points="250,40 350,40 480,340 120,340" fill="rgba(255,255,255,0.04)" stroke="#ff0077" stroke-width="1"/>
  <line x1="275" y1="40" x2="210" y2="340" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
  <line x1="300" y1="40" x2="300" y2="340" stroke="rgba(255,255,255,0.3)" stroke-width="2"/>
  <line x1="325" y1="40" x2="390" y2="340" stroke="rgba(255,255,255,0.2)" stroke-width="1.5"/>
  <!-- Target Strike Zone -->
  <line x1="160" y1="280" x2="440" y2="280" stroke="#00e5ff" stroke-width="5"/>
  <!-- Falling Rhythm Notes -->
  <polygon points="220,180 280,180 270,165 230,165" fill="#00e5ff"/>
  <polygon points="310,220 370,220 360,205 320,205" fill="#ff0055"/>
  <polygon points="175,270 235,270 230,255 180,255" fill="#ffe600"/>
  <polygon points="365,270 425,270 420,255 370,255" fill="#39ff14"/>
  <!-- Neon Equalizer Bars -->
  <rect x="40" y="220" width="8" height="40" fill="#00e5ff"/><rect x="52" y="190" width="8" height="70" fill="#ff0055"/>
  <rect x="64" y="230" width="8" height="30" fill="#ffe600"/><rect x="76" y="200" width="8" height="60" fill="#39ff14"/>
  <rect x="520" y="200" width="8" height="60" fill="#00e5ff"/><rect x="532" y="180" width="8" height="80" fill="#ff0055"/>
  <rect x="544" y="210" width="8" height="50" fill="#ffe600"/>
  <rect x="20" y="270" width="220" height="45" rx="6" fill="rgba(36,0,56,0.9)" stroke="#ff0077" stroke-width="1.5"/>
  <text x="35" y="298" font-family="'Segoe UI', monospace, sans-serif" font-size="16" font-weight="900" fill="#ff0077" letter-spacing="2">RHYTHM BLASTER</text>
</svg>"""
    with open("assets/images/games/rhythm_blaster.svg", "w", encoding="utf-8") as f:
        f.write(rb_svg)

    # 9. Brand Logo SVG
    brand_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 100" width="100%" height="100%">
  <defs>
    <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00e5ff"/><stop offset="50%" stop-color="#ff0055"/><stop offset="100%" stop-color="#ffe600"/>
    </linearGradient>
  </defs>
  <polygon points="30,10 60,50 45,50 65,90 25,45 40,45" fill="#00e5ff"/>
  <text x="80" y="62" font-family="'Segoe UI', monospace, sans-serif" font-size="34" font-weight="900" fill="url(#logoGrad)" letter-spacing="3">NOVAFORGE</text>
</svg>"""
    with open("assets/images/brand/brand_logo.svg", "w", encoding="utf-8") as f:
        f.write(brand_svg)

    print("Successfully generated all high-resolution game artworks and brand SVGs!")

generate_svg_art()
