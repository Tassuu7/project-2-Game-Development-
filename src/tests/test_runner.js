/**
 * NovaForge Game Engine & Arcade Studio
 * Automated Unit Test Framework & Runner
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
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
