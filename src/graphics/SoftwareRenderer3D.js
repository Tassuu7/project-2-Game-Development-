/**
 * NovaForge Software 3D Pipeline & Scanline Rasterizer
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Matrix4x4 } from '../math/Matrix4x4.js';
import { Vector3 } from '../math/Vector3.js';

export class SoftwareRenderer3D {
    constructor(width = 640, height = 360) {
        this.width = width;
        this.height = height;
        this.zBuffer = new Float32Array(width * height);
        this.viewMatrix = new Matrix4x4();
        this.projMatrix = new Matrix4x4();
        this.projMatrix.makePerspective(60, width / height, 0.1, 1000);
    }

    clear() {
        this.zBuffer.fill(Infinity);
    }

    renderMesh(ctx, mesh, modelMatrix, color = '#00e5ff') {
        const mvp = new Matrix4x4().multiplyMatrices(this.projMatrix, new Matrix4x4().multiplyMatrices(this.viewMatrix, modelMatrix));
        const verts = mesh.vertices;
        const indices = mesh.indices;
        const projected = [];

        for (let i = 0; i < verts.length; i += 3) {
            const v = new Vector3(verts[i], verts[i + 1], verts[i + 2]);
            const p = this._projectVertex(v, mvp);
            projected.push(p);
        }

        ctx.strokeStyle = color;
        ctx.lineWidth = 1;

        for (let i = 0; i < indices.length; i += 3) {
            const p0 = projected[indices[i]];
            const p1 = projected[indices[i + 1]];
            const p2 = projected[indices[i + 2]];

            if (p0.z > 0 && p1.z > 0 && p2.z > 0) {
                // Backface culling
                const area = (p1.x - p0.x) * (p2.y - p0.y) - (p1.y - p0.y) * (p2.x - p0.x);
                if (area > 0) {
                    ctx.beginPath();
                    ctx.moveTo(p0.x, p0.y);
                    ctx.lineTo(p1.x, p1.y);
                    ctx.lineTo(p2.x, p2.y);
                    ctx.closePath();
                    ctx.stroke();
                }
            }
        }
    }

    _projectVertex(v, matrix) {
        const m = matrix.elements;
        const x = v.x * m[0] + v.y * m[4] + v.z * m[8] + m[12];
        const y = v.x * m[1] + v.y * m[5] + v.z * m[9] + m[13];
        const z = v.x * m[2] + v.y * m[6] + v.z * m[10] + m[14];
        const w = v.x * m[3] + v.y * m[7] + v.z * m[11] + m[15];

        if (w <= 0.001) return { x: 0, y: 0, z: -1 };

        const invW = 1.0 / w;
        const ndcX = x * invW;
        const ndcY = y * invW;

        const screenX = (ndcX + 1.0) * 0.5 * this.width;
        const screenY = (1.0 - ndcY) * 0.5 * this.height;

        return { x: screenX, y: screenY, z: w };
    }
}
