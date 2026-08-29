import { TestRunner } from '../src/tests/test_runner.js';
import { registerMathTests } from '../src/tests/test_math.js';
import { registerPhysicsTests } from '../src/tests/test_physics.js';
import { registerCollisionTests } from '../src/tests/test_collision.js';
import { registerAITests } from '../src/tests/test_ai.js';

async function main() {
    const runner = new TestRunner();
    registerMathTests(runner);
    registerPhysicsTests(runner);
    registerCollisionTests(runner);
    registerAITests(runner);

    const success = await runner.run();
    if (!success) {
        process.exit(1);
    }
}

main();
