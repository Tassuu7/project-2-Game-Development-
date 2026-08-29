/**
 * NovaForge Game Engine & Arcade Studio
 * Procedural Vector Art Generator for Spaceships, Characters & Glyphs
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class VectorArtGenerator {
    static drawSpaceship(ctx, x, y, scale = 1.0, color = '#00e5ff', engineThrust = false) {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(scale, scale);

        // Hull
        ctx.fillStyle = color;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(20, 0);
        ctx.lineTo(-15, -12);
        ctx.lineTo(-8, -4);
        ctx.lineTo(-8, 4);
        ctx.lineTo(-15, 12);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        // Cockpit
        ctx.fillStyle = '#ff0055';
        ctx.beginPath();
        ctx.arc(4, 0, 4, 0, Math.PI * 2);
        ctx.fill();

        // Engine glow
        if (engineThrust) {
            ctx.fillStyle = '#ffaa00';
            ctx.beginPath();
            ctx.moveTo(-10, -4);
            ctx.lineTo(-22 - Math.random() * 8, 0);
            ctx.lineTo(-10, 4);
            ctx.closePath();
            ctx.fill();
        }

        ctx.restore();
    }

    static drawHero(ctx, x, y, frame = 0, facingRight = true, color = '#39ff14') {
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(facingRight ? 1 : -1, 1);

        // Head
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(0, -14, 6, 0, Math.PI * 2);
        ctx.fill();

        // Body
        ctx.fillStyle = color;
        ctx.fillRect(-5, -8, 10, 14);

        // Legs
        const legOffset = Math.sin(frame * 0.5) * 4;
        ctx.strokeStyle = '#ffffff';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(-3, 6);
        ctx.lineTo(-3 + legOffset, 16);
        ctx.moveTo(3, 6);
        ctx.lineTo(3 - legOffset, 16);
        ctx.stroke();

        ctx.restore();
    }
}
