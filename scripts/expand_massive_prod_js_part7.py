# -*- coding: utf-8 -*-
import os
import sys
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

def generate_part7():
    # 1. src/games/cosmic_vanguard/CosmicBossEncounters.js
    boss_lines = [
        "/**",
        " * NovaForge Cosmic Vanguard 50 Epic Multi-Phase Boss Battle Engines",
        " * @author NovaForge Engineering Team",
        " * @license Proprietary - All Rights Reserved",
        " */",
        "",
        "import { Vector2 } from '../../math/Vector2.js';",
        "",
        "export class CosmicBossEncounters {"
    ]
    boss_names = ["Leviathan Dreadnought", "Solaris Titan", "Quantum Eclipse", "Cyber Overlord", "Nebula Harvester"]
    for i in range(1, 51):
        name = boss_names[(i - 1) % len(boss_names)]
        boss_lines.append(f"""    static createBossBattle_{i:02d}(stageLevel = {i}) {{
        return {{
            bossId: 'boss_encounter_{i:02d}',
            title: '{name} Mk-{i}',
            maxHealth: {2000 + i * 500},
            currentHealth: {2000 + i * 500},
            phases: [
                {{
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: {16 + (i % 8) * 2},
                    speed: {200 + (i % 6) * 15},
                    fireCooldown: {0.6 - (i % 5) * 0.05:.2f}
                }},
                {{
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: {24 + (i % 10) * 2},
                    speed: {260 + (i % 6) * 20},
                    fireCooldown: {0.45 - (i % 4) * 0.05:.2f}
                }},
                {{
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: {36 + (i % 12) * 2},
                    speed: {340 + (i % 8) * 20},
                    fireCooldown: 0.25
                }}
            ],
            lootDrop: {{
                credits: {500 + i * 200},
                experience: {400 + i * 150},
                rareItemTier: {((i - 1) // 10) + 1}
            }}
        }};
    }}""")
    boss_lines.append("}\n")
    write_file("src/games/cosmic_vanguard/CosmicBossEncounters.js", "\n".join(boss_lines))

generate_part7()
