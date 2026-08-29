/**
 * NovaForge Game Engine & Arcade Studio
 * Screen Post-Processing Effects (Bloom, CRT Scanlines, Chromatic Aberration)
 * @author NovaForge Engineering Team
 * @license MIT
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
