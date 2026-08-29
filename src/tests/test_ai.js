/**
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
