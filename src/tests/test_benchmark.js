/**
 * NovaForge Physics & Math Performance Benchmark Suite
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../math/Vector2.js';
import { SATCollision } from '../physics/SATCollision.js';
import { CircleCollider } from '../physics/CircleCollider.js';

export function runBenchmarks(iterations = 10000) {
    console.log(`?? Running Performance Benchmark (${iterations} iterations)...`);

    const startMath = performance.now();
    const v1 = new Vector2(10, 20);
    const v2 = new Vector2(30, 40);
    for (let i = 0; i < iterations; i++) {
        v1.add(v2).normalize().rotate(0.01);
    }
    const mathTime = performance.now() - startMath;
    console.log(`  ?? Vector2 Benchmark: ${mathTime.toFixed(2)}ms`);

    const startSAT = performance.now();
    const c1 = new CircleCollider(15);
    const c2 = new CircleCollider(15);
    c1.updateBounds(new Vector2(0, 0));
    c2.updateBounds(new Vector2(10, 0));
    for (let i = 0; i < iterations; i++) {
        SATCollision.testCollision(c1, null, c2, null);
    }
    const satTime = performance.now() - startSAT;
    console.log(`  ?? SAT Collision Benchmark: ${satTime.toFixed(2)}ms`);
}
