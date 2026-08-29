/**
 * Unit Tests for RigidBody Physics & Joint Solvers
 */

import { RigidBody } from '../physics/RigidBody.js';
import { Vector2 } from '../math/Vector2.js';

export function registerPhysicsTests(runner) {
    runner.test('RigidBody: Gravity Integration', (t) => {
        const body = new RigidBody({ x: 0, y: 0, mass: 1, linearDamping: 0 });
        const gravity = new Vector2(0, 100);
        body.integrate(0.1, gravity);

        t.assertClose(body.velocity.y, 10, 0.01);
        t.assertClose(body.position.y, 1, 0.01);
    });

    runner.test('RigidBody: Static Body Immobility', (t) => {
        const staticBody = new RigidBody({ x: 100, y: 100, type: 'static' });
        staticBody.applyForce(new Vector2(500, 500));
        staticBody.integrate(0.1, new Vector2(0, 100));

        t.assertEqual(staticBody.position.x, 100);
        t.assertEqual(staticBody.position.y, 100);
    });
}
