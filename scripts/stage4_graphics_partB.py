# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file

def build_partB():
    # 5. src/graphics/LightingSystem2D.js
    write_file("src/graphics/LightingSystem2D.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Dynamic 2D Lighting Engine with Radial Falloff & Occlusion Shadows
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class LightingSystem2D {
    constructor(width = 1280, height = 720) {
        this.width = width;
        this.height = height;
        this.lights = [];
        this.ambientColor = 'rgba(10, 10, 25, 0.85)';
        this.lightCanvas = document.createElement('canvas');
        this.lightCanvas.width = width;
        this.lightCanvas.height = height;
        this.lightCtx = this.lightCanvas.getContext('2d');
    }

    addPointLight(x, y, radius = 180, color = '#ffffff', intensity = 1.0) {
        const light = { x, y, radius, color, intensity, active: true };
        this.lights.push(light);
        return light;
    }

    render(ctx, camera) {
        const lCtx = this.lightCtx;
        lCtx.clearRect(0, 0, this.width, this.height);

        // Fill ambient darkness
        lCtx.fillStyle = this.ambientColor;
        lCtx.fillRect(0, 0, this.width, this.height);

        // Add light cutouts
        lCtx.globalCompositeOperation = 'destination-out';

        for (const light of this.lights) {
            if (!light.active) continue;

            const screenPos = camera.worldToScreen(light.x, light.y);
            const r = light.radius * camera.zoom;

            const grad = lCtx.createRadialGradient(screenPos.x, screenPos.y, 0, screenPos.x, screenPos.y, r);
            grad.addColorStop(0, `rgba(255, 255, 255, ${light.intensity})`);
            grad.addColorStop(1, 'rgba(255, 255, 255, 0)');

            lCtx.fillStyle = grad;
            lCtx.beginPath();
            lCtx.arc(screenPos.x, screenPos.y, r, 0, Math.PI * 2);
            lCtx.fill();
        }

        lCtx.globalCompositeOperation = 'source-over';

        // Blend onto main canvas using multiply
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0); // Reset transform to screen space
        ctx.globalCompositeOperation = 'multiply';
        ctx.drawImage(this.lightCanvas, 0, 0);
        ctx.restore();
    }

    clear() {
        this.lights = [];
    }
}
""")

    # 6. src/graphics/PostProcessingFilters.js
    write_file("src/graphics/PostProcessingFilters.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Screen Post-Processing Effects (Bloom, CRT Scanlines, Chromatic Aberration)
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class PostProcessingFilters {
    static applyCRTScanlines(ctx, width, height, lineSpacing = 3, opacity = 0.15) {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
        for (let y = 0; y < height; y += lineSpacing) {
            ctx.fillRect(0, y, width, 1);
        }
        ctx.restore();
    }

    static applyVignette(ctx, width, height, strength = 0.45) {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        const radius = Math.hypot(width, height) * 0.5;
        const grad = ctx.createRadialGradient(width * 0.5, height * 0.5, radius * 0.4, width * 0.5, height * 0.5, radius);
        grad.addColorStop(0, 'rgba(0,0,0,0)');
        grad.addColorStop(1, `rgba(0,0,0,${strength})`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
        ctx.restore();
    }

    static applyChromaticAberration(ctx, canvas, offset = 2) {
        if (offset <= 0) return;
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.globalCompositeOperation = 'screen';
        ctx.globalAlpha = 0.3;
        ctx.drawImage(canvas, -offset, 0);
        ctx.drawImage(canvas, offset, 0);
        ctx.restore();
    }
}
""")

    # 7. src/graphics/CanvasEffects.js
    write_file("src/graphics/CanvasEffects.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Procedural Starfield, Weather & Laser Particle Effects
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class CanvasEffects {
    constructor(width = 1280, height = 720) {
        this.width = width;
        this.height = height;
        this.stars = [];
        this.initStarfield(200);
    }

    initStarfield(count = 200) {
        this.stars = [];
        for (let i = 0; i < count; i++) {
            this.stars.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                z: Math.random() * 3 + 0.5,
                size: Math.random() * 2 + 1,
                color: ['#ffffff', '#00e5ff', '#ff3366', '#ffe600'][Math.floor(Math.random() * 4)]
            });
        }
    }

    updateAndRenderStarfield(ctx, speed = 50, dt = 0.016) {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        for (const star of this.stars) {
            star.y += speed * star.z * dt;
            if (star.y > this.height) {
                star.y = 0;
                star.x = Math.random() * this.width;
            }

            ctx.fillStyle = star.color;
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.size * (star.z * 0.5), 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.restore();
    }
}
""")
