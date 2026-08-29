/**
 * NovaForge Game Engine & Arcade Studio
 * Quaternion Representation for 3D Orientation & Slerp
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class Quaternion {
    constructor(x = 0, y = 0, z = 0, w = 1) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.w = w;
    }

    set(x, y, z, w) {
        this.x = x; this.y = y; this.z = z; this.w = w;
        return this;
    }

    identity() {
        return this.set(0, 0, 0, 1);
    }

    copy(q) {
        this.x = q.x; this.y = q.y; this.z = q.z; this.w = q.w;
        return this;
    }

    clone() {
        return new Quaternion(this.x, this.y, this.z, this.w);
    }

    normalize() {
        let l = Math.hypot(this.x, this.y, this.z, this.w);
        if (l === 0) {
            this.x = 0; this.y = 0; this.z = 0; this.w = 1;
        } else {
            l = 1 / l;
            this.x *= l; this.y *= l; this.z *= l; this.w *= l;
        }
        return this;
    }

    multiply(q) {
        return this.multiplyQuaternions(this, q);
    }

    multiplyQuaternions(a, b) {
        const qax = a.x, qay = a.y, qaz = a.z, qaw = a.w;
        const qbx = b.x, qby = b.y, qbz = b.z, qbw = b.w;

        this.x = qax * qbw + qaw * qbx + qay * qbz - qaz * qby;
        this.y = qay * qbw + qaw * qby + qaz * qbx - qax * qbz;
        this.z = qaz * qbw + qaw * qbz + qax * qby - qay * qbx;
        this.w = qaw * qbw - qax * qbx - qay * qby - qaz * qbz;

        return this;
    }

    slerp(qb, t) {
        if (t === 0) return this;
        if (t === 1) return this.copy(qb);

        let cosHalfTheta = this.w * qb.w + this.x * qb.x + this.y * qb.y + this.z * qb.z;

        if (cosHalfTheta < 0) {
            this.w = -qb.w; this.x = -qb.x; this.y = -qb.y; this.z = -qb.z;
            cosHalfTheta = -cosHalfTheta;
        } else {
            this.copy(qb);
        }

        if (cosHalfTheta >= 1.0) {
            return this;
        }

        const sqrSinHalfTheta = 1.0 - cosHalfTheta * cosHalfTheta;
        if (sqrSinHalfTheta <= 1e-8) {
            const s = 1 - t;
            this.w = s * this.w + t * qb.w;
            this.x = s * this.x + t * qb.x;
            this.y = s * this.y + t * qb.y;
            this.z = s * this.z + t * qb.z;
            return this.normalize();
        }

        const sinHalfTheta = Math.sqrt(sqrSinHalfTheta);
        const halfTheta = Math.atan2(sinHalfTheta, cosHalfTheta);
        const ratioA = Math.sin((1 - t) * halfTheta) / sinHalfTheta;
        const ratioB = Math.sin(t * halfTheta) / sinHalfTheta;

        this.w = this.w * ratioA + qb.w * ratioB;
        this.x = this.x * ratioA + qb.x * ratioB;
        this.y = this.y * ratioA + qb.y * ratioB;
        this.z = this.z * ratioA + qb.z * ratioB;

        return this;
    }
}
