/**
 * NovaForge Neon Tower Defense Creep Archetypes & Elemental Resistances
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class CreepArchetypes {
    static getCreepDefinitions() {
        const creeps = [];
        creeps.push({
            id: 'creep_01',
            name: 'Scout Runner Tier 1',
            health: 85,
            speed: 75,
            armor: 7,
            shield: 0,
            rewardCredits: 14,
            resistances: {
                laser: 0.20,
                cryo: 0.15,
                plasma: 0.30,
                physical: 0.35
            },
            size: 12,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][1 % 6]
        });
        creeps.push({
            id: 'creep_02',
            name: 'Armored Golem Tier 1',
            health: 110,
            speed: 90,
            armor: 9,
            shield: 0,
            rewardCredits: 18,
            resistances: {
                laser: 0.30,
                cryo: 0.25,
                plasma: 0.40,
                physical: 0.40
            },
            size: 14,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][2 % 6]
        });
        creeps.push({
            id: 'creep_03',
            name: 'Cloaked Phantom Tier 1',
            health: 135,
            speed: 105,
            armor: 11,
            shield: 44,
            rewardCredits: 22,
            resistances: {
                laser: 0.40,
                cryo: 0.35,
                plasma: 0.50,
                physical: 0.45
            },
            size: 16,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][3 % 6]
        });
        creeps.push({
            id: 'creep_04',
            name: 'Hover Drone Tier 1',
            health: 160,
            speed: 120,
            armor: 13,
            shield: 0,
            rewardCredits: 26,
            resistances: {
                laser: 0.50,
                cryo: 0.05,
                plasma: 0.60,
                physical: 0.50
            },
            size: 18,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][4 % 6]
        });
        creeps.push({
            id: 'creep_05',
            name: 'Bio Swarmer Tier 1',
            health: 185,
            speed: 135,
            armor: 15,
            shield: 0,
            rewardCredits: 30,
            resistances: {
                laser: 0.10,
                cryo: 0.15,
                plasma: 0.70,
                physical: 0.30
            },
            size: 10,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][5 % 6]
        });
        creeps.push({
            id: 'creep_06',
            name: 'Regenerator Tier 1',
            health: 210,
            speed: 60,
            armor: 17,
            shield: 68,
            rewardCredits: 34,
            resistances: {
                laser: 0.20,
                cryo: 0.25,
                plasma: 0.20,
                physical: 0.35
            },
            size: 12,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][6 % 6]
        });
        creeps.push({
            id: 'creep_07',
            name: 'Shielded Carrier Tier 1',
            health: 235,
            speed: 75,
            armor: 19,
            shield: 0,
            rewardCredits: 38,
            resistances: {
                laser: 0.30,
                cryo: 0.35,
                plasma: 0.30,
                physical: 0.40
            },
            size: 14,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][7 % 6]
        });
        creeps.push({
            id: 'creep_08',
            name: 'EMP Disruptor Tier 1',
            health: 260,
            speed: 90,
            armor: 21,
            shield: 0,
            rewardCredits: 42,
            resistances: {
                laser: 0.40,
                cryo: 0.05,
                plasma: 0.40,
                physical: 0.45
            },
            size: 16,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][8 % 6]
        });
        creeps.push({
            id: 'creep_09',
            name: 'Titan Colossus Tier 1',
            health: 285,
            speed: 105,
            armor: 23,
            shield: 92,
            rewardCredits: 46,
            resistances: {
                laser: 0.50,
                cryo: 0.15,
                plasma: 0.50,
                physical: 0.50
            },
            size: 18,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][9 % 6]
        });
        creeps.push({
            id: 'creep_10',
            name: 'Quantum Walker Tier 2',
            health: 310,
            speed: 120,
            armor: 25,
            shield: 0,
            rewardCredits: 50,
            resistances: {
                laser: 0.10,
                cryo: 0.25,
                plasma: 0.60,
                physical: 0.30
            },
            size: 10,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][10 % 6]
        });
        creeps.push({
            id: 'creep_11',
            name: 'Scout Runner Tier 2',
            health: 335,
            speed: 135,
            armor: 27,
            shield: 0,
            rewardCredits: 54,
            resistances: {
                laser: 0.20,
                cryo: 0.35,
                plasma: 0.70,
                physical: 0.35
            },
            size: 12,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][11 % 6]
        });
        creeps.push({
            id: 'creep_12',
            name: 'Armored Golem Tier 2',
            health: 360,
            speed: 60,
            armor: 29,
            shield: 116,
            rewardCredits: 58,
            resistances: {
                laser: 0.30,
                cryo: 0.05,
                plasma: 0.20,
                physical: 0.40
            },
            size: 14,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][12 % 6]
        });
        creeps.push({
            id: 'creep_13',
            name: 'Cloaked Phantom Tier 2',
            health: 385,
            speed: 75,
            armor: 31,
            shield: 0,
            rewardCredits: 62,
            resistances: {
                laser: 0.40,
                cryo: 0.15,
                plasma: 0.30,
                physical: 0.45
            },
            size: 16,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][13 % 6]
        });
        creeps.push({
            id: 'creep_14',
            name: 'Hover Drone Tier 2',
            health: 410,
            speed: 90,
            armor: 33,
            shield: 0,
            rewardCredits: 66,
            resistances: {
                laser: 0.50,
                cryo: 0.25,
                plasma: 0.40,
                physical: 0.50
            },
            size: 18,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][14 % 6]
        });
        creeps.push({
            id: 'creep_15',
            name: 'Bio Swarmer Tier 2',
            health: 435,
            speed: 105,
            armor: 35,
            shield: 140,
            rewardCredits: 70,
            resistances: {
                laser: 0.10,
                cryo: 0.35,
                plasma: 0.50,
                physical: 0.30
            },
            size: 10,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][15 % 6]
        });
        creeps.push({
            id: 'creep_16',
            name: 'Regenerator Tier 2',
            health: 460,
            speed: 120,
            armor: 37,
            shield: 0,
            rewardCredits: 74,
            resistances: {
                laser: 0.20,
                cryo: 0.05,
                plasma: 0.60,
                physical: 0.35
            },
            size: 12,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][16 % 6]
        });
        creeps.push({
            id: 'creep_17',
            name: 'Shielded Carrier Tier 2',
            health: 485,
            speed: 135,
            armor: 39,
            shield: 0,
            rewardCredits: 78,
            resistances: {
                laser: 0.30,
                cryo: 0.15,
                plasma: 0.70,
                physical: 0.40
            },
            size: 14,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][17 % 6]
        });
        creeps.push({
            id: 'creep_18',
            name: 'EMP Disruptor Tier 2',
            health: 510,
            speed: 60,
            armor: 41,
            shield: 164,
            rewardCredits: 82,
            resistances: {
                laser: 0.40,
                cryo: 0.25,
                plasma: 0.20,
                physical: 0.45
            },
            size: 16,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][18 % 6]
        });
        creeps.push({
            id: 'creep_19',
            name: 'Titan Colossus Tier 2',
            health: 535,
            speed: 75,
            armor: 43,
            shield: 0,
            rewardCredits: 86,
            resistances: {
                laser: 0.50,
                cryo: 0.35,
                plasma: 0.30,
                physical: 0.50
            },
            size: 18,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][19 % 6]
        });
        creeps.push({
            id: 'creep_20',
            name: 'Quantum Walker Tier 3',
            health: 560,
            speed: 90,
            armor: 45,
            shield: 0,
            rewardCredits: 90,
            resistances: {
                laser: 0.10,
                cryo: 0.05,
                plasma: 0.40,
                physical: 0.30
            },
            size: 10,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][20 % 6]
        });
        creeps.push({
            id: 'creep_21',
            name: 'Scout Runner Tier 3',
            health: 585,
            speed: 105,
            armor: 47,
            shield: 188,
            rewardCredits: 94,
            resistances: {
                laser: 0.20,
                cryo: 0.15,
                plasma: 0.50,
                physical: 0.35
            },
            size: 12,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][21 % 6]
        });
        creeps.push({
            id: 'creep_22',
            name: 'Armored Golem Tier 3',
            health: 610,
            speed: 120,
            armor: 49,
            shield: 0,
            rewardCredits: 98,
            resistances: {
                laser: 0.30,
                cryo: 0.25,
                plasma: 0.60,
                physical: 0.40
            },
            size: 14,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][22 % 6]
        });
        creeps.push({
            id: 'creep_23',
            name: 'Cloaked Phantom Tier 3',
            health: 635,
            speed: 135,
            armor: 51,
            shield: 0,
            rewardCredits: 102,
            resistances: {
                laser: 0.40,
                cryo: 0.35,
                plasma: 0.70,
                physical: 0.45
            },
            size: 16,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][23 % 6]
        });
        creeps.push({
            id: 'creep_24',
            name: 'Hover Drone Tier 3',
            health: 660,
            speed: 60,
            armor: 53,
            shield: 212,
            rewardCredits: 106,
            resistances: {
                laser: 0.50,
                cryo: 0.05,
                plasma: 0.20,
                physical: 0.50
            },
            size: 18,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][24 % 6]
        });
        creeps.push({
            id: 'creep_25',
            name: 'Bio Swarmer Tier 3',
            health: 685,
            speed: 75,
            armor: 55,
            shield: 0,
            rewardCredits: 110,
            resistances: {
                laser: 0.10,
                cryo: 0.15,
                plasma: 0.30,
                physical: 0.30
            },
            size: 10,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][25 % 6]
        });
        creeps.push({
            id: 'creep_26',
            name: 'Regenerator Tier 3',
            health: 710,
            speed: 90,
            armor: 57,
            shield: 0,
            rewardCredits: 114,
            resistances: {
                laser: 0.20,
                cryo: 0.25,
                plasma: 0.40,
                physical: 0.35
            },
            size: 12,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][26 % 6]
        });
        creeps.push({
            id: 'creep_27',
            name: 'Shielded Carrier Tier 3',
            health: 735,
            speed: 105,
            armor: 59,
            shield: 236,
            rewardCredits: 118,
            resistances: {
                laser: 0.30,
                cryo: 0.35,
                plasma: 0.50,
                physical: 0.40
            },
            size: 14,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][27 % 6]
        });
        creeps.push({
            id: 'creep_28',
            name: 'EMP Disruptor Tier 3',
            health: 760,
            speed: 120,
            armor: 61,
            shield: 0,
            rewardCredits: 122,
            resistances: {
                laser: 0.40,
                cryo: 0.05,
                plasma: 0.60,
                physical: 0.45
            },
            size: 16,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][28 % 6]
        });
        creeps.push({
            id: 'creep_29',
            name: 'Titan Colossus Tier 3',
            health: 785,
            speed: 135,
            armor: 63,
            shield: 0,
            rewardCredits: 126,
            resistances: {
                laser: 0.50,
                cryo: 0.15,
                plasma: 0.70,
                physical: 0.50
            },
            size: 18,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][29 % 6]
        });
        creeps.push({
            id: 'creep_30',
            name: 'Quantum Walker Tier 4',
            health: 810,
            speed: 60,
            armor: 65,
            shield: 260,
            rewardCredits: 130,
            resistances: {
                laser: 0.10,
                cryo: 0.25,
                plasma: 0.20,
                physical: 0.30
            },
            size: 10,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][30 % 6]
        });
        creeps.push({
            id: 'creep_31',
            name: 'Scout Runner Tier 4',
            health: 835,
            speed: 75,
            armor: 67,
            shield: 0,
            rewardCredits: 134,
            resistances: {
                laser: 0.20,
                cryo: 0.35,
                plasma: 0.30,
                physical: 0.35
            },
            size: 12,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][31 % 6]
        });
        creeps.push({
            id: 'creep_32',
            name: 'Armored Golem Tier 4',
            health: 860,
            speed: 90,
            armor: 69,
            shield: 0,
            rewardCredits: 138,
            resistances: {
                laser: 0.30,
                cryo: 0.05,
                plasma: 0.40,
                physical: 0.40
            },
            size: 14,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][32 % 6]
        });
        creeps.push({
            id: 'creep_33',
            name: 'Cloaked Phantom Tier 4',
            health: 885,
            speed: 105,
            armor: 71,
            shield: 284,
            rewardCredits: 142,
            resistances: {
                laser: 0.40,
                cryo: 0.15,
                plasma: 0.50,
                physical: 0.45
            },
            size: 16,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][33 % 6]
        });
        creeps.push({
            id: 'creep_34',
            name: 'Hover Drone Tier 4',
            health: 910,
            speed: 120,
            armor: 73,
            shield: 0,
            rewardCredits: 146,
            resistances: {
                laser: 0.50,
                cryo: 0.25,
                plasma: 0.60,
                physical: 0.50
            },
            size: 18,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][34 % 6]
        });
        creeps.push({
            id: 'creep_35',
            name: 'Bio Swarmer Tier 4',
            health: 935,
            speed: 135,
            armor: 75,
            shield: 0,
            rewardCredits: 150,
            resistances: {
                laser: 0.10,
                cryo: 0.35,
                plasma: 0.70,
                physical: 0.30
            },
            size: 10,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][35 % 6]
        });
        creeps.push({
            id: 'creep_36',
            name: 'Regenerator Tier 4',
            health: 960,
            speed: 60,
            armor: 77,
            shield: 308,
            rewardCredits: 154,
            resistances: {
                laser: 0.20,
                cryo: 0.05,
                plasma: 0.20,
                physical: 0.35
            },
            size: 12,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][36 % 6]
        });
        creeps.push({
            id: 'creep_37',
            name: 'Shielded Carrier Tier 4',
            health: 985,
            speed: 75,
            armor: 79,
            shield: 0,
            rewardCredits: 158,
            resistances: {
                laser: 0.30,
                cryo: 0.15,
                plasma: 0.30,
                physical: 0.40
            },
            size: 14,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][37 % 6]
        });
        creeps.push({
            id: 'creep_38',
            name: 'EMP Disruptor Tier 4',
            health: 1010,
            speed: 90,
            armor: 81,
            shield: 0,
            rewardCredits: 162,
            resistances: {
                laser: 0.40,
                cryo: 0.25,
                plasma: 0.40,
                physical: 0.45
            },
            size: 16,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][38 % 6]
        });
        creeps.push({
            id: 'creep_39',
            name: 'Titan Colossus Tier 4',
            health: 1035,
            speed: 105,
            armor: 83,
            shield: 332,
            rewardCredits: 166,
            resistances: {
                laser: 0.50,
                cryo: 0.35,
                plasma: 0.50,
                physical: 0.50
            },
            size: 18,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][39 % 6]
        });
        creeps.push({
            id: 'creep_40',
            name: 'Quantum Walker Tier 5',
            health: 1060,
            speed: 120,
            armor: 85,
            shield: 0,
            rewardCredits: 170,
            resistances: {
                laser: 0.10,
                cryo: 0.05,
                plasma: 0.60,
                physical: 0.30
            },
            size: 10,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][40 % 6]
        });
        creeps.push({
            id: 'creep_41',
            name: 'Scout Runner Tier 5',
            health: 1085,
            speed: 135,
            armor: 87,
            shield: 0,
            rewardCredits: 174,
            resistances: {
                laser: 0.20,
                cryo: 0.15,
                plasma: 0.70,
                physical: 0.35
            },
            size: 12,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][41 % 6]
        });
        creeps.push({
            id: 'creep_42',
            name: 'Armored Golem Tier 5',
            health: 1110,
            speed: 60,
            armor: 89,
            shield: 356,
            rewardCredits: 178,
            resistances: {
                laser: 0.30,
                cryo: 0.25,
                plasma: 0.20,
                physical: 0.40
            },
            size: 14,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][42 % 6]
        });
        creeps.push({
            id: 'creep_43',
            name: 'Cloaked Phantom Tier 5',
            health: 1135,
            speed: 75,
            armor: 91,
            shield: 0,
            rewardCredits: 182,
            resistances: {
                laser: 0.40,
                cryo: 0.35,
                plasma: 0.30,
                physical: 0.45
            },
            size: 16,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][43 % 6]
        });
        creeps.push({
            id: 'creep_44',
            name: 'Hover Drone Tier 5',
            health: 1160,
            speed: 90,
            armor: 93,
            shield: 0,
            rewardCredits: 186,
            resistances: {
                laser: 0.50,
                cryo: 0.05,
                plasma: 0.40,
                physical: 0.50
            },
            size: 18,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][44 % 6]
        });
        creeps.push({
            id: 'creep_45',
            name: 'Bio Swarmer Tier 5',
            health: 1185,
            speed: 105,
            armor: 95,
            shield: 380,
            rewardCredits: 190,
            resistances: {
                laser: 0.10,
                cryo: 0.15,
                plasma: 0.50,
                physical: 0.30
            },
            size: 10,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][45 % 6]
        });
        creeps.push({
            id: 'creep_46',
            name: 'Regenerator Tier 5',
            health: 1210,
            speed: 120,
            armor: 97,
            shield: 0,
            rewardCredits: 194,
            resistances: {
                laser: 0.20,
                cryo: 0.25,
                plasma: 0.60,
                physical: 0.35
            },
            size: 12,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][46 % 6]
        });
        creeps.push({
            id: 'creep_47',
            name: 'Shielded Carrier Tier 5',
            health: 1235,
            speed: 135,
            armor: 99,
            shield: 0,
            rewardCredits: 198,
            resistances: {
                laser: 0.30,
                cryo: 0.35,
                plasma: 0.70,
                physical: 0.40
            },
            size: 14,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][47 % 6]
        });
        creeps.push({
            id: 'creep_48',
            name: 'EMP Disruptor Tier 5',
            health: 1260,
            speed: 60,
            armor: 101,
            shield: 404,
            rewardCredits: 202,
            resistances: {
                laser: 0.40,
                cryo: 0.05,
                plasma: 0.20,
                physical: 0.45
            },
            size: 16,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][48 % 6]
        });
        creeps.push({
            id: 'creep_49',
            name: 'Titan Colossus Tier 5',
            health: 1285,
            speed: 75,
            armor: 103,
            shield: 0,
            rewardCredits: 206,
            resistances: {
                laser: 0.50,
                cryo: 0.15,
                plasma: 0.30,
                physical: 0.50
            },
            size: 18,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][49 % 6]
        });
        creeps.push({
            id: 'creep_50',
            name: 'Quantum Walker Tier 6',
            health: 1310,
            speed: 90,
            armor: 105,
            shield: 0,
            rewardCredits: 210,
            resistances: {
                laser: 0.10,
                cryo: 0.25,
                plasma: 0.40,
                physical: 0.30
            },
            size: 10,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][50 % 6]
        });
        creeps.push({
            id: 'creep_51',
            name: 'Scout Runner Tier 6',
            health: 1335,
            speed: 105,
            armor: 107,
            shield: 428,
            rewardCredits: 214,
            resistances: {
                laser: 0.20,
                cryo: 0.35,
                plasma: 0.50,
                physical: 0.35
            },
            size: 12,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][51 % 6]
        });
        creeps.push({
            id: 'creep_52',
            name: 'Armored Golem Tier 6',
            health: 1360,
            speed: 120,
            armor: 109,
            shield: 0,
            rewardCredits: 218,
            resistances: {
                laser: 0.30,
                cryo: 0.05,
                plasma: 0.60,
                physical: 0.40
            },
            size: 14,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][52 % 6]
        });
        creeps.push({
            id: 'creep_53',
            name: 'Cloaked Phantom Tier 6',
            health: 1385,
            speed: 135,
            armor: 111,
            shield: 0,
            rewardCredits: 222,
            resistances: {
                laser: 0.40,
                cryo: 0.15,
                plasma: 0.70,
                physical: 0.45
            },
            size: 16,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][53 % 6]
        });
        creeps.push({
            id: 'creep_54',
            name: 'Hover Drone Tier 6',
            health: 1410,
            speed: 60,
            armor: 113,
            shield: 452,
            rewardCredits: 226,
            resistances: {
                laser: 0.50,
                cryo: 0.25,
                plasma: 0.20,
                physical: 0.50
            },
            size: 18,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][54 % 6]
        });
        creeps.push({
            id: 'creep_55',
            name: 'Bio Swarmer Tier 6',
            health: 1435,
            speed: 75,
            armor: 115,
            shield: 0,
            rewardCredits: 230,
            resistances: {
                laser: 0.10,
                cryo: 0.35,
                plasma: 0.30,
                physical: 0.30
            },
            size: 10,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][55 % 6]
        });
        creeps.push({
            id: 'creep_56',
            name: 'Regenerator Tier 6',
            health: 1460,
            speed: 90,
            armor: 117,
            shield: 0,
            rewardCredits: 234,
            resistances: {
                laser: 0.20,
                cryo: 0.05,
                plasma: 0.40,
                physical: 0.35
            },
            size: 12,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][56 % 6]
        });
        creeps.push({
            id: 'creep_57',
            name: 'Shielded Carrier Tier 6',
            health: 1485,
            speed: 105,
            armor: 119,
            shield: 476,
            rewardCredits: 238,
            resistances: {
                laser: 0.30,
                cryo: 0.15,
                plasma: 0.50,
                physical: 0.40
            },
            size: 14,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][57 % 6]
        });
        creeps.push({
            id: 'creep_58',
            name: 'EMP Disruptor Tier 6',
            health: 1510,
            speed: 120,
            armor: 121,
            shield: 0,
            rewardCredits: 242,
            resistances: {
                laser: 0.40,
                cryo: 0.25,
                plasma: 0.60,
                physical: 0.45
            },
            size: 16,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][58 % 6]
        });
        creeps.push({
            id: 'creep_59',
            name: 'Titan Colossus Tier 6',
            health: 1535,
            speed: 135,
            armor: 123,
            shield: 0,
            rewardCredits: 246,
            resistances: {
                laser: 0.50,
                cryo: 0.35,
                plasma: 0.70,
                physical: 0.50
            },
            size: 18,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][59 % 6]
        });
        creeps.push({
            id: 'creep_60',
            name: 'Quantum Walker Tier 7',
            health: 1560,
            speed: 60,
            armor: 125,
            shield: 500,
            rewardCredits: 250,
            resistances: {
                laser: 0.10,
                cryo: 0.05,
                plasma: 0.20,
                physical: 0.30
            },
            size: 10,
            color: ['#39ff14', '#00e5ff', '#ff0055', '#ffe600', '#ff8800', '#b026ff'][60 % 6]
        });
        return creeps;
    }
}
