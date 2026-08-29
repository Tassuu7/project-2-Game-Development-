/**
 * NovaForge Cosmic Vanguard 30-Sector Story Campaign & Boss Encounters
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export const COSMIC_CAMPAIGN = [
    {
        sectorId: 'sector_01',
        sectorName: 'Hyperion Sector B-1',
        difficulty: 1.15,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 1. High electromagnetic interference detected.',
        wavesCount: 4,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-1',
            health: 650,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 185 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 245 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 305 }
            ]
        },
        rewards: {
            credits: 280,
            exp: 200,
            unlockWeaponId: 'weapon_w2'
        }
    },
    {
        sectorId: 'sector_02',
        sectorName: 'Hyperion Sector C-2',
        difficulty: 1.30,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 2. High electromagnetic interference detected.',
        wavesCount: 5,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-2',
            health: 800,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 190 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 250 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 310 }
            ]
        },
        rewards: {
            credits: 360,
            exp: 250,
            unlockWeaponId: 'weapon_w3'
        }
    },
    {
        sectorId: 'sector_03',
        sectorName: 'Hyperion Sector D-3',
        difficulty: 1.45,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 3. High electromagnetic interference detected.',
        wavesCount: 6,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-3',
            health: 950,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 195 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 255 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 315 }
            ]
        },
        rewards: {
            credits: 440,
            exp: 300,
            unlockWeaponId: 'weapon_w4'
        }
    },
    {
        sectorId: 'sector_04',
        sectorName: 'Hyperion Sector E-4',
        difficulty: 1.60,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 4. High electromagnetic interference detected.',
        wavesCount: 3,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-4',
            health: 1100,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 200 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 260 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 320 }
            ]
        },
        rewards: {
            credits: 520,
            exp: 350,
            unlockWeaponId: 'weapon_w5'
        }
    },
    {
        sectorId: 'sector_05',
        sectorName: 'Hyperion Sector F-5',
        difficulty: 1.75,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 5. High electromagnetic interference detected.',
        wavesCount: 4,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-5',
            health: 1250,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 205 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 265 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 325 }
            ]
        },
        rewards: {
            credits: 600,
            exp: 400,
            unlockWeaponId: 'weapon_w6'
        }
    },
    {
        sectorId: 'sector_06',
        sectorName: 'Hyperion Sector G-6',
        difficulty: 1.90,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 6. High electromagnetic interference detected.',
        wavesCount: 5,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-6',
            health: 1400,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 210 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 270 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 330 }
            ]
        },
        rewards: {
            credits: 680,
            exp: 450,
            unlockWeaponId: 'weapon_w7'
        }
    },
    {
        sectorId: 'sector_07',
        sectorName: 'Hyperion Sector H-7',
        difficulty: 2.05,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 7. High electromagnetic interference detected.',
        wavesCount: 6,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-7',
            health: 1550,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 215 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 275 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 335 }
            ]
        },
        rewards: {
            credits: 760,
            exp: 500,
            unlockWeaponId: 'weapon_w8'
        }
    },
    {
        sectorId: 'sector_08',
        sectorName: 'Hyperion Sector I-8',
        difficulty: 2.20,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 8. High electromagnetic interference detected.',
        wavesCount: 3,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-8',
            health: 1700,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 220 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 280 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 340 }
            ]
        },
        rewards: {
            credits: 840,
            exp: 550,
            unlockWeaponId: 'weapon_w9'
        }
    },
    {
        sectorId: 'sector_09',
        sectorName: 'Hyperion Sector J-9',
        difficulty: 2.35,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 9. High electromagnetic interference detected.',
        wavesCount: 4,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-9',
            health: 1850,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 225 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 285 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 345 }
            ]
        },
        rewards: {
            credits: 920,
            exp: 600,
            unlockWeaponId: 'weapon_w10'
        }
    },
    {
        sectorId: 'sector_10',
        sectorName: 'Hyperion Sector K-10',
        difficulty: 2.50,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 10. High electromagnetic interference detected.',
        wavesCount: 5,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-10',
            health: 2000,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 230 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 290 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 350 }
            ]
        },
        rewards: {
            credits: 1000,
            exp: 650,
            unlockWeaponId: 'weapon_w11'
        }
    },
    {
        sectorId: 'sector_11',
        sectorName: 'Hyperion Sector L-11',
        difficulty: 2.65,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 11. High electromagnetic interference detected.',
        wavesCount: 6,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-11',
            health: 2150,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 235 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 295 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 355 }
            ]
        },
        rewards: {
            credits: 1080,
            exp: 700,
            unlockWeaponId: 'weapon_w12'
        }
    },
    {
        sectorId: 'sector_12',
        sectorName: 'Hyperion Sector M-12',
        difficulty: 2.80,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 12. High electromagnetic interference detected.',
        wavesCount: 3,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-12',
            health: 2300,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 240 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 300 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 360 }
            ]
        },
        rewards: {
            credits: 1160,
            exp: 750,
            unlockWeaponId: 'weapon_w13'
        }
    },
    {
        sectorId: 'sector_13',
        sectorName: 'Hyperion Sector N-13',
        difficulty: 2.95,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 13. High electromagnetic interference detected.',
        wavesCount: 4,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-13',
            health: 2450,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 245 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 305 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 365 }
            ]
        },
        rewards: {
            credits: 1240,
            exp: 800,
            unlockWeaponId: 'weapon_w14'
        }
    },
    {
        sectorId: 'sector_14',
        sectorName: 'Hyperion Sector O-14',
        difficulty: 3.10,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 14. High electromagnetic interference detected.',
        wavesCount: 5,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-14',
            health: 2600,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 250 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 310 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 370 }
            ]
        },
        rewards: {
            credits: 1320,
            exp: 850,
            unlockWeaponId: 'weapon_w15'
        }
    },
    {
        sectorId: 'sector_15',
        sectorName: 'Hyperion Sector P-15',
        difficulty: 3.25,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 15. High electromagnetic interference detected.',
        wavesCount: 6,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-15',
            health: 2750,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 255 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 315 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 375 }
            ]
        },
        rewards: {
            credits: 1400,
            exp: 900,
            unlockWeaponId: 'weapon_w16'
        }
    },
    {
        sectorId: 'sector_16',
        sectorName: 'Hyperion Sector Q-16',
        difficulty: 3.40,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 16. High electromagnetic interference detected.',
        wavesCount: 3,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-16',
            health: 2900,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 260 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 320 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 380 }
            ]
        },
        rewards: {
            credits: 1480,
            exp: 950,
            unlockWeaponId: 'weapon_w17'
        }
    },
    {
        sectorId: 'sector_17',
        sectorName: 'Hyperion Sector R-17',
        difficulty: 3.55,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 17. High electromagnetic interference detected.',
        wavesCount: 4,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-17',
            health: 3050,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 265 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 325 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 385 }
            ]
        },
        rewards: {
            credits: 1560,
            exp: 1000,
            unlockWeaponId: 'weapon_w18'
        }
    },
    {
        sectorId: 'sector_18',
        sectorName: 'Hyperion Sector S-18',
        difficulty: 3.70,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 18. High electromagnetic interference detected.',
        wavesCount: 5,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-18',
            health: 3200,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 270 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 330 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 390 }
            ]
        },
        rewards: {
            credits: 1640,
            exp: 1050,
            unlockWeaponId: 'weapon_w19'
        }
    },
    {
        sectorId: 'sector_19',
        sectorName: 'Hyperion Sector T-19',
        difficulty: 3.85,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 19. High electromagnetic interference detected.',
        wavesCount: 6,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-19',
            health: 3350,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 275 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 335 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 395 }
            ]
        },
        rewards: {
            credits: 1720,
            exp: 1100,
            unlockWeaponId: 'weapon_w20'
        }
    },
    {
        sectorId: 'sector_20',
        sectorName: 'Hyperion Sector U-20',
        difficulty: 4.00,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 20. High electromagnetic interference detected.',
        wavesCount: 3,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-20',
            health: 3500,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 280 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 340 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 400 }
            ]
        },
        rewards: {
            credits: 1800,
            exp: 1150,
            unlockWeaponId: 'weapon_w21'
        }
    },
    {
        sectorId: 'sector_21',
        sectorName: 'Hyperion Sector V-21',
        difficulty: 4.15,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 21. High electromagnetic interference detected.',
        wavesCount: 4,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-21',
            health: 3650,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 285 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 345 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 405 }
            ]
        },
        rewards: {
            credits: 1880,
            exp: 1200,
            unlockWeaponId: 'weapon_w22'
        }
    },
    {
        sectorId: 'sector_22',
        sectorName: 'Hyperion Sector W-22',
        difficulty: 4.30,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 22. High electromagnetic interference detected.',
        wavesCount: 5,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-22',
            health: 3800,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 290 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 350 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 410 }
            ]
        },
        rewards: {
            credits: 1960,
            exp: 1250,
            unlockWeaponId: 'weapon_w23'
        }
    },
    {
        sectorId: 'sector_23',
        sectorName: 'Hyperion Sector X-23',
        difficulty: 4.45,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 23. High electromagnetic interference detected.',
        wavesCount: 6,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-23',
            health: 3950,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 295 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 355 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 415 }
            ]
        },
        rewards: {
            credits: 2040,
            exp: 1300,
            unlockWeaponId: 'weapon_w24'
        }
    },
    {
        sectorId: 'sector_24',
        sectorName: 'Hyperion Sector Y-24',
        difficulty: 4.60,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 24. High electromagnetic interference detected.',
        wavesCount: 3,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-24',
            health: 4100,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 300 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 360 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 420 }
            ]
        },
        rewards: {
            credits: 2120,
            exp: 1350,
            unlockWeaponId: 'weapon_w25'
        }
    },
    {
        sectorId: 'sector_25',
        sectorName: 'Hyperion Sector Z-25',
        difficulty: 4.75,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 25. High electromagnetic interference detected.',
        wavesCount: 4,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-25',
            health: 4250,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 305 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 365 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 425 }
            ]
        },
        rewards: {
            credits: 2200,
            exp: 1400,
            unlockWeaponId: 'weapon_w26'
        }
    },
    {
        sectorId: 'sector_26',
        sectorName: 'Hyperion Sector A-26',
        difficulty: 4.90,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 26. High electromagnetic interference detected.',
        wavesCount: 5,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-26',
            health: 4400,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 310 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 370 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 430 }
            ]
        },
        rewards: {
            credits: 2280,
            exp: 1450,
            unlockWeaponId: 'weapon_w27'
        }
    },
    {
        sectorId: 'sector_27',
        sectorName: 'Hyperion Sector B-27',
        difficulty: 5.05,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 27. High electromagnetic interference detected.',
        wavesCount: 6,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-27',
            health: 4550,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 315 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 375 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 435 }
            ]
        },
        rewards: {
            credits: 2360,
            exp: 1500,
            unlockWeaponId: 'weapon_w28'
        }
    },
    {
        sectorId: 'sector_28',
        sectorName: 'Hyperion Sector C-28',
        difficulty: 5.20,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 28. High electromagnetic interference detected.',
        wavesCount: 3,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-28',
            health: 4700,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 320 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 380 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 440 }
            ]
        },
        rewards: {
            credits: 2440,
            exp: 1550,
            unlockWeaponId: 'weapon_w29'
        }
    },
    {
        sectorId: 'sector_29',
        sectorName: 'Hyperion Sector D-29',
        difficulty: 5.35,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 29. High electromagnetic interference detected.',
        wavesCount: 4,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-29',
            health: 4850,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 325 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 385 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 445 }
            ]
        },
        rewards: {
            credits: 2520,
            exp: 1600,
            unlockWeaponId: 'weapon_w30'
        }
    },
    {
        sectorId: 'sector_30',
        sectorName: 'Hyperion Sector E-30',
        difficulty: 5.50,
        briefing: 'Pilot, neutralize enemy vanguard fleet in Sector 30. High electromagnetic interference detected.',
        wavesCount: 5,
        bossEncounter: {
            bossName: 'Goliath Dreadnought Mk-30',
            health: 5000,
            phases: [
                { triggerHealthPct: 1.0, attackPattern: 'spiral_laser', speed: 330 },
                { triggerHealthPct: 0.5, attackPattern: 'homing_missiles', speed: 390 },
                { triggerHealthPct: 0.2, attackPattern: 'emp_supercharge', speed: 450 }
            ]
        },
        rewards: {
            credits: 2600,
            exp: 1650,
            unlockWeaponId: 'weapon_w31'
        }
    },
];
