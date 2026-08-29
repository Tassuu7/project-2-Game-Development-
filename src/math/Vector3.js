/**
 * NovaForge Game Engine & Arcade Studio
 * 3D Vector Representation & Linear Algebra Operations
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class Vector3 {
    constructor(x = 0, y = 0, z = 0) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    set(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
        return this;
    }

    copy(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
        return this;
    }

    clone() {
        return new Vector3(this.x, this.y, this.z);
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
        return this;
    }

    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
        return this;
    }

    scale(s) {
        this.x *= s;
        this.y *= s;
        this.z *= s;
        return this;
    }

    dot(v) {
        return (this.x * v.x) + (this.y * v.y) + (this.z * v.z);
    }

    cross(v) {
        const cx = (this.y * v.z) - (this.z * v.y);
        const cy = (this.z * v.x) - (this.x * v.z);
        const cz = (this.x * v.y) - (this.y * v.x);
        this.x = cx;
        this.y = cy;
        this.z = cz;
        return this;
    }

    crossVectors(a, b) {
        this.x = (a.y * b.z) - (a.z * b.y);
        this.y = (a.z * b.x) - (a.x * b.z);
        this.z = (a.x * b.y) - (a.y * b.x);
        return this;
    }

    lengthSq() {
        return (this.x * this.x) + (this.y * this.y) + (this.z * this.z);
    }

    length() {
        return Math.hypot(this.x, this.y, this.z);
    }

    normalize() {
        const len = this.length();
        if (len > 1e-8) {
            this.x /= len;
            this.y /= len;
            this.z /= len;
        } else {
            this.x = 0;
            this.y = 0;
            this.z = 0;
        }
        return this;
    }

    distanceTo(v) {
        return Math.hypot(this.x - v.x, this.y - v.y, this.z - v.z);
    }

    lerp(v, alpha) {
        this.x += (v.x - this.x) * alpha;
        this.y += (v.y - this.y) * alpha;
        this.z += (v.z - this.z) * alpha;
        return this;
    }

    reflect(normal) {
        const d = 2 * this.dot(normal);
        this.x -= d * normal.x;
        this.y -= d * normal.y;
        this.z -= d * normal.z;
        return this;
    }

    equals(v, tol = 1e-6) {
        return Math.abs(this.x - v.x) <= tol && Math.abs(this.y - v.y) <= tol && Math.abs(this.z - v.z) <= tol;
    }

    toArray() {
        return [this.x, this.y, this.z];
    }

    fromArray(arr, offset = 0) {
        this.x = arr[offset];
        this.y = arr[offset + 1];
        this.z = arr[offset + 2];
        return this;
    }

    toString(decimals = 2) {
        return `Vector3(${this.x.toFixed(decimals)}, ${this.y.toFixed(decimals)}, ${this.z.toFixed(decimals)})`;
    }
}
