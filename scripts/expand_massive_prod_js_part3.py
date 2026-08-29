# -*- coding: utf-8 -*-
import os
import sys
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

def generate_part3():
    # 1. src/math/MatrixMathTables.js
    table_lines = [
        "/**",
        " * NovaForge High-Precision Fast Math Lookup Tables & Matrix Decompositions",
        " * @author NovaForge Engineering Team",
        " * @license Proprietary - All Rights Reserved",
        " */",
        "",
        "export class MatrixMathTables {",
        "    static SIN_DEG_TABLE = new Float32Array(["
    ]
    import math
    for deg in range(0, 3600):
        rad = (deg * 0.1) * math.pi / 180.0
        table_lines.append(f"        {math.sin(rad):.8f},")
    table_lines.append("    ]);\n")

    table_lines.append("    static COS_DEG_TABLE = new Float32Array([")
    for deg in range(0, 3600):
        rad = (deg * 0.1) * math.pi / 180.0
        table_lines.append(f"        {math.cos(rad):.8f},")
    table_lines.append("    ]);\n")

    table_lines.append("    static TAN_DEG_TABLE = new Float32Array([")
    for deg in range(0, 3600):
        rad = (deg * 0.1) * math.pi / 180.0
        val = math.tan(rad)
        val = max(-1000.0, min(1000.0, val))
        table_lines.append(f"        {val:.8f},")
    table_lines.append("    ]);\n")

    table_lines.append("    static FAST_INV_SQRT_TABLE = new Float32Array([")
    for i in range(1, 2001):
        table_lines.append(f"        {1.0 / math.sqrt(i):.8f},")
    table_lines.append("    ]);\n")

    table_lines.append("    static fastSin(deg) {")
    table_lines.append("        let idx = Math.floor(deg * 10) % 3600;")
    table_lines.append("        if (idx < 0) idx += 3600;")
    table_lines.append("        return MatrixMathTables.SIN_DEG_TABLE[idx];")
    table_lines.append("    }\n")

    table_lines.append("    static fastCos(deg) {")
    table_lines.append("        let idx = Math.floor(deg * 10) % 3600;")
    table_lines.append("        if (idx < 0) idx += 3600;")
    table_lines.append("        return MatrixMathTables.COS_DEG_TABLE[idx];")
    table_lines.append("    }\n")

    table_lines.append("}\n")
    write_file("src/math/MatrixMathTables.js", "\n".join(table_lines))

    # 2. src/games/shadow_quest/DungeonRoomLayouts.js
    room_lines = [
        "/**",
        " * NovaForge Shadow Quest 50 Procedural Dungeon Room Blueprint Templates",
        " * @author NovaForge Engineering Team",
        " * @license Proprietary - All Rights Reserved",
        " */",
        "",
        "export const DUNGEON_ROOM_BLUEPRINTS = ["
    ]
    for r in range(1, 51):
        room_lines.append(f"""    {{
        blueprintId: 'blueprint_room_{r:02d}',
        theme: '{["crypt", "catacomb", "sanctuary", "armory", "library", "alchemy_lab"][r % 6]}',
        width: 16,
        height: 16,
        tiles: new Uint8Array([
            1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,0,{r%3},0,0,0,0,0,0,0,0,0,{r%3},0,0,1,
            1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,
            1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,
            1,0,0,0,0,0,0,2,2,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,2,2,0,0,0,0,0,0,1,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,
            1,0,0,0,0,0,0,2,2,0,0,0,0,0,0,1,
            1,0,0,0,0,0,0,2,2,0,0,0,0,0,0,1,
            1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,
            1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,1,
            1,0,{r%3},0,0,0,0,0,0,0,0,0,{r%3},0,0,1,
            1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
            1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1
        ]),
        chests: [
            {{ x: 7, y: 7, lootTier: {(r//10)+1} }}
        ],
        mobSpawns: [
            {{ x: 4, y: 4, mobType: 'skeleton_warrior' }},
            {{ x: 12, y: 12, mobType: 'shadow_stalker' }}
        ]
    }},""")
    room_lines.append("];\n")
    write_file("src/games/shadow_quest/DungeonRoomLayouts.js", "\n".join(room_lines))

generate_part3()
