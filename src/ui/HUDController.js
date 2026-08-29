/**
 * NovaForge Game Engine & Arcade Studio
 * Heads-Up Display Controller (Health, Mana, Score, Boss Bar)
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class HUDController {
    constructor() {
        this.health = 100;
        this.maxHealth = 100;
        this.score = 0;
        this.level = 1;
    }

    setHealth(current, max) {
        this.health = current;
        this.maxHealth = max;
    }

    addScore(points) {
        this.score += points;
    }
}
