/**
 * NovaForge Game Engine & Arcade Studio
 * 3x3 Transformation Matrix for 2D Affine Transforms
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class Matrix3x3 {
    constructor() {
        this.elements = new Float32Array([
            1, 0, 0,
            0, 1, 0,
            0, 0, 1
        ]);
    }

    identity() {
        const te = this.elements;
        te[0] = 1; te[1] = 0; te[2] = 0;
        te[3] = 0; te[4] = 1; te[5] = 0;
        te[6] = 0; te[7] = 0; te[8] = 1;
        return this;
    }

    copy(m) {
        const me = m.elements;
        const te = this.elements;
        for (let i = 0; i < 9; i++) te[i] = me[i];
        return this;
    }

    clone() {
        return new Matrix3x3().copy(this);
    }

    set(n11, n12, n13, n21, n22, n23, n31, n32, n33) {
        const te = this.elements;
        te[0] = n11; te[1] = n12; te[2] = n13;
        te[3] = n21; te[4] = n22; te[5] = n23;
        te[6] = n31; te[7] = n32; te[8] = n33;
        return this;
    }

    multiply(m) {
        return this.multiplyMatrices(this, m);
    }

    multiplyMatrices(a, b) {
        const ae = a.elements;
        const be = b.elements;
        const te = this.elements;

        const a11 = ae[0], a12 = ae[1], a13 = ae[2];
        const a21 = ae[3], a22 = ae[4], a23 = ae[5];
        const a31 = ae[6], a32 = ae[7], a33 = ae[8];

        const b11 = be[0], b12 = be[1], b13 = be[2];
        const b21 = be[3], b22 = be[4], b23 = be[5];
        const b31 = be[6], b32 = be[7], b33 = be[8];

        te[0] = a11 * b11 + a12 * b21 + a13 * b31;
        te[1] = a11 * b12 + a12 * b22 + a13 * b32;
        te[2] = a11 * b13 + a12 * b23 + a13 * b33;

        te[3] = a21 * b11 + a22 * b21 + a23 * b31;
        te[4] = a21 * b12 + a22 * b22 + a23 * b32;
        te[5] = a21 * b13 + a22 * b23 + a23 * b33;

        te[6] = a31 * b11 + a32 * b21 + a33 * b31;
        te[7] = a31 * b12 + a32 * b22 + a33 * b32;
        te[8] = a31 * b13 + a32 * b23 + a33 * b33;

        return this;
    }

    makeTranslation(x, y) {
        this.set(
            1, 0, x,
            0, 1, y,
            0, 0, 1
        );
        return this;
    }

    makeRotation(theta) {
        const c = Math.cos(theta);
        const s = Math.sin(theta);
        this.set(
            c, -s, 0,
            s,  c, 0,
            0,  0, 1
        );
        return this;
    }

    makeScale(sx, sy) {
        this.set(
            sx,  0, 0,
             0, sy, 0,
             0,  0, 1
        );
        return this;
    }

    determinant() {
        const te = this.elements;
        const a = te[0], b = te[1], c = te[2];
        const d = te[3], e = te[4], f = te[5];
        const g = te[6], h = te[7], i = te[8];
        return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g);
    }

    invert() {
        const te = this.elements;
        const det = this.determinant();
        if (Math.abs(det) <= 1e-8) return this.identity();
        const invDet = 1 / det;

        const a11 = te[0], a12 = te[1], a13 = te[2];
        const a21 = te[3], a22 = te[4], a23 = te[5];
        const a31 = te[6], a32 = te[7], a33 = te[8];

        te[0] = (a22 * a33 - a23 * a32) * invDet;
        te[1] = (a13 * a32 - a12 * a33) * invDet;
        te[2] = (a12 * a23 - a13 * a22) * invDet;

        te[3] = (a23 * a31 - a21 * a33) * invDet;
        te[4] = (a11 * a33 - a13 * a31) * invDet;
        te[5] = (a13 * a21 - a11 * a23) * invDet;

        te[6] = (a21 * a32 - a22 * a31) * invDet;
        te[7] = (a12 * a31 - a11 * a32) * invDet;
        te[8] = (a11 * a22 - a12 * a21) * invDet;

        return this;
    }

    transformPoint(p, out = null) {
        const target = out || p;
        const te = this.elements;
        const x = p.x;
        const y = p.y;
        target.x = te[0] * x + te[1] * y + te[2];
        target.y = te[3] * x + te[4] * y + te[5];
        return target;
    }
}
