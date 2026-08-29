/**
 * NovaForge Game Engine & Arcade Studio
 * 3D Geometry Primitives, Vertex Buffers & Normal Calculations
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class Geometry3D {
    static createCube(size = 1.0) {
        const s = size * 0.5;
        return {
            vertices: new Float32Array([
                // Front face
                -s, -s,  s,   s, -s,  s,   s,  s,  s,  -s,  s,  s,
                // Back face
                -s, -s, -s,  -s,  s, -s,   s,  s, -s,   s, -s, -s,
                // Top face
                -s,  s, -s,  -s,  s,  s,   s,  s,  s,   s,  s, -s,
                // Bottom face
                -s, -s, -s,   s, -s, -s,   s, -s,  s,  -s, -s,  s,
                // Right face
                 s, -s, -s,   s,  s, -s,   s,  s,  s,   s, -s,  s,
                // Left face
                -s, -s, -s,  -s, -s,  s,  -s,  s,  s,  -s,  s, -s
            ]),
            indices: new Uint16Array([
                0, 1, 2,    0, 2, 3,
                4, 5, 6,    4, 6, 7,
                8, 9, 10,   8, 10, 11,
                12, 13, 14, 12, 14, 15,
                16, 17, 18, 16, 18, 19,
                20, 21, 22, 20, 22, 23
            ])
        };
    }

    static createSphere(radius = 1.0, segments = 32, rings = 16) {
        const vertices = [];
        const indices = [];
        const uvs = [];
        const normals = [];

        for (let r = 0; r <= rings; r++) {
            const theta = (r * Math.PI) / rings;
            const sinTheta = Math.sin(theta);
            const cosTheta = Math.cos(theta);

            for (let s = 0; s <= segments; s++) {
                const phi = (s * 2 * Math.PI) / segments;
                const sinPhi = Math.sin(phi);
                const cosPhi = Math.cos(phi);

                const x = cosPhi * sinTheta;
                const y = cosTheta;
                const z = sinPhi * sinTheta;
                const u = 1 - (s / segments);
                const v = 1 - (r / rings);

                normals.push(x, y, z);
                uvs.push(u, v);
                vertices.push(radius * x, radius * y, radius * z);
            }
        }

        for (let r = 0; r < rings; r++) {
            for (let s = 0; s < segments; s++) {
                const first = (r * (segments + 1)) + s;
                const second = first + segments + 1;
                indices.push(first, second, first + 1);
                indices.push(second, second + 1, first + 1);
            }
        }

        return {
            vertices: new Float32Array(vertices),
            normals: new Float32Array(normals),
            uvs: new Float32Array(uvs),
            indices: new Uint16Array(indices)
        };
    }
}
