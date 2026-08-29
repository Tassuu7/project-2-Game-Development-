/**
 * NovaForge Game Engine - Virtual Touch D-Pad & Action Buttons for Mobile
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../math/Vector2.js';

export class TouchControls {
    constructor(canvas) {
        this.canvas = canvas;
        this.enabled = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        this.joystickCenter = new Vector2(100, 600);
        this.joystickStick = new Vector2(100, 600);
        this.joystickTouchId = null;
        this.direction = new Vector2(0, 0);

        this.actionBtnCenter = new Vector2(1180, 600);
        this.actionRadius = 45;
        this.actionPressed = false;

        if (this.enabled) {
            this._initTouchEvents();
        }
    }

    _initTouchEvents() {
        if (!this.canvas) return;

        this.canvas.addEventListener('touchstart', (e) => this._handleTouchStart(e), { passive: false });
        this.canvas.addEventListener('touchmove', (e) => this._handleTouchMove(e), { passive: false });
        this.canvas.addEventListener('touchend', (e) => this._handleTouchEnd(e), { passive: false });
    }

    _handleTouchStart(e) {
        e.preventDefault();
        const rect = this.canvas.getBoundingClientRect();
        for (let i = 0; i < e.changedTouches.length; i++) {
            const t = e.changedTouches[i];
            const tx = (t.clientX - rect.left) * (this.canvas.width / rect.width);
            const ty = (t.clientY - rect.top) * (this.canvas.height / rect.height);

            // Left side = Joystick
            if (tx < this.canvas.width * 0.5 && this.joystickTouchId === null) {
                this.joystickTouchId = t.identifier;
                this.joystickCenter.set(tx, ty);
                this.joystickStick.set(tx, ty);
            }

            // Right side = Action button
            if (tx >= this.canvas.width * 0.5) {
                if (Math.hypot(tx - this.actionBtnCenter.x, ty - this.actionBtnCenter.y) < this.actionRadius * 1.5) {
                    this.actionPressed = true;
                }
            }
        }
    }

    _handleTouchMove(e) {
        e.preventDefault();
        const rect = this.canvas.getBoundingClientRect();
        for (let i = 0; i < e.changedTouches.length; i++) {
            const t = e.changedTouches[i];
            if (t.identifier === this.joystickTouchId) {
                const tx = (t.clientX - rect.left) * (this.canvas.width / rect.width);
                const ty = (t.clientY - rect.top) * (this.canvas.height / rect.height);
                const dx = tx - this.joystickCenter.x;
                const dy = ty - this.joystickCenter.y;
                const dist = Math.hypot(dx, dy);
                const maxRadius = 50;

                if (dist > maxRadius) {
                    this.joystickStick.x = this.joystickCenter.x + (dx / dist) * maxRadius;
                    this.joystickStick.y = this.joystickCenter.y + (dy / dist) * maxRadius;
                } else {
                    this.joystickStick.set(tx, ty);
                }

                this.direction.set(dx / maxRadius, dy / maxRadius);
            }
        }
    }

    _handleTouchEnd(e) {
        for (let i = 0; i < e.changedTouches.length; i++) {
            const t = e.changedTouches[i];
            if (t.identifier === this.joystickTouchId) {
                this.joystickTouchId = null;
                this.joystickStick.copy(this.joystickCenter);
                this.direction.set(0, 0);
            }
        }
        this.actionPressed = false;
    }

    render(ctx) {
        if (!this.enabled) return;

        // Draw Joystick Base
        ctx.fillStyle = 'rgba(0, 229, 255, 0.15)';
        ctx.strokeStyle = '#00e5ff';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(this.joystickCenter.x, this.joystickCenter.y, 50, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Draw Joystick Thumbstick
        ctx.fillStyle = '#00e5ff';
        ctx.beginPath();
        ctx.arc(this.joystickStick.x, this.joystickStick.y, 24, 0, Math.PI * 2);
        ctx.fill();

        // Draw Action Button
        ctx.fillStyle = this.actionPressed ? '#ff0055' : 'rgba(255, 0, 85, 0.3)';
        ctx.strokeStyle = '#ff0055';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(this.actionBtnCenter.x, this.actionBtnCenter.y, this.actionRadius, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }
}
