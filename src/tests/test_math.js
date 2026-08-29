/**
 * Unit Tests for 2D/3D Mathematics & Matrix Suite
 */

import { Vector2 } from '../math/Vector2.js';
import { Vector3 } from '../math/Vector3.js';
import { MathUtils } from '../math/MathUtils.js';

export function registerMathTests(runner) {
    runner.test('Vector2: Add & Length', (t) => {
        const v1 = new Vector2(3, 4);
        t.assertEqual(v1.length(), 5, '3-4-5 triangle length');

        const v2 = new Vector2(1, 2);
        v1.add(v2);
        t.assertEqual(v1.x, 4);
        t.assertEqual(v1.y, 6);
    });

    runner.test('Vector2: Dot & Normalize', (t) => {
        const v = new Vector2(0, 10).normalize();
        t.assertClose(v.length(), 1.0);
        t.assertClose(v.y, 1.0);

        const vA = new Vector2(1, 0);
        const vB = new Vector2(0, 1);
        t.assertEqual(vA.dot(vB), 0, 'Perpendicular dot product must be 0');
    });

    runner.test('MathUtils: Clamp & Lerp', (t) => {
        t.assertEqual(MathUtils.clamp(15, 0, 10), 10);
        t.assertEqual(MathUtils.clamp(-5, 0, 10), 0);
        t.assertClose(MathUtils.lerp(10, 20, 0.5), 15);
    });
}
