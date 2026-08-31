# -*- coding: utf-8 -*-
import os

os.makedirs("assets/images/games", exist_ok=True)
os.makedirs("assets/images/brand", exist_ok=True)

# 1. Brand Logo - Clean, Minimalist Studio Brand
brand_logo = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 60" width="100%" height="100%">
  <defs>
    <linearGradient id="brandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#00e5ff"/>
      <stop offset="100%" stop-color="#3b82f6"/>
    </linearGradient>
  </defs>
  <!-- Geometric Cube / Nova Mark -->
  <g transform="translate(10, 8)">
    <polygon points="22,4 40,14 40,34 22,44 4,34 4,14" fill="none" stroke="url(#brandGrad)" stroke-width="3"/>
    <polygon points="22,4 22,24 40,14" fill="rgba(0,229,255,0.2)"/>
    <polygon points="22,24 4,14 22,4" fill="rgba(0,229,255,0.4)"/>
    <polygon points="22,24 40,34 22,44" fill="rgba(59,130,246,0.3)"/>
    <polygon points="22,24 4,34 22,44" fill="rgba(59,130,246,0.5)"/>
  </g>
  <!-- Clean Human Typography -->
  <text x="64" y="34" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="22" font-weight="800" fill="#ffffff" letter-spacing="1">NOVAFORGE</text>
  <text x="64" y="47" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="10" font-weight="600" fill="#00e5ff" letter-spacing="3">ARCADE STUDIO</text>
</svg>"""

with open("assets/images/brand/brand_logo.svg", "w", encoding="utf-8") as f:
    f.write(brand_logo)

# 2. Game 1: Cosmic Vanguard - Clean Space Shooter Capsule
art_cv = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%">
  <rect width="600" height="340" fill="#0b0f19"/>
  <!-- Subtle Grid Lines -->
  <line x1="0" y1="85" x2="600" y2="85" stroke="#1f293d" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="0" y1="170" x2="600" y2="170" stroke="#1f293d" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="0" y1="255" x2="600" y2="255" stroke="#1f293d" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="150" y1="0" x2="150" y2="340" stroke="#1f293d" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="300" y1="0" x2="300" y2="340" stroke="#1f293d" stroke-width="1" stroke-dasharray="4,4"/>
  <line x1="450" y1="0" x2="450" y2="340" stroke="#1f293d" stroke-width="1" stroke-dasharray="4,4"/>

  <!-- Iconic Vector Spacecraft -->
  <g transform="translate(300, 150)">
    <!-- Propulsion Trails -->
    <line x1="-18" y1="35" x2="-18" y2="65" stroke="#00e5ff" stroke-width="2" opacity="0.6"/>
    <line x1="18" y1="35" x2="18" y2="65" stroke="#00e5ff" stroke-width="2" opacity="0.6"/>
    <line x1="0" y1="40" x2="0" y2="80" stroke="#38bdf8" stroke-width="3"/>
    
    <!-- Ship Geometry -->
    <polygon points="0,-48 36,28 18,20 0,28 -18,20 -36,28" fill="#1e293b" stroke="#00e5ff" stroke-width="2.5"/>
    <polygon points="0,-30 12,8 0,4 -12,8" fill="#00e5ff" opacity="0.3"/>
    <!-- Laser Blasts -->
    <circle cx="-36" cy="-20" r="3" fill="#00e5ff"/>
    <circle cx="36" cy="-20" r="3" fill="#00e5ff"/>
  </g>

  <!-- Clean Title & Genre Pill -->
  <rect x="30" y="275" width="80" height="24" rx="4" fill="#1e293b" stroke="#334155" stroke-width="1"/>
  <text x="70" y="291" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#38bdf8" letter-spacing="1">ACTION</text>
  <text x="125" y="292" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#ffffff" letter-spacing="1">COSMIC VANGUARD</text>
</svg>"""

with open("assets/images/games/cosmic_vanguard.svg", "w", encoding="utf-8") as f:
    f.write(art_cv)

# 3. Game 2: Shadow Quest RPG - Clean Sword & Shield Emblem
art_sq = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%">
  <rect width="600" height="340" fill="#110e1b"/>
  <!-- Circular Rune Background -->
  <circle cx="300" cy="140" r="85" fill="none" stroke="#2d2244" stroke-width="2"/>
  <circle cx="300" cy="140" r="65" fill="none" stroke="#2d2244" stroke-width="1" stroke-dasharray="6,4"/>

  <!-- Sword & Shield Iconography -->
  <g transform="translate(300, 140)">
    <!-- Crest Shield -->
    <path d="M 0 -45 Q 35 -40 38 0 Q 38 45 0 62 Q -38 45 -38 0 Q -35 -40 0 -45 Z" fill="#1e182f" stroke="#a855f7" stroke-width="2.5"/>
    <!-- Crossed Sword -->
    <line x1="0" y1="-30" x2="0" y2="40" stroke="#c084fc" stroke-width="3.5"/>
    <line x1="-16" y1="-10" x2="16" y2="-10" stroke="#c084fc" stroke-width="3"/>
    <circle cx="0" cy="-35" r="4" fill="#a855f7"/>
  </g>

  <!-- Clean Title -->
  <rect x="30" y="275" width="60" height="24" rx="4" fill="#241b38" stroke="#3b2d5c" stroke-width="1"/>
  <text x="60" y="291" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#c084fc" letter-spacing="1">RPG</text>
  <text x="105" y="292" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#ffffff" letter-spacing="1">SHADOW QUEST: ELDORIA</text>
</svg>"""

with open("assets/images/games/shadow_quest.svg", "w", encoding="utf-8") as f:
    f.write(art_sq)

# 4. Game 3: Cyber Runner 2099 - Clean Precision Platformer
art_cr = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%">
  <rect width="600" height="340" fill="#0d111a"/>
  <!-- Minimalist Platformer Stairs -->
  <g stroke="#243048" stroke-width="2" fill="none">
    <rect x="80" y="220" width="100" height="20" rx="3" fill="#161f33"/>
    <rect x="220" y="170" width="120" height="20" rx="3" fill="#161f33"/>
    <rect x="380" y="120" width="140" height="20" rx="3" fill="#161f33"/>
  </g>

  <!-- Dynamic Runner Silhouette & Cyber Dash Trails -->
  <g transform="translate(280, 135)">
    <!-- Speed Lines -->
    <line x1="-60" y1="0" x2="-20" y2="0" stroke="#ec4899" stroke-width="2" opacity="0.6"/>
    <line x1="-50" y1="12" x2="-15" y2="12" stroke="#ec4899" stroke-width="2" opacity="0.4"/>
    <!-- Runner Figure -->
    <circle cx="10" cy="-22" r="7" fill="#f43f5e"/>
    <path d="M 5 -12 L 15 5 L 2 20 M 15 5 L 28 14" stroke="#f43f5e" stroke-width="3.5" stroke-linecap="round" fill="none"/>
    <path d="M 8 -5 L -8 8 L -18 4" stroke="#f43f5e" stroke-width="3" stroke-linecap="round" fill="none"/>
  </g>

  <!-- Clean Title -->
  <rect x="30" y="275" width="95" height="24" rx="4" fill="#261726" stroke="#482245" stroke-width="1"/>
  <text x="77" y="291" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#f43f5e" letter-spacing="1">PLATFORMER</text>
  <text x="140" y="292" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#ffffff" letter-spacing="1">CYBER RUNNER 2099</text>
</svg>"""

with open("assets/images/games/cyber_runner.svg", "w", encoding="utf-8") as f:
    f.write(art_cr)

# 5. Game 4: Dungeon Raycaster 3D - Clean Wireframe Perspective
art_dr = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%">
  <rect width="600" height="340" fill="#0f1115"/>
  <!-- 3D Perspective Hallway Wireframe -->
  <g stroke="#374151" stroke-width="1.5" fill="none">
    <!-- Outer Walls -->
    <line x1="50" y1="20" x2="230" y2="110"/>
    <line x1="550" y1="20" x2="370" y2="110"/>
    <line x1="50" y1="260" x2="230" y2="180"/>
    <line x1="550" y1="260" x2="370" y2="180"/>
    <!-- Back Portal -->
    <rect x="230" y="110" width="140" height="70" stroke="#f59e0b" stroke-width="2" fill="#18140c"/>
    <!-- Crosshair Target -->
    <circle cx="300" cy="145" r="14" stroke="#f59e0b" stroke-width="1.5"/>
    <line x1="300" y1="125" x2="300" y2="165" stroke="#f59e0b" stroke-width="1"/>
    <line x1="280" y1="145" x2="320" y2="145" stroke="#f59e0b" stroke-width="1"/>
  </g>

  <!-- Clean Title -->
  <rect x="30" y="275" width="80" height="24" rx="4" fill="#282114" stroke="#4d3d1e" stroke-width="1"/>
  <text x="70" y="291" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#f59e0b" letter-spacing="1">3D RETRO</text>
  <text x="125" y="292" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#ffffff" letter-spacing="1">DUNGEON RAYCASTER 3D</text>
</svg>"""

with open("assets/images/games/dungeon_raycast3d.svg", "w", encoding="utf-8") as f:
    f.write(art_dr)

# 6. Game 5: Gravity Sandbox - Clean Physics Diagram
art_gs = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%">
  <rect width="600" height="340" fill="#0a1219"/>
  <!-- Physics Orbit & Collision Diagram -->
  <circle cx="300" cy="135" r="80" fill="none" stroke="#1e293b" stroke-width="2" stroke-dasharray="4,4"/>
  
  <!-- Central Gravity Body -->
  <circle cx="300" cy="135" r="28" fill="#0e7490" stroke="#22d3ee" stroke-width="2.5"/>
  <text x="300" y="140" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="14" font-weight="800" fill="#ffffff">G</text>

  <!-- Orbiting & Colliding Rigid Bodies -->
  <circle cx="220" cy="95" r="14" fill="#155e75" stroke="#67e8f9" stroke-width="2"/>
  <rect x="360" y="160" width="24" height="24" rx="3" fill="#164e63" stroke="#22d3ee" stroke-width="2" transform="rotate(25 372 172)"/>
  
  <!-- Velocity Vectors -->
  <line x1="220" y1="95" x2="190" y2="75" stroke="#22d3ee" stroke-width="2" stroke-linecap="round"/>
  <polygon points="190,75 197,84 200,72" fill="#22d3ee"/>

  <!-- Clean Title -->
  <rect x="30" y="275" width="90" height="24" rx="4" fill="#142c38" stroke="#1f4e63" stroke-width="1"/>
  <text x="75" y="291" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#22d3ee" letter-spacing="1">PHYSICS LAB</text>
  <text x="135" y="292" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#ffffff" letter-spacing="1">GRAVITY SANDBOX</text>
</svg>"""

with open("assets/images/games/gravity_sandbox.svg", "w", encoding="utf-8") as f:
    f.write(art_gs)

# 7. Game 6: Neon Tower Defense - Clean Radar Defense Grid
art_td = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%">
  <rect width="600" height="340" fill="#0d1410"/>
  <!-- Defense Pathway & Grid -->
  <path d="M 60 140 L 220 140 L 220 70 L 380 70 L 380 200 L 540 200" fill="none" stroke="#1b3323" stroke-width="28" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M 60 140 L 220 140 L 220 70 L 380 70 L 380 200 L 540 200" fill="none" stroke="#22c55e" stroke-width="2" stroke-dasharray="6,6" stroke-linecap="round" stroke-linejoin="round"/>

  <!-- Defense Turret Node -->
  <g transform="translate(300, 135)">
    <!-- Range Ring -->
    <circle cx="0" cy="0" r="55" fill="none" stroke="#16a34a" stroke-width="1.5" stroke-dasharray="4,3" opacity="0.7"/>
    <!-- Turret Hexagon Base -->
    <polygon points="0,-18 16,-9 16,9 0,18 -16,9 -16,-9" fill="#14532d" stroke="#4ade80" stroke-width="2"/>
    <!-- Cannon Barrel -->
    <rect x="-3" y="-26" width="6" height="14" rx="2" fill="#4ade80"/>
  </g>

  <!-- Clean Title -->
  <rect x="30" y="275" width="80" height="24" rx="4" fill="#17311f" stroke="#2a5c37" stroke-width="1"/>
  <text x="70" y="291" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#4ade80" letter-spacing="1">STRATEGY</text>
  <text x="125" y="292" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#ffffff" letter-spacing="1">NEON TOWER DEFENSE</text>
</svg>"""

with open("assets/images/games/neon_tower_defense.svg", "w", encoding="utf-8") as f:
    f.write(art_td)

# 8. Game 7: Chrono Puzzle - Clean Sokoban Box & Time Loop
art_cp = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%">
  <rect width="600" height="340" fill="#16120b"/>
  <!-- Isometric Grid Tiles -->
  <g transform="translate(300, 110)">
    <!-- Target Slot (Goal) -->
    <polygon points="0,40 50,65 0,90 -50,65" fill="#2d2212" stroke="#eab308" stroke-width="2" stroke-dasharray="4,4"/>
    
    <!-- Push Block Cube -->
    <g transform="translate(0, -10)">
      <polygon points="0,-25 45,-2 0,20 -45,-2" fill="#713f12" stroke="#fbbf24" stroke-width="2"/>
      <polygon points="0,20 45,-2 45,35 0,55" fill="#451a03" stroke="#fbbf24" stroke-width="2"/>
      <polygon points="0,20 -45,-2 -45,35 0,55" fill="#582106" stroke="#fbbf24" stroke-width="2"/>
    </g>

    <!-- Temporal Rewind Arc -->
    <path d="M 50 10 A 65 65 0 1 0 -50 10" fill="none" stroke="#fbbf24" stroke-width="2.5" stroke-dasharray="8,5"/>
    <polygon points="-50,10 -40,16 -42,2" fill="#fbbf24"/>
  </g>

  <!-- Clean Title -->
  <rect x="30" y="275" width="65" height="24" rx="4" fill="#382914" stroke="#6b4c1f" stroke-width="1"/>
  <text x="62" y="291" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#fbbf24" letter-spacing="1">PUZZLE</text>
  <text x="110" y="292" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#ffffff" letter-spacing="1">CHRONO PUZZLE: TIME SHIFT</text>
</svg>"""

with open("assets/images/games/chrono_puzzle.svg", "w", encoding="utf-8") as f:
    f.write(art_cp)

# 9. Game 8: Rhythm Blaster - Clean 4-Lane Equalizer Slasher
art_rb = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 340" width="100%" height="100%">
  <rect width="600" height="340" fill="#140c1b"/>
  <!-- 4-Lane Beat Highway -->
  <g transform="translate(300, 140)">
    <!-- Lane Dividers -->
    <line x1="-120" y1="-80" x2="-160" y2="80" stroke="#3b1d4d" stroke-width="2"/>
    <line x1="-40" y1="-80" x2="-55" y2="80" stroke="#3b1d4d" stroke-width="2"/>
    <line x1="40" y1="-80" x2="55" y2="80" stroke="#3b1d4d" stroke-width="2"/>
    <line x1="120" y1="-80" x2="160" y2="80" stroke="#3b1d4d" stroke-width="2"/>
    
    <!-- Hit Line Receptor -->
    <line x1="-180" y1="50" x2="180" y2="50" stroke="#d946ef" stroke-width="3"/>
    
    <!-- Falling Beat Notes -->
    <rect x="-142" y="-10" width="30" height="12" rx="3" fill="#e879f9" stroke="#f5d0fe" stroke-width="1.5"/>
    <rect x="-48" y="38" width="34" height="14" rx="3" fill="#d946ef" stroke="#ffffff" stroke-width="2"/>
    <rect x="22" y="-40" width="30" height="12" rx="3" fill="#e879f9" stroke="#f5d0fe" stroke-width="1.5"/>
    <rect x="110" y="10" width="32" height="12" rx="3" fill="#e879f9" stroke="#f5d0fe" stroke-width="1.5"/>
  </g>

  <!-- Clean Title -->
  <rect x="30" y="275" width="65" height="24" rx="4" fill="#3b1a47" stroke="#692980" stroke-width="1"/>
  <text x="62" y="291" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="11" font-weight="700" fill="#f0abfc" letter-spacing="1">RHYTHM</text>
  <text x="110" y="292" font-family="-apple-system, sans-serif" font-size="16" font-weight="800" fill="#ffffff" letter-spacing="1">RHYTHM BLASTER: SYNTHWAVE</text>
</svg>"""

with open("assets/images/games/rhythm_blaster.svg", "w", encoding="utf-8") as f:
    f.write(art_rb)

print("Successfully generated all clean, human-crafted vector game art covers!")
