/**
 * NovaForge Game Engine & Arcade Studio
 * Unified Keyboard, Mouse, Touch, and Action Input Coordinator
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
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
