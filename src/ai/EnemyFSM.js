/**
 * NovaForge Game Engine & Arcade Studio
 * Combat Enemy Tactical Finite State Machine
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class EnemyFSM {
    constructor(enemy) {
        this.enemy = enemy;
        this.state = 'PATROL'; // PATROL | CHASE | ATTACK | FLEE
        this.patrolTimer = 0;
    }

    update(dt, player) {
        const enemy = this.enemy;
        if (!player) return;

        const dist = Math.hypot(player.position.x - enemy.position.x, player.position.y - enemy.position.y);

        switch (this.state) {
            case 'PATROL':
                this.patrolTimer += dt;
                if (this.patrolTimer > 2.0) {
                    this.patrolTimer = 0;
                    enemy.velocity.x = (Math.random() - 0.5) * 60;
                    enemy.velocity.y = (Math.random() - 0.5) * 60;
                }
                if (dist < 200) {
                    this.state = 'CHASE';
                }
                break;

            case 'CHASE':
                const dx = player.position.x - enemy.position.x;
                const dy = player.position.y - enemy.position.y;
                const angle = Math.atan2(dy, dx);
                enemy.velocity.x = Math.cos(angle) * 120;
                enemy.velocity.y = Math.sin(angle) * 120;

                if (dist < 40) {
                    this.state = 'ATTACK';
                } else if (dist > 350) {
                    this.state = 'PATROL';
                }
                break;

            case 'ATTACK':
                enemy.velocity.set(0, 0);
                if (enemy.attackCooldown <= 0) {
                    enemy.performAttack(player);
                    enemy.attackCooldown = 1.0;
                }
                if (dist > 50) {
                    this.state = 'CHASE';
                }
                break;
        }
    }
}
