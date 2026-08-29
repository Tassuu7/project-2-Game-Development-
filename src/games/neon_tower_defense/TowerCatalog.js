/**
 * NovaForge Neon Tower Defense Complete Tower Catalog & Tech Trees
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class TowerCatalog {
    static getAllTowers() {
        const towers = [];
        towers.push({
            id: 'tower_01',
            name: 'Pulse Gatling Mk-1',
            tier: 1,
            cost: 80 + (1 * 15),
            range: 120 + (1 % 8) * 15,
            fireRate: 0.15 + (1 % 5) * 0.1,
            damage: 12 + (1 * 5),
            bulletSpeed: 300 + (1 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][1 % 5],
            special: 'pulse_effect',
            upgradeId: 'tower_02'
        });
        towers.push({
            id: 'tower_02',
            name: 'Cryo Beam Mk-1',
            tier: 1,
            cost: 80 + (2 * 15),
            range: 120 + (2 % 8) * 15,
            fireRate: 0.15 + (2 % 5) * 0.1,
            damage: 12 + (2 * 5),
            bulletSpeed: 300 + (2 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][2 % 5],
            special: 'cryo_effect',
            upgradeId: 'tower_03'
        });
        towers.push({
            id: 'tower_03',
            name: 'Tesla Arc Mk-1',
            tier: 1,
            cost: 80 + (3 * 15),
            range: 120 + (3 % 8) * 15,
            fireRate: 0.15 + (3 % 5) * 0.1,
            damage: 12 + (3 * 5),
            bulletSpeed: 300 + (3 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][3 % 5],
            special: 'tesla_effect',
            upgradeId: 'tower_04'
        });
        towers.push({
            id: 'tower_04',
            name: 'Plasma Mortar Mk-1',
            tier: 1,
            cost: 80 + (4 * 15),
            range: 120 + (4 % 8) * 15,
            fireRate: 0.15 + (4 % 5) * 0.1,
            damage: 12 + (4 * 5),
            bulletSpeed: 300 + (4 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][4 % 5],
            special: 'plasma_effect',
            upgradeId: 'tower_05'
        });
        towers.push({
            id: 'tower_05',
            name: 'Photon Laser Mk-1',
            tier: 1,
            cost: 80 + (5 * 15),
            range: 120 + (5 % 8) * 15,
            fireRate: 0.15 + (5 % 5) * 0.1,
            damage: 12 + (5 * 5),
            bulletSpeed: 300 + (5 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][5 % 5],
            special: 'photon_effect',
            upgradeId: 'tower_06'
        });
        towers.push({
            id: 'tower_06',
            name: 'EMP Disruptor Mk-1',
            tier: 1,
            cost: 80 + (6 * 15),
            range: 120 + (6 % 8) * 15,
            fireRate: 0.15 + (6 % 5) * 0.1,
            damage: 12 + (6 * 5),
            bulletSpeed: 300 + (6 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][6 % 5],
            special: 'emp_effect',
            upgradeId: 'tower_07'
        });
        towers.push({
            id: 'tower_07',
            name: 'Acid Sprayer Mk-1',
            tier: 1,
            cost: 80 + (7 * 15),
            range: 120 + (7 % 8) * 15,
            fireRate: 0.15 + (7 % 5) * 0.1,
            damage: 12 + (7 * 5),
            bulletSpeed: 300 + (7 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][7 % 5],
            special: 'acid_effect',
            upgradeId: 'tower_08'
        });
        towers.push({
            id: 'tower_08',
            name: 'Quantum Blaster Mk-1',
            tier: 1,
            cost: 80 + (8 * 15),
            range: 120 + (8 % 8) * 15,
            fireRate: 0.15 + (8 % 5) * 0.1,
            damage: 12 + (8 * 5),
            bulletSpeed: 300 + (8 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][8 % 5],
            special: 'quantum_effect',
            upgradeId: 'tower_09'
        });
        towers.push({
            id: 'tower_09',
            name: 'Nova Cannon Mk-1',
            tier: 1,
            cost: 80 + (9 * 15),
            range: 120 + (9 % 8) * 15,
            fireRate: 0.15 + (9 % 5) * 0.1,
            damage: 12 + (9 * 5),
            bulletSpeed: 300 + (9 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][9 % 5],
            special: 'nova_effect',
            upgradeId: 'tower_10'
        });
        towers.push({
            id: 'tower_10',
            name: 'Railgun Piercer Mk-2',
            tier: 2,
            cost: 80 + (10 * 15),
            range: 120 + (10 % 8) * 15,
            fireRate: 0.15 + (10 % 5) * 0.1,
            damage: 12 + (10 * 5),
            bulletSpeed: 300 + (10 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][10 % 5],
            special: 'railgun_effect',
            upgradeId: 'tower_11'
        });
        towers.push({
            id: 'tower_11',
            name: 'Pulse Gatling Mk-2',
            tier: 2,
            cost: 80 + (11 * 15),
            range: 120 + (11 % 8) * 15,
            fireRate: 0.15 + (11 % 5) * 0.1,
            damage: 12 + (11 * 5),
            bulletSpeed: 300 + (11 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][11 % 5],
            special: 'pulse_effect',
            upgradeId: 'tower_12'
        });
        towers.push({
            id: 'tower_12',
            name: 'Cryo Beam Mk-2',
            tier: 2,
            cost: 80 + (12 * 15),
            range: 120 + (12 % 8) * 15,
            fireRate: 0.15 + (12 % 5) * 0.1,
            damage: 12 + (12 * 5),
            bulletSpeed: 300 + (12 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][12 % 5],
            special: 'cryo_effect',
            upgradeId: 'tower_13'
        });
        towers.push({
            id: 'tower_13',
            name: 'Tesla Arc Mk-2',
            tier: 2,
            cost: 80 + (13 * 15),
            range: 120 + (13 % 8) * 15,
            fireRate: 0.15 + (13 % 5) * 0.1,
            damage: 12 + (13 * 5),
            bulletSpeed: 300 + (13 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][13 % 5],
            special: 'tesla_effect',
            upgradeId: 'tower_14'
        });
        towers.push({
            id: 'tower_14',
            name: 'Plasma Mortar Mk-2',
            tier: 2,
            cost: 80 + (14 * 15),
            range: 120 + (14 % 8) * 15,
            fireRate: 0.15 + (14 % 5) * 0.1,
            damage: 12 + (14 * 5),
            bulletSpeed: 300 + (14 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][14 % 5],
            special: 'plasma_effect',
            upgradeId: 'tower_15'
        });
        towers.push({
            id: 'tower_15',
            name: 'Photon Laser Mk-2',
            tier: 2,
            cost: 80 + (15 * 15),
            range: 120 + (15 % 8) * 15,
            fireRate: 0.15 + (15 % 5) * 0.1,
            damage: 12 + (15 * 5),
            bulletSpeed: 300 + (15 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][15 % 5],
            special: 'photon_effect',
            upgradeId: 'tower_16'
        });
        towers.push({
            id: 'tower_16',
            name: 'EMP Disruptor Mk-2',
            tier: 2,
            cost: 80 + (16 * 15),
            range: 120 + (16 % 8) * 15,
            fireRate: 0.15 + (16 % 5) * 0.1,
            damage: 12 + (16 * 5),
            bulletSpeed: 300 + (16 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][16 % 5],
            special: 'emp_effect',
            upgradeId: 'tower_17'
        });
        towers.push({
            id: 'tower_17',
            name: 'Acid Sprayer Mk-2',
            tier: 2,
            cost: 80 + (17 * 15),
            range: 120 + (17 % 8) * 15,
            fireRate: 0.15 + (17 % 5) * 0.1,
            damage: 12 + (17 * 5),
            bulletSpeed: 300 + (17 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][17 % 5],
            special: 'acid_effect',
            upgradeId: 'tower_18'
        });
        towers.push({
            id: 'tower_18',
            name: 'Quantum Blaster Mk-2',
            tier: 2,
            cost: 80 + (18 * 15),
            range: 120 + (18 % 8) * 15,
            fireRate: 0.15 + (18 % 5) * 0.1,
            damage: 12 + (18 * 5),
            bulletSpeed: 300 + (18 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][18 % 5],
            special: 'quantum_effect',
            upgradeId: 'tower_19'
        });
        towers.push({
            id: 'tower_19',
            name: 'Nova Cannon Mk-2',
            tier: 2,
            cost: 80 + (19 * 15),
            range: 120 + (19 % 8) * 15,
            fireRate: 0.15 + (19 % 5) * 0.1,
            damage: 12 + (19 * 5),
            bulletSpeed: 300 + (19 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][19 % 5],
            special: 'nova_effect',
            upgradeId: 'tower_20'
        });
        towers.push({
            id: 'tower_20',
            name: 'Railgun Piercer Mk-3',
            tier: 3,
            cost: 80 + (20 * 15),
            range: 120 + (20 % 8) * 15,
            fireRate: 0.15 + (20 % 5) * 0.1,
            damage: 12 + (20 * 5),
            bulletSpeed: 300 + (20 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][20 % 5],
            special: 'railgun_effect',
            upgradeId: 'tower_21'
        });
        towers.push({
            id: 'tower_21',
            name: 'Pulse Gatling Mk-3',
            tier: 3,
            cost: 80 + (21 * 15),
            range: 120 + (21 % 8) * 15,
            fireRate: 0.15 + (21 % 5) * 0.1,
            damage: 12 + (21 * 5),
            bulletSpeed: 300 + (21 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][21 % 5],
            special: 'pulse_effect',
            upgradeId: 'tower_22'
        });
        towers.push({
            id: 'tower_22',
            name: 'Cryo Beam Mk-3',
            tier: 3,
            cost: 80 + (22 * 15),
            range: 120 + (22 % 8) * 15,
            fireRate: 0.15 + (22 % 5) * 0.1,
            damage: 12 + (22 * 5),
            bulletSpeed: 300 + (22 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][22 % 5],
            special: 'cryo_effect',
            upgradeId: 'tower_23'
        });
        towers.push({
            id: 'tower_23',
            name: 'Tesla Arc Mk-3',
            tier: 3,
            cost: 80 + (23 * 15),
            range: 120 + (23 % 8) * 15,
            fireRate: 0.15 + (23 % 5) * 0.1,
            damage: 12 + (23 * 5),
            bulletSpeed: 300 + (23 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][23 % 5],
            special: 'tesla_effect',
            upgradeId: 'tower_24'
        });
        towers.push({
            id: 'tower_24',
            name: 'Plasma Mortar Mk-3',
            tier: 3,
            cost: 80 + (24 * 15),
            range: 120 + (24 % 8) * 15,
            fireRate: 0.15 + (24 % 5) * 0.1,
            damage: 12 + (24 * 5),
            bulletSpeed: 300 + (24 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][24 % 5],
            special: 'plasma_effect',
            upgradeId: 'tower_25'
        });
        towers.push({
            id: 'tower_25',
            name: 'Photon Laser Mk-3',
            tier: 3,
            cost: 80 + (25 * 15),
            range: 120 + (25 % 8) * 15,
            fireRate: 0.15 + (25 % 5) * 0.1,
            damage: 12 + (25 * 5),
            bulletSpeed: 300 + (25 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][25 % 5],
            special: 'photon_effect',
            upgradeId: 'tower_26'
        });
        towers.push({
            id: 'tower_26',
            name: 'EMP Disruptor Mk-3',
            tier: 3,
            cost: 80 + (26 * 15),
            range: 120 + (26 % 8) * 15,
            fireRate: 0.15 + (26 % 5) * 0.1,
            damage: 12 + (26 * 5),
            bulletSpeed: 300 + (26 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][26 % 5],
            special: 'emp_effect',
            upgradeId: 'tower_27'
        });
        towers.push({
            id: 'tower_27',
            name: 'Acid Sprayer Mk-3',
            tier: 3,
            cost: 80 + (27 * 15),
            range: 120 + (27 % 8) * 15,
            fireRate: 0.15 + (27 % 5) * 0.1,
            damage: 12 + (27 * 5),
            bulletSpeed: 300 + (27 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][27 % 5],
            special: 'acid_effect',
            upgradeId: 'tower_28'
        });
        towers.push({
            id: 'tower_28',
            name: 'Quantum Blaster Mk-3',
            tier: 3,
            cost: 80 + (28 * 15),
            range: 120 + (28 % 8) * 15,
            fireRate: 0.15 + (28 % 5) * 0.1,
            damage: 12 + (28 * 5),
            bulletSpeed: 300 + (28 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][28 % 5],
            special: 'quantum_effect',
            upgradeId: 'tower_29'
        });
        towers.push({
            id: 'tower_29',
            name: 'Nova Cannon Mk-3',
            tier: 3,
            cost: 80 + (29 * 15),
            range: 120 + (29 % 8) * 15,
            fireRate: 0.15 + (29 % 5) * 0.1,
            damage: 12 + (29 * 5),
            bulletSpeed: 300 + (29 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][29 % 5],
            special: 'nova_effect',
            upgradeId: 'tower_30'
        });
        towers.push({
            id: 'tower_30',
            name: 'Railgun Piercer Mk-4',
            tier: 4,
            cost: 80 + (30 * 15),
            range: 120 + (30 % 8) * 15,
            fireRate: 0.15 + (30 % 5) * 0.1,
            damage: 12 + (30 * 5),
            bulletSpeed: 300 + (30 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][30 % 5],
            special: 'railgun_effect',
            upgradeId: 'tower_31'
        });
        towers.push({
            id: 'tower_31',
            name: 'Pulse Gatling Mk-4',
            tier: 4,
            cost: 80 + (31 * 15),
            range: 120 + (31 % 8) * 15,
            fireRate: 0.15 + (31 % 5) * 0.1,
            damage: 12 + (31 * 5),
            bulletSpeed: 300 + (31 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][31 % 5],
            special: 'pulse_effect',
            upgradeId: 'tower_32'
        });
        towers.push({
            id: 'tower_32',
            name: 'Cryo Beam Mk-4',
            tier: 4,
            cost: 80 + (32 * 15),
            range: 120 + (32 % 8) * 15,
            fireRate: 0.15 + (32 % 5) * 0.1,
            damage: 12 + (32 * 5),
            bulletSpeed: 300 + (32 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][32 % 5],
            special: 'cryo_effect',
            upgradeId: 'tower_33'
        });
        towers.push({
            id: 'tower_33',
            name: 'Tesla Arc Mk-4',
            tier: 4,
            cost: 80 + (33 * 15),
            range: 120 + (33 % 8) * 15,
            fireRate: 0.15 + (33 % 5) * 0.1,
            damage: 12 + (33 * 5),
            bulletSpeed: 300 + (33 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][33 % 5],
            special: 'tesla_effect',
            upgradeId: 'tower_34'
        });
        towers.push({
            id: 'tower_34',
            name: 'Plasma Mortar Mk-4',
            tier: 4,
            cost: 80 + (34 * 15),
            range: 120 + (34 % 8) * 15,
            fireRate: 0.15 + (34 % 5) * 0.1,
            damage: 12 + (34 * 5),
            bulletSpeed: 300 + (34 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][34 % 5],
            special: 'plasma_effect',
            upgradeId: 'tower_35'
        });
        towers.push({
            id: 'tower_35',
            name: 'Photon Laser Mk-4',
            tier: 4,
            cost: 80 + (35 * 15),
            range: 120 + (35 % 8) * 15,
            fireRate: 0.15 + (35 % 5) * 0.1,
            damage: 12 + (35 * 5),
            bulletSpeed: 300 + (35 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][35 % 5],
            special: 'photon_effect',
            upgradeId: 'tower_36'
        });
        towers.push({
            id: 'tower_36',
            name: 'EMP Disruptor Mk-4',
            tier: 4,
            cost: 80 + (36 * 15),
            range: 120 + (36 % 8) * 15,
            fireRate: 0.15 + (36 % 5) * 0.1,
            damage: 12 + (36 * 5),
            bulletSpeed: 300 + (36 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][36 % 5],
            special: 'emp_effect',
            upgradeId: 'tower_37'
        });
        towers.push({
            id: 'tower_37',
            name: 'Acid Sprayer Mk-4',
            tier: 4,
            cost: 80 + (37 * 15),
            range: 120 + (37 % 8) * 15,
            fireRate: 0.15 + (37 % 5) * 0.1,
            damage: 12 + (37 * 5),
            bulletSpeed: 300 + (37 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][37 % 5],
            special: 'acid_effect',
            upgradeId: 'tower_38'
        });
        towers.push({
            id: 'tower_38',
            name: 'Quantum Blaster Mk-4',
            tier: 4,
            cost: 80 + (38 * 15),
            range: 120 + (38 % 8) * 15,
            fireRate: 0.15 + (38 % 5) * 0.1,
            damage: 12 + (38 * 5),
            bulletSpeed: 300 + (38 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][38 % 5],
            special: 'quantum_effect',
            upgradeId: 'tower_39'
        });
        towers.push({
            id: 'tower_39',
            name: 'Nova Cannon Mk-4',
            tier: 4,
            cost: 80 + (39 * 15),
            range: 120 + (39 % 8) * 15,
            fireRate: 0.15 + (39 % 5) * 0.1,
            damage: 12 + (39 * 5),
            bulletSpeed: 300 + (39 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][39 % 5],
            special: 'nova_effect',
            upgradeId: 'tower_40'
        });
        towers.push({
            id: 'tower_40',
            name: 'Railgun Piercer Mk-5',
            tier: 5,
            cost: 80 + (40 * 15),
            range: 120 + (40 % 8) * 15,
            fireRate: 0.15 + (40 % 5) * 0.1,
            damage: 12 + (40 * 5),
            bulletSpeed: 300 + (40 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][40 % 5],
            special: 'railgun_effect',
            upgradeId: 'tower_41'
        });
        towers.push({
            id: 'tower_41',
            name: 'Pulse Gatling Mk-5',
            tier: 5,
            cost: 80 + (41 * 15),
            range: 120 + (41 % 8) * 15,
            fireRate: 0.15 + (41 % 5) * 0.1,
            damage: 12 + (41 * 5),
            bulletSpeed: 300 + (41 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][41 % 5],
            special: 'pulse_effect',
            upgradeId: 'tower_42'
        });
        towers.push({
            id: 'tower_42',
            name: 'Cryo Beam Mk-5',
            tier: 5,
            cost: 80 + (42 * 15),
            range: 120 + (42 % 8) * 15,
            fireRate: 0.15 + (42 % 5) * 0.1,
            damage: 12 + (42 * 5),
            bulletSpeed: 300 + (42 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][42 % 5],
            special: 'cryo_effect',
            upgradeId: 'tower_43'
        });
        towers.push({
            id: 'tower_43',
            name: 'Tesla Arc Mk-5',
            tier: 5,
            cost: 80 + (43 * 15),
            range: 120 + (43 % 8) * 15,
            fireRate: 0.15 + (43 % 5) * 0.1,
            damage: 12 + (43 * 5),
            bulletSpeed: 300 + (43 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][43 % 5],
            special: 'tesla_effect',
            upgradeId: 'tower_44'
        });
        towers.push({
            id: 'tower_44',
            name: 'Plasma Mortar Mk-5',
            tier: 5,
            cost: 80 + (44 * 15),
            range: 120 + (44 % 8) * 15,
            fireRate: 0.15 + (44 % 5) * 0.1,
            damage: 12 + (44 * 5),
            bulletSpeed: 300 + (44 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][44 % 5],
            special: 'plasma_effect',
            upgradeId: 'tower_45'
        });
        towers.push({
            id: 'tower_45',
            name: 'Photon Laser Mk-5',
            tier: 5,
            cost: 80 + (45 * 15),
            range: 120 + (45 % 8) * 15,
            fireRate: 0.15 + (45 % 5) * 0.1,
            damage: 12 + (45 * 5),
            bulletSpeed: 300 + (45 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][45 % 5],
            special: 'photon_effect',
            upgradeId: 'tower_46'
        });
        towers.push({
            id: 'tower_46',
            name: 'EMP Disruptor Mk-5',
            tier: 5,
            cost: 80 + (46 * 15),
            range: 120 + (46 % 8) * 15,
            fireRate: 0.15 + (46 % 5) * 0.1,
            damage: 12 + (46 * 5),
            bulletSpeed: 300 + (46 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][46 % 5],
            special: 'emp_effect',
            upgradeId: 'tower_47'
        });
        towers.push({
            id: 'tower_47',
            name: 'Acid Sprayer Mk-5',
            tier: 5,
            cost: 80 + (47 * 15),
            range: 120 + (47 % 8) * 15,
            fireRate: 0.15 + (47 % 5) * 0.1,
            damage: 12 + (47 * 5),
            bulletSpeed: 300 + (47 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][47 % 5],
            special: 'acid_effect',
            upgradeId: 'tower_48'
        });
        towers.push({
            id: 'tower_48',
            name: 'Quantum Blaster Mk-5',
            tier: 5,
            cost: 80 + (48 * 15),
            range: 120 + (48 % 8) * 15,
            fireRate: 0.15 + (48 % 5) * 0.1,
            damage: 12 + (48 * 5),
            bulletSpeed: 300 + (48 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][48 % 5],
            special: 'quantum_effect',
            upgradeId: 'tower_49'
        });
        towers.push({
            id: 'tower_49',
            name: 'Nova Cannon Mk-5',
            tier: 5,
            cost: 80 + (49 * 15),
            range: 120 + (49 % 8) * 15,
            fireRate: 0.15 + (49 % 5) * 0.1,
            damage: 12 + (49 * 5),
            bulletSpeed: 300 + (49 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][49 % 5],
            special: 'nova_effect',
            upgradeId: 'tower_50'
        });
        towers.push({
            id: 'tower_50',
            name: 'Railgun Piercer Mk-6',
            tier: 6,
            cost: 80 + (50 * 15),
            range: 120 + (50 % 8) * 15,
            fireRate: 0.15 + (50 % 5) * 0.1,
            damage: 12 + (50 * 5),
            bulletSpeed: 300 + (50 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][50 % 5],
            special: 'railgun_effect',
            upgradeId: 'tower_51'
        });
        towers.push({
            id: 'tower_51',
            name: 'Pulse Gatling Mk-6',
            tier: 6,
            cost: 80 + (51 * 15),
            range: 120 + (51 % 8) * 15,
            fireRate: 0.15 + (51 % 5) * 0.1,
            damage: 12 + (51 * 5),
            bulletSpeed: 300 + (51 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][51 % 5],
            special: 'pulse_effect',
            upgradeId: 'tower_52'
        });
        towers.push({
            id: 'tower_52',
            name: 'Cryo Beam Mk-6',
            tier: 6,
            cost: 80 + (52 * 15),
            range: 120 + (52 % 8) * 15,
            fireRate: 0.15 + (52 % 5) * 0.1,
            damage: 12 + (52 * 5),
            bulletSpeed: 300 + (52 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][52 % 5],
            special: 'cryo_effect',
            upgradeId: 'tower_53'
        });
        towers.push({
            id: 'tower_53',
            name: 'Tesla Arc Mk-6',
            tier: 6,
            cost: 80 + (53 * 15),
            range: 120 + (53 % 8) * 15,
            fireRate: 0.15 + (53 % 5) * 0.1,
            damage: 12 + (53 * 5),
            bulletSpeed: 300 + (53 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][53 % 5],
            special: 'tesla_effect',
            upgradeId: 'tower_54'
        });
        towers.push({
            id: 'tower_54',
            name: 'Plasma Mortar Mk-6',
            tier: 6,
            cost: 80 + (54 * 15),
            range: 120 + (54 % 8) * 15,
            fireRate: 0.15 + (54 % 5) * 0.1,
            damage: 12 + (54 * 5),
            bulletSpeed: 300 + (54 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][54 % 5],
            special: 'plasma_effect',
            upgradeId: 'tower_55'
        });
        towers.push({
            id: 'tower_55',
            name: 'Photon Laser Mk-6',
            tier: 6,
            cost: 80 + (55 * 15),
            range: 120 + (55 % 8) * 15,
            fireRate: 0.15 + (55 % 5) * 0.1,
            damage: 12 + (55 * 5),
            bulletSpeed: 300 + (55 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][55 % 5],
            special: 'photon_effect',
            upgradeId: 'tower_56'
        });
        towers.push({
            id: 'tower_56',
            name: 'EMP Disruptor Mk-6',
            tier: 6,
            cost: 80 + (56 * 15),
            range: 120 + (56 % 8) * 15,
            fireRate: 0.15 + (56 % 5) * 0.1,
            damage: 12 + (56 * 5),
            bulletSpeed: 300 + (56 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][56 % 5],
            special: 'emp_effect',
            upgradeId: 'tower_57'
        });
        towers.push({
            id: 'tower_57',
            name: 'Acid Sprayer Mk-6',
            tier: 6,
            cost: 80 + (57 * 15),
            range: 120 + (57 % 8) * 15,
            fireRate: 0.15 + (57 % 5) * 0.1,
            damage: 12 + (57 * 5),
            bulletSpeed: 300 + (57 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][57 % 5],
            special: 'acid_effect',
            upgradeId: 'tower_58'
        });
        towers.push({
            id: 'tower_58',
            name: 'Quantum Blaster Mk-6',
            tier: 6,
            cost: 80 + (58 * 15),
            range: 120 + (58 % 8) * 15,
            fireRate: 0.15 + (58 % 5) * 0.1,
            damage: 12 + (58 * 5),
            bulletSpeed: 300 + (58 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][58 % 5],
            special: 'quantum_effect',
            upgradeId: 'tower_59'
        });
        towers.push({
            id: 'tower_59',
            name: 'Nova Cannon Mk-6',
            tier: 6,
            cost: 80 + (59 * 15),
            range: 120 + (59 % 8) * 15,
            fireRate: 0.15 + (59 % 5) * 0.1,
            damage: 12 + (59 * 5),
            bulletSpeed: 300 + (59 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][59 % 5],
            special: 'nova_effect',
            upgradeId: 'tower_60'
        });
        towers.push({
            id: 'tower_60',
            name: 'Railgun Piercer Mk-7',
            tier: 7,
            cost: 80 + (60 * 15),
            range: 120 + (60 % 8) * 15,
            fireRate: 0.15 + (60 % 5) * 0.1,
            damage: 12 + (60 * 5),
            bulletSpeed: 300 + (60 * 10),
            color: ['#00e5ff', '#ff0055', '#39ff14', '#ffe600', '#b026ff'][60 % 5],
            special: 'railgun_effect',
            upgradeId: null
        });
        return towers;
    }
}
