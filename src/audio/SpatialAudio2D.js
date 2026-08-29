/**
 * NovaForge Game Engine & Arcade Studio
 * Positional 2D Spatial Audio with Stereo Panning & Distance Attenuation
 * @author NovaForge Engineering Team
 * @license MIT
 */

export class SpatialAudio2D {
    static calculatePanning(listenerPos, soundPos, maxDistance = 800) {
        const dx = soundPos.x - listenerPos.x;
        const dy = soundPos.y - listenerPos.y;
        const dist = Math.hypot(dx, dy);

        // Pan: -1 (full left) to +1 (full right)
        const pan = Math.max(-1.0, Math.min(1.0, dx / (maxDistance * 0.5)));

        // Volume attenuation: 1.0 (close) to 0.0 (far)
        const volume = Math.max(0.0, Math.min(1.0, 1.0 - (dist / maxDistance)));

        return { pan, volume, dist };
    }
}
