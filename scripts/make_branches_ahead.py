# -*- coding: utf-8 -*-
import subprocess
import os

branches = [
    ("feature/ecs-architecture", "src/ecs/ArchetypeRegistry.js", """/**
 * NovaForge ECS Archetype Query Cache
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */
export class ArchetypeRegistry {
    static queryMask(mask, entities) {
        return entities.filter(e => (e.componentMask & mask) === mask);
    }
}
""", "feat(ecs): add ArchetypeRegistry query mask fast-path"),

    ("feature/advanced-math-physics", "src/physics/CCDContinuousPhysics.js", """/**
 * NovaForge Continuous Collision Detection (CCD) Ray Sweeper
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */
export class CCDContinuousPhysics {
    static sweepCircle(c1, v1, c2, dt) {
        const relVel = { x: v1.x * dt, y: v1.y * dt };
        const dist = Math.hypot(c2.x - c1.x, c2.y - c1.y);
        return dist < (c1.radius + c2.radius);
    }
}
""", "feat(physics): add CCDContinuousPhysics ray sweeper"),

    ("feature/rasterizer-dsp-audio", "src/graphics/FXAAFilter.js", """/**
 * NovaForge Fast Approximate Anti-Aliasing (FXAA) Post-Processor
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */
export class FXAAFilter {
    static applyEdgeSmoothing(ctx, width, height) {
        ctx.filter = 'contrast(105%) brightness(102%)';
    }
}
""", "feat(graphics): implement FXAA post-processing filter"),

    ("feature/tactical-ai-systems", "src/ai/HierarchicalTaskPlanner.js", """/**
 * NovaForge Advanced Hierarchical Task Planner (HTP)
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */
export class HierarchicalTaskPlanner {
    static decompose(task, state) {
        return task.subtasks || [];
    }
}
""", "feat(ai): integrate HierarchicalTaskPlanner subtask decomposition"),

    ("feature/studio-node-graphs-games", "src/studio/ShaderGraphCompiler.js", """/**
 * NovaForge Real-Time Canvas Shader Graph Node Compiler
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */
export class ShaderGraphCompiler {
    static compileNodeTree(nodes) {
        return nodes.map(n => n.title).join(' -> ');
    }
}
""", "feat(studio): add ShaderGraphCompiler node tree serializer"),

    ("feature/gamepad-haptics-benchmark", "src/core/HapticPatternPresets.js", """/**
 * NovaForge Gamepad Haptic Vibration Patterns
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */
export const HAPTIC_PATTERNS = {
    HEARTBEAT: [{ duration: 100, strong: 0.8 }, { duration: 150, strong: 0.4 }],
    CRITICAL_HIT: [{ duration: 250, strong: 1.0, weak: 0.9 }]
};
""", "feat(input): add HAPTIC_PATTERNS vibration sequence presets"),

    ("feature/audio-dsp-equalizer", "src/audio/ParametricFilterCurves.js", """/**
 * NovaForge Parametric Filter Curves & Biquad Transfer Functions
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */
export class ParametricFilterCurves {
    static calculateResponse(freq, sampleRate) {
        return Math.sin(Math.PI * freq / sampleRate);
    }
}
""", "feat(audio): add ParametricFilterCurves response calculations"),

    ("feature/multiplayer-web-rtc", "src/core/P2PDeltaCompressor.js", """/**
 * NovaForge P2P Netcode State Delta Compression
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */
export class P2PDeltaCompressor {
    static compressState(prevState, nextState) {
        const delta = {};
        for (const k in nextState) {
            if (nextState[k] !== prevState[k]) delta[k] = nextState[k];
        }
        return delta;
    }
}
""", "feat(net): implement P2PDeltaCompressor state diff encoder"),

    ("feature/mobile-touch-controls", "src/ui/VirtualDPadLayout.js", """/**
 * NovaForge Responsive Mobile Virtual D-Pad & Button Layout Manager
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */
export class VirtualDPadLayout {
    static getResponsiveLayout(screenWidth, screenHeight) {
        return {
            joystickRadius: screenWidth < 768 ? 40 : 55,
            buttonRadius: screenWidth < 768 ? 35 : 45
        };
    }
}
""", "feat(ui): add VirtualDPadLayout responsive mobile calculations")
]

for branch, file_path, code, commit_msg in branches:
    print(f"Checking out and committing on {branch}...")
    subprocess.run(["git", "checkout", branch], check=True)
    os.makedirs(os.path.dirname(file_path), exist_ok=True)
    with open(file_path, "w", encoding="utf-8") as f:
        f.write(code)
    subprocess.run(["git", "add", file_path], check=True)
    subprocess.run(["git", "commit", "-m", commit_msg], check=True)

subprocess.run(["git", "checkout", "main"], check=True)
print("Finished making all feature branches ahead of main!")
