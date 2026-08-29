/**
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
