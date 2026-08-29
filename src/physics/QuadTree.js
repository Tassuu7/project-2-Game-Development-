/**
 * NovaForge Game Engine & Arcade Studio
 * Spatial Partitioning 2D Quadtree Engine
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class QuadTree {
    constructor(boundary, maxObjects = 10, maxLevels = 5, level = 0) {
        this.boundary = boundary; // { x, y, width, height }
        this.maxObjects = maxObjects;
        this.maxLevels = maxLevels;
        this.level = level;
        this.objects = [];
        this.nodes = [];
        this.divided = false;
    }

    subdivide() {
        const x = this.boundary.x;
        const y = this.boundary.y;
        const hw = this.boundary.width * 0.5;
        const hh = this.boundary.height * 0.5;

        this.nodes = [
            new QuadTree({ x, y, width: hw, height: hh }, this.maxObjects, this.maxLevels, this.level + 1),
            new QuadTree({ x: x + hw, y, width: hw, height: hh }, this.maxObjects, this.maxLevels, this.level + 1),
            new QuadTree({ x, y: y + hh, width: hw, height: hh }, this.maxObjects, this.maxLevels, this.level + 1),
            new QuadTree({ x: x + hw, y: y + hh, width: hw, height: hh }, this.maxObjects, this.maxLevels, this.level + 1)
        ];
        this.divided = true;
    }

    insert(item) {
        const b = item.collider ? item.collider.bounds : { minX: item.x, minY: item.y, maxX: item.x + (item.width || 1), maxY: item.y + (item.height || 1) };
        if (!this._intersects(this.boundary, b)) {
            return false;
        }

        if (this.objects.length < this.maxObjects || this.level >= this.maxLevels) {
            this.objects.push(item);
            return true;
        }

        if (!this.divided) {
            this.subdivide();
        }

        let inserted = false;
        for (const node of this.nodes) {
            if (node.insert(item)) inserted = true;
        }
        return inserted;
    }

    query(range, found = []) {
        if (!this._intersects(this.boundary, range)) {
            return found;
        }

        for (const obj of this.objects) {
            const b = obj.collider ? obj.collider.bounds : { minX: obj.x, minY: obj.y, maxX: obj.x + (obj.width || 1), maxY: obj.y + (obj.height || 1) };
            if (this._intersects(range, b)) {
                found.push(obj);
            }
        }

        if (this.divided) {
            for (const node of this.nodes) {
                node.query(range, found);
            }
        }

        return found;
    }

    clear() {
        this.objects = [];
        for (const node of this.nodes) {
            node.clear();
        }
        this.nodes = [];
        this.divided = false;
    }

    _intersects(rect, bounds) {
        const rMinX = rect.x, rMinY = rect.y, rMaxX = rect.x + rect.width, rMaxY = rect.y + rect.height;
        return !(bounds.minX > rMaxX || bounds.maxX < rMinX || bounds.minY > rMaxY || bounds.maxY < rMinY);
    }
}
