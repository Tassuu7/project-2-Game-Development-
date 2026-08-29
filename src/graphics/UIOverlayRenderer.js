/**
 * NovaForge Game Engine & Arcade Studio
 * High-DPI Canvas Heads-Up Display & Floating Combat Text Renderer
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class UIOverlayRenderer {
    constructor() {
        this.floatingTexts = [];
    }

    addFloatingText(text, x, y, color = '#ffe600', isCrit = false) {
        this.floatingTexts.push({
            text, x, y,
            color,
            isCrit,
            life: 1.0,
            vy: -40
        });
    }

    drawHealthBar(ctx, x, y, width, height, current, max, color = '#00e5ff', bgColor = 'rgba(0,0,0,0.6)') {
        const pct = Math.max(0, Math.min(1.0, current / max));
        ctx.fillStyle = bgColor;
        ctx.fillRect(x, y, width, height);

        ctx.fillStyle = color;
        ctx.fillRect(x + 2, y + 2, (width - 4) * pct, height - 4);

        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, width, height);
    }

    updateAndRender(ctx, dt) {
        ctx.save();
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        for (let i = this.floatingTexts.length - 1; i >= 0; i--) {
            const ft = this.floatingTexts[i];
            ft.life -= dt;
            ft.y += ft.vy * dt;

            if (ft.life <= 0) {
                this.floatingTexts.splice(i, 1);
                continue;
            }

            ctx.globalAlpha = Math.max(0, ft.life);
            ctx.font = ft.isCrit ? 'bold 18px sans-serif' : '14px sans-serif';
            ctx.fillStyle = ft.color;
            ctx.textAlign = 'center';
            ctx.fillText(ft.text, ft.x, ft.y);
        }

        ctx.restore();
    }
}
