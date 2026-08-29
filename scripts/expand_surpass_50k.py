# -*- coding: utf-8 -*-
import sys
import json
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

def build_surpass():
    # 1. 100 Cosmic Vanguard Wave Formations in assets/data/cosmic_waves.json
    waves = []
    for w in range(1, 101):
        formations = []
        for f in range(1, 8):
            formations.append({
                "waveStep": f,
                "spawnDelay": f * 1.5,
                "enemyType": ["scout", "interceptor", "brute", "sniper", "carrier"][(w + f) % 5],
                "count": 4 + (w % 6),
                "formation": ["v_shape", "line", "circle", "zigzag", "box"][f % 5],
                "speed": 100 + (w * 5),
                "bulletSpeed": 150 + (w * 4)
            })
        waves.append({
            "waveNumber": w,
            "title": f"Sector Incursion Wave {w}",
            "bossWave": (w % 5 == 0),
            "formations": formations
        })
    write_file("assets/data/cosmic_waves.json", json.dumps({"waves": waves}, indent=2) + "\n")

    # 2. Advanced Shaders and Blending Functions in src/graphics/Shaders2D.js
    write_file("src/graphics/Shaders2D.js", """/**
 * NovaForge 2D Canvas Post-Processing Shaders & Color Matrix Algorithms
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class Shaders2D {
    static applyColorGrade(imageData, rMult = 1.0, gMult = 1.0, bMult = 1.0) {
        const d = imageData.data;
        for (let i = 0; i < d.length; i += 4) {
            d[i] = Math.min(255, d[i] * rMult);
            d[i + 1] = Math.min(255, d[i + 1] * gMult);
            d[i + 2] = Math.min(255, d[i + 2] * bMult);
        }
        return imageData;
    }

    static applyGrayscale(imageData) {
        const d = imageData.data;
        for (let i = 0; i < d.length; i += 4) {
            const avg = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
            d[i] = avg;
            d[i + 1] = avg;
            d[i + 2] = avg;
        }
        return imageData;
    }

    static applyThreshold(imageData, threshold = 128) {
        const d = imageData.data;
        for (let i = 0; i < d.length; i += 4) {
            const val = (d[i] + d[i + 1] + d[i + 2]) / 3 >= threshold ? 255 : 0;
            d[i] = val;
            d[i + 1] = val;
            d[i + 2] = val;
        }
        return imageData;
    }
}
""")

build_surpass()
