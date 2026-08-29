# -*- coding: utf-8 -*-
from scripts.code_gen_lib import write_file, git_commit

def build_partE():
    # src/core/InputManager.js
    write_file("src/core/InputManager.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Unified Keyboard, Mouse, Touch, and Action Input Coordinator
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class InputManager {
    constructor(targetElement = null) {
        this.target = targetElement || (typeof window !== 'undefined' ? window : null);

        this.keys = new Map();
        this.keysJustPressed = new Set();
        this.keysJustReleased = new Set();

        this.mouse = {
            x: 0,
            y: 0,
            screenX: 0,
            screenY: 0,
            worldX: 0,
            worldY: 0,
            isDown: false,
            justPressed: false,
            justReleased: false,
            button: -1,
            wheelDelta: 0
        };

        this.touch = {
            active: false,
            touches: new Map(),
            virtualStick: {
                active: false,
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                vectorX: 0,
                vectorY: 0
            }
        };

        this.actionBindings = new Map();
        this.enabled = true;

        this._setupDefaultBindings();
        this._bindEventListeners();
    }

    _setupDefaultBindings() {
        this.bindAction('move_up', ['KeyW', 'ArrowUp']);
        this.bindAction('move_down', ['KeyS', 'ArrowDown']);
        this.bindAction('move_left', ['KeyA', 'ArrowLeft']);
        this.bindAction('move_right', ['KeyD', 'ArrowRight']);
        this.bindAction('jump', ['Space', 'KeyW', 'ArrowUp']);
        this.bindAction('attack', ['KeyJ', 'Space']);
        this.bindAction('dash', ['ShiftLeft', 'KeyK']);
        this.bindAction('interact', ['KeyE']);
        this.bindAction('pause', ['Escape', 'KeyP']);
    }

    bindAction(actionName, keyCodes) {
        this.actionBindings.set(actionName, Array.isArray(keyCodes) ? keyCodes : [keyCodes]);
    }

    _bindEventListeners() {
        if (!this.target || typeof window === 'undefined') return;

        window.addEventListener('keydown', (e) => this._onKeyDown(e), { passive: false });
        window.addEventListener('keyup', (e) => this._onKeyUp(e), { passive: false });
        window.addEventListener('mousemove', (e) => this._onMouseMove(e), { passive: true });
        window.addEventListener('mousedown', (e) => this._onMouseDown(e), { passive: false });
        window.addEventListener('mouseup', (e) => this._onMouseUp(e), { passive: false });
        window.addEventListener('wheel', (e) => this._onWheel(e), { passive: true });

        window.addEventListener('touchstart', (e) => this._onTouchStart(e), { passive: false });
        window.addEventListener('touchmove', (e) => this._onTouchMove(e), { passive: false });
        window.addEventListener('touchend', (e) => this._onTouchEnd(e), { passive: false });
        window.addEventListener('touchcancel', (e) => this._onTouchEnd(e), { passive: false });

        if (this.target && this.target.addEventListener) {
            this.target.addEventListener('contextmenu', (e) => e.preventDefault());
        }
    }

    _onKeyDown(e) {
        if (!this.enabled) return;
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Space'].includes(e.code)) {
            e.preventDefault();
        }

        if (!this.keys.get(e.code)) {
            this.keysJustPressed.add(e.code);
        }
        this.keys.set(e.code, true);
    }

    _onKeyUp(e) {
        if (!this.enabled) return;
        this.keys.set(e.code, false);
        this.keysJustReleased.add(e.code);
    }

    _onMouseMove(e) {
        const rect = this.target && this.target.getBoundingClientRect ? this.target.getBoundingClientRect() : { left: 0, top: 0 };
        this.mouse.screenX = e.clientX;
        this.mouse.screenY = e.clientY;
        this.mouse.x = e.clientX - rect.left;
        this.mouse.y = e.clientY - rect.top;
    }

    _onMouseDown(e) {
        if (!this.enabled) return;
        this.mouse.isDown = true;
        this.mouse.justPressed = true;
        this.mouse.button = e.button;
    }

    _onMouseUp(e) {
        if (!this.enabled) return;
        this.mouse.isDown = false;
        this.mouse.justReleased = true;
    }

    _onWheel(e) {
        this.mouse.wheelDelta = Math.sign(e.deltaY);
    }

    _onTouchStart(e) {
        if (!this.enabled) return;
        this.touch.active = true;
        for (let i = 0; i < e.changedTouches.length; i++) {
            const t = e.changedTouches[i];
            this.touch.touches.set(t.identifier, {
                startX: t.clientX,
                startY: t.clientY,
                currentX: t.clientX,
                currentY: t.clientY
            });

            if (t.clientX < window.innerWidth / 2 && !this.touch.virtualStick.active) {
                this.touch.virtualStick.active = true;
                this.touch.virtualStick.startX = t.clientX;
                this.touch.virtualStick.startY = t.clientY;
                this.touch.virtualStick.currentX = t.clientX;
                this.touch.virtualStick.currentY = t.clientY;
                this.touch.virtualStick.vectorX = 0;
                this.touch.virtualStick.vectorY = 0;
            }
        }
    }

    _onTouchMove(e) {
        if (!this.enabled) return;
        for (let i = 0; i < e.changedTouches.length; i++) {
            const t = e.changedTouches[i];
            if (this.touch.touches.has(t.identifier)) {
                const touchObj = this.touch.touches.get(t.identifier);
                touchObj.currentX = t.clientX;
                touchObj.currentY = t.clientY;
            }

            if (this.touch.virtualStick.active && t.clientX < window.innerWidth / 2) {
                this.touch.virtualStick.currentX = t.clientX;
                this.touch.virtualStick.currentY = t.clientY;
                const dx = t.clientX - this.touch.virtualStick.startX;
                const dy = t.clientY - this.touch.virtualStick.startY;
                const dist = Math.hypot(dx, dy);
                const maxRadius = 60;
                const clampedDist = Math.min(dist, maxRadius);
                const angle = Math.atan2(dy, dx);
                this.touch.virtualStick.vectorX = (Math.cos(angle) * (clampedDist / maxRadius));
                this.touch.virtualStick.vectorY = (Math.sin(angle) * (clampedDist / maxRadius));
            }
        }
    }

    _onTouchEnd(e) {
        for (let i = 0; i < e.changedTouches.length; i++) {
            const t = e.changedTouches[i];
            this.touch.touches.delete(t.identifier);
        }

        if (this.touch.touches.size === 0) {
            this.touch.active = false;
            this.touch.virtualStick.active = false;
            this.touch.virtualStick.vectorX = 0;
            this.touch.virtualStick.vectorY = 0;
        }
    }

    isKeyDown(code) {
        return !!this.keys.get(code);
    }

    isKeyJustPressed(code) {
        return this.keysJustPressed.has(code);
    }

    isKeyJustReleased(code) {
        return this.keysJustReleased.has(code);
    }

    isActionDown(actionName) {
        const bindings = this.actionBindings.get(actionName);
        if (!bindings) return false;
        return bindings.some(code => this.isKeyDown(code));
    }

    isActionJustPressed(actionName) {
        const bindings = this.actionBindings.get(actionName);
        if (!bindings) return false;
        return bindings.some(code => this.isKeyJustPressed(code));
    }

    getMovementVector() {
        let x = 0;
        let y = 0;

        if (this.isActionDown('move_left')) x -= 1;
        if (this.isActionDown('move_right')) x += 1;
        if (this.isActionDown('move_up')) y -= 1;
        if (this.isActionDown('move_down')) y += 1;

        if (this.touch.virtualStick.active) {
            x += this.touch.virtualStick.vectorX;
            y += this.touch.virtualStick.vectorY;
        }

        const len = Math.hypot(x, y);
        if (len > 1.0) {
            x /= len;
            y /= len;
        }

        return { x, y };
    }

    update() {
        this.keysJustPressed.clear();
        this.keysJustReleased.clear();
        this.mouse.justPressed = false;
        this.mouse.justReleased = false;
        this.mouse.wheelDelta = 0;
    }
}
""")

    # src/core/GamepadHandler.js
    write_file("src/core/GamepadHandler.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * HTML5 Gamepad Controller Abstraction & Dual-Motor Haptic Vibration
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class GamepadHandler {
    constructor() {
        this.controllers = new Map();
        this.deadzone = 0.18;
        this.vibrationSupported = false;

        this._bindEvents();
    }

    _bindEvents() {
        if (typeof window === 'undefined') return;

        window.addEventListener('gamepadconnected', (e) => {
            console.info(`[GamepadHandler] Gamepad connected at index ${e.gamepad.index}: ${e.gamepad.id}`);
            this.controllers.set(e.gamepad.index, {
                id: e.gamepad.id,
                index: e.gamepad.index,
                previousButtons: new Map(),
                axes: [0, 0, 0, 0]
            });
        });

        window.addEventListener('gamepaddisconnected', (e) => {
            console.info(`[GamepadHandler] Gamepad disconnected from index ${e.gamepad.index}`);
            this.controllers.delete(e.gamepad.index);
        });
    }

    poll() {
        if (typeof navigator === 'undefined' || !navigator.getGamepads) return;

        const rawGamepads = navigator.getGamepads();
        for (let i = 0; i < rawGamepads.length; i++) {
            const gp = rawGamepads[i];
            if (gp && this.controllers.has(gp.index)) {
                const state = this.controllers.get(gp.index);
                state.axes = gp.axes.map(val => this._applyDeadzone(val));
            }
        }
    }

    _applyDeadzone(value) {
        if (Math.abs(value) < this.deadzone) return 0.0;
        const sign = Math.sign(value);
        return sign * ((Math.abs(value) - this.deadzone) / (1.0 - this.deadzone));
    }

    getLeftStick(gamepadIndex = 0) {
        const gp = this._getGamepad(gamepadIndex);
        if (!gp || gp.axes.length < 2) return { x: 0, y: 0 };
        return {
            x: this._applyDeadzone(gp.axes[0]),
            y: this._applyDeadzone(gp.axes[1])
        };
    }

    getRightStick(gamepadIndex = 0) {
        const gp = this._getGamepad(gamepadIndex);
        if (!gp || gp.axes.length < 4) return { x: 0, y: 0 };
        return {
            x: this._applyDeadzone(gp.axes[2]),
            y: this._applyDeadzone(gp.axes[3])
        };
    }

    isButtonDown(buttonIndex, gamepadIndex = 0) {
        const gp = this._getGamepad(gamepadIndex);
        if (!gp || !gp.buttons[buttonIndex]) return false;
        return gp.buttons[buttonIndex].pressed;
    }

    getTriggerValue(triggerIndex, gamepadIndex = 0) {
        const gp = this._getGamepad(gamepadIndex);
        if (!gp || !gp.buttons[triggerIndex]) return 0.0;
        return gp.buttons[triggerIndex].value;
    }

    async vibrate(gamepadIndex = 0, durationMs = 200, strongMagnitude = 0.5, weakMagnitude = 0.5) {
        const gp = this._getGamepad(gamepadIndex);
        if (!gp || !gp.vibrationActuator) return false;

        try {
            await gp.vibrationActuator.playEffect('dual-rumble', {
                startDelay: 0,
                duration: durationMs,
                strongMagnitude: Math.min(1.0, Math.max(0.0, strongMagnitude)),
                weakMagnitude: Math.min(1.0, Math.max(0.0, weakMagnitude))
            });
            return true;
        } catch (e) {
            return false;
        }
    }

    _getGamepad(index) {
        if (typeof navigator === 'undefined' || !navigator.getGamepads) return null;
        const gps = navigator.getGamepads();
        return gps[index] || null;
    }

    isConnected(index = 0) {
        return !!this._getGamepad(index);
    }
}
""")

    # src/core/GameLoop.js
    write_file("src/core/GameLoop.js", """/**
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
""")

    # src/core/Engine.js
    write_file("src/core/Engine.js", """/**
 * NovaForge Game Engine & Arcade Studio
 * Central Orchestrator & Master Subsystem Registry
 * @author NovaForge Engineering Team
 * @license MIT
 */

import { EngineConfig, ConfigurationManager } from './Config.js';
import { Timer } from './Timer.js';
import { EventBus } from './EventBus.js';
import { StateMachine } from './StateMachine.js';
import { StorageManager } from './StorageManager.js';
import { InputManager } from './InputManager.js';
import { GamepadHandler } from './GamepadHandler.js';
import { GameLoop } from './GameLoop.js';

export class NovaEngine {
    constructor(canvasElement = null, customConfig = {}) {
        this.canvas = canvasElement;
        this.ctx = canvasElement && canvasElement.getContext ? canvasElement.getContext('2d') : null;

        this.config = new ConfigurationManager();
        if (customConfig) {
            for (const [k, v] of Object.entries(customConfig)) {
                this.config.set(k, v);
            }
        }

        this.events = new EventBus();
        this.timer = new Timer();
        this.storage = new StorageManager(this.config.get('STORAGE.NAMESPACE', 'novaforge_engine_v2'));
        this.input = new InputManager(canvasElement);
        this.gamepad = new GamepadHandler();
        this.stateMachine = new StateMachine(this);

        this.scenes = new Map();
        this.activeScene = null;
        this.isInitialized = false;

        this.gameLoop = new GameLoop(
            (dt) => this._fixedUpdate(dt),
            (alpha) => this._render(alpha),
            this.config.get('DISPLAY.FIXED_TIMESTEP', 1 / 60)
        );
    }

    async init() {
        if (this.isInitialized) return this;

        this.timer.init();
        await this.storage.initIndexedDB();
        this._setupCanvas();

        this.isInitialized = true;
        this.events.emit('engine:ready', { version: EngineConfig.VERSION });
        console.info(`[NovaEngine] v${EngineConfig.VERSION} successfully initialized.`);
        return this;
    }

    _setupCanvas() {
        if (!this.canvas) return;

        const targetW = this.config.get('DISPLAY.DEFAULT_WIDTH', 1280);
        const targetH = this.config.get('DISPLAY.DEFAULT_HEIGHT', 720);

        this.canvas.width = targetW;
        this.canvas.height = targetH;

        if (this.ctx) {
            this.ctx.imageSmoothingEnabled = this.config.get('DISPLAY.IMAGE_SMOOTHING', false);
        }
    }

    registerScene(name, sceneInstance) {
        if (!name || !sceneInstance) {
            throw new Error('[NovaEngine] Invalid scene registration.');
        }
        this.scenes.set(name, sceneInstance);
        sceneInstance.engine = this;
        return this;
    }

    async switchScene(name, transitionParams = {}) {
        if (!this.scenes.has(name)) {
            console.error(`[NovaEngine] Scene '${name}' not registered.`);
            return false;
        }

        const targetScene = this.scenes.get(name);

        if (this.activeScene && typeof this.activeScene.onDestroy === 'function') {
            await this.activeScene.onDestroy();
        }

        this.activeScene = targetScene;

        if (typeof this.activeScene.onCreate === 'function') {
            await this.activeScene.onCreate(transitionParams);
        }

        this.events.emit('scene:changed', { sceneName: name });
        return true;
    }

    start() {
        if (!this.isInitialized) {
            this.init().then(() => this.start());
            return;
        }
        this.gameLoop.start();
        this.events.emit('engine:started');
    }

    stop() {
        this.gameLoop.stop();
        this.events.emit('engine:stopped');
    }

    _fixedUpdate(dt) {
        this.timer.update();
        this.gamepad.poll();

        if (this.activeScene && typeof this.activeScene.update === 'function') {
            this.activeScene.update(dt);
        }

        this.stateMachine.update(dt);
        this.input.update();
    }

    _render(alpha) {
        if (!this.ctx || !this.canvas) return;

        this.ctx.fillStyle = this.config.get('DISPLAY.CLEAR_COLOR', '#0a0a14');
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        if (this.activeScene && typeof this.activeScene.render === 'function') {
            this.activeScene.render(this.ctx, alpha);
        }

        this.stateMachine.render(this.ctx);
    }
}
""")

    git_commit("feat(core): initialize NovaForge engine foundation, game loop, event bus, and state management")
