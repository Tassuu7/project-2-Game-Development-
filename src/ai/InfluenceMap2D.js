/**
 * NovaForge Tactical Spatial Influence Grid & Threat Heatmap
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class InfluenceMap2D {
    constructor(width = 40, height = 25, cellSize = 32) {
        this.width = width;
        this.height = height;
        this.cellSize = cellSize;
        this.friendlyInfluence = new Float32Array(width * height);
        this.enemyInfluence = new Float32Array(width * height);
        this.tensionMap = new Float32Array(width * height);
        this.decayFactor = 0.85;
        this.momentum = 0.1;
    }

    clear() {
        this.friendlyInfluence.fill(0);
        this.enemyInfluence.fill(0);
        this.tensionMap.fill(0);
    }

    addInfluence(worldX, worldY, strength, radius = 4, isFriendly = true) {
        const gridX = Math.floor(worldX / this.cellSize);
        const gridY = Math.floor(worldY / this.cellSize);
        const map = isFriendly ? this.friendlyInfluence : this.enemyInfluence;

        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                const gx = gridX + dx;
                const gy = gridY + dy;
                if (gx >= 0 && gx < this.width && gy >= 0 && gy < this.height) {
                    const dist = Math.hypot(dx, dy);
                    if (dist <= radius) {
                        const falloff = 1.0 - (dist / radius);
                        map[gy * this.width + gx] += strength * falloff;
                    }
                }
            }
        }
    }

    updateTension() {
        for (let i = 0; i < this.tensionMap.length; i++) {
            const f = this.friendlyInfluence[i];
            const e = this.enemyInfluence[i];
            this.tensionMap[i] = (f + e) - Math.abs(f - e);
            this.friendlyInfluence[i] *= this.decayFactor;
            this.enemyInfluence[i] *= this.decayFactor;
        }
    }

    getSafestNearbyCell(worldX, worldY, searchRadius = 3) {
        const gridX = Math.floor(worldX / this.cellSize);
        const gridY = Math.floor(worldY / this.cellSize);
        let lowestThreat = Infinity;
        let bestCell = { x: gridX, y: gridY };

        for (let dy = -searchRadius; dy <= searchRadius; dy++) {
            for (let dx = -searchRadius; dx <= searchRadius; dx++) {
                const gx = gridX + dx;
                const gy = gridY + dy;
                if (gx >= 0 && gx < this.width && gy >= 0 && gy < this.height) {
                    const threat = this.enemyInfluence[gy * this.width + gx];
                    if (threat < lowestThreat) {
                        lowestThreat = threat;
                        bestCell = { x: gx, y: gy };
                    }
                }
            }
        }
        return { worldX: bestCell.x * this.cellSize + this.cellSize * 0.5, worldY: bestCell.y * this.cellSize + this.cellSize * 0.5 };
    }
}
