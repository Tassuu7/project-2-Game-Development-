# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file, git_commit

def build_partC():
    # 7. src/math/PerlinNoise.js
    write_file("src/math/PerlinNoise.js", """/**
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
""")

    # 8. src/math/SimplexNoise.js
    write_file("src/math/SimplexNoise.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * 2D Simplex Noise for Procedural Terrain and Textures
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class SimplexNoise {
    constructor(seed = 42) {
        this.perm = new Uint8Array(512);
        this.permMod12 = new Uint8Array(512);
        this._init(seed);
    }

    _init(seed) {
        const p = new Uint8Array(256);
        for (let i = 0; i < 256; i++) p[i] = i;

        let s = seed % 2147483647;
        for (let i = 255; i > 0; i--) {
            s = (s * 16807) % 2147483647;
            const j = s % (i + 1);
            const temp = p[i];
            p[i] = p[j];
            p[j] = temp;
        }

        for (let i = 0; i < 512; i++) {
            this.perm[i] = p[i & 255];
            this.permMod12[i] = (this.perm[i] % 12);
        }
    }

    static F2 = 0.5 * (Math.sqrt(3.0) - 1.0);
    static G2 = (3.0 - Math.sqrt(3.0)) / 6.0;
    static grad3 = new Float32Array([
        1, 1, 0,  -1, 1, 0,  1,-1, 0,  -1,-1, 0,
        1, 0, 1,  -1, 0, 1,  1, 0,-1,  -1, 0,-1,
        0, 1, 1,   0,-1, 1,  0, 1,-1,   0,-1,-1
    ]);

    noise2D(xin, yin) {
        let n0 = 0, n1 = 0, n2 = 0;
        const s = (xin + yin) * SimplexNoise.F2;
        const i = Math.floor(xin + s);
        const j = Math.floor(yin + s);
        const t = (i + j) * SimplexNoise.G2;
        const X0 = i - t;
        const Y0 = j - t;
        const x0 = xin - X0;
        const y0 = yin - Y0;

        let i1, j1;
        if (x0 > y0) { i1 = 1; j1 = 0; }
        else { i1 = 0; j1 = 1; }

        const x1 = x0 - i1 + SimplexNoise.G2;
        const y1 = y0 - j1 + SimplexNoise.G2;
        const x2 = x0 - 1.0 + 2.0 * SimplexNoise.G2;
        const y2 = y0 - 1.0 + 2.0 * SimplexNoise.G2;

        const ii = i & 255;
        const jj = j & 255;
        const gi0 = this.permMod12[ii + this.perm[jj]] * 3;
        const gi1 = this.permMod12[ii + i1 + this.perm[jj + j1]] * 3;
        const gi2 = this.permMod12[ii + 1 + this.perm[jj + 1]] * 3;

        let t0 = 0.5 - x0 * x0 - y0 * y0;
        if (t0 >= 0) {
            t0 *= t0;
            n0 = t0 * t0 * (SimplexNoise.grad3[gi0] * x0 + SimplexNoise.grad3[gi0 + 1] * y0);
        }

        let t1 = 0.5 - x1 * x1 - y1 * y1;
        if (t1 >= 0) {
            t1 *= t1;
            n1 = t1 * t1 * (SimplexNoise.grad3[gi1] * x1 + SimplexNoise.grad3[gi1 + 1] * y1);
        }

        let t2 = 0.5 - x2 * x2 - y2 * y2;
        if (t2 >= 0) {
            t2 *= t2;
            n2 = t2 * t2 * (SimplexNoise.grad3[gi2] * x2 + SimplexNoise.grad3[gi2 + 1] * y2);
        }

        return 70.0 * (n0 + n1 + n2);
    }
}
""")

    # 9. src/math/Voronoi.js
    write_file("src/math/Voronoi.js", """/**
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
""")

    # 10. src/math/Spline.js
    write_file("src/math/Spline.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Catmull-Rom and Bezier Spline Path Traversal Engine
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class CatmullRomSpline {
    constructor(points = [], tension = 0.5, closed = false) {
        this.points = points;
        this.tension = tension;
        this.closed = closed;
    }

    getPoint(t, out = { x: 0, y: 0 }) {
        const pts = this.points;
        const l = pts.length;
        if (l < 2) return pts[0] ? Object.assign(out, pts[0]) : out;

        const p = (l - (this.closed ? 0 : 1)) * t;
        let intPoint = Math.floor(p);
        let weight = p - intPoint;

        if (this.closed) {
            intPoint += intPoint > 0 ? 0 : (Math.floor(Math.abs(intPoint) / l) + 1) * l;
        } else if (weight === 0 && intPoint === l - 1) {
            intPoint = l - 2;
            weight = 1;
        }

        const p0 = pts[(this.closed ? (intPoint - 1 + l) % l : Math.max(0, intPoint - 1))];
        const p1 = pts[(this.closed ? intPoint % l : intPoint)];
        const p2 = pts[(this.closed ? (intPoint + 1) % l : Math.min(l - 1, intPoint + 1))];
        const p3 = pts[(this.closed ? (intPoint + 2) % l : Math.min(l - 1, intPoint + 2))];

        out.x = this._catmullRom(p0.x, p1.x, p2.x, p3.x, weight);
        out.y = this._catmullRom(p0.y, p1.y, p2.y, p3.y, weight);
        return out;
    }

    _catmullRom(p0, p1, p2, p3, t) {
        const v0 = (p2 - p0) * this.tension;
        const v1 = (p3 - p1) * this.tension;
        const t2 = t * t;
        const t3 = t * t2;
        return (2 * p1 - 2 * p2 + v0 + v1) * t3 +
               (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 +
               v0 * t + p1;
    }
}
""")

    # 11. src/math/Random.js
    write_file("src/math/Random.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Deterministic Pseudo-Random Number Generator (PRNG) & Distributions
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class Random {
    constructor(seed = Date.now()) {
        this.seed = seed >>> 0;
    }

    next() {
        // Mulberry32 32-bit PRNG
        let z = (this.seed += 0x6D2B79F5);
        z = Math.imul(z ^ (z >>> 15), z | 1);
        z ^= z + Math.imul(z ^ (z >>> 7), z | 61);
        return ((z ^ (z >>> 14)) >>> 0) / 4294967296;
    }

    float(min = 0, max = 1) {
        return min + (max - min) * this.next();
    }

    int(min, max) {
        return Math.floor(this.float(min, max + 1));
    }

    boolean(probability = 0.5) {
        return this.next() < probability;
    }

    choice(array) {
        if (!array || array.length === 0) return null;
        return array[this.int(0, array.length - 1)];
    }

    shuffle(array) {
        const copy = [...array];
        for (let i = copy.length - 1; i > 0; i--) {
            const j = this.int(0, i);
            const temp = copy[i];
            copy[i] = copy[j];
            copy[j] = temp;
        }
        return copy;
    }

    gaussian(mean = 0, stdev = 1) {
        // Box-Muller transform
        let u = 1 - this.next();
        let v = this.next();
        let z = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
        return z * stdev + mean;
    }

    sign() {
        return this.boolean() ? 1 : -1;
    }
}
""")

    git_commit("feat(math): add 2D/3D vector, matrix, quaternion, noise, spline, and PRNG math suite")
