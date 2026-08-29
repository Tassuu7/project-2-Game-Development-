/**
 * NovaForge Cosmic Vanguard 100 Enemy Ships, Attack Formations & AI Routines
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class CosmicEnemiesCatalog {
    static getEnemyDatabase() {
        const database = [];
        database.push({
            id: 'ship_cv_001',
            name: 'Vanguard Interceptors Mk-1',
            tier: 1,
            hullHealth: 100,
            shieldCapacity: 40,
            movementSpeed: 135,
            evasionChance: 0.08,
            weaponSystems: [
                { weaponId: 'laser_w2', damage: 13, fireRate: 0.40 },
                { weaponId: 'plasma_w2', damage: 29, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 125,
            creditDrop: 35
        });
        database.push({
            id: 'ship_cv_002',
            name: 'Vanguard Gunships Mk-1',
            tier: 1,
            hullHealth: 120,
            shieldCapacity: 50,
            movementSpeed: 150,
            evasionChance: 0.11,
            weaponSystems: [
                { weaponId: 'laser_w3', damage: 16, fireRate: 0.50 },
                { weaponId: 'plasma_w3', damage: 33, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 150,
            creditDrop: 45
        });
        database.push({
            id: 'ship_cv_003',
            name: 'Vanguard Drones Mk-1',
            tier: 1,
            hullHealth: 140,
            shieldCapacity: 60,
            movementSpeed: 165,
            evasionChance: 0.14,
            weaponSystems: [
                { weaponId: 'laser_w4', damage: 19, fireRate: 0.60 },
                { weaponId: 'plasma_w4', damage: 37, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 175,
            creditDrop: 55
        });
        database.push({
            id: 'ship_cv_004',
            name: 'Vanguard Bombers Mk-1',
            tier: 1,
            hullHealth: 160,
            shieldCapacity: 70,
            movementSpeed: 180,
            evasionChance: 0.17,
            weaponSystems: [
                { weaponId: 'laser_w5', damage: 22, fireRate: 0.70 },
                { weaponId: 'plasma_w5', damage: 41, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 200,
            creditDrop: 65
        });
        database.push({
            id: 'ship_cv_005',
            name: 'Vanguard Frigates Mk-1',
            tier: 1,
            hullHealth: 180,
            shieldCapacity: 80,
            movementSpeed: 195,
            evasionChance: 0.20,
            weaponSystems: [
                { weaponId: 'laser_w6', damage: 25, fireRate: 0.30 },
                { weaponId: 'plasma_w6', damage: 45, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 225,
            creditDrop: 75
        });
        database.push({
            id: 'ship_cv_006',
            name: 'Vanguard Destroyers Mk-1',
            tier: 1,
            hullHealth: 200,
            shieldCapacity: 90,
            movementSpeed: 210,
            evasionChance: 0.05,
            weaponSystems: [
                { weaponId: 'laser_w7', damage: 28, fireRate: 0.40 },
                { weaponId: 'plasma_w7', damage: 49, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 250,
            creditDrop: 85
        });
        database.push({
            id: 'ship_cv_007',
            name: 'Vanguard Cruisers Mk-1',
            tier: 1,
            hullHealth: 220,
            shieldCapacity: 100,
            movementSpeed: 225,
            evasionChance: 0.08,
            weaponSystems: [
                { weaponId: 'laser_w8', damage: 31, fireRate: 0.50 },
                { weaponId: 'plasma_w8', damage: 53, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 275,
            creditDrop: 95
        });
        database.push({
            id: 'ship_cv_008',
            name: 'Vanguard Battleships Mk-1',
            tier: 1,
            hullHealth: 240,
            shieldCapacity: 110,
            movementSpeed: 120,
            evasionChance: 0.11,
            weaponSystems: [
                { weaponId: 'laser_w9', damage: 34, fireRate: 0.60 },
                { weaponId: 'plasma_w9', damage: 57, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 300,
            creditDrop: 105
        });
        database.push({
            id: 'ship_cv_009',
            name: 'Vanguard Dreadnoughts Mk-1',
            tier: 1,
            hullHealth: 260,
            shieldCapacity: 120,
            movementSpeed: 135,
            evasionChance: 0.14,
            weaponSystems: [
                { weaponId: 'laser_w10', damage: 37, fireRate: 0.70 },
                { weaponId: 'plasma_w10', damage: 61, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 325,
            creditDrop: 115
        });
        database.push({
            id: 'ship_cv_010',
            name: 'Vanguard Carriers Mk-2',
            tier: 2,
            hullHealth: 280,
            shieldCapacity: 130,
            movementSpeed: 150,
            evasionChance: 0.17,
            weaponSystems: [
                { weaponId: 'laser_w11', damage: 40, fireRate: 0.30 },
                { weaponId: 'plasma_w1', damage: 65, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 350,
            creditDrop: 125
        });
        database.push({
            id: 'ship_cv_011',
            name: 'Vanguard Interceptors Mk-2',
            tier: 2,
            hullHealth: 300,
            shieldCapacity: 140,
            movementSpeed: 165,
            evasionChance: 0.20,
            weaponSystems: [
                { weaponId: 'laser_w12', damage: 43, fireRate: 0.40 },
                { weaponId: 'plasma_w2', damage: 69, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 375,
            creditDrop: 135
        });
        database.push({
            id: 'ship_cv_012',
            name: 'Vanguard Gunships Mk-2',
            tier: 2,
            hullHealth: 320,
            shieldCapacity: 150,
            movementSpeed: 180,
            evasionChance: 0.05,
            weaponSystems: [
                { weaponId: 'laser_w13', damage: 46, fireRate: 0.50 },
                { weaponId: 'plasma_w3', damage: 73, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 400,
            creditDrop: 145
        });
        database.push({
            id: 'ship_cv_013',
            name: 'Vanguard Drones Mk-2',
            tier: 2,
            hullHealth: 340,
            shieldCapacity: 160,
            movementSpeed: 195,
            evasionChance: 0.08,
            weaponSystems: [
                { weaponId: 'laser_w14', damage: 49, fireRate: 0.60 },
                { weaponId: 'plasma_w4', damage: 77, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 425,
            creditDrop: 155
        });
        database.push({
            id: 'ship_cv_014',
            name: 'Vanguard Bombers Mk-2',
            tier: 2,
            hullHealth: 360,
            shieldCapacity: 170,
            movementSpeed: 210,
            evasionChance: 0.11,
            weaponSystems: [
                { weaponId: 'laser_w15', damage: 52, fireRate: 0.70 },
                { weaponId: 'plasma_w5', damage: 81, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 450,
            creditDrop: 165
        });
        database.push({
            id: 'ship_cv_015',
            name: 'Vanguard Frigates Mk-2',
            tier: 2,
            hullHealth: 380,
            shieldCapacity: 180,
            movementSpeed: 225,
            evasionChance: 0.14,
            weaponSystems: [
                { weaponId: 'laser_w16', damage: 55, fireRate: 0.30 },
                { weaponId: 'plasma_w6', damage: 85, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 475,
            creditDrop: 175
        });
        database.push({
            id: 'ship_cv_016',
            name: 'Vanguard Destroyers Mk-2',
            tier: 2,
            hullHealth: 400,
            shieldCapacity: 190,
            movementSpeed: 120,
            evasionChance: 0.17,
            weaponSystems: [
                { weaponId: 'laser_w17', damage: 58, fireRate: 0.40 },
                { weaponId: 'plasma_w7', damage: 89, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 500,
            creditDrop: 185
        });
        database.push({
            id: 'ship_cv_017',
            name: 'Vanguard Cruisers Mk-2',
            tier: 2,
            hullHealth: 420,
            shieldCapacity: 200,
            movementSpeed: 135,
            evasionChance: 0.20,
            weaponSystems: [
                { weaponId: 'laser_w18', damage: 61, fireRate: 0.50 },
                { weaponId: 'plasma_w8', damage: 93, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 525,
            creditDrop: 195
        });
        database.push({
            id: 'ship_cv_018',
            name: 'Vanguard Battleships Mk-2',
            tier: 2,
            hullHealth: 440,
            shieldCapacity: 210,
            movementSpeed: 150,
            evasionChance: 0.05,
            weaponSystems: [
                { weaponId: 'laser_w19', damage: 64, fireRate: 0.60 },
                { weaponId: 'plasma_w9', damage: 97, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 550,
            creditDrop: 205
        });
        database.push({
            id: 'ship_cv_019',
            name: 'Vanguard Dreadnoughts Mk-2',
            tier: 2,
            hullHealth: 460,
            shieldCapacity: 220,
            movementSpeed: 165,
            evasionChance: 0.08,
            weaponSystems: [
                { weaponId: 'laser_w20', damage: 67, fireRate: 0.70 },
                { weaponId: 'plasma_w10', damage: 101, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 575,
            creditDrop: 215
        });
        database.push({
            id: 'ship_cv_020',
            name: 'Vanguard Carriers Mk-3',
            tier: 3,
            hullHealth: 480,
            shieldCapacity: 230,
            movementSpeed: 180,
            evasionChance: 0.11,
            weaponSystems: [
                { weaponId: 'laser_w1', damage: 70, fireRate: 0.30 },
                { weaponId: 'plasma_w1', damage: 105, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 600,
            creditDrop: 225
        });
        database.push({
            id: 'ship_cv_021',
            name: 'Vanguard Interceptors Mk-3',
            tier: 3,
            hullHealth: 500,
            shieldCapacity: 240,
            movementSpeed: 195,
            evasionChance: 0.14,
            weaponSystems: [
                { weaponId: 'laser_w2', damage: 73, fireRate: 0.40 },
                { weaponId: 'plasma_w2', damage: 109, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 625,
            creditDrop: 235
        });
        database.push({
            id: 'ship_cv_022',
            name: 'Vanguard Gunships Mk-3',
            tier: 3,
            hullHealth: 520,
            shieldCapacity: 250,
            movementSpeed: 210,
            evasionChance: 0.17,
            weaponSystems: [
                { weaponId: 'laser_w3', damage: 76, fireRate: 0.50 },
                { weaponId: 'plasma_w3', damage: 113, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 650,
            creditDrop: 245
        });
        database.push({
            id: 'ship_cv_023',
            name: 'Vanguard Drones Mk-3',
            tier: 3,
            hullHealth: 540,
            shieldCapacity: 260,
            movementSpeed: 225,
            evasionChance: 0.20,
            weaponSystems: [
                { weaponId: 'laser_w4', damage: 79, fireRate: 0.60 },
                { weaponId: 'plasma_w4', damage: 117, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 675,
            creditDrop: 255
        });
        database.push({
            id: 'ship_cv_024',
            name: 'Vanguard Bombers Mk-3',
            tier: 3,
            hullHealth: 560,
            shieldCapacity: 270,
            movementSpeed: 120,
            evasionChance: 0.05,
            weaponSystems: [
                { weaponId: 'laser_w5', damage: 82, fireRate: 0.70 },
                { weaponId: 'plasma_w5', damage: 121, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 700,
            creditDrop: 265
        });
        database.push({
            id: 'ship_cv_025',
            name: 'Vanguard Frigates Mk-3',
            tier: 3,
            hullHealth: 580,
            shieldCapacity: 280,
            movementSpeed: 135,
            evasionChance: 0.08,
            weaponSystems: [
                { weaponId: 'laser_w6', damage: 85, fireRate: 0.30 },
                { weaponId: 'plasma_w6', damage: 125, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 725,
            creditDrop: 275
        });
        database.push({
            id: 'ship_cv_026',
            name: 'Vanguard Destroyers Mk-3',
            tier: 3,
            hullHealth: 600,
            shieldCapacity: 290,
            movementSpeed: 150,
            evasionChance: 0.11,
            weaponSystems: [
                { weaponId: 'laser_w7', damage: 88, fireRate: 0.40 },
                { weaponId: 'plasma_w7', damage: 129, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 750,
            creditDrop: 285
        });
        database.push({
            id: 'ship_cv_027',
            name: 'Vanguard Cruisers Mk-3',
            tier: 3,
            hullHealth: 620,
            shieldCapacity: 300,
            movementSpeed: 165,
            evasionChance: 0.14,
            weaponSystems: [
                { weaponId: 'laser_w8', damage: 91, fireRate: 0.50 },
                { weaponId: 'plasma_w8', damage: 133, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 775,
            creditDrop: 295
        });
        database.push({
            id: 'ship_cv_028',
            name: 'Vanguard Battleships Mk-3',
            tier: 3,
            hullHealth: 640,
            shieldCapacity: 310,
            movementSpeed: 180,
            evasionChance: 0.17,
            weaponSystems: [
                { weaponId: 'laser_w9', damage: 94, fireRate: 0.60 },
                { weaponId: 'plasma_w9', damage: 137, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 800,
            creditDrop: 305
        });
        database.push({
            id: 'ship_cv_029',
            name: 'Vanguard Dreadnoughts Mk-3',
            tier: 3,
            hullHealth: 660,
            shieldCapacity: 320,
            movementSpeed: 195,
            evasionChance: 0.20,
            weaponSystems: [
                { weaponId: 'laser_w10', damage: 97, fireRate: 0.70 },
                { weaponId: 'plasma_w10', damage: 141, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 825,
            creditDrop: 315
        });
        database.push({
            id: 'ship_cv_030',
            name: 'Vanguard Carriers Mk-4',
            tier: 4,
            hullHealth: 680,
            shieldCapacity: 330,
            movementSpeed: 210,
            evasionChance: 0.05,
            weaponSystems: [
                { weaponId: 'laser_w11', damage: 100, fireRate: 0.30 },
                { weaponId: 'plasma_w1', damage: 145, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 850,
            creditDrop: 325
        });
        database.push({
            id: 'ship_cv_031',
            name: 'Vanguard Interceptors Mk-4',
            tier: 4,
            hullHealth: 700,
            shieldCapacity: 340,
            movementSpeed: 225,
            evasionChance: 0.08,
            weaponSystems: [
                { weaponId: 'laser_w12', damage: 103, fireRate: 0.40 },
                { weaponId: 'plasma_w2', damage: 149, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 875,
            creditDrop: 335
        });
        database.push({
            id: 'ship_cv_032',
            name: 'Vanguard Gunships Mk-4',
            tier: 4,
            hullHealth: 720,
            shieldCapacity: 350,
            movementSpeed: 120,
            evasionChance: 0.11,
            weaponSystems: [
                { weaponId: 'laser_w13', damage: 106, fireRate: 0.50 },
                { weaponId: 'plasma_w3', damage: 153, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 900,
            creditDrop: 345
        });
        database.push({
            id: 'ship_cv_033',
            name: 'Vanguard Drones Mk-4',
            tier: 4,
            hullHealth: 740,
            shieldCapacity: 360,
            movementSpeed: 135,
            evasionChance: 0.14,
            weaponSystems: [
                { weaponId: 'laser_w14', damage: 109, fireRate: 0.60 },
                { weaponId: 'plasma_w4', damage: 157, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 925,
            creditDrop: 355
        });
        database.push({
            id: 'ship_cv_034',
            name: 'Vanguard Bombers Mk-4',
            tier: 4,
            hullHealth: 760,
            shieldCapacity: 370,
            movementSpeed: 150,
            evasionChance: 0.17,
            weaponSystems: [
                { weaponId: 'laser_w15', damage: 112, fireRate: 0.70 },
                { weaponId: 'plasma_w5', damage: 161, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 950,
            creditDrop: 365
        });
        database.push({
            id: 'ship_cv_035',
            name: 'Vanguard Frigates Mk-4',
            tier: 4,
            hullHealth: 780,
            shieldCapacity: 380,
            movementSpeed: 165,
            evasionChance: 0.20,
            weaponSystems: [
                { weaponId: 'laser_w16', damage: 115, fireRate: 0.30 },
                { weaponId: 'plasma_w6', damage: 165, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 975,
            creditDrop: 375
        });
        database.push({
            id: 'ship_cv_036',
            name: 'Vanguard Destroyers Mk-4',
            tier: 4,
            hullHealth: 800,
            shieldCapacity: 390,
            movementSpeed: 180,
            evasionChance: 0.05,
            weaponSystems: [
                { weaponId: 'laser_w17', damage: 118, fireRate: 0.40 },
                { weaponId: 'plasma_w7', damage: 169, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 1000,
            creditDrop: 385
        });
        database.push({
            id: 'ship_cv_037',
            name: 'Vanguard Cruisers Mk-4',
            tier: 4,
            hullHealth: 820,
            shieldCapacity: 400,
            movementSpeed: 195,
            evasionChance: 0.08,
            weaponSystems: [
                { weaponId: 'laser_w18', damage: 121, fireRate: 0.50 },
                { weaponId: 'plasma_w8', damage: 173, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 1025,
            creditDrop: 395
        });
        database.push({
            id: 'ship_cv_038',
            name: 'Vanguard Battleships Mk-4',
            tier: 4,
            hullHealth: 840,
            shieldCapacity: 410,
            movementSpeed: 210,
            evasionChance: 0.11,
            weaponSystems: [
                { weaponId: 'laser_w19', damage: 124, fireRate: 0.60 },
                { weaponId: 'plasma_w9', damage: 177, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 1050,
            creditDrop: 405
        });
        database.push({
            id: 'ship_cv_039',
            name: 'Vanguard Dreadnoughts Mk-4',
            tier: 4,
            hullHealth: 860,
            shieldCapacity: 420,
            movementSpeed: 225,
            evasionChance: 0.14,
            weaponSystems: [
                { weaponId: 'laser_w20', damage: 127, fireRate: 0.70 },
                { weaponId: 'plasma_w10', damage: 181, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 1075,
            creditDrop: 415
        });
        database.push({
            id: 'ship_cv_040',
            name: 'Vanguard Carriers Mk-5',
            tier: 5,
            hullHealth: 880,
            shieldCapacity: 430,
            movementSpeed: 120,
            evasionChance: 0.17,
            weaponSystems: [
                { weaponId: 'laser_w1', damage: 130, fireRate: 0.30 },
                { weaponId: 'plasma_w1', damage: 185, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 1100,
            creditDrop: 425
        });
        database.push({
            id: 'ship_cv_041',
            name: 'Vanguard Interceptors Mk-5',
            tier: 5,
            hullHealth: 900,
            shieldCapacity: 440,
            movementSpeed: 135,
            evasionChance: 0.20,
            weaponSystems: [
                { weaponId: 'laser_w2', damage: 133, fireRate: 0.40 },
                { weaponId: 'plasma_w2', damage: 189, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 1125,
            creditDrop: 435
        });
        database.push({
            id: 'ship_cv_042',
            name: 'Vanguard Gunships Mk-5',
            tier: 5,
            hullHealth: 920,
            shieldCapacity: 450,
            movementSpeed: 150,
            evasionChance: 0.05,
            weaponSystems: [
                { weaponId: 'laser_w3', damage: 136, fireRate: 0.50 },
                { weaponId: 'plasma_w3', damage: 193, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 1150,
            creditDrop: 445
        });
        database.push({
            id: 'ship_cv_043',
            name: 'Vanguard Drones Mk-5',
            tier: 5,
            hullHealth: 940,
            shieldCapacity: 460,
            movementSpeed: 165,
            evasionChance: 0.08,
            weaponSystems: [
                { weaponId: 'laser_w4', damage: 139, fireRate: 0.60 },
                { weaponId: 'plasma_w4', damage: 197, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 1175,
            creditDrop: 455
        });
        database.push({
            id: 'ship_cv_044',
            name: 'Vanguard Bombers Mk-5',
            tier: 5,
            hullHealth: 960,
            shieldCapacity: 470,
            movementSpeed: 180,
            evasionChance: 0.11,
            weaponSystems: [
                { weaponId: 'laser_w5', damage: 142, fireRate: 0.70 },
                { weaponId: 'plasma_w5', damage: 201, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 1200,
            creditDrop: 465
        });
        database.push({
            id: 'ship_cv_045',
            name: 'Vanguard Frigates Mk-5',
            tier: 5,
            hullHealth: 980,
            shieldCapacity: 480,
            movementSpeed: 195,
            evasionChance: 0.14,
            weaponSystems: [
                { weaponId: 'laser_w6', damage: 145, fireRate: 0.30 },
                { weaponId: 'plasma_w6', damage: 205, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 1225,
            creditDrop: 475
        });
        database.push({
            id: 'ship_cv_046',
            name: 'Vanguard Destroyers Mk-5',
            tier: 5,
            hullHealth: 1000,
            shieldCapacity: 490,
            movementSpeed: 210,
            evasionChance: 0.17,
            weaponSystems: [
                { weaponId: 'laser_w7', damage: 148, fireRate: 0.40 },
                { weaponId: 'plasma_w7', damage: 209, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 1250,
            creditDrop: 485
        });
        database.push({
            id: 'ship_cv_047',
            name: 'Vanguard Cruisers Mk-5',
            tier: 5,
            hullHealth: 1020,
            shieldCapacity: 500,
            movementSpeed: 225,
            evasionChance: 0.20,
            weaponSystems: [
                { weaponId: 'laser_w8', damage: 151, fireRate: 0.50 },
                { weaponId: 'plasma_w8', damage: 213, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 1275,
            creditDrop: 495
        });
        database.push({
            id: 'ship_cv_048',
            name: 'Vanguard Battleships Mk-5',
            tier: 5,
            hullHealth: 1040,
            shieldCapacity: 510,
            movementSpeed: 120,
            evasionChance: 0.05,
            weaponSystems: [
                { weaponId: 'laser_w9', damage: 154, fireRate: 0.60 },
                { weaponId: 'plasma_w9', damage: 217, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 1300,
            creditDrop: 505
        });
        database.push({
            id: 'ship_cv_049',
            name: 'Vanguard Dreadnoughts Mk-5',
            tier: 5,
            hullHealth: 1060,
            shieldCapacity: 520,
            movementSpeed: 135,
            evasionChance: 0.08,
            weaponSystems: [
                { weaponId: 'laser_w10', damage: 157, fireRate: 0.70 },
                { weaponId: 'plasma_w10', damage: 221, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 1325,
            creditDrop: 515
        });
        database.push({
            id: 'ship_cv_050',
            name: 'Vanguard Carriers Mk-6',
            tier: 6,
            hullHealth: 1080,
            shieldCapacity: 530,
            movementSpeed: 150,
            evasionChance: 0.11,
            weaponSystems: [
                { weaponId: 'laser_w11', damage: 160, fireRate: 0.30 },
                { weaponId: 'plasma_w1', damage: 225, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 1350,
            creditDrop: 525
        });
        database.push({
            id: 'ship_cv_051',
            name: 'Vanguard Interceptors Mk-6',
            tier: 6,
            hullHealth: 1100,
            shieldCapacity: 540,
            movementSpeed: 165,
            evasionChance: 0.14,
            weaponSystems: [
                { weaponId: 'laser_w12', damage: 163, fireRate: 0.40 },
                { weaponId: 'plasma_w2', damage: 229, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 1375,
            creditDrop: 535
        });
        database.push({
            id: 'ship_cv_052',
            name: 'Vanguard Gunships Mk-6',
            tier: 6,
            hullHealth: 1120,
            shieldCapacity: 550,
            movementSpeed: 180,
            evasionChance: 0.17,
            weaponSystems: [
                { weaponId: 'laser_w13', damage: 166, fireRate: 0.50 },
                { weaponId: 'plasma_w3', damage: 233, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 1400,
            creditDrop: 545
        });
        database.push({
            id: 'ship_cv_053',
            name: 'Vanguard Drones Mk-6',
            tier: 6,
            hullHealth: 1140,
            shieldCapacity: 560,
            movementSpeed: 195,
            evasionChance: 0.20,
            weaponSystems: [
                { weaponId: 'laser_w14', damage: 169, fireRate: 0.60 },
                { weaponId: 'plasma_w4', damage: 237, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 1425,
            creditDrop: 555
        });
        database.push({
            id: 'ship_cv_054',
            name: 'Vanguard Bombers Mk-6',
            tier: 6,
            hullHealth: 1160,
            shieldCapacity: 570,
            movementSpeed: 210,
            evasionChance: 0.05,
            weaponSystems: [
                { weaponId: 'laser_w15', damage: 172, fireRate: 0.70 },
                { weaponId: 'plasma_w5', damage: 241, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 1450,
            creditDrop: 565
        });
        database.push({
            id: 'ship_cv_055',
            name: 'Vanguard Frigates Mk-6',
            tier: 6,
            hullHealth: 1180,
            shieldCapacity: 580,
            movementSpeed: 225,
            evasionChance: 0.08,
            weaponSystems: [
                { weaponId: 'laser_w16', damage: 175, fireRate: 0.30 },
                { weaponId: 'plasma_w6', damage: 245, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 1475,
            creditDrop: 575
        });
        database.push({
            id: 'ship_cv_056',
            name: 'Vanguard Destroyers Mk-6',
            tier: 6,
            hullHealth: 1200,
            shieldCapacity: 590,
            movementSpeed: 120,
            evasionChance: 0.11,
            weaponSystems: [
                { weaponId: 'laser_w17', damage: 178, fireRate: 0.40 },
                { weaponId: 'plasma_w7', damage: 249, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 1500,
            creditDrop: 585
        });
        database.push({
            id: 'ship_cv_057',
            name: 'Vanguard Cruisers Mk-6',
            tier: 6,
            hullHealth: 1220,
            shieldCapacity: 600,
            movementSpeed: 135,
            evasionChance: 0.14,
            weaponSystems: [
                { weaponId: 'laser_w18', damage: 181, fireRate: 0.50 },
                { weaponId: 'plasma_w8', damage: 253, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 1525,
            creditDrop: 595
        });
        database.push({
            id: 'ship_cv_058',
            name: 'Vanguard Battleships Mk-6',
            tier: 6,
            hullHealth: 1240,
            shieldCapacity: 610,
            movementSpeed: 150,
            evasionChance: 0.17,
            weaponSystems: [
                { weaponId: 'laser_w19', damage: 184, fireRate: 0.60 },
                { weaponId: 'plasma_w9', damage: 257, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 1550,
            creditDrop: 605
        });
        database.push({
            id: 'ship_cv_059',
            name: 'Vanguard Dreadnoughts Mk-6',
            tier: 6,
            hullHealth: 1260,
            shieldCapacity: 620,
            movementSpeed: 165,
            evasionChance: 0.20,
            weaponSystems: [
                { weaponId: 'laser_w20', damage: 187, fireRate: 0.70 },
                { weaponId: 'plasma_w10', damage: 261, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 1575,
            creditDrop: 615
        });
        database.push({
            id: 'ship_cv_060',
            name: 'Vanguard Carriers Mk-7',
            tier: 7,
            hullHealth: 1280,
            shieldCapacity: 630,
            movementSpeed: 180,
            evasionChance: 0.05,
            weaponSystems: [
                { weaponId: 'laser_w1', damage: 190, fireRate: 0.30 },
                { weaponId: 'plasma_w1', damage: 265, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 1600,
            creditDrop: 625
        });
        database.push({
            id: 'ship_cv_061',
            name: 'Vanguard Interceptors Mk-7',
            tier: 7,
            hullHealth: 1300,
            shieldCapacity: 640,
            movementSpeed: 195,
            evasionChance: 0.08,
            weaponSystems: [
                { weaponId: 'laser_w2', damage: 193, fireRate: 0.40 },
                { weaponId: 'plasma_w2', damage: 269, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 1625,
            creditDrop: 635
        });
        database.push({
            id: 'ship_cv_062',
            name: 'Vanguard Gunships Mk-7',
            tier: 7,
            hullHealth: 1320,
            shieldCapacity: 650,
            movementSpeed: 210,
            evasionChance: 0.11,
            weaponSystems: [
                { weaponId: 'laser_w3', damage: 196, fireRate: 0.50 },
                { weaponId: 'plasma_w3', damage: 273, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 1650,
            creditDrop: 645
        });
        database.push({
            id: 'ship_cv_063',
            name: 'Vanguard Drones Mk-7',
            tier: 7,
            hullHealth: 1340,
            shieldCapacity: 660,
            movementSpeed: 225,
            evasionChance: 0.14,
            weaponSystems: [
                { weaponId: 'laser_w4', damage: 199, fireRate: 0.60 },
                { weaponId: 'plasma_w4', damage: 277, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 1675,
            creditDrop: 655
        });
        database.push({
            id: 'ship_cv_064',
            name: 'Vanguard Bombers Mk-7',
            tier: 7,
            hullHealth: 1360,
            shieldCapacity: 670,
            movementSpeed: 120,
            evasionChance: 0.17,
            weaponSystems: [
                { weaponId: 'laser_w5', damage: 202, fireRate: 0.70 },
                { weaponId: 'plasma_w5', damage: 281, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 1700,
            creditDrop: 665
        });
        database.push({
            id: 'ship_cv_065',
            name: 'Vanguard Frigates Mk-7',
            tier: 7,
            hullHealth: 1380,
            shieldCapacity: 680,
            movementSpeed: 135,
            evasionChance: 0.20,
            weaponSystems: [
                { weaponId: 'laser_w6', damage: 205, fireRate: 0.30 },
                { weaponId: 'plasma_w6', damage: 285, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 1725,
            creditDrop: 675
        });
        database.push({
            id: 'ship_cv_066',
            name: 'Vanguard Destroyers Mk-7',
            tier: 7,
            hullHealth: 1400,
            shieldCapacity: 690,
            movementSpeed: 150,
            evasionChance: 0.05,
            weaponSystems: [
                { weaponId: 'laser_w7', damage: 208, fireRate: 0.40 },
                { weaponId: 'plasma_w7', damage: 289, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 1750,
            creditDrop: 685
        });
        database.push({
            id: 'ship_cv_067',
            name: 'Vanguard Cruisers Mk-7',
            tier: 7,
            hullHealth: 1420,
            shieldCapacity: 700,
            movementSpeed: 165,
            evasionChance: 0.08,
            weaponSystems: [
                { weaponId: 'laser_w8', damage: 211, fireRate: 0.50 },
                { weaponId: 'plasma_w8', damage: 293, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 1775,
            creditDrop: 695
        });
        database.push({
            id: 'ship_cv_068',
            name: 'Vanguard Battleships Mk-7',
            tier: 7,
            hullHealth: 1440,
            shieldCapacity: 710,
            movementSpeed: 180,
            evasionChance: 0.11,
            weaponSystems: [
                { weaponId: 'laser_w9', damage: 214, fireRate: 0.60 },
                { weaponId: 'plasma_w9', damage: 297, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 1800,
            creditDrop: 705
        });
        database.push({
            id: 'ship_cv_069',
            name: 'Vanguard Dreadnoughts Mk-7',
            tier: 7,
            hullHealth: 1460,
            shieldCapacity: 720,
            movementSpeed: 195,
            evasionChance: 0.14,
            weaponSystems: [
                { weaponId: 'laser_w10', damage: 217, fireRate: 0.70 },
                { weaponId: 'plasma_w10', damage: 301, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 1825,
            creditDrop: 715
        });
        database.push({
            id: 'ship_cv_070',
            name: 'Vanguard Carriers Mk-8',
            tier: 8,
            hullHealth: 1480,
            shieldCapacity: 730,
            movementSpeed: 210,
            evasionChance: 0.17,
            weaponSystems: [
                { weaponId: 'laser_w11', damage: 220, fireRate: 0.30 },
                { weaponId: 'plasma_w1', damage: 305, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 1850,
            creditDrop: 725
        });
        database.push({
            id: 'ship_cv_071',
            name: 'Vanguard Interceptors Mk-8',
            tier: 8,
            hullHealth: 1500,
            shieldCapacity: 740,
            movementSpeed: 225,
            evasionChance: 0.20,
            weaponSystems: [
                { weaponId: 'laser_w12', damage: 223, fireRate: 0.40 },
                { weaponId: 'plasma_w2', damage: 309, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 1875,
            creditDrop: 735
        });
        database.push({
            id: 'ship_cv_072',
            name: 'Vanguard Gunships Mk-8',
            tier: 8,
            hullHealth: 1520,
            shieldCapacity: 750,
            movementSpeed: 120,
            evasionChance: 0.05,
            weaponSystems: [
                { weaponId: 'laser_w13', damage: 226, fireRate: 0.50 },
                { weaponId: 'plasma_w3', damage: 313, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 1900,
            creditDrop: 745
        });
        database.push({
            id: 'ship_cv_073',
            name: 'Vanguard Drones Mk-8',
            tier: 8,
            hullHealth: 1540,
            shieldCapacity: 760,
            movementSpeed: 135,
            evasionChance: 0.08,
            weaponSystems: [
                { weaponId: 'laser_w14', damage: 229, fireRate: 0.60 },
                { weaponId: 'plasma_w4', damage: 317, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 1925,
            creditDrop: 755
        });
        database.push({
            id: 'ship_cv_074',
            name: 'Vanguard Bombers Mk-8',
            tier: 8,
            hullHealth: 1560,
            shieldCapacity: 770,
            movementSpeed: 150,
            evasionChance: 0.11,
            weaponSystems: [
                { weaponId: 'laser_w15', damage: 232, fireRate: 0.70 },
                { weaponId: 'plasma_w5', damage: 321, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 1950,
            creditDrop: 765
        });
        database.push({
            id: 'ship_cv_075',
            name: 'Vanguard Frigates Mk-8',
            tier: 8,
            hullHealth: 1580,
            shieldCapacity: 780,
            movementSpeed: 165,
            evasionChance: 0.14,
            weaponSystems: [
                { weaponId: 'laser_w16', damage: 235, fireRate: 0.30 },
                { weaponId: 'plasma_w6', damage: 325, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 1975,
            creditDrop: 775
        });
        database.push({
            id: 'ship_cv_076',
            name: 'Vanguard Destroyers Mk-8',
            tier: 8,
            hullHealth: 1600,
            shieldCapacity: 790,
            movementSpeed: 180,
            evasionChance: 0.17,
            weaponSystems: [
                { weaponId: 'laser_w17', damage: 238, fireRate: 0.40 },
                { weaponId: 'plasma_w7', damage: 329, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 2000,
            creditDrop: 785
        });
        database.push({
            id: 'ship_cv_077',
            name: 'Vanguard Cruisers Mk-8',
            tier: 8,
            hullHealth: 1620,
            shieldCapacity: 800,
            movementSpeed: 195,
            evasionChance: 0.20,
            weaponSystems: [
                { weaponId: 'laser_w18', damage: 241, fireRate: 0.50 },
                { weaponId: 'plasma_w8', damage: 333, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 2025,
            creditDrop: 795
        });
        database.push({
            id: 'ship_cv_078',
            name: 'Vanguard Battleships Mk-8',
            tier: 8,
            hullHealth: 1640,
            shieldCapacity: 810,
            movementSpeed: 210,
            evasionChance: 0.05,
            weaponSystems: [
                { weaponId: 'laser_w19', damage: 244, fireRate: 0.60 },
                { weaponId: 'plasma_w9', damage: 337, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 2050,
            creditDrop: 805
        });
        database.push({
            id: 'ship_cv_079',
            name: 'Vanguard Dreadnoughts Mk-8',
            tier: 8,
            hullHealth: 1660,
            shieldCapacity: 820,
            movementSpeed: 225,
            evasionChance: 0.08,
            weaponSystems: [
                { weaponId: 'laser_w20', damage: 247, fireRate: 0.70 },
                { weaponId: 'plasma_w10', damage: 341, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 2075,
            creditDrop: 815
        });
        database.push({
            id: 'ship_cv_080',
            name: 'Vanguard Carriers Mk-9',
            tier: 9,
            hullHealth: 1680,
            shieldCapacity: 830,
            movementSpeed: 120,
            evasionChance: 0.11,
            weaponSystems: [
                { weaponId: 'laser_w1', damage: 250, fireRate: 0.30 },
                { weaponId: 'plasma_w1', damage: 345, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 2100,
            creditDrop: 825
        });
        database.push({
            id: 'ship_cv_081',
            name: 'Vanguard Interceptors Mk-9',
            tier: 9,
            hullHealth: 1700,
            shieldCapacity: 840,
            movementSpeed: 135,
            evasionChance: 0.14,
            weaponSystems: [
                { weaponId: 'laser_w2', damage: 253, fireRate: 0.40 },
                { weaponId: 'plasma_w2', damage: 349, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 2125,
            creditDrop: 835
        });
        database.push({
            id: 'ship_cv_082',
            name: 'Vanguard Gunships Mk-9',
            tier: 9,
            hullHealth: 1720,
            shieldCapacity: 850,
            movementSpeed: 150,
            evasionChance: 0.17,
            weaponSystems: [
                { weaponId: 'laser_w3', damage: 256, fireRate: 0.50 },
                { weaponId: 'plasma_w3', damage: 353, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 2150,
            creditDrop: 845
        });
        database.push({
            id: 'ship_cv_083',
            name: 'Vanguard Drones Mk-9',
            tier: 9,
            hullHealth: 1740,
            shieldCapacity: 860,
            movementSpeed: 165,
            evasionChance: 0.20,
            weaponSystems: [
                { weaponId: 'laser_w4', damage: 259, fireRate: 0.60 },
                { weaponId: 'plasma_w4', damage: 357, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 2175,
            creditDrop: 855
        });
        database.push({
            id: 'ship_cv_084',
            name: 'Vanguard Bombers Mk-9',
            tier: 9,
            hullHealth: 1760,
            shieldCapacity: 870,
            movementSpeed: 180,
            evasionChance: 0.05,
            weaponSystems: [
                { weaponId: 'laser_w5', damage: 262, fireRate: 0.70 },
                { weaponId: 'plasma_w5', damage: 361, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 2200,
            creditDrop: 865
        });
        database.push({
            id: 'ship_cv_085',
            name: 'Vanguard Frigates Mk-9',
            tier: 9,
            hullHealth: 1780,
            shieldCapacity: 880,
            movementSpeed: 195,
            evasionChance: 0.08,
            weaponSystems: [
                { weaponId: 'laser_w6', damage: 265, fireRate: 0.30 },
                { weaponId: 'plasma_w6', damage: 365, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 2225,
            creditDrop: 875
        });
        database.push({
            id: 'ship_cv_086',
            name: 'Vanguard Destroyers Mk-9',
            tier: 9,
            hullHealth: 1800,
            shieldCapacity: 890,
            movementSpeed: 210,
            evasionChance: 0.11,
            weaponSystems: [
                { weaponId: 'laser_w7', damage: 268, fireRate: 0.40 },
                { weaponId: 'plasma_w7', damage: 369, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 2250,
            creditDrop: 885
        });
        database.push({
            id: 'ship_cv_087',
            name: 'Vanguard Cruisers Mk-9',
            tier: 9,
            hullHealth: 1820,
            shieldCapacity: 900,
            movementSpeed: 225,
            evasionChance: 0.14,
            weaponSystems: [
                { weaponId: 'laser_w8', damage: 271, fireRate: 0.50 },
                { weaponId: 'plasma_w8', damage: 373, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 2275,
            creditDrop: 895
        });
        database.push({
            id: 'ship_cv_088',
            name: 'Vanguard Battleships Mk-9',
            tier: 9,
            hullHealth: 1840,
            shieldCapacity: 910,
            movementSpeed: 120,
            evasionChance: 0.17,
            weaponSystems: [
                { weaponId: 'laser_w9', damage: 274, fireRate: 0.60 },
                { weaponId: 'plasma_w9', damage: 377, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 2300,
            creditDrop: 905
        });
        database.push({
            id: 'ship_cv_089',
            name: 'Vanguard Dreadnoughts Mk-9',
            tier: 9,
            hullHealth: 1860,
            shieldCapacity: 920,
            movementSpeed: 135,
            evasionChance: 0.20,
            weaponSystems: [
                { weaponId: 'laser_w10', damage: 277, fireRate: 0.70 },
                { weaponId: 'plasma_w10', damage: 381, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 2325,
            creditDrop: 915
        });
        database.push({
            id: 'ship_cv_090',
            name: 'Vanguard Carriers Mk-10',
            tier: 10,
            hullHealth: 1880,
            shieldCapacity: 930,
            movementSpeed: 150,
            evasionChance: 0.05,
            weaponSystems: [
                { weaponId: 'laser_w11', damage: 280, fireRate: 0.30 },
                { weaponId: 'plasma_w1', damage: 385, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 2350,
            creditDrop: 925
        });
        database.push({
            id: 'ship_cv_091',
            name: 'Vanguard Interceptors Mk-10',
            tier: 10,
            hullHealth: 1900,
            shieldCapacity: 940,
            movementSpeed: 165,
            evasionChance: 0.08,
            weaponSystems: [
                { weaponId: 'laser_w12', damage: 283, fireRate: 0.40 },
                { weaponId: 'plasma_w2', damage: 389, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 2375,
            creditDrop: 935
        });
        database.push({
            id: 'ship_cv_092',
            name: 'Vanguard Gunships Mk-10',
            tier: 10,
            hullHealth: 1920,
            shieldCapacity: 950,
            movementSpeed: 180,
            evasionChance: 0.11,
            weaponSystems: [
                { weaponId: 'laser_w13', damage: 286, fireRate: 0.50 },
                { weaponId: 'plasma_w3', damage: 393, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 2400,
            creditDrop: 945
        });
        database.push({
            id: 'ship_cv_093',
            name: 'Vanguard Drones Mk-10',
            tier: 10,
            hullHealth: 1940,
            shieldCapacity: 960,
            movementSpeed: 195,
            evasionChance: 0.14,
            weaponSystems: [
                { weaponId: 'laser_w14', damage: 289, fireRate: 0.60 },
                { weaponId: 'plasma_w4', damage: 397, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 2425,
            creditDrop: 955
        });
        database.push({
            id: 'ship_cv_094',
            name: 'Vanguard Bombers Mk-10',
            tier: 10,
            hullHealth: 1960,
            shieldCapacity: 970,
            movementSpeed: 210,
            evasionChance: 0.17,
            weaponSystems: [
                { weaponId: 'laser_w15', damage: 292, fireRate: 0.70 },
                { weaponId: 'plasma_w5', damage: 401, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 2450,
            creditDrop: 965
        });
        database.push({
            id: 'ship_cv_095',
            name: 'Vanguard Frigates Mk-10',
            tier: 10,
            hullHealth: 1980,
            shieldCapacity: 980,
            movementSpeed: 225,
            evasionChance: 0.20,
            weaponSystems: [
                { weaponId: 'laser_w16', damage: 295, fireRate: 0.30 },
                { weaponId: 'plasma_w6', damage: 405, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 2475,
            creditDrop: 975
        });
        database.push({
            id: 'ship_cv_096',
            name: 'Vanguard Destroyers Mk-10',
            tier: 10,
            hullHealth: 2000,
            shieldCapacity: 990,
            movementSpeed: 120,
            evasionChance: 0.05,
            weaponSystems: [
                { weaponId: 'laser_w17', damage: 298, fireRate: 0.40 },
                { weaponId: 'plasma_w7', damage: 409, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 2500,
            creditDrop: 985
        });
        database.push({
            id: 'ship_cv_097',
            name: 'Vanguard Cruisers Mk-10',
            tier: 10,
            hullHealth: 2020,
            shieldCapacity: 1000,
            movementSpeed: 135,
            evasionChance: 0.08,
            weaponSystems: [
                { weaponId: 'laser_w18', damage: 301, fireRate: 0.50 },
                { weaponId: 'plasma_w8', damage: 413, fireRate: 1.40 }
            ],
            formationPattern: 'circle_swarm',
            scoreValue: 2525,
            creditDrop: 995
        });
        database.push({
            id: 'ship_cv_098',
            name: 'Vanguard Battleships Mk-10',
            tier: 10,
            hullHealth: 2040,
            shieldCapacity: 1010,
            movementSpeed: 150,
            evasionChance: 0.11,
            weaponSystems: [
                { weaponId: 'laser_w19', damage: 304, fireRate: 0.60 },
                { weaponId: 'plasma_w9', damage: 417, fireRate: 1.60 }
            ],
            formationPattern: 'pincer_flank',
            scoreValue: 2550,
            creditDrop: 1005
        });
        database.push({
            id: 'ship_cv_099',
            name: 'Vanguard Dreadnoughts Mk-10',
            tier: 10,
            hullHealth: 2060,
            shieldCapacity: 1020,
            movementSpeed: 165,
            evasionChance: 0.14,
            weaponSystems: [
                { weaponId: 'laser_w20', damage: 307, fireRate: 0.70 },
                { weaponId: 'plasma_w10', damage: 421, fireRate: 1.80 }
            ],
            formationPattern: 'line_sweep',
            scoreValue: 2575,
            creditDrop: 1015
        });
        database.push({
            id: 'ship_cv_100',
            name: 'Vanguard Carriers Mk-11',
            tier: 11,
            hullHealth: 2080,
            shieldCapacity: 1030,
            movementSpeed: 180,
            evasionChance: 0.17,
            weaponSystems: [
                { weaponId: 'laser_w1', damage: 310, fireRate: 0.30 },
                { weaponId: 'plasma_w1', damage: 425, fireRate: 1.20 }
            ],
            formationPattern: 'v_formation',
            scoreValue: 2600,
            creditDrop: 1025
        });
        return database;
    }
}
