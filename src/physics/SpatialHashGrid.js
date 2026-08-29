/**
 * NovaForge Game Engine & Arcade Studio
 * Broadphase Spatial Hash Grid for Ultra-Fast Proximity Queries
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class SpatialHashGrid {
    constructor(cellSize = 64) {
        this.cellSize = cellSize;
        this.grid = new Map();
    }

    _key(cellX, cellY) {
        return `${cellX},${cellY}`;
    }

    insert(entity) {
        const bounds = entity.collider ? entity.collider.bounds : { minX: entity.position.x - 16, minY: entity.position.y - 16, maxX: entity.position.x + 16, maxY: entity.position.y + 16 };
        const minCellX = Math.floor(bounds.minX / this.cellSize);
        const maxCellX = Math.floor(bounds.maxX / this.cellSize);
        const minCellY = Math.floor(bounds.minY / this.cellSize);
        const maxCellY = Math.floor(bounds.maxY / this.cellSize);

        for (let cx = minCellX; cx <= maxCellX; cx++) {
            for (let cy = minCellY; cy <= maxCellY; cy++) {
                const k = this._key(cx, cy);
                if (!this.grid.has(k)) {
                    this.grid.set(k, new Set());
                }
                this.grid.get(k).add(entity);
            }
        }
    }

    queryPotentialCollisions(entity, results = new Set()) {
        const bounds = entity.collider ? entity.collider.bounds : { minX: entity.position.x - 16, minY: entity.position.y - 16, maxX: entity.position.x + 16, maxY: entity.position.y + 16 };
        const minCellX = Math.floor(bounds.minX / this.cellSize);
        const maxCellX = Math.floor(bounds.maxX / this.cellSize);
        const minCellY = Math.floor(bounds.minY / this.cellSize);
        const maxCellY = Math.floor(bounds.maxY / this.cellSize);

        for (let cx = minCellX; cx <= maxCellX; cx++) {
            for (let cy = minCellY; cy <= maxCellY; cy++) {
                const k = this._key(cx, cy);
                const cell = this.grid.get(k);
                if (cell) {
                    for (const other of cell) {
                        if (other !== entity) {
                            results.add(other);
                        }
                    }
                }
            }
        }
        return results;
    }

    clear() {
        this.grid.clear();
    }
}
