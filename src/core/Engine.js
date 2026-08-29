/**
 * NovaForge Game Engine & Arcade Studio
 * Central Orchestrator & Master Subsystem Registry
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
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
