/**
 * NovaForge Game Engine & Arcade Studio
 * State-Based Sprite Frame Animation Player
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class AnimationController {
    constructor() {
        this.animations = new Map();
        this.currentAnim = null;
        this.currentFrame = 0;
        this.frameTimer = 0;
        this.isPlaying = false;
        this.onComplete = null;
    }

    addAnimation(name, frames, fps = 10, loop = true) {
        this.animations.set(name, {
            name,
            frames,
            frameDuration: 1.0 / Math.max(1, fps),
            loop
        });
        return this;
    }

    play(name, forceRestart = false, onComplete = null) {
        if (!this.animations.has(name)) return;
        if (this.currentAnim && this.currentAnim.name === name && !forceRestart && this.isPlaying) {
            return;
        }

        this.currentAnim = this.animations.get(name);
        this.currentFrame = 0;
        this.frameTimer = 0;
        this.isPlaying = true;
        this.onComplete = onComplete;
    }

    update(dt) {
        if (!this.isPlaying || !this.currentAnim) return;

        this.frameTimer += dt;
        if (this.frameTimer >= this.currentAnim.frameDuration) {
            this.frameTimer -= this.currentAnim.frameDuration;
            this.currentFrame++;

            if (this.currentFrame >= this.currentAnim.frames.length) {
                if (this.currentAnim.loop) {
                    this.currentFrame = 0;
                } else {
                    this.currentFrame = this.currentAnim.frames.length - 1;
                    this.isPlaying = false;
                    if (typeof this.onComplete === 'function') {
                        this.onComplete(this.currentAnim.name);
                    }
                }
            }
        }
    }

    getCurrentFrameIndex() {
        if (!this.currentAnim) return 0;
        return this.currentAnim.frames[this.currentFrame] || 0;
    }
}
