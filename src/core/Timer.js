/**
 * NovaForge Game Engine & Arcade Studio
 * High-Precision Delta Timer, Schedulers, and Easing Tweens
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class Timer {
    constructor() {
        this.lastTime = 0;
        this.currentTime = 0;
        this.deltaTime = 0;
        this.unscaledDeltaTime = 0;
        this.totalElapsedTime = 0;
        this.timeScale = 1.0;
        this.isPaused = false;
        this.frameCount = 0;
        this.fps = 60;
        this.fpsSmoothing = 0.9;
        this.lastFpsUpdate = 0;

        this.scheduledTasks = [];
        this.activeTweens = [];
    }

    init() {
        const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
        this.lastTime = now;
        this.currentTime = now;
        this.totalElapsedTime = 0;
        this.deltaTime = 0;
        this.unscaledDeltaTime = 0;
        this.frameCount = 0;
        this.lastFpsUpdate = now;
    }

    update() {
        const now = typeof performance !== 'undefined' ? performance.now() : Date.now();
        this.currentTime = now;
        const rawDelta = (now - this.lastTime) / 1000.0;
        this.lastTime = now;

        const clampedDelta = Math.min(rawDelta, 0.1);
        this.unscaledDeltaTime = clampedDelta;

        if (this.isPaused) {
            this.deltaTime = 0.0;
        } else {
            this.deltaTime = clampedDelta * this.timeScale;
            this.totalElapsedTime += this.deltaTime;
        }

        this.frameCount++;

        if (now - this.lastFpsUpdate >= 250) {
            const currentFps = this.unscaledDeltaTime > 0 ? (1.0 / this.unscaledDeltaTime) : 60;
            this.fps = (this.fps * this.fpsSmoothing) + (currentFps * (1.0 - this.fpsSmoothing));
            this.lastFpsUpdate = now;
        }

        this._processSchedulers(this.deltaTime);
        this._processTweens(this.deltaTime);
    }

    setTimeScale(scale) {
        this.timeScale = Math.max(0.0, scale);
    }

    pause() { this.isPaused = true; }
    resume() { this.isPaused = false; }
    togglePause() { this.isPaused = !this.isPaused; return this.isPaused; }

    after(delaySeconds, callback, context = null) {
        const task = {
            remaining: delaySeconds,
            duration: delaySeconds,
            callback,
            context,
            repeat: false,
            cancelled: false
        };
        this.scheduledTasks.push(task);
        return () => { task.cancelled = true; };
    }

    every(intervalSeconds, callback, context = null, maxRuns = Infinity) {
        const task = {
            remaining: intervalSeconds,
            duration: intervalSeconds,
            callback,
            context,
            repeat: true,
            runsLeft: maxRuns,
            cancelled: false
        };
        this.scheduledTasks.push(task);
        return () => { task.cancelled = true; };
    }

    tween(target, properties, duration, easing = 'easeInOutQuad', onComplete = null) {
        const startValues = {};
        const changeValues = {};

        for (const prop in properties) {
            if (Object.prototype.hasOwnProperty.call(properties, prop) && typeof target[prop] === 'number') {
                startValues[prop] = target[prop];
                changeValues[prop] = properties[prop] - target[prop];
            }
        }

        const tweenInstance = {
            target,
            startValues,
            changeValues,
            duration,
            elapsed: 0,
            easing: typeof easing === 'string' ? Timer.Easings[easing] || Timer.Easings.linear : easing,
            onComplete,
            cancelled: false
        };

        this.activeTweens.push(tweenInstance);
        return {
            cancel: () => { tweenInstance.cancelled = true; },
            progress: () => Math.min(1, tweenInstance.elapsed / tweenInstance.duration)
        };
    }

    _processSchedulers(dt) {
        if (dt <= 0) return;
        for (let i = this.scheduledTasks.length - 1; i >= 0; i--) {
            const task = this.scheduledTasks[i];
            if (task.cancelled) { this.scheduledTasks.splice(i, 1); continue; }
            task.remaining -= dt;
            if (task.remaining <= 0) {
                try { task.callback.call(task.context); } catch (err) { console.error('[Timer] Error:', err); }
                if (task.repeat) {
                    task.runsLeft--;
                    if (task.runsLeft <= 0) this.scheduledTasks.splice(i, 1);
                    else task.remaining = task.duration;
                } else this.scheduledTasks.splice(i, 1);
            }
        }
    }

    _processTweens(dt) {
        if (dt <= 0) return;
        for (let i = this.activeTweens.length - 1; i >= 0; i--) {
            const tw = this.activeTweens[i];
            if (tw.cancelled) { this.activeTweens.splice(i, 1); continue; }
            tw.elapsed += dt;
            const progress = Math.min(1.0, tw.elapsed / tw.duration);
            const easedProgress = tw.easing(progress);

            for (const prop in tw.changeValues) {
                tw.target[prop] = tw.startValues[prop] + (tw.changeValues[prop] * easedProgress);
            }

            if (progress >= 1.0) {
                this.activeTweens.splice(i, 1);
                if (typeof tw.onComplete === 'function') {
                    try { tw.onComplete(tw.target); } catch (err) { console.error('[Timer] Tween complete error:', err); }
                }
            }
        }
    }

    clear() { this.scheduledTasks = []; this.activeTweens = []; }

    static Easings = {
        linear: t => t,
        easeInQuad: t => t * t,
        easeOutQuad: t => t * (2 - t),
        easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
        easeInCubic: t => t * t * t,
        easeOutCubic: t => (--t) * t * t + 1,
        easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
        easeInElastic: t => (0.04 - 0.04 / t) * Math.sin(25 * t) + 1,
        easeOutElastic: t => 0.04 * t / (--t) * Math.sin(25 * t),
        easeOutBounce: t => {
            const n1 = 7.5625; const d1 = 2.75;
            if (t < 1 / d1) return n1 * t * t;
            else if (t < 2 / d1) return n1 * (t -= 1.5 / d1) * t + 0.75;
            else if (t < 2.5 / d1) return n1 * (t -= 2.25 / d1) * t + 0.9375;
            else return n1 * (t -= 2.625 / d1) * t + 0.984375;
        }
    };
}
