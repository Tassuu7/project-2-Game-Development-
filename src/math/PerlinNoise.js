/**
 * NovaForge Game Engine & Arcade Studio
 * Classic 2D/3D Perlin Noise Generator with Fractal Octaves
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class PerlinNoise {
    constructor(seed = 1337) {
        this.p = new Uint8Array(512);
        this.permutation = new Uint8Array(256);
        this.setSeed(seed);
    }

    setSeed(seed) {
        let s = seed % 2147483647;
        if (s <= 0) s += 2147483646;

        for (let i = 0; i < 256; i++) {
            this.permutation[i] = i;
        }

        for (let i = 255; i > 0; i--) {
            s = (s * 16807) % 2147483647;
            const j = s % (i + 1);
            const temp = this.permutation[i];
            this.permutation[i] = this.permutation[j];
            this.permutation[j] = temp;
        }

        for (let i = 0; i < 256; i++) {
            this.p[i] = this.permutation[i];
            this.p[256 + i] = this.permutation[i];
        }
    }

    _fade(t) {
        return t * t * t * (t * (t * 6 - 15) + 10);
    }

    _lerp(t, a, b) {
        return a + t * (b - a);
    }

    _grad(hash, x, y, z = 0) {
        const h = hash & 15;
        const u = h < 8 ? x : y;
        const v = h < 4 ? y : (h === 12 || h === 14 ? x : z);
        return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v);
    }

    noise2D(x, y) {
        const X = Math.floor(x) & 255;
        const Y = Math.floor(y) & 255;

        const xf = x - Math.floor(x);
        const yf = y - Math.floor(y);

        const u = this._fade(xf);
        const v = this._fade(yf);

        const A = this.p[X] + Y;
        const B = this.p[X + 1] + Y;

        return this._lerp(v,
            this._lerp(u, this._grad(this.p[A], xf, yf), this._grad(this.p[B], xf - 1, yf)),
            this._lerp(u, this._grad(this.p[A + 1], xf, yf - 1), this._grad(this.p[B + 1], xf - 1, yf - 1))
        );
    }

    fractal2D(x, y, octaves = 4, persistence = 0.5, lacunarity = 2.0) {
        let total = 0;
        let frequency = 1;
        let amplitude = 1;
        let maxValue = 0;

        for (let i = 0; i < octaves; i++) {
            total += this.noise2D(x * frequency, y * frequency) * amplitude;
            maxValue += amplitude;
            amplitude *= persistence;
            frequency *= lacunarity;
        }

        return total / maxValue;
    }
}
