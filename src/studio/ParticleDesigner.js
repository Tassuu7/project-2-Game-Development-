/**
 * NovaForge Game Engine & Arcade Studio
 * Real-Time Visual Particle Emitter Designer
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class ParticleDesigner {
    constructor() {
        this.config = {
            rate: 50,
            lifetime: 1.0,
            speed: 120,
            spread: Math.PI * 0.5,
            startSize: 6,
            endSize: 0,
            color: '#ffaa00',
            gravityY: 150
        };
    }

    getConfig() {
        return Object.assign({}, this.config);
    }

    setConfig(newConfig) {
        this.config = Object.assign(this.config, newConfig);
    }
}
