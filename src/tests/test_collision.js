/**
 * Unit Tests for SAT Collision Detection
 */

import { CircleCollider } from '../physics/CircleCollider.js';
import { BoxCollider } from '../physics/BoxCollider.js';
import { SATCollision } from '../physics/SATCollision.js';
import { Vector2 } from '../math/Vector2.js';

export function registerCollisionTests(runner) {
    runner.test('SAT: Circle-Circle Overlap', (t) => {
        const c1 = new CircleCollider(10);
        c1.updateBounds(new Vector2(0, 0));
        const c2 = new CircleCollider(10);
        c2.updateBounds(new Vector2(15, 0));

        const hit = SATCollision.testCollision(c1, null, c2, null);
        t.assertTrue(hit !== null, 'Circles at distance 15 with r=10 must overlap');
        t.assertClose(hit.penetration, 5);
    });

    runner.test('SAT: Box-Box Separation', (t) => {
        const b1 = new BoxCollider(20, 20);
        b1.updateBounds(new Vector2(0, 0));
        const b2 = new BoxCollider(20, 20);
        b2.updateBounds(new Vector2(100, 100));

        const hit = SATCollision.testCollision(b1, null, b2, null);
        t.assertTrue(hit === null, 'Separated boxes must not collide');
    });
}
