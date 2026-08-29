/**
 * NovaForge Game Engine & Arcade Studio
 * Deterministic Pseudo-Random Number Generator (PRNG) & Distributions
 * @author NovaForge Engineering Team
 * @license MIT
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
