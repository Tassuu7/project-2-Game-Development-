/**
 * NovaForge Game Engine & Arcade Studio
 * Procedural Cellular Voronoi Noise & Distance Field Metrics
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class VoronoiNoise {
    constructor(seed = 999) {
        this.seed = seed;
    }

    _hash(x, y) {
        let n = Math.sin(x * 127.1 + y * 311.7 + this.seed) * 43758.5453123;
        return n - Math.floor(n);
    }

    _hash2(x, y) {
        return {
            x: this._hash(x, y),
            y: this._hash(x + 19.19, y + 73.73)
        };
    }

    evaluate(x, y, distanceType = 'euclidean') {
        const ix = Math.floor(x);
        const iy = Math.floor(y);
        const fx = x - ix;
        const fy = y - iy;

        let minDist = 1e8;
        let secondMinDist = 1e8;
        let cellId = 0;

        for (let j = -1; j <= 1; j++) {
            for (let i = -1; i <= 1; i++) {
                const neighbor = { x: i, y: j };
                const point = this._hash2(ix + i, iy + j);

                const diffX = neighbor.x + point.x - fx;
                const diffY = neighbor.y + point.y - fy;

                let dist;
                if (distanceType === 'manhattan') {
                    dist = Math.abs(diffX) + Math.abs(diffY);
                } else if (distanceType === 'chebyshev') {
                    dist = Math.max(Math.abs(diffX), Math.abs(diffY));
                } else {
                    dist = Math.hypot(diffX, diffY);
                }

                if (dist < minDist) {
                    secondMinDist = minDist;
                    minDist = dist;
                    cellId = this._hash(ix + i, iy + j);
                } else if (dist < secondMinDist) {
                    secondMinDist = dist;
                }
            }
        }

        return {
            f1: minDist,
            f2: secondMinDist,
            cellId,
            border: secondMinDist - minDist
        };
    }
}
