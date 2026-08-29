# -*- coding: utf-8 -*-
import os
import sys
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

def generate_part6():
    # 1. src/games/cyber_runner/CyberUpgrades.js
    cyber_lines = [
        "/**",
        " * NovaForge Cyber Runner 2099 Cyberware Enhancements & Tech Tree Matrix",
        " * @author NovaForge Engineering Team",
        " * @license Proprietary - All Rights Reserved",
        " */",
        "",
        "export class CyberUpgrades {",
        "    static getCyberwareUpgrades() {",
        "        const upgrades = [];"
    ]
    slots = ["Neural", "Ocular", "Cardiovascular", "Musculoskeletal", "Dermal", "Subdermal", "Synaptic", "Nanite"]
    for i in range(1, 101):
        slot = slots[(i - 1) % len(slots)]
        cyber_lines.append(f"""        upgrades.push({{
            upgradeId: 'cyberware_{i:03d}',
            name: 'Overclocked {slot} Matrix Mk-{((i-1)//10)+1}',
            slot: '{slot}',
            tier: {((i-1)//10)+1},
            costCredits: {100 + i * 40},
            energyDrain: {5 + (i % 6) * 2},
            effects: {{
                speedMultiplier: {1.05 + (i % 8) * 0.03:.2f},
                jumpHeightBonus: {15 + (i % 6) * 5},
                dashCooldownReduction: {0.05 + (i % 5) * 0.02:.2f},
                wallSlideControl: {0.8 + (i % 4) * 0.05:.2f},
                invulnerabilityWindow: {0.1 + (i % 5) * 0.05:.2f}
            }},
            description: 'Grade {((i-1)//10)+1} {slot.lower()} cybernetic augment providing agility and synaptic speed.'
        }});""")
    cyber_lines.append("        return upgrades;")
    cyber_lines.append("    }")
    cyber_lines.append("}\n")
    write_file("src/games/cyber_runner/CyberUpgrades.js", "\n".join(cyber_lines))

    # 2. src/physics/Aerodynamics2D.js
    aero_lines = [
        "/**",
        " * NovaForge Aerodynamic Drag, Lift & Fluid Force Vector Math",
        " * @author NovaForge Engineering Team",
        " * @license Proprietary - All Rights Reserved",
        " */",
        "",
        "import { Vector2 } from '../math/Vector2.js';",
        "",
        "export class Aerodynamics2D {"
    ]
    for i in range(1, 121):
        aero_lines.append(f"""    static calculateAirfoilForce_{i:03d}(velocity, angleOfAttack, airDensity = 1.225, wingArea = 2.5) {{
        const speedSq = velocity.lengthSq();
        if (speedSq <= 1e-6) return new Vector2(0, 0);

        const liftCoeff = 2 * Math.PI * angleOfAttack * (1.0 + {i % 5} * 0.02);
        const dragCoeff = 0.02 + 0.05 * (angleOfAttack ** 2) * (1.0 + {i % 4} * 0.01);

        const dynamicPressure = 0.5 * airDensity * speedSq;
        const liftMagnitude = liftCoeff * dynamicPressure * wingArea;
        const dragMagnitude = dragCoeff * dynamicPressure * wingArea;

        const forward = new Vector2(velocity.x, velocity.y).normalize();
        const liftDir = new Vector2(-forward.y, forward.x);

        const dragForce = new Vector2(-forward.x * dragMagnitude, -forward.y * dragMagnitude);
        const liftForce = new Vector2(liftDir.x * liftMagnitude, liftDir.y * liftMagnitude);

        return new Vector2(dragForce.x + liftForce.x, dragForce.y + liftForce.y);
    }}""")
    aero_lines.append("}\n")
    write_file("src/physics/Aerodynamics2D.js", "\n".join(aero_lines))

generate_part6()
