# -*- coding: utf-8 -*-
import os
import json
from scripts.code_gen_lib import write_file

def expand_all():
    print("Generating comprehensive game content, tables, and asset datasets...")

    # 1. 3D Geometric Mesh Primitives and Math Library in src/math/Geometry3D.js
    mesh_lines = [
        "/**",
        " * NovaForge Game Engine & Arcade Studio",
        " * 3D Geometry Primitives, Vertex Buffers & Normal Calculations",
        " * @author NovaForge Engineering Team",
        " * @license MIT",
        " */",
        "",
        "export class Geometry3D {",
        "    static createCube(size = 1.0) {",
        "        const s = size * 0.5;",
        "        return {",
        "            vertices: new Float32Array([",
        "                // Front face",
        "                -s, -s,  s,   s, -s,  s,   s,  s,  s,  -s,  s,  s,",
        "                // Back face",
        "                -s, -s, -s,  -s,  s, -s,   s,  s, -s,   s, -s, -s,",
        "                // Top face",
        "                -s,  s, -s,  -s,  s,  s,   s,  s,  s,   s,  s, -s,",
        "                // Bottom face",
        "                -s, -s, -s,   s, -s, -s,   s, -s,  s,  -s, -s,  s,",
        "                // Right face",
        "                 s, -s, -s,   s,  s, -s,   s,  s,  s,   s, -s,  s,",
        "                // Left face",
        "                -s, -s, -s,  -s, -s,  s,  -s,  s,  s,  -s,  s, -s",
        "            ]),",
        "            indices: new Uint16Array([",
        "                0, 1, 2,    0, 2, 3,",
        "                4, 5, 6,    4, 6, 7,",
        "                8, 9, 10,   8, 10, 11,",
        "                12, 13, 14, 12, 14, 15,",
        "                16, 17, 18, 16, 18, 19,",
        "                20, 21, 22, 20, 22, 23",
        "            ])",
        "        };",
        "    }",
        "",
        "    static createSphere(radius = 1.0, segments = 32, rings = 16) {",
        "        const vertices = [];",
        "        const indices = [];",
        "        const uvs = [];",
        "        const normals = [];",
        "",
        "        for (let r = 0; r <= rings; r++) {",
        "            const theta = (r * Math.PI) / rings;",
        "            const sinTheta = Math.sin(theta);",
        "            const cosTheta = Math.cos(theta);",
        "",
        "            for (let s = 0; s <= segments; s++) {",
        "                const phi = (s * 2 * Math.PI) / segments;",
        "                const sinPhi = Math.sin(phi);",
        "                const cosPhi = Math.cos(phi);",
        "",
        "                const x = cosPhi * sinTheta;",
        "                const y = cosTheta;",
        "                const z = sinPhi * sinTheta;",
        "                const u = 1 - (s / segments);",
        "                const v = 1 - (r / rings);",
        "",
        "                normals.push(x, y, z);",
        "                uvs.push(u, v);",
        "                vertices.push(radius * x, radius * y, radius * z);",
        "            }",
        "        }",
        "",
        "        for (let r = 0; r < rings; r++) {",
        "            for (let s = 0; s < segments; s++) {",
        "                const first = (r * (segments + 1)) + s;",
        "                const second = first + segments + 1;",
        "                indices.push(first, second, first + 1);",
        "                indices.push(second, second + 1, first + 1);",
        "            }",
        "        }",
        "",
        "        return {",
        "            vertices: new Float32Array(vertices),",
        "            normals: new Float32Array(normals),",
        "            uvs: new Float32Array(uvs),",
        "            indices: new Uint16Array(indices)",
        "        };",
        "    }",
        "}"
    ]
    write_file("src/math/Geometry3D.js", "\n".join(mesh_lines) + "\n")

    # 2. Comprehensive Bestiary and Enemy Definitions in assets/data/enemy_bestiary.json
    bestiary = []
    enemy_classes = ["Scout Drone", "Void Interceptor", "Cyber Assassin", "Plasma Brute", "Shadow Necromancer",
                     "Iron Golem", "Inferno Demon", "Tesla Turret", "Bio Swarm", "Quantum Wraith",
                     "Dreadnought Titan", "Arcane Elemental", "Glitch Specter", "Laser Stalker", "Chrono Guardian"]
    
    for i in range(1, 301):
        e_type = enemy_classes[(i - 1) % len(enemy_classes)]
        tier = (i // 20) + 1
        bestiary.append({
            "id": f"mob_{i:04d}",
            "name": f"{e_type} Mk-{i}",
            "tier": tier,
            "category": "mechanical" if "Drone" in e_type or "Turret" in e_type or "Titan" in e_type else "organic",
            "stats": {
                "health": 50 + i * 18,
                "shield": 20 + i * 8,
                "attack": 12 + i * 4,
                "defense": 5 + i * 2,
                "speed": 60 + (i % 8) * 10,
                "attackRange": 40 + (i % 6) * 30,
                "attackCooldown": 0.8 + (i % 5) * 0.2,
                "expReward": 25 + i * 15,
                "creditReward": 10 + i * 8
            },
            "behavior": {
                "fsmState": "PATROL",
                "aggroRadius": 220 + (i % 5) * 20,
                "leashDistance": 600,
                "fleeThreshold": 0.15,
                "attackPatterns": [
                    f"pattern_direct_shot_{i%4}",
                    f"pattern_spiral_barrage_{i%3}",
                    f"pattern_dash_strike_{i%2}"
                ]
            },
            "lootTable": [
                { "itemId": f"item_{(i%50)+1:03d}", "dropChance": 0.35 },
                { "itemId": f"mat_{(i%20)+1:02d}", "dropChance": 0.70 }
            ]
        })
    write_file("assets/data/enemy_bestiary.json", json.dumps({"bestiary": bestiary}, indent=2) + "\n")

    # 3. Comprehensive Item and Loot Database in assets/data/expanded_items.json
    expanded_items = []
    item_prefixes = ["Quantum", "Plasma", "Cyber", "Void", "Titanium", "Hyperion", "Nebula", "Chrono", "Infernal", "Celestial"]
    item_bases = ["Blade", "Rifle", "Blaster", "Shield", "Armor", "Helm", "Boots", "Ring", "Amulet", "Core", "Module", "Battery"]

    for i in range(1, 401):
        pref = item_prefixes[(i - 1) % len(item_prefixes)]
        base = item_bases[(i - 1) % len(item_bases)]
        rarity = "Legendary" if i % 20 == 0 else "Epic" if i % 8 == 0 else "Rare" if i % 4 == 0 else "Common"
        expanded_items.append({
            "id": f"item_{i:04d}",
            "name": f"{pref} {base} +{i%10}",
            "rarity": rarity,
            "levelReq": (i // 4) + 1,
            "type": "weapon" if "Blade" in base or "Rifle" in base or "Blaster" in base else "armor" if "Armor" in base or "Shield" in base or "Helm" in base else "accessory",
            "attributes": {
                "damage": 15 + i * 5 if "Blade" in base or "Rifle" in base or "Blaster" in base else 0,
                "armor": 10 + i * 3 if "Armor" in base or "Shield" in base or "Helm" in base else 0,
                "health": 20 + i * 6,
                "criticalChance": 0.05 + (i % 10) * 0.02,
                "cooldownReduction": 0.02 + (i % 5) * 0.01
            },
            "value": 50 + i * 25,
            "description": f"A refined {rarity.lower()} {base.lower()} forged with {pref.lower()} resonance."
        })
    write_file("assets/data/expanded_items.json", json.dumps({"items": expanded_items}, indent=2) + "\n")

    # 4. Large-Scale Procedural Dungeon Map Presets in assets/data/dungeon_maps.json
    dungeon_maps = []
    for d in range(1, 21):
        rooms = []
        for r in range(1, 13):
            rooms.append({
                "roomId": f"d{d}_r{r}",
                "x": (r % 4) * 200,
                "y": (r // 4) * 200,
                "width": 160,
                "height": 160,
                "type": "boss" if r == 12 else "treasure" if r % 5 == 0 else "combat",
                "doors": [
                    { "targetRoom": f"d{d}_r{r+1}" if r < 12 else None, "side": "east" if r % 4 != 3 else "south" }
                ],
                "spawners": [
                    { "enemyId": f"mob_{(d*10 + r)%300 + 1:04d}", "count": 3 + (d % 3) }
                ]
            })
        dungeon_maps.append({
            "dungeonId": f"dungeon_sector_{d:02d}",
            "name": f"Subterranean Complex {d} - Sector {chr(65 + (d%6))}",
            "floorLevel": d,
            "difficulty": 1.0 + (d * 0.25),
            "rooms": rooms
        })
    write_file("assets/data/dungeon_maps.json", json.dumps({"dungeons": dungeon_maps}, indent=2) + "\n")

    # 5. Dialogue script library in assets/data/expanded_dialogues.json
    dialogues_large = {}
    for i in range(1, 51):
        dialogues_large[f"quest_npc_{i:03d}"] = {
            "root": {
                "speaker": f"Officer {chr(65 + (i%26))}-{i}",
                "text": f"Greetings Pilot! The telemetry from Sector {i} indicates hostile incursions.",
                "choices": [
                    { "text": "I will neutralize the threat immediately.", "next": "accepted" },
                    { "text": "What kind of resistance should I expect?", "next": "intel" },
                    { "text": "I must decline this assignment for now.", "next": "declined" }
                ]
            },
            "intel": {
                "speaker": f"Officer {chr(65 + (i%26))}-{i}",
                "text": f"Scanners indicate Tier {((i-1)//5)+1} combat mechs with high shielding. Bring plasma weapons.",
                "choices": [
                    { "text": "Understood. Accepting deployment.", "next": "accepted" }
                ]
            },
            "accepted": {
                "speaker": f"Officer {chr(65 + (i%26))}-{i}",
                "text": "Mission parameters locked into your HUD. Good hunting!",
                "action": f"START_QUEST_SECTOR_{i}"
            },
            "declined": {
                "speaker": f"Officer {chr(65 + (i%26))}-{i}",
                "text": "Understood. Return when you are equipped for battle.",
                "action": "CLOSE"
            }
        }
    write_file("assets/data/expanded_dialogues.json", json.dumps(dialogues_large, indent=2) + "\n")

    # 6. Detailed Sound Waveform Synthesis Presets in assets/data/sound_presets.json
    synth_patches = []
    instruments = ["Synth Lead", "Pluck Bass", "Cyber Pad", "808 Kick", "Snare Noise", "Hi-Hat Metal", "Retro Arp", "Brass Stab", "Bell Chime", "Laser Sweep"]
    for i in range(1, 101):
        inst = instruments[(i - 1) % len(instruments)]
        synth_patches.append({
            "patchId": f"patch_{i:03d}",
            "name": f"{inst} {i}",
            "oscillator1": {
                "wave": ["sine", "square", "sawtooth", "triangle"][i % 4],
                "detune": (i % 7) * 2 - 6,
                "gain": 0.8
            },
            "oscillator2": {
                "wave": ["sawtooth", "triangle", "square", "sine"][(i + 1) % 4],
                "detune": (i % 5) * 4 - 8,
                "gain": 0.5
            },
            "envelope": {
                "attack": 0.005 + (i % 10) * 0.02,
                "decay": 0.05 + (i % 8) * 0.05,
                "sustain": 0.2 + (i % 6) * 0.1,
                "release": 0.1 + (i % 10) * 0.08
            },
            "filter": {
                "type": "lowpass" if i % 2 == 0 else "bandpass",
                "cutoff": 400 + i * 80,
                "resonance": 1.0 + (i % 8) * 0.5
            }
        })
    write_file("assets/data/sound_presets.json", json.dumps({"patches": synth_patches}, indent=2) + "\n")

    # 7. Comprehensive Particle Emitter Presets in assets/data/particle_presets.json
    particle_effects = []
    fx_names = ["Fire Explosion", "Plasma Nova", "Sparks Fountain", "Smoke Trail", "Magic Arcane Burst",
                "Cyber Warp", "Blood Splatter", "Gold Coin Fountain", "Snow Blizzard", "Toxic Gas Cloud"]
    for i in range(1, 101):
        fx = fx_names[(i - 1) % len(fx_names)]
        particle_effects.append({
            "presetId": f"fx_{i:03d}",
            "name": f"{fx} Variant {i}",
            "rate": 30 + (i % 10) * 15,
            "maxParticles": 100 + (i % 8) * 50,
            "lifetime": 0.4 + (i % 6) * 0.2,
            "speed": { "min": 50 + (i % 5) * 20, "max": 180 + (i % 10) * 30 },
            "spread": (Math_PI if 'Math_PI' in locals() else 3.14159) * (0.2 + (i % 5) * 0.4),
            "startColor": ["#ff0055", "#00e5ff", "#ffe600", "#39ff14", "#ff8800", "#ffffff"][i % 6],
            "endColor": ["#330011", "#002244", "#443300", "#003300", "#331100", "#222222"][i % 6],
            "startSize": 3 + (i % 5) * 2,
            "endSize": 0,
            "gravity": { "x": 0, "y": -50 + (i % 8) * 40 },
            "drag": 0.96
        })
    write_file("assets/data/particle_presets.json", json.dumps({"presets": particle_effects}, indent=2) + "\n")

expand_all()
