/**
 * NovaForge Game Engine & Arcade Studio
 * 2D Euclidean Vector with Comprehensive Geometric Operations
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    set(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }

    copy(v) {
        this.x = v.x;
        this.y = v.y;
        return this;
    }

    clone() {
        return new Vector2(this.x, this.y);
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
        return this;
    }

    addVectors(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        return this;
    }

    addScalar(s) {
        this.x += s;
        this.y += s;
        return this;
    }

    sub(v) {
        this.x -= v.x;
        this.y -= v.y;
        return this;
    }

    subVectors(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        return this;
    }

    multiply(v) {
        this.x *= v.x;
        this.y *= v.y;
        return this;
    }

    scale(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }

    scaleAndAdd(v, scalar) {
        this.x += v.x * scalar;
        this.y += v.y * scalar;
        return this;
    }

    divide(v) {
        this.x /= v.x !== 0 ? v.x : 1e-8;
        this.y /= v.y !== 0 ? v.y : 1e-8;
        return this;
    }

    divideScalar(scalar) {
        const inv = scalar !== 0 ? (1 / scalar) : 0;
        this.x *= inv;
        this.y *= inv;
        return this;
    }

    dot(v) {
        return (this.x * v.x) + (this.y * v.y);
    }

    cross(v) {
        return (this.x * v.y) - (this.y * v.x);
    }

    lengthSq() {
        return (this.x * this.x) + (this.y * this.y);
    }

    length() {
        return Math.hypot(this.x, this.y);
    }

    normalize() {
        const len = this.length();
        if (len > 1e-8) {
            this.x /= len;
            this.y /= len;
        } else {
            this.x = 0;
            this.y = 0;
        }
        return this;
    }

    distanceTo(v) {
        return Math.hypot(this.x - v.x, this.y - v.y);
    }

    distanceToSq(v) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return (dx * dx) + (dy * dy);
    }

    angle() {
        return Math.atan2(this.y, this.x);
    }

    angleTo(v) {
        const denominator = Math.sqrt(this.lengthSq() * v.lengthSq());
        if (denominator <= 1e-8) return 0;
        const dot = this.dot(v) / denominator;
        return Math.acos(Math.max(-1, Math.min(1, dot)));
    }

    rotate(angleInRadians) {
        const cos = Math.cos(angleInRadians);
        const sin = Math.sin(angleInRadians);
        const rx = (this.x * cos) - (this.y * sin);
        const ry = (this.x * sin) + (this.y * cos);
        this.x = rx;
        this.y = ry;
        return this;
    }

    rotateAround(pivot, angleInRadians) {
        const cos = Math.cos(angleInRadians);
        const sin = Math.sin(angleInRadians);
        const x = this.x - pivot.x;
        const y = this.y - pivot.y;
        this.x = (x * cos) - (y * sin) + pivot.x;
        this.y = (x * sin) + (y * cos) + pivot.y;
        return this;
    }

    lerp(v, alpha) {
        this.x += (v.x - this.x) * alpha;
        this.y += (v.y - this.y) * alpha;
        return this;
    }

    project(v) {
        const lenSq = v.lengthSq();
        if (lenSq <= 1e-8) return this.set(0, 0);
        const scalar = this.dot(v) / lenSq;
        return this.copy(v).scale(scalar);
    }

    reflect(normal) {
        const d = 2 * this.dot(normal);
        this.x -= d * normal.x;
        this.y -= d * normal.y;
        return this;
    }

    perpendicular() {
        const temp = this.x;
        this.x = -this.y;
        this.y = temp;
        return this;
    }

    clamp(minVec, maxVec) {
        this.x = Math.max(minVec.x, Math.min(maxVec.x, this.x));
        this.y = Math.max(minVec.y, Math.min(maxVec.y, this.y));
        return this;
    }

    clampLength(min, max) {
        const len = this.length();
        if (len > 0) {
            this.scale(Math.max(min, Math.min(max, len)) / len);
        }
        return this;
    }

    negate() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }

    isZero(threshold = 1e-8) {
        return Math.abs(this.x) <= threshold && Math.abs(this.y) <= threshold;
    }

    equals(v, tolerance = 1e-6) {
        return Math.abs(this.x - v.x) <= tolerance && Math.abs(this.y - v.y) <= tolerance;
    }

    toArray() {
        return [this.x, this.y];
    }

    fromArray(arr, offset = 0) {
        this.x = arr[offset];
        this.y = arr[offset + 1];
        return this;
    }

    toString(decimals = 2) {
        return `Vector2(${this.x.toFixed(decimals)}, ${this.y.toFixed(decimals)})`;
    }

    static ZERO = Object.freeze(new Vector2(0, 0));
    static UP = Object.freeze(new Vector2(0, -1));
    static DOWN = Object.freeze(new Vector2(0, 1));
    static LEFT = Object.freeze(new Vector2(-1, 0));
    static RIGHT = Object.freeze(new Vector2(1, 0));
    static ONE = Object.freeze(new Vector2(1, 1));
}
