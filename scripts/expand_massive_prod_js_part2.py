# -*- coding: utf-8 -*-
import os
import sys
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

def generate_part2():
    # 1. src/games/shadow_quest/ItemCatalog.js
    item_lines = [
        "/**",
        " * NovaForge Shadow Quest Comprehensive Item Catalog & Stat Formulas",
        " * @author NovaForge Engineering Team",
        " * @license Proprietary - All Rights Reserved",
        " */",
        "",
        "export class ItemCatalog {",
        "    static getItems() {",
        "        const catalog = [];"
    ]
    rarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary", "Mythic", "Artifact", "Cosmic"]
    bases = ["Blade", "Staff", "Bow", "Dagger", "Hammer", "Shield", "Armor", "Helm", "Boots", "Ring"]
    for i in range(1, 151):
        r = rarities[(i - 1) % len(rarities)]
        b = bases[(i - 1) % len(bases)]
        item_lines.append(f"""        catalog.push({{
            id: 'item_sq_{i:03d}',
            name: '{r} {b} of the Phoenix +{i%15}',
            type: '{("weapon" if b in ["Blade", "Staff", "Bow", "Dagger", "Hammer"] else "armor" if b in ["Shield", "Armor", "Helm", "Boots"] else "accessory")}',
            rarity: '{r}',
            levelReq: {((i - 1) // 3) + 1},
            stats: {{
                damage: {10 + i * 4 if b in ["Blade", "Staff", "Bow", "Dagger", "Hammer"] else 0},
                defense: {5 + i * 3 if b in ["Shield", "Armor", "Helm", "Boots"] else 0},
                health: {20 + i * 8},
                mana: {10 + i * 4},
                critChance: {0.05 + (i % 10) * 0.02:.2f},
                speedBonus: {5 + (i % 8) * 2}
            }},
            sellValue: {50 + i * 30},
            description: 'Forged in the heart of Eldoria with {r.lower()} crystalline resonance.'
        }});""")
    item_lines.append("        return catalog;")
    item_lines.append("    }")
    item_lines.append("}\n")
    write_file("src/games/shadow_quest/ItemCatalog.js", "\n".join(item_lines))

    # 2. src/games/cyber_runner/PlatformerLevels.js
    plat_lines = [
        "/**",
        " * NovaForge Cyber Runner 2099 Level Layouts & Speedrun Records",
        " * @author NovaForge Engineering Team",
        " * @license Proprietary - All Rights Reserved",
        " */",
        "",
        "export const PLATFORMER_LEVELS = ["
    ]
    for i in range(1, 41):
        plat_lines.append(f"""    {{
        levelId: 'cyber_level_{i:02d}',
        title: 'Neo-Tokyo Sector {i:02d}',
        timeLimit: {60 + i * 5},
        goldMedalTime: {25 + i * 2},
        platforms: [
            {{ x: 0, y: 650, w: 1280, h: 70, type: 'solid' }},
            {{ x: {150 + (i % 5) * 40}, y: 520, w: 180, h: 20, type: 'moving', speed: {40 + (i % 4) * 20} }},
            {{ x: {450 + (i % 4) * 50}, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 }},
            {{ x: {800 + (i % 3) * 60}, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 }},
            {{ x: 1100, y: 180, w: 140, h: 20, type: 'goal' }}
        ],
        hazards: [
            {{ x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 }},
            {{ x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }}
        ],
        energyCores: [
            {{ x: 200, y: 480, points: 500 }},
            {{ x: 550, y: 350, points: 500 }},
            {{ x: 900, y: 230, points: 500 }}
        ]
    }},""")
    plat_lines.append("];\n")
    write_file("src/games/cyber_runner/PlatformerLevels.js", "\n".join(plat_lines))

    # 3. src/games/dungeon_raycast3d/DungeonLevels3D.js
    ray_lines = [
        "/**",
        " * NovaForge Dungeon Raycaster 3D Map Architecture & Secret Vaults",
        " * @author NovaForge Engineering Team",
        " * @license Proprietary - All Rights Reserved",
        " */",
        "",
        "export const RAYCAST_DUNGEON_LEVELS = ["
    ]
    for i in range(1, 31):
        ray_lines.append(f"""    {{
        dungeonId: 'dungeon_3d_{i:02d}',
        name: 'Catacomb Chamber {i:02d}',
        width: 12,
        height: 12,
        playerSpawn: {{ x: 2.5, y: 2.5, angle: 0 }},
        mapData: new Uint8Array([
            1,1,1,1,1,1,1,1,1,1,1,1,
            1,0,0,0,0,0,{(i%3)+1},0,0,0,0,1,
            1,0,1,1,0,0,0,0,1,1,0,1,
            1,0,1,0,0,2,2,0,0,1,0,1,
            1,0,0,0,3,0,0,3,0,0,0,1,
            1,0,0,0,3,0,0,3,0,0,0,1,
            1,0,2,0,0,0,0,0,0,2,0,1,
            1,0,2,0,1,0,0,1,0,2,0,1,
            1,0,0,0,1,0,0,1,0,0,0,1,
            1,0,1,0,0,0,0,0,0,1,0,1,
            1,0,0,0,0,0,0,0,0,0,0,1,
            1,1,1,1,1,1,1,1,1,1,1,1
        ]),
        monsters: [
            {{ id: 'm1', x: 5.5, y: 4.5, type: 'imp', health: {30 + i * 5} }},
            {{ id: 'm2', x: 8.5, y: 7.5, type: 'knight', health: {60 + i * 10} }}
        ],
        keys: [
            {{ x: 4.5, y: 8.5, id: 'silver_key_{i}' }}
        ]
    }},""")
    ray_lines.append("];\n")
    write_file("src/games/dungeon_raycast3d/DungeonLevels3D.js", "\n".join(ray_lines))

    # 4. src/games/cosmic_vanguard/CosmicCampaign.js
    camp_lines = [
        "/**",
        " * NovaForge Cosmic Vanguard 30-Sector Story Campaign & Boss Encounters",
        " * @author NovaForge Engineering Team",
        " * @license Proprietary - All Rights Reserved",
        " */",
        "",
        "export const COSMIC_CAMPAIGN = ["
    ]
    for i in range(1, 31):
        camp_lines.append(f"""    {{
        sectorId: 'sector_{i:02d}',
        sectorName: 'Hyperion Sector {chr(65 + (i%26))}-{i}',
        difficulty: {1.0 + i * 0.15:.2f},
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector {i}. High electromagnetic interference detected.',
        wavesCount: {3 + (i % 4)},
        bossEncounter: {{
            bossName: 'Goliath Dreadnought Mk-{i}',
            health: {500 + i * 150},
            phases: [
                {{ triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: {180 + i * 5} }},
                {{ triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: {240 + i * 5} }},
                {{ triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: {300 + i * 5} }}
            ]
        }},
        rewards: {{
            credits: {200 + i * 80},
            exp: {150 + i * 50},
            unlockWeaponId: 'weapon_w{i%60 + 1}'
        }}
    }},""")
    camp_lines.append("];\n")
    write_file("src/games/cosmic_vanguard/CosmicCampaign.js", "\n".join(camp_lines))

generate_part2()
