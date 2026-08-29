/**
 * NovaForge Cosmic Vanguard Boss Attack Patterns & Wave Formations
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class BossPatterns {
    static generateSpiralBarrage(originX, originY, count = 24, rotationOffset = 0, speed = 250) {
        const bullets = [];
        const step = (Math.PI * 2) / count;
        for (let i = 0; i < count; i++) {
            const angle = i * step + rotationOffset;
            bullets.push({
                x: originX,
                y: originY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color: '#ff0055',
                radius: 5
            });
        }
        return bullets;
    }

    static generateConeSpread(originX, originY, targetX, targetY, count = 7, spreadAngle = Math.PI * 0.25, speed = 320) {
        const bullets = [];
        const baseAngle = Math.atan2(targetY - originY, targetX - originX);
        const startAngle = baseAngle - spreadAngle * 0.5;
        const step = spreadAngle / (count - 1);

        for (let i = 0; i < count; i++) {
            const angle = startAngle + i * step;
            bullets.push({
                x: originX,
                y: originY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                color: '#ffaa00',
                radius: 4
            });
        }
        return bullets;
    }
}
