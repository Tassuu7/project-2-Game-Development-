# -*- coding: utf-8 -*-
import os
import math
from PIL import Image, ImageDraw, ImageFont

os.makedirs("assets/images/games", exist_ok=True)
W, H = 640, 360

def draw_retro_title(draw, text, genre, badge_color):
    # Banner overlay at bottom
    draw.rectangle([0, H - 70, W, H], fill=(12, 16, 28, 240))
    draw.line([0, H - 70, W, H - 70], fill=badge_color, width=2)
    
    # Genre badge
    draw.rounded_rectangle([24, H - 54, 110, H - 24], radius=4, fill=(24, 32, 54), outline=badge_color, width=1)
    draw.text((67, H - 42), genre, fill=badge_color, anchor="mm")
    
    # Game Title
    draw.text((125, H - 42), text, fill=(255, 255, 255), anchor="lm")

# 1. Cosmic Vanguard
def gen_cosmic():
    im = Image.new("RGB", (W, H), (6, 8, 18))
    draw = ImageDraw.Draw(im)
    
    # Starfield
    import random
    random.seed(42)
    for _ in range(120):
        sx, sy = random.randint(0, W), random.randint(0, H - 70)
        c = random.choice([(255, 255, 255), (0, 229, 255), (255, 200, 100), (180, 200, 255)])
        r = random.randint(1, 2)
        draw.ellipse([sx, sy, sx + r, sy + r], fill=c)
        
    # Nebula bands
    for y in range(60, 220, 2):
        alpha = int(40 * math.sin((y - 60) / 160 * math.pi))
        draw.line([0, y, W, y], fill=(15, 25 + alpha // 2, 45 + alpha))

    # Pixel Spaceship (Central Hero)
    cx, cy = W // 2, 130
    
    # Thruster Exhaust
    for i in range(12):
        flare_w = 12 - i
        draw.rectangle([cx - flare_w, cy + 30 + i * 4, cx + flare_w, cy + 34 + i * 4], fill=(255, 120 + i * 10, 0))
    draw.rectangle([cx - 4, cy + 30, cx + 4, cy + 65], fill=(255, 240, 100))

    # Spaceship wings & body (Geometric Pixel Shading)
    ship_body = [
        (cx, cy - 45), (cx + 36, cy + 25), (cx + 18, cy + 18),
        (cx, cy + 28), (cx - 18, cy + 18), (cx - 36, cy + 25)
    ]
    draw.polygon(ship_body, fill=(30, 41, 59), outline=(0, 229, 255), width=2)
    
    # Cockpit Glass
    cockpit = [(cx, cy - 25), (cx + 10, cy + 5), (cx, cy), (cx - 10, cy + 5)]
    draw.polygon(cockpit, fill=(0, 229, 255))
    
    # Laser Beams
    draw.line([cx - 28, cy + 10, cx - 28, 0], fill=(0, 229, 255), width=3)
    draw.line([cx + 28, cy + 10, cx + 28, 0], fill=(0, 229, 255), width=3)
    draw.line([cx - 28, cy + 10, cx - 28, 0], fill=(255, 255, 255), width=1)
    draw.line([cx + 28, cy + 10, cx + 28, 0], fill=(255, 255, 255), width=1)

    # Enemy Scout Ships
    for ex, ey in [(140, 70), (500, 70), (220, 50), (420, 50)]:
        enemy = [(ex, ey + 20), (ex + 18, ey - 15), (ex, ey - 5), (ex - 18, ey - 15)]
        draw.polygon(enemy, fill=(244, 63, 94), outline=(255, 120, 150), width=1)

    draw_retro_title(draw, "COSMIC VANGUARD", "ACTION", (0, 229, 255))
    im.save("assets/images/games/cosmic_vanguard.png")

# 2. Shadow Quest RPG
def gen_rpg():
    im = Image.new("RGB", (W, H), (14, 11, 22))
    draw = ImageDraw.Draw(im)
    
    # Dungeon Stone Floor Grid
    for x in range(0, W, 40):
        draw.line([x, 0, x, H - 70], fill=(24, 19, 36), width=1)
    for y in range(0, H - 70, 30):
        draw.line([0, y, W, y], fill=(24, 19, 36), width=1)

    cx, cy = W // 2, 130
    
    # Magic Circle Aura
    for r in [70, 50, 30]:
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], outline=(168, 85, 247), width=2 if r == 70 else 1)
    
    # RPG Knight Hero Sprite (Shield & Sword)
    # Shield
    shield = [(cx - 25, cy - 30), (cx + 5, cy - 30), (cx + 8, cy + 10), (cx - 10, cy + 35), (cx - 28, cy + 10)]
    draw.polygon(shield, fill=(45, 30, 70), outline=(192, 132, 252), width=2)
    draw.line([cx - 10, cy - 25, cx - 10, cy + 25], fill=(192, 132, 252), width=2)
    
    # Sword with Glowing Blade
    draw.rectangle([cx + 15, cy - 45, cx + 22, cy + 15], fill=(240, 230, 255), outline=(168, 85, 247), width=1)
    draw.polygon([(cx + 15, cy - 45), (cx + 18, cy - 55), (cx + 22, cy - 45)], fill=(255, 255, 255))
    draw.rectangle([cx + 10, cy + 15, cx + 27, cy + 19], fill=(251, 191, 36)) # Hilt
    draw.rectangle([cx + 16, cy + 19, cx + 21, cy + 32], fill=(120, 80, 50)) # Handle

    # Elemental Magic Orbs (Fire & Frost)
    draw.ellipse([cx - 110, cy - 20, cx - 80, cy + 10], fill=(239, 68, 68), outline=(254, 202, 202), width=2)
    draw.ellipse([cx + 80, cy - 20, cx + 110, cy + 10], fill=(59, 130, 246), outline=(191, 219, 254), width=2)

    draw_retro_title(draw, "SHADOW QUEST: ELDORIA", "ACTION RPG", (192, 132, 252))
    im.save("assets/images/games/shadow_quest.png")

# 3. Cyber Runner 2099
def gen_runner():
    im = Image.new("RGB", (W, H), (10, 13, 22))
    draw = ImageDraw.Draw(im)
    
    # Cityscape Background Silhouettes
    buildings = [(40, 110), (100, 160), (160, 90), (240, 140), (320, 80), (400, 130), (480, 100), (560, 150)]
    for bx, bh in buildings:
        draw.rectangle([bx, H - 70 - bh, bx + 60, H - 70], fill=(18, 24, 38))
        # Windows
        for wx in range(bx + 8, bx + 52, 14):
            for wy in range(H - 60 - bh, H - 80, 20):
                draw.rectangle([wx, wy, wx + 6, wy + 10], fill=(30, 42, 65))

    # Platformer Run Platforms
    draw.rectangle([60, 220, 180, 240], fill=(244, 63, 94), outline=(255, 255, 255), width=1)
    draw.rectangle([240, 170, 400, 190], fill=(0, 229, 255), outline=(255, 255, 255), width=1)
    draw.rectangle([460, 120, 580, 140], fill=(244, 63, 94), outline=(255, 255, 255), width=1)

    # Runner in Action Jump
    rx, ry = 310, 125
    # Dash Motion Lines
    for d in range(1, 5):
        draw.line([rx - d * 22, ry + 15, rx - (d - 1) * 22, ry + 15], fill=(244, 63, 94), width=3)
    
    # Runner Stick Figure Character
    draw.ellipse([rx + 8, ry - 20, rx + 24, ry - 4], fill=(255, 255, 255)) # Head
    draw.line([rx + 16, ry - 4, rx + 12, ry + 20], fill=(244, 63, 94), width=4) # Torso
    draw.line([rx + 12, ry + 20, rx + 28, ry + 36], fill=(0, 229, 255), width=4) # Front Leg
    draw.line([rx + 12, ry + 20, rx - 8, ry + 26], fill=(0, 229, 255), width=4) # Back Leg
    draw.line([rx + 14, ry + 4, rx + 30, ry - 2], fill=(244, 63, 94), width=3) # Front Arm
    draw.line([rx + 14, ry + 4, rx - 6, ry + 10], fill=(244, 63, 94), width=3) # Back Arm

    draw_retro_title(draw, "CYBER RUNNER 2099", "PLATFORMER", (244, 63, 94))
    im.save("assets/images/games/cyber_runner.png")

# 4. Dungeon Raycaster 3D
def gen_raycast():
    im = Image.new("RGB", (W, H), (8, 10, 16))
    draw = ImageDraw.Draw(im)
    
    # 3D Wall Perspective (Raycaster Room)
    # Ceiling & Floor
    draw.rectangle([0, 0, W, (H - 70) // 2], fill=(20, 24, 36))
    draw.rectangle([0, (H - 70) // 2, W, H - 70], fill=(32, 28, 24))
    
    # Left & Right 3D Perspective Walls
    left_wall = [(0, 0), (180, 60), (180, H - 130), (0, H - 70)]
    draw.polygon(left_wall, fill=(55, 65, 81), outline=(75, 85, 99), width=2)
    # Brick Lines
    for wy in range(0, H - 70, 25):
        draw.line([0, wy, 180, int(60 + wy * 0.45)], fill=(40, 48, 60), width=1)

    right_wall = [(W, 0), (W - 180, 60), (W - 180, H - 130), (W, H - 70)]
    draw.polygon(right_wall, fill=(55, 65, 81), outline=(75, 85, 99), width=2)

    # Back Wall Doorway
    draw.rectangle([180, 60, W - 180, H - 130], fill=(17, 24, 39), outline=(245, 158, 11), width=2)
    
    # Center Enemy Demon Eyes
    draw.rectangle([W // 2 - 18, 105, W // 2 - 6, 115], fill=(239, 68, 68))
    draw.rectangle([W // 2 + 6, 105, W // 2 + 18, 115], fill=(239, 68, 68))
    
    # Crosshair
    cx, cy = W // 2, (H - 70) // 2
    draw.ellipse([cx - 16, cy - 16, cx + 16, cy + 16], outline=(245, 158, 11), width=2)
    draw.line([cx - 24, cy, cx + 24, cy], fill=(245, 158, 11), width=1)
    draw.line([cx, cy - 24, cx, cy + 24], fill=(245, 158, 11), width=1)

    draw_retro_title(draw, "DUNGEON RAYCASTER 3D", "RETRO 3D", (245, 158, 11))
    im.save("assets/images/games/dungeon_raycast3d.png")

# 5. Gravity Sandbox
def gen_physics():
    im = Image.new("RGB", (W, H), (10, 18, 25))
    draw = ImageDraw.Draw(im)
    
    # Blueprint Grid
    for x in range(0, W, 30):
        draw.line([x, 0, x, H - 70], fill=(18, 30, 42), width=1)
    for y in range(0, H - 70, 30):
        draw.line([0, y, W, y], fill=(18, 30, 42), width=1)

    # Central Planet Gravity Well
    cx, cy = W // 2, 130
    draw.ellipse([cx - 45, cy - 45, cx + 45, cy + 45], fill=(14, 116, 144), outline=(34, 211, 238), width=3)
    draw.ellipse([cx - 95, cy - 95, cx + 95, cy + 95], outline=(34, 211, 238), width=1)
    
    # Orbiting / Bouncing Rigid Bodies
    draw.rectangle([cx - 140, cy - 30, cx - 100, cy + 10], fill=(21, 94, 117), outline=(103, 232, 249), width=2)
    draw.ellipse([cx + 100, cy - 50, cx + 140, cy - 10], fill=(21, 94, 117), outline=(103, 232, 249), width=2)
    
    # Ragdoll Figure
    rx, ry = cx + 80, cy + 40
    draw.ellipse([rx - 8, ry - 8, rx + 8, ry + 8], fill=(34, 211, 238))
    draw.line([rx, ry + 8, rx - 10, ry + 30], fill=(34, 211, 238), width=3)
    draw.line([rx, ry + 8, rx + 15, ry + 25], fill=(34, 211, 238), width=3)

    draw_retro_title(draw, "GRAVITY SANDBOX & LAB", "PHYSICS", (34, 211, 238))
    im.save("assets/images/games/gravity_sandbox.png")

# 6. Neon Tower Defense
def gen_td():
    im = Image.new("RGB", (W, H), (12, 20, 16))
    draw = ImageDraw.Draw(im)
    
    # Defense Path Grid
    path = [(40, 140), (180, 140), (180, 60), (340, 60), (340, 200), (520, 200), (520, 110), (600, 110)]
    for i in range(len(path) - 1):
        draw.line([path[i], path[i + 1]], fill=(22, 101, 52), width=36)
        draw.line([path[i], path[i + 1]], fill=(34, 197, 94), width=2)

    # Turret Nodes
    for tx, ty in [(260, 130), (430, 130)]:
        draw.ellipse([tx - 55, ty - 55, tx + 55, ty + 55], outline=(34, 197, 94), width=1)
        # Turret Base
        draw.polygon([(tx, ty - 18), (tx + 16, ty - 9), (tx + 16, ty + 9), (tx, ty + 18), (tx - 16, ty + 9), (tx - 16, ty - 9)], fill=(20, 83, 45), outline=(74, 222, 128), width=2)
        # Turret Cannon firing
        draw.line([tx, ty, tx + 40, ty - 30], fill=(74, 222, 128), width=4)
        draw.line([tx, ty, tx + 80, ty - 60], fill=(255, 255, 255), width=2)

    # Creeps / Invaders on Path
    for cx, cy in [(100, 140), (180, 100), (340, 120), (440, 200)]:
        draw.ellipse([cx - 10, cy - 10, cx + 10, cy + 10], fill=(239, 68, 68), outline=(254, 202, 202), width=2)

    draw_retro_title(draw, "NEON TOWER DEFENSE", "STRATEGY", (74, 222, 128))
    im.save("assets/images/games/neon_tower_defense.png")

# 7. Chrono Puzzle
def gen_puzzle():
    im = Image.new("RGB", (W, H), (22, 18, 11))
    draw = ImageDraw.Draw(im)
    
    # Isometric Sokoban Grid
    cx, cy = W // 2, 115
    for row in range(-2, 3):
        for col in range(-3, 4):
            gx = cx + (col - row) * 36
            gy = cy + (col + row) * 18
            tile = [(gx, gy), (gx + 36, gy + 18), (gx, gy + 36), (gx - 36, gy + 18)]
            draw.polygon(tile, fill=(35, 28, 18), outline=(60, 48, 30), width=1)

    # Goal Slot (Golden Ring)
    gx, gy = cx + 72, cy + 36
    draw.polygon([(gx, gy), (gx + 36, gy + 18), (gx, gy + 36), (gx - 36, gy + 18)], fill=(113, 63, 18), outline=(251, 191, 36), width=2)

    # Sokoban Push Crate (3D Isometric Cube)
    bx, by = cx, cy
    top = [(bx, by - 24), (bx + 30, by - 9), (bx, by + 6), (bx - 30, by - 9)]
    right = [(bx, by + 6), (bx + 30, by - 9), (bx + 30, by + 26), (bx, by + 41)]
    left = [(bx, by + 6), (bx - 30, by - 9), (bx - 30, by + 26), (bx, by + 41)]
    draw.polygon(top, fill=(161, 98, 7), outline=(251, 191, 36), width=1)
    draw.polygon(right, fill=(113, 63, 18), outline=(251, 191, 36), width=1)
    draw.polygon(left, fill=(133, 77, 14), outline=(251, 191, 36), width=1)

    # Time Rewind Clock Arc
    draw.arc([cx - 80, cy - 60, cx + 80, cy + 60], start=30, end=300, fill=(251, 191, 36), width=3)

    draw_retro_title(draw, "CHRONO PUZZLE: TIME SHIFT", "PUZZLE", (251, 191, 36))
    im.save("assets/images/games/chrono_puzzle.png")

# 8. Rhythm Blaster
def gen_rhythm():
    im = Image.new("RGB", (W, H), (18, 10, 26))
    draw = ImageDraw.Draw(im)
    
    # Perspective 4-Lane Beat Highway
    top_y, bot_y = 30, H - 70
    center_x = W // 2
    lanes = [-120, -40, 40, 120]
    bot_lanes = [-240, -80, 80, 240]
    
    for i in range(4):
        draw.line([center_x + lanes[i], top_y, center_x + bot_lanes[i], bot_y], fill=(60, 30, 80), width=2)
    
    # Hit Line
    hit_y = H - 110
    draw.line([center_x - 220, hit_y, center_x + 220, hit_y], fill=(217, 70, 239), width=3)

    # Beat Notes Falling on Lanes
    colors = [(0, 229, 255), (244, 63, 94), (251, 191, 36), (74, 222, 128)]
    notes = [(0, 60), (1, 120), (2, 180), (3, 100), (1, 230), (2, 230)]
    for lane_idx, ny in notes:
        # Interpolate x for perspective
        t = (ny - top_y) / (bot_y - top_y)
        nx = center_x + lanes[lane_idx] + t * (bot_lanes[lane_idx] - lanes[lane_idx])
        nw = int(24 + t * 24)
        nh = int(10 + t * 6)
        c = colors[lane_idx % 4]
        draw.rounded_rectangle([nx - nw // 2, ny - nh // 2, nx + nw // 2, ny + nh // 2], radius=3, fill=c, outline=(255, 255, 255), width=1)

    draw_retro_title(draw, "RHYTHM BLASTER: SYNTHWAVE", "RHYTHM", (217, 70, 239))
    im.save("assets/images/games/rhythm_blaster.png")

print("Generating 8 human pixel art game covers...")
gen_cosmic()
gen_rpg()
gen_runner()
gen_raycast()
gen_physics()
gen_td()
gen_puzzle()
gen_rhythm()
print("Successfully generated all 8 authentic human indie game covers!")
