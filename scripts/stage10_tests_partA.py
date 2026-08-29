# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file

def build_partA():
    # 1. src/tests/test_runner.js
    write_file("src/tests/test_runner.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Automated Unit Test Framework & Runner
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class TestRunner {
    constructor() {
        this.tests = [];
        this.passed = 0;
        this.failed = 0;
    }

    test(name, fn) {
        this.tests.push({ name, fn });
    }

    assertEqual(actual, expected, msg = '') {
        if (actual !== expected) {
            throw new Error(`Assertion Failed: ${msg} | Expected [${expected}] but got [${actual}]`);
        }
    }

    assertClose(actual, expected, tolerance = 1e-4, msg = '') {
        if (Math.abs(actual - expected) > tolerance) {
            throw new Error(`Assertion Failed: ${msg} | Expected ~[${expected}] but got [${actual}]`);
        }
    }

    assertTrue(condition, msg = '') {
        if (!condition) {
            throw new Error(`Assertion Failed: Expected TRUE but got FALSE. ${msg}`);
        }
    }

    async run() {
        console.log('====================================');
        console.log('?? Running NovaForge Automated Test Suite');
        console.log('====================================');

        for (const t of this.tests) {
            try {
                await t.fn(this);
                this.passed++;
                console.log(`  ? PASS: ${t.name}`);
            } catch (err) {
                this.failed++;
                console.error(`  ? FAIL: ${t.name} -> ${err.message}`);
            }
        }

        console.log('====================================');
        console.log(`?? Test Results: ${this.passed} Passed, ${this.failed} Failed`);
        console.log('====================================');
        return this.failed === 0;
    }
}
""")

    # 2. src/tests/test_math.js
    write_file("src/tests/test_math.js", """/**
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
""")
