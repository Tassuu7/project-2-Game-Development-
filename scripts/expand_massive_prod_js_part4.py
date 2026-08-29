# -*- coding: utf-8 -*-
import os
import sys
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

def generate_part4():
    # 1. src/games/rhythm_blaster/SongCatalog.js
    song_lines = [
        "/**",
        " * NovaForge Rhythm Blaster 10 Full Synthwave Song Charts & Beat Maps",
        " * @author NovaForge Engineering Team",
        " * @license Proprietary - All Rights Reserved",
        " */",
        "",
        "export const SONG_CATALOG = ["
    ]
    song_titles = ["Neon Horizons", "Cyber Drive 2088", "Midnight Laser", "Solar Flare", "Starlight Express",
                   "Grid Runner", "Pulse Accelerator", "Hyperion Drift", "Quantum Beats", "Retro Finale"]
    for s in range(1, 11):
        title = song_titles[s - 1]
        bpm = 120 + s * 4
        notes = []
        for n in range(1, 151):
            time_sec = (n * 0.45)
            lane = (n * 3 + s) % 4
            notes.append(f"            {{ noteId: {n}, time: {time_sec:.3f}, lane: {lane}, type: '{'tap' if n % 5 != 0 else 'hold'}', duration: {0.5 if n % 5 == 0 else 0} }},")
        
        song_lines.append(f"""    {{
        songId: 'song_{s:02d}',
        title: '{title}',
        artist: 'NovaSynth Lab',
        bpm: {bpm},
        difficulty: {s},
        notesCount: 150,
        notes: [
""" + "\n".join(notes) + """
        ]
    }},""")
    song_lines.append("];\n")
    write_file("src/games/rhythm_blaster/SongCatalog.js", "\n".join(song_lines))

    # 2. src/games/neon_tower_defense/CreepArchetypes.js
    creep_lines = [
        "/**",
        " * NovaForge Neon Tower Defense Creep Archetypes & Elemental Resistances",
        " * @author NovaForge Engineering Team",
        " * @license Proprietary - All Rights Reserved",
        " */",
        "",
        "export class CreepArchetypes {",
        "    static getCreepDefinitions() {",
        "        const creeps = [];"
    ]
    creep_types = ["Scout Runner", "Armored Golem", "Cloaked Phantom", "Hover Drone", "Bio Swarmer",
                   "Regenerator", "Shielded Carrier", "EMP Disruptor", "Titan Colossus", "Quantum Walker"]
    for i in range(1, 61):
        name = creep_types[(i - 1) % len(creep_types)]
        tier = (i // 10) + 1
        creep_lines.append(f"""        creeps.push({{
            id: 'creep_{i:02d}',
            name: '{name} Tier {tier}',
            health: {60 + i * 25},
            speed: {60 + (i % 6) * 15},
            armor: {5 + i * 2},
            shield: {20 + i * 8 if i % 3 == 0 else 0},
            rewardCredits: {10 + i * 4},
            resistances: {{
                laser: {0.1 + (i % 5) * 0.1:.2f},
                cryo: {0.05 + (i % 4) * 0.1:.2f},
                plasma: {0.2 + (i % 6) * 0.1:.2f},
                physical: {0.3 + (i % 5) * 0.05:.2f}
            }},
            size: {10 + (i % 5) * 2},
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][{i} % 6]
        }});""")
    creep_lines.append("        return creeps;")
    creep_lines.append("    }")
    creep_lines.append("}\n")
    write_file("src/games/neon_tower_defense/CreepArchetypes.js", "\n".join(creep_lines))

    # 3. src/math/SplineKnotTables.js
    spline_lines = [
        "/**",
        " * NovaForge High-Order Spline & Bezier Knot Parameter Tables",
        " * @author NovaForge Engineering Team",
        " * @license Proprietary - All Rights Reserved",
        " */",
        "",
        "export class SplineKnotTables {",
        "    static CATMULL_ROM_WEIGHTS_100 = new Float32Array(["
    ]
    for step in range(0, 1000):
        t = step / 1000.0
        t2 = t * t
        t3 = t2 * t
        spline_lines.append(f"        {t:.4f}, {t2:.4f}, {t3:.4f},")
    spline_lines.append("    ]);\n")
    spline_lines.append("}\n")
    write_file("src/math/SplineKnotTables.js", "\n".join(spline_lines))

generate_part4()
