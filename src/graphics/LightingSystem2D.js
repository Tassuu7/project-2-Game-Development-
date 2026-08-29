/**
 * NovaForge Game Engine & Arcade Studio
 * Dynamic 2D Lighting Engine with Radial Falloff & Occlusion Shadows
 * @author NovaForge Engineering Team
 * @license MIT
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
