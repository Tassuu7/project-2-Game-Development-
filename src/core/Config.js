/**
 * NovaForge Game Engine & Arcade Studio
 * Core Engine Configuration & Global Settings Registry
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export const EngineConfig = {
    VERSION: '2.4.0',
    NAME: 'NovaForge Game Engine',
    AUTHOR: 'NovaForge Engineering Team',
    BUILD_TARGET: 'TrainPlex-Compliant Standalone Web Platform',

    DISPLAY: {
        DEFAULT_WIDTH: 1280,
        DEFAULT_HEIGHT: 720,
        TARGET_FPS: 60,
        MAX_DELTA_TIME: 0.1,
        FIXED_TIMESTEP: 1 / 60,
        PIXEL_RATIO_AWARE: true,
        ASPECT_RATIO: 16 / 9,
        LETTERBOX: true,
        CLEAR_COLOR: '#0a0a14',
        ANTIALIASING: true,
        IMAGE_SMOOTHING: false
    },

    PHYSICS: {
        GRAVITY_X: 0.0,
        GRAVITY_Y: 980.0,
        RESTITUTION_DEFAULT: 0.25,
        STATIC_FRICTION_DEFAULT: 0.4,
        DYNAMIC_FRICTION_DEFAULT: 0.28,
        POSITION_ITERATIONS: 8,
        VELOCITY_ITERATIONS: 8,
        BAUMGARTE_FACTOR: 0.2,
        PENETRATION_SLOP: 0.05,
        QUADTREE_MAX_OBJECTS: 12,
        QUADTREE_MAX_LEVELS: 6,
        SPATIAL_HASH_CELL_SIZE: 64,
        SLEEP_VELOCITY_THRESHOLD: 0.05,
        SLEEP_TIME_THRESHOLD: 0.5
    },

    RENDERER: {
        ENABLE_LIGHTING: true,
        ENABLE_SHADOWS: true,
        ENABLE_POST_PROCESSING: true,
        BLOOM_INTENSITY: 0.65,
        BLOOM_THRESHOLD: 0.7,
        CHROMATIC_ABERRATION: 0.002,
        CRT_SCANLINES: true,
        VIGNETTE_STRENGTH: 0.35,
        PARTICLE_BATCH_LIMIT: 5000,
        MAX_LIGHTS_PER_SCENE: 64,
        OCCLUSION_SHADOW_SAMPLES: 32
    },

    AUDIO: {
        SAMPLE_RATE: 44100,
        MASTER_VOLUME: 0.8,
        BGM_VOLUME: 0.65,
        SFX_VOLUME: 0.9,
        VOICE_VOLUME: 1.0,
        DOPPLER_FACTOR: 1.0,
        DISTANCE_MODEL: 'inverse',
        MAX_DISTANCE: 1000,
        ROLLOFF_FACTOR: 1.5,
        MAX_POLYPHONY: 32,
        CHIPTUNE_TEMPO: 125
    },

    INPUT: {
        GAMEPAD_STICK_DEADZONE: 0.18,
        GAMEPAD_TRIGGER_THRESHOLD: 0.1,
        MOUSE_SMOOTHING: true,
        TOUCH_SENSITIVITY: 1.2,
        DOUBLE_TAP_TIMEOUT: 250,
        INPUT_BUFFER_SIZE: 16,
        KEY_BINDINGS: {
            MOVE_UP: ['KeyW', 'ArrowUp'],
            MOVE_DOWN: ['KeyS', 'ArrowDown'],
            MOVE_LEFT: ['KeyA', 'ArrowLeft'],
            MOVE_RIGHT: ['KeyD', 'ArrowRight'],
            ACTION_PRIMARY: ['Space', 'KeyJ'],
            ACTION_SECONDARY: ['KeyK', 'KeyZ'],
            ACTION_SPECIAL: ['KeyL', 'KeyX'],
            ACTION_DODGE: ['ShiftLeft', 'KeyC'],
            INTERACT: ['KeyE'],
            INVENTORY: ['KeyI', 'Tab'],
            PAUSE: ['Escape', 'KeyP'],
            CONSOLE: ['Backquote'],
            MUTE: ['KeyM'],
            RELOAD: ['KeyR'],
            DEBUG_OVERLAY: ['F1', 'F3'],
            FAST_FORWARD: ['Digit1', 'Digit2', 'Digit3']
        }
    },

    STORAGE: {
        NAMESPACE: 'novaforge_engine_save_v2',
        SAVE_SLOTS: 5,
        ENABLE_AUTO_SAVE: true,
        AUTO_SAVE_INTERVAL: 60,
        COMPRESSION_ENABLED: false,
        ENCRYPTION_SALT: 'novaforge_secret_salt_2026'
    },

    DEBUG: {
        ENABLED: false,
        SHOW_FPS: true,
        SHOW_COLLIDERS: false,
        SHOW_QUADTREE: false,
        SHOW_LIGHT_BOUNDS: false,
        SHOW_PATHFINDING_NODES: false,
        LOG_LEVEL: 'warn',
        BENCHMARK_PROFILER: false
    }
};

export class ConfigurationManager {
    constructor() {
        this.config = JSON.parse(JSON.stringify(EngineConfig));
        this.listeners = new Map();
    }

    get(path, defaultValue = null) {
        const parts = path.split('.');
        let current = this.config;
        for (const part of parts) {
            if (current === undefined || current === null || typeof current !== 'object') {
                return defaultValue;
            }
            current = current[part];
        }
        return current !== undefined ? current : defaultValue;
    }

    set(path, value) {
        const parts = path.split('.');
        let current = this.config;
        for (let i = 0; i < parts.length - 1; i++) {
            const part = parts[i];
            if (!(part in current) || typeof current[part] !== 'object') {
                current[part] = {};
            }
            current = current[part];
        }
        const lastKey = parts[parts.length - 1];
        const oldValue = current[lastKey];
        current[lastKey] = value;
        this._notify(path, value, oldValue);
    }

    subscribe(path, callback) {
        if (!this.listeners.has(path)) {
            this.listeners.set(path, new Set());
        }
        this.listeners.get(path).add(callback);
        return () => this.listeners.get(path)?.delete(callback);
    }

    _notify(path, newValue, oldValue) {
        if (this.listeners.has(path)) {
            for (const callback of this.listeners.get(path)) {
                try {
                    callback(newValue, oldValue, path);
                } catch (err) {
                    console.error(`[ConfigurationManager] Error notifying listener for ${path}:`, err);
                }
            }
        }
    }

    resetToDefaults() {
        this.config = JSON.parse(JSON.stringify(EngineConfig));
        for (const [path, callbacks] of this.listeners.entries()) {
            const val = this.get(path);
            callbacks.forEach(cb => cb(val, val, path));
        }
    }

    exportJSON() {
        return JSON.stringify(this.config, null, 2);
    }

    importJSON(jsonString) {
        try {
            const parsed = JSON.parse(jsonString);
            this.config = Object.assign({}, this.config, parsed);
            return true;
        } catch (e) {
            console.error('[ConfigurationManager] Failed to import JSON configuration:', e);
            return false;
        }
    }
}
