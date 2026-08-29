/**
 * NovaForge Fast Trigonometric Approximation & Precomputed Lookup Tables
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class TrigLookupTable {
    constructor(resolution = 3600) {
        this.resolution = resolution;
        this.sinTable = new Float32Array(resolution);
        this.cosTable = new Float32Array(resolution);
        this.step = (Math.PI * 2) / resolution;
        this.invStep = resolution / (Math.PI * 2);
        this._initTables();
    }

    _initTables() {
        for (let i = 0; i < this.resolution; i++) {
            const angle = i * this.step;
            this.sinTable[i] = Math.sin(angle);
            this.cosTable[i] = Math.cos(angle);
        }
    }

    sin(rad) {
        let idx = Math.floor(rad * this.invStep) % this.resolution;
        if (idx < 0) idx += this.resolution;
        return this.sinTable[idx];
    }

    cos(rad) {
        let idx = Math.floor(rad * this.invStep) % this.resolution;
        if (idx < 0) idx += this.resolution;
        return this.cosTable[idx];
    }
}
