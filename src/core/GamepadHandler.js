/**
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
