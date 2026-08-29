/**
 * NovaForge Game Engine & Arcade Studio
 * 4x4 Matrix for 3D Projections, Camera Transformations & Raycasting
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class Matrix4x4 {
    constructor() {
        this.elements = new Float32Array([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
    }

    identity() {
        const e = this.elements;
        e[0] = 1; e[1] = 0; e[2] = 0; e[3] = 0;
        e[4] = 0; e[5] = 1; e[6] = 0; e[7] = 0;
        e[8] = 0; e[9] = 0; e[10] = 1; e[11] = 0;
        e[12] = 0; e[13] = 0; e[14] = 0; e[15] = 1;
        return this;
    }

    copy(m) {
        const me = m.elements;
        const te = this.elements;
        for (let i = 0; i < 16; i++) te[i] = me[i];
        return this;
    }

    clone() {
        return new Matrix4x4().copy(this);
    }

    multiply(m) {
        return this.multiplyMatrices(this, m);
    }

    multiplyMatrices(a, b) {
        const ae = a.elements;
        const be = b.elements;
        const te = this.elements;

        const a11 = ae[0], a12 = ae[4], a13 = ae[8], a14 = ae[12];
        const a21 = ae[1], a22 = ae[5], a23 = ae[9], a24 = ae[13];
        const a31 = ae[2], a32 = ae[6], a33 = ae[10], a34 = ae[14];
        const a41 = ae[3], a42 = ae[7], a43 = ae[11], a44 = ae[15];

        const b11 = be[0], b12 = be[4], b13 = be[8], b14 = be[12];
        const b21 = be[1], b22 = be[5], b23 = be[9], b24 = be[13];
        const b31 = be[2], b32 = be[6], b33 = be[10], b34 = be[14];
        const b41 = be[3], b42 = be[7], b43 = be[11], b44 = be[15];

        te[0] = a11 * b11 + a12 * b21 + a13 * b31 + a14 * b41;
        te[4] = a11 * b12 + a12 * b22 + a13 * b32 + a14 * b42;
        te[8] = a11 * b13 + a12 * b23 + a13 * b33 + a14 * b43;
        te[12] = a11 * b14 + a12 * b24 + a13 * b34 + a14 * b44;

        te[1] = a21 * b11 + a22 * b21 + a23 * b31 + a24 * b41;
        te[5] = a21 * b12 + a22 * b22 + a23 * b32 + a24 * b42;
        te[9] = a21 * b13 + a22 * b23 + a23 * b33 + a24 * b43;
        te[13] = a21 * b14 + a22 * b24 + a23 * b34 + a24 * b44;

        te[2] = a31 * b11 + a32 * b21 + a33 * b31 + a34 * b41;
        te[6] = a31 * b12 + a32 * b22 + a33 * b32 + a34 * b42;
        te[10] = a31 * b13 + a32 * b23 + a33 * b33 + a34 * b43;
        te[14] = a31 * b14 + a32 * b24 + a33 * b34 + a34 * b44;

        te[3] = a41 * b11 + a42 * b21 + a43 * b31 + a44 * b41;
        te[7] = a41 * b12 + a42 * b22 + a43 * b32 + a44 * b42;
        te[11] = a41 * b13 + a42 * b23 + a43 * b33 + a44 * b43;
        te[15] = a41 * b14 + a42 * b24 + a43 * b34 + a44 * b44;

        return this;
    }

    makePerspective(fov, aspect, near, far) {
        const te = this.elements;
        const f = 1.0 / Math.tan(fov * 0.5 * Math.PI / 180);
        const nf = 1.0 / (near - far);

        te[0] = f / aspect; te[4] = 0; te[8] = 0; te[12] = 0;
        te[1] = 0; te[5] = f; te[9] = 0; te[13] = 0;
        te[2] = 0; te[6] = 0; te[10] = (far + near) * nf; te[14] = (2 * far * near) * nf;
        te[3] = 0; te[7] = 0; te[11] = -1; te[15] = 0;

        return this;
    }

    makeLookAt(eye, target, up) {
        const te = this.elements;
        const zx = eye.x - target.x, zy = eye.y - target.y, zz = eye.z - target.z;
        let len = Math.hypot(zx, zy, zz);
        if (len > 0) { len = 1 / len; }
        const z0 = zx * len, z1 = zy * len, z2 = zz * len;

        const xx = up.y * z2 - up.z * z1, xy = up.z * z0 - up.x * z2, xz = up.x * z1 - up.y * z0;
        len = Math.hypot(xx, xy, xz);
        if (len > 0) { len = 1 / len; }
        const x0 = xx * len, x1 = xy * len, x2 = xz * len;

        const y0 = z1 * x2 - z2 * x1, y1 = z2 * x0 - z0 * x2, y2 = z0 * x1 - z1 * x0;

        te[0] = x0; te[4] = x1; te[8] = x2; te[12] = -(x0 * eye.x + x1 * eye.y + x2 * eye.z);
        te[1] = y0; te[5] = y1; te[9] = y2; te[13] = -(y0 * eye.x + y1 * eye.y + y2 * eye.z);
        te[2] = z0; te[6] = z1; te[10] = z2; te[14] = -(z0 * eye.x + z1 * eye.y + z2 * eye.z);
        te[3] = 0; te[7] = 0; te[11] = 0; te[15] = 1;

        return this;
    }
}
