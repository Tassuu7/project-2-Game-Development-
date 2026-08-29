/**
 * NovaForge Game Engine & Arcade Studio
 * 2D Simplex Noise for Procedural Terrain and Textures
 * @author NovaForge Engineering Team
 * @license MIT
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
