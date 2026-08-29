/**
 * NovaForge Game Engine & Arcade Studio
 * Mathematical Utility Constants, Interpolation Functions & Algorithms
 * @author NovaForge Engineering Team
 * @license MIT
 */

export const MathUtils = {
    DEG2RAD: Math.PI / 180.0,
    RAD2DEG: 180.0 / Math.PI,
    TWO_PI: Math.PI * 2.0,
    HALF_PI: Math.PI * 0.5,
    EPSILON: 1e-6,

    clamp(value, min, max) {
        return Math.max(min, Math.min(max, value));
    },

    lerp(a, b, t) {
        return a + (b - a) * t;
    },

    inverseLerp(a, b, value) {
        if (Math.abs(b - a) <= 1e-8) return 0;
        return (value - a) / (b - a);
    },

    remap(inMin, inMax, outMin, outMax, value) {
        const t = MathUtils.inverseLerp(inMin, inMax, value);
        return MathUtils.lerp(outMin, outMax, t);
    },

    smoothstep(min, max, value) {
        const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
        return x * x * (3 - 2 * x);
    },

    smootherstep(min, max, value) {
        const x = Math.max(0, Math.min(1, (value - min) / (max - min)));
        return x * x * x * (x * (x * 6 - 15) + 10);
    },

    degToRad(degrees) {
        return degrees * MathUtils.DEG2RAD;
    },

    radToDeg(radians) {
        return radians * MathUtils.RAD2DEG;
    },

    wrapAngle(radians) {
        let a = radians % MathUtils.TWO_PI;
        if (a < -Math.PI) a += MathUtils.TWO_PI;
        if (a > Math.PI) a -= MathUtils.TWO_PI;
        return a;
    },

    angleDifference(targetAngle, currentAngle) {
        return MathUtils.wrapAngle(targetAngle - currentAngle);
    },

    bezierQuadratic(p0, p1, p2, t) {
        const oneMinusT = 1 - t;
        return (oneMinusT * oneMinusT * p0) + (2 * oneMinusT * t * p1) + (t * t * p2);
    },

    bezierCubic(p0, p1, p2, p3, t) {
        const oneMinusT = 1 - t;
        const oneMinusTSq = oneMinusT * oneMinusT;
        const tSq = t * t;
        return (oneMinusTSq * oneMinusT * p0) +
               (3 * oneMinusTSq * t * p1) +
               (3 * oneMinusT * tSq * p2) +
               (tSq * t * p3);
    },

    fastInvSqrt(n) {
        return 1.0 / Math.sqrt(n);
    }
};
