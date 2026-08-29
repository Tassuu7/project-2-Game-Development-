# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file, git_commit

def build_partB():
    # 3. src/tests/test_physics.js
    write_file("src/tests/test_physics.js", """/**
 * Unit Tests for RigidBody Physics & Joint Solvers
 */

import { RigidBody } from '../physics/RigidBody.js';
import { Vector2 } from '../math/Vector2.js';

export function registerPhysicsTests(runner) {
    runner.test('RigidBody: Gravity Integration', (t) => {
        const body = new RigidBody({ x: 0, y: 0, mass: 1 });
        const gravity = new Vector2(0, 100);
        body.integrate(0.1, gravity);

        t.assertClose(body.velocity.y, 10);
        t.assertClose(body.position.y, 1);
    });

    runner.test('RigidBody: Static Body Immobility', (t) => {
        const staticBody = new RigidBody({ x: 100, y: 100, type: 'static' });
        staticBody.applyForce(new Vector2(500, 500));
        staticBody.integrate(0.1, new Vector2(0, 100));

        t.assertEqual(staticBody.position.x, 100);
        t.assertEqual(staticBody.position.y, 100);
    });
}
""")

    # 4. src/tests/test_collision.js
    write_file("src/tests/test_collision.js", """/**
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
""")

    # 5. src/tests/test_ai.js
    write_file("src/tests/test_ai.js", """/**
 * Unit Tests for Pathfinding & AI Behavior Trees
 */

import { PathfindingAStar } from '../ai/PathfindingAStar.js';

export function registerAITests(runner) {
    runner.test('A* Pathfinding: Direct Route', (t) => {
        const pathfinder = new PathfindingAStar(10, 10, () => true);
        const path = pathfinder.findPath(0, 0, 3, 0);

        t.assertTrue(path.length >= 4, 'Path should be at least 4 steps long');
        t.assertEqual(path[0].x, 0);
        t.assertEqual(path[path.length - 1].x, 3);
    });
}
""")

    git_commit("test(qa): add comprehensive unit test suite covering math, physics, AI, and engine core")
