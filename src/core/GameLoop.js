/**
 * NovaForge Game Engine & Arcade Studio
 * Fixed-Timestep Physics & Smooth Render Game Loop
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class GameLoop {
    constructor(updateFn, renderFn, fixedTimestep = 1 / 60) {
        this.updateFn = updateFn || (() => {});
        this.renderFn = renderFn || (() => {});
        this.fixedTimestep = fixedTimestep;

        this.isRunning = false;
        this.animationFrameId = null;
        this.lastTime = 0;
        this.accumulator = 0;
        this.maxAccumulator = 0.25;

        this.fps = 60;
        this.frameTime = 0;
        this.performanceSamples = [];
        this.maxSamples = 60;
    }

    start() {
        if (this.isRunning) return;
        this.isRunning = true;
        this.lastTime = typeof performance !== 'undefined' ? performance.now() : Date.now();
        this.accumulator = 0;

        const loop = (currentTime) => {
            if (!this.isRunning) return;

            const frameStart = performance.now();
            const elapsedSeconds = (currentTime - this.lastTime) / 1000.0;
            this.lastTime = currentTime;

            const clampedDelta = Math.min(elapsedSeconds, this.maxAccumulator);
            this.accumulator += clampedDelta;

            while (this.accumulator >= this.fixedTimestep) {
                this.updateFn(this.fixedTimestep);
                this.accumulator -= this.fixedTimestep;
            }

            const alpha = this.accumulator / this.fixedTimestep;
            this.renderFn(alpha);

            const frameEnd = performance.now();
            this.frameTime = frameEnd - frameStart;

            this.performanceSamples.push(this.frameTime);
            if (this.performanceSamples.length > this.maxSamples) {
                this.performanceSamples.shift();
            }

            if (typeof window !== 'undefined') {
                this.animationFrameId = window.requestAnimationFrame(loop);
            }
        };

        if (typeof window !== 'undefined') {
            this.animationFrameId = window.requestAnimationFrame(loop);
        }
    }

    stop() {
        this.isRunning = false;
        if (this.animationFrameId && typeof window !== 'undefined') {
            window.cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
    }

    getAverageFrameTime() {
        if (this.performanceSamples.length === 0) return 16.67;
        const sum = this.performanceSamples.reduce((a, b) => a + b, 0);
        return sum / this.performanceSamples.length;
    }
}
