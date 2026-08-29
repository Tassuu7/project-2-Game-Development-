/**
 * NovaForge Cosmic Vanguard 50 Epic Multi-Phase Boss Battle Engines
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

import { Vector2 } from '../../math/Vector2.js';

export class CosmicBossEncounters {
    static createBossBattle_01(stageLevel = 1) {
        return {
            bossId: 'boss_encounter_01',
            title: 'Leviathan Dreadnought Mk-1',
            maxHealth: 2500,
            currentHealth: 2500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 18,
                    speed: 215,
                    fireCooldown: 0.55
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 26,
                    speed: 280,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 38,
                    speed: 360,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 700,
                experience: 550,
                rareItemTier: 1
            }
        };
    }
    static createBossBattle_02(stageLevel = 2) {
        return {
            bossId: 'boss_encounter_02',
            title: 'Solaris Titan Mk-2',
            maxHealth: 3000,
            currentHealth: 3000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 20,
                    speed: 230,
                    fireCooldown: 0.50
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 28,
                    speed: 300,
                    fireCooldown: 0.35
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 40,
                    speed: 380,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 900,
                experience: 700,
                rareItemTier: 1
            }
        };
    }
    static createBossBattle_03(stageLevel = 3) {
        return {
            bossId: 'boss_encounter_03',
            title: 'Quantum Eclipse Mk-3',
            maxHealth: 3500,
            currentHealth: 3500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 22,
                    speed: 245,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 30,
                    speed: 320,
                    fireCooldown: 0.30
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 42,
                    speed: 400,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 1100,
                experience: 850,
                rareItemTier: 1
            }
        };
    }
    static createBossBattle_04(stageLevel = 4) {
        return {
            bossId: 'boss_encounter_04',
            title: 'Cyber Overlord Mk-4',
            maxHealth: 4000,
            currentHealth: 4000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 24,
                    speed: 260,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 32,
                    speed: 340,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 44,
                    speed: 420,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 1300,
                experience: 1000,
                rareItemTier: 1
            }
        };
    }
    static createBossBattle_05(stageLevel = 5) {
        return {
            bossId: 'boss_encounter_05',
            title: 'Nebula Harvester Mk-5',
            maxHealth: 4500,
            currentHealth: 4500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 26,
                    speed: 275,
                    fireCooldown: 0.60
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 34,
                    speed: 360,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 46,
                    speed: 440,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 1500,
                experience: 1150,
                rareItemTier: 1
            }
        };
    }
    static createBossBattle_06(stageLevel = 6) {
        return {
            bossId: 'boss_encounter_06',
            title: 'Leviathan Dreadnought Mk-6',
            maxHealth: 5000,
            currentHealth: 5000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 28,
                    speed: 200,
                    fireCooldown: 0.55
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 36,
                    speed: 260,
                    fireCooldown: 0.35
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 48,
                    speed: 460,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 1700,
                experience: 1300,
                rareItemTier: 1
            }
        };
    }
    static createBossBattle_07(stageLevel = 7) {
        return {
            bossId: 'boss_encounter_07',
            title: 'Solaris Titan Mk-7',
            maxHealth: 5500,
            currentHealth: 5500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 30,
                    speed: 215,
                    fireCooldown: 0.50
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 38,
                    speed: 280,
                    fireCooldown: 0.30
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 50,
                    speed: 480,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 1900,
                experience: 1450,
                rareItemTier: 1
            }
        };
    }
    static createBossBattle_08(stageLevel = 8) {
        return {
            bossId: 'boss_encounter_08',
            title: 'Quantum Eclipse Mk-8',
            maxHealth: 6000,
            currentHealth: 6000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 16,
                    speed: 230,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 40,
                    speed: 300,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 52,
                    speed: 340,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 2100,
                experience: 1600,
                rareItemTier: 1
            }
        };
    }
    static createBossBattle_09(stageLevel = 9) {
        return {
            bossId: 'boss_encounter_09',
            title: 'Cyber Overlord Mk-9',
            maxHealth: 6500,
            currentHealth: 6500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 18,
                    speed: 245,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 42,
                    speed: 320,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 54,
                    speed: 360,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 2300,
                experience: 1750,
                rareItemTier: 1
            }
        };
    }
    static createBossBattle_10(stageLevel = 10) {
        return {
            bossId: 'boss_encounter_10',
            title: 'Nebula Harvester Mk-10',
            maxHealth: 7000,
            currentHealth: 7000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 20,
                    speed: 260,
                    fireCooldown: 0.60
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 24,
                    speed: 340,
                    fireCooldown: 0.35
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 56,
                    speed: 380,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 2500,
                experience: 1900,
                rareItemTier: 1
            }
        };
    }
    static createBossBattle_11(stageLevel = 11) {
        return {
            bossId: 'boss_encounter_11',
            title: 'Leviathan Dreadnought Mk-11',
            maxHealth: 7500,
            currentHealth: 7500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 22,
                    speed: 275,
                    fireCooldown: 0.55
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 26,
                    speed: 360,
                    fireCooldown: 0.30
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 58,
                    speed: 400,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 2700,
                experience: 2050,
                rareItemTier: 2
            }
        };
    }
    static createBossBattle_12(stageLevel = 12) {
        return {
            bossId: 'boss_encounter_12',
            title: 'Solaris Titan Mk-12',
            maxHealth: 8000,
            currentHealth: 8000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 24,
                    speed: 200,
                    fireCooldown: 0.50
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 28,
                    speed: 260,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 36,
                    speed: 420,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 2900,
                experience: 2200,
                rareItemTier: 2
            }
        };
    }
    static createBossBattle_13(stageLevel = 13) {
        return {
            bossId: 'boss_encounter_13',
            title: 'Quantum Eclipse Mk-13',
            maxHealth: 8500,
            currentHealth: 8500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 26,
                    speed: 215,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 30,
                    speed: 280,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 38,
                    speed: 440,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 3100,
                experience: 2350,
                rareItemTier: 2
            }
        };
    }
    static createBossBattle_14(stageLevel = 14) {
        return {
            bossId: 'boss_encounter_14',
            title: 'Cyber Overlord Mk-14',
            maxHealth: 9000,
            currentHealth: 9000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 28,
                    speed: 230,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 32,
                    speed: 300,
                    fireCooldown: 0.35
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 40,
                    speed: 460,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 3300,
                experience: 2500,
                rareItemTier: 2
            }
        };
    }
    static createBossBattle_15(stageLevel = 15) {
        return {
            bossId: 'boss_encounter_15',
            title: 'Nebula Harvester Mk-15',
            maxHealth: 9500,
            currentHealth: 9500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 30,
                    speed: 245,
                    fireCooldown: 0.60
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 34,
                    speed: 320,
                    fireCooldown: 0.30
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 42,
                    speed: 480,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 3500,
                experience: 2650,
                rareItemTier: 2
            }
        };
    }
    static createBossBattle_16(stageLevel = 16) {
        return {
            bossId: 'boss_encounter_16',
            title: 'Leviathan Dreadnought Mk-16',
            maxHealth: 10000,
            currentHealth: 10000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 16,
                    speed: 260,
                    fireCooldown: 0.55
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 36,
                    speed: 340,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 44,
                    speed: 340,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 3700,
                experience: 2800,
                rareItemTier: 2
            }
        };
    }
    static createBossBattle_17(stageLevel = 17) {
        return {
            bossId: 'boss_encounter_17',
            title: 'Solaris Titan Mk-17',
            maxHealth: 10500,
            currentHealth: 10500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 18,
                    speed: 275,
                    fireCooldown: 0.50
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 38,
                    speed: 360,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 46,
                    speed: 360,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 3900,
                experience: 2950,
                rareItemTier: 2
            }
        };
    }
    static createBossBattle_18(stageLevel = 18) {
        return {
            bossId: 'boss_encounter_18',
            title: 'Quantum Eclipse Mk-18',
            maxHealth: 11000,
            currentHealth: 11000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 20,
                    speed: 200,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 40,
                    speed: 260,
                    fireCooldown: 0.35
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 48,
                    speed: 380,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 4100,
                experience: 3100,
                rareItemTier: 2
            }
        };
    }
    static createBossBattle_19(stageLevel = 19) {
        return {
            bossId: 'boss_encounter_19',
            title: 'Cyber Overlord Mk-19',
            maxHealth: 11500,
            currentHealth: 11500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 22,
                    speed: 215,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 42,
                    speed: 280,
                    fireCooldown: 0.30
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 50,
                    speed: 400,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 4300,
                experience: 3250,
                rareItemTier: 2
            }
        };
    }
    static createBossBattle_20(stageLevel = 20) {
        return {
            bossId: 'boss_encounter_20',
            title: 'Nebula Harvester Mk-20',
            maxHealth: 12000,
            currentHealth: 12000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 24,
                    speed: 230,
                    fireCooldown: 0.60
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 24,
                    speed: 300,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 52,
                    speed: 420,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 4500,
                experience: 3400,
                rareItemTier: 2
            }
        };
    }
    static createBossBattle_21(stageLevel = 21) {
        return {
            bossId: 'boss_encounter_21',
            title: 'Leviathan Dreadnought Mk-21',
            maxHealth: 12500,
            currentHealth: 12500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 26,
                    speed: 245,
                    fireCooldown: 0.55
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 26,
                    speed: 320,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 54,
                    speed: 440,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 4700,
                experience: 3550,
                rareItemTier: 3
            }
        };
    }
    static createBossBattle_22(stageLevel = 22) {
        return {
            bossId: 'boss_encounter_22',
            title: 'Solaris Titan Mk-22',
            maxHealth: 13000,
            currentHealth: 13000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 28,
                    speed: 260,
                    fireCooldown: 0.50
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 28,
                    speed: 340,
                    fireCooldown: 0.35
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 56,
                    speed: 460,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 4900,
                experience: 3700,
                rareItemTier: 3
            }
        };
    }
    static createBossBattle_23(stageLevel = 23) {
        return {
            bossId: 'boss_encounter_23',
            title: 'Quantum Eclipse Mk-23',
            maxHealth: 13500,
            currentHealth: 13500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 30,
                    speed: 275,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 30,
                    speed: 360,
                    fireCooldown: 0.30
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 58,
                    speed: 480,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 5100,
                experience: 3850,
                rareItemTier: 3
            }
        };
    }
    static createBossBattle_24(stageLevel = 24) {
        return {
            bossId: 'boss_encounter_24',
            title: 'Cyber Overlord Mk-24',
            maxHealth: 14000,
            currentHealth: 14000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 16,
                    speed: 200,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 32,
                    speed: 260,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 36,
                    speed: 340,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 5300,
                experience: 4000,
                rareItemTier: 3
            }
        };
    }
    static createBossBattle_25(stageLevel = 25) {
        return {
            bossId: 'boss_encounter_25',
            title: 'Nebula Harvester Mk-25',
            maxHealth: 14500,
            currentHealth: 14500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 18,
                    speed: 215,
                    fireCooldown: 0.60
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 34,
                    speed: 280,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 38,
                    speed: 360,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 5500,
                experience: 4150,
                rareItemTier: 3
            }
        };
    }
    static createBossBattle_26(stageLevel = 26) {
        return {
            bossId: 'boss_encounter_26',
            title: 'Leviathan Dreadnought Mk-26',
            maxHealth: 15000,
            currentHealth: 15000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 20,
                    speed: 230,
                    fireCooldown: 0.55
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 36,
                    speed: 300,
                    fireCooldown: 0.35
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 40,
                    speed: 380,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 5700,
                experience: 4300,
                rareItemTier: 3
            }
        };
    }
    static createBossBattle_27(stageLevel = 27) {
        return {
            bossId: 'boss_encounter_27',
            title: 'Solaris Titan Mk-27',
            maxHealth: 15500,
            currentHealth: 15500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 22,
                    speed: 245,
                    fireCooldown: 0.50
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 38,
                    speed: 320,
                    fireCooldown: 0.30
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 42,
                    speed: 400,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 5900,
                experience: 4450,
                rareItemTier: 3
            }
        };
    }
    static createBossBattle_28(stageLevel = 28) {
        return {
            bossId: 'boss_encounter_28',
            title: 'Quantum Eclipse Mk-28',
            maxHealth: 16000,
            currentHealth: 16000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 24,
                    speed: 260,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 40,
                    speed: 340,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 44,
                    speed: 420,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 6100,
                experience: 4600,
                rareItemTier: 3
            }
        };
    }
    static createBossBattle_29(stageLevel = 29) {
        return {
            bossId: 'boss_encounter_29',
            title: 'Cyber Overlord Mk-29',
            maxHealth: 16500,
            currentHealth: 16500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 26,
                    speed: 275,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 42,
                    speed: 360,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 46,
                    speed: 440,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 6300,
                experience: 4750,
                rareItemTier: 3
            }
        };
    }
    static createBossBattle_30(stageLevel = 30) {
        return {
            bossId: 'boss_encounter_30',
            title: 'Nebula Harvester Mk-30',
            maxHealth: 17000,
            currentHealth: 17000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 28,
                    speed: 200,
                    fireCooldown: 0.60
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 24,
                    speed: 260,
                    fireCooldown: 0.35
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 48,
                    speed: 460,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 6500,
                experience: 4900,
                rareItemTier: 3
            }
        };
    }
    static createBossBattle_31(stageLevel = 31) {
        return {
            bossId: 'boss_encounter_31',
            title: 'Leviathan Dreadnought Mk-31',
            maxHealth: 17500,
            currentHealth: 17500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 30,
                    speed: 215,
                    fireCooldown: 0.55
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 26,
                    speed: 280,
                    fireCooldown: 0.30
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 50,
                    speed: 480,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 6700,
                experience: 5050,
                rareItemTier: 4
            }
        };
    }
    static createBossBattle_32(stageLevel = 32) {
        return {
            bossId: 'boss_encounter_32',
            title: 'Solaris Titan Mk-32',
            maxHealth: 18000,
            currentHealth: 18000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 16,
                    speed: 230,
                    fireCooldown: 0.50
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 28,
                    speed: 300,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 52,
                    speed: 340,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 6900,
                experience: 5200,
                rareItemTier: 4
            }
        };
    }
    static createBossBattle_33(stageLevel = 33) {
        return {
            bossId: 'boss_encounter_33',
            title: 'Quantum Eclipse Mk-33',
            maxHealth: 18500,
            currentHealth: 18500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 18,
                    speed: 245,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 30,
                    speed: 320,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 54,
                    speed: 360,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 7100,
                experience: 5350,
                rareItemTier: 4
            }
        };
    }
    static createBossBattle_34(stageLevel = 34) {
        return {
            bossId: 'boss_encounter_34',
            title: 'Cyber Overlord Mk-34',
            maxHealth: 19000,
            currentHealth: 19000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 20,
                    speed: 260,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 32,
                    speed: 340,
                    fireCooldown: 0.35
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 56,
                    speed: 380,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 7300,
                experience: 5500,
                rareItemTier: 4
            }
        };
    }
    static createBossBattle_35(stageLevel = 35) {
        return {
            bossId: 'boss_encounter_35',
            title: 'Nebula Harvester Mk-35',
            maxHealth: 19500,
            currentHealth: 19500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 22,
                    speed: 275,
                    fireCooldown: 0.60
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 34,
                    speed: 360,
                    fireCooldown: 0.30
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 58,
                    speed: 400,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 7500,
                experience: 5650,
                rareItemTier: 4
            }
        };
    }
    static createBossBattle_36(stageLevel = 36) {
        return {
            bossId: 'boss_encounter_36',
            title: 'Leviathan Dreadnought Mk-36',
            maxHealth: 20000,
            currentHealth: 20000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 24,
                    speed: 200,
                    fireCooldown: 0.55
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 36,
                    speed: 260,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 36,
                    speed: 420,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 7700,
                experience: 5800,
                rareItemTier: 4
            }
        };
    }
    static createBossBattle_37(stageLevel = 37) {
        return {
            bossId: 'boss_encounter_37',
            title: 'Solaris Titan Mk-37',
            maxHealth: 20500,
            currentHealth: 20500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 26,
                    speed: 215,
                    fireCooldown: 0.50
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 38,
                    speed: 280,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 38,
                    speed: 440,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 7900,
                experience: 5950,
                rareItemTier: 4
            }
        };
    }
    static createBossBattle_38(stageLevel = 38) {
        return {
            bossId: 'boss_encounter_38',
            title: 'Quantum Eclipse Mk-38',
            maxHealth: 21000,
            currentHealth: 21000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 28,
                    speed: 230,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 40,
                    speed: 300,
                    fireCooldown: 0.35
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 40,
                    speed: 460,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 8100,
                experience: 6100,
                rareItemTier: 4
            }
        };
    }
    static createBossBattle_39(stageLevel = 39) {
        return {
            bossId: 'boss_encounter_39',
            title: 'Cyber Overlord Mk-39',
            maxHealth: 21500,
            currentHealth: 21500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 30,
                    speed: 245,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 42,
                    speed: 320,
                    fireCooldown: 0.30
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 42,
                    speed: 480,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 8300,
                experience: 6250,
                rareItemTier: 4
            }
        };
    }
    static createBossBattle_40(stageLevel = 40) {
        return {
            bossId: 'boss_encounter_40',
            title: 'Nebula Harvester Mk-40',
            maxHealth: 22000,
            currentHealth: 22000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 16,
                    speed: 260,
                    fireCooldown: 0.60
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 24,
                    speed: 340,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 44,
                    speed: 340,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 8500,
                experience: 6400,
                rareItemTier: 4
            }
        };
    }
    static createBossBattle_41(stageLevel = 41) {
        return {
            bossId: 'boss_encounter_41',
            title: 'Leviathan Dreadnought Mk-41',
            maxHealth: 22500,
            currentHealth: 22500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 18,
                    speed: 275,
                    fireCooldown: 0.55
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 26,
                    speed: 360,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 46,
                    speed: 360,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 8700,
                experience: 6550,
                rareItemTier: 5
            }
        };
    }
    static createBossBattle_42(stageLevel = 42) {
        return {
            bossId: 'boss_encounter_42',
            title: 'Solaris Titan Mk-42',
            maxHealth: 23000,
            currentHealth: 23000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 20,
                    speed: 200,
                    fireCooldown: 0.50
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 28,
                    speed: 260,
                    fireCooldown: 0.35
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 48,
                    speed: 380,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 8900,
                experience: 6700,
                rareItemTier: 5
            }
        };
    }
    static createBossBattle_43(stageLevel = 43) {
        return {
            bossId: 'boss_encounter_43',
            title: 'Quantum Eclipse Mk-43',
            maxHealth: 23500,
            currentHealth: 23500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 22,
                    speed: 215,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 30,
                    speed: 280,
                    fireCooldown: 0.30
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 50,
                    speed: 400,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 9100,
                experience: 6850,
                rareItemTier: 5
            }
        };
    }
    static createBossBattle_44(stageLevel = 44) {
        return {
            bossId: 'boss_encounter_44',
            title: 'Cyber Overlord Mk-44',
            maxHealth: 24000,
            currentHealth: 24000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 24,
                    speed: 230,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 32,
                    speed: 300,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 52,
                    speed: 420,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 9300,
                experience: 7000,
                rareItemTier: 5
            }
        };
    }
    static createBossBattle_45(stageLevel = 45) {
        return {
            bossId: 'boss_encounter_45',
            title: 'Nebula Harvester Mk-45',
            maxHealth: 24500,
            currentHealth: 24500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 26,
                    speed: 245,
                    fireCooldown: 0.60
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 34,
                    speed: 320,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 54,
                    speed: 440,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 9500,
                experience: 7150,
                rareItemTier: 5
            }
        };
    }
    static createBossBattle_46(stageLevel = 46) {
        return {
            bossId: 'boss_encounter_46',
            title: 'Leviathan Dreadnought Mk-46',
            maxHealth: 25000,
            currentHealth: 25000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 28,
                    speed: 260,
                    fireCooldown: 0.55
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 36,
                    speed: 340,
                    fireCooldown: 0.35
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 56,
                    speed: 460,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 9700,
                experience: 7300,
                rareItemTier: 5
            }
        };
    }
    static createBossBattle_47(stageLevel = 47) {
        return {
            bossId: 'boss_encounter_47',
            title: 'Solaris Titan Mk-47',
            maxHealth: 25500,
            currentHealth: 25500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 30,
                    speed: 275,
                    fireCooldown: 0.50
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 38,
                    speed: 360,
                    fireCooldown: 0.30
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 58,
                    speed: 480,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 9900,
                experience: 7450,
                rareItemTier: 5
            }
        };
    }
    static createBossBattle_48(stageLevel = 48) {
        return {
            bossId: 'boss_encounter_48',
            title: 'Quantum Eclipse Mk-48',
            maxHealth: 26000,
            currentHealth: 26000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 16,
                    speed: 200,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 40,
                    speed: 260,
                    fireCooldown: 0.45
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 36,
                    speed: 340,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 10100,
                experience: 7600,
                rareItemTier: 5
            }
        };
    }
    static createBossBattle_49(stageLevel = 49) {
        return {
            bossId: 'boss_encounter_49',
            title: 'Cyber Overlord Mk-49',
            maxHealth: 26500,
            currentHealth: 26500,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 18,
                    speed: 215,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 42,
                    speed: 280,
                    fireCooldown: 0.40
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 38,
                    speed: 360,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 10300,
                experience: 7750,
                rareItemTier: 5
            }
        };
    }
    static createBossBattle_50(stageLevel = 50) {
        return {
            bossId: 'boss_encounter_50',
            title: 'Nebula Harvester Mk-50',
            maxHealth: 27000,
            currentHealth: 27000,
            phases: [
                {
                    phaseNumber: 1,
                    triggerHealthPct: 1.0,
                    behavior: 'plasma_barrage',
                    bulletCount: 20,
                    speed: 230,
                    fireCooldown: 0.60
                },
                {
                    phaseNumber: 2,
                    triggerHealthPct: 0.6,
                    behavior: 'spiral_laser_sweep',
                    bulletCount: 24,
                    speed: 300,
                    fireCooldown: 0.35
                },
                {
                    phaseNumber: 3,
                    triggerHealthPct: 0.25,
                    behavior: 'emp_hyperdrive_assault',
                    bulletCount: 40,
                    speed: 380,
                    fireCooldown: 0.25
                }
            ],
            lootDrop: {
                credits: 10500,
                experience: 7900,
                rareItemTier: 5
            }
        };
    }
}
