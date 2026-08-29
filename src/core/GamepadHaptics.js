/**
 * NovaForge Game Engine - Dual-Motor Gamepad Vibration & Haptics Subsystem
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class GamepadHaptics {
    constructor() {
        this.enabled = true;
    }

    vibrate(durationMs = 200, strongMagnitude = 0.5, weakMagnitude = 0.5) {
        if (!this.enabled || typeof navigator === 'undefined' || !navigator.getGamepads) return;

        const gamepads = navigator.getGamepads();
        for (const gp of gamepads) {
            if (gp && gp.vibrationActuator && typeof gp.vibrationActuator.playEffect === 'function') {
                try {
                    gp.vibrationActuator.playEffect('dual-rumble', {
                        startDelay: 0,
                        duration: durationMs,
                        weakMagnitude: Math.min(1.0, Math.max(0.0, weakMagnitude)),
                        strongMagnitude: Math.min(1.0, Math.max(0.0, strongMagnitude))
                    });
                } catch (e) {}
            }
        }
    }

    pulseExplosion() {
        this.vibrate(350, 0.9, 0.4);
    }

    pulseLaser() {
        this.vibrate(80, 0.2, 0.6);
    }

    pulseDamage() {
        this.vibrate(250, 0.8, 0.8);
    }
}
