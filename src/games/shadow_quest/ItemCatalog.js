/**
 * NovaForge Shadow Quest Comprehensive Item Catalog & Stat Formulas
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class ItemCatalog {
    static getItems() {
        const catalog = [];
        catalog.push({
            id: 'item_sq_001',
            name: 'Common Blade of the Phoenix +1',
            type: 'weapon',
            rarity: 'Common',
            levelReq: 1,
            stats: {
                damage: 14,
                defense: 0,
                health: 28,
                mana: 14,
                critChance: 0.07,
                speedBonus: 7
            },
            sellValue: 80,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_002',
            name: 'Uncommon Staff of the Phoenix +2',
            type: 'weapon',
            rarity: 'Uncommon',
            levelReq: 1,
            stats: {
                damage: 18,
                defense: 0,
                health: 36,
                mana: 18,
                critChance: 0.09,
                speedBonus: 9
            },
            sellValue: 110,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_003',
            name: 'Rare Bow of the Phoenix +3',
            type: 'weapon',
            rarity: 'Rare',
            levelReq: 1,
            stats: {
                damage: 22,
                defense: 0,
                health: 44,
                mana: 22,
                critChance: 0.11,
                speedBonus: 11
            },
            sellValue: 140,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_004',
            name: 'Epic Dagger of the Phoenix +4',
            type: 'weapon',
            rarity: 'Epic',
            levelReq: 2,
            stats: {
                damage: 26,
                defense: 0,
                health: 52,
                mana: 26,
                critChance: 0.13,
                speedBonus: 13
            },
            sellValue: 170,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_005',
            name: 'Legendary Hammer of the Phoenix +5',
            type: 'weapon',
            rarity: 'Legendary',
            levelReq: 2,
            stats: {
                damage: 30,
                defense: 0,
                health: 60,
                mana: 30,
                critChance: 0.15,
                speedBonus: 15
            },
            sellValue: 200,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_006',
            name: 'Mythic Shield of the Phoenix +6',
            type: 'armor',
            rarity: 'Mythic',
            levelReq: 2,
            stats: {
                damage: 0,
                defense: 23,
                health: 68,
                mana: 34,
                critChance: 0.17,
                speedBonus: 17
            },
            sellValue: 230,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_007',
            name: 'Artifact Armor of the Phoenix +7',
            type: 'armor',
            rarity: 'Artifact',
            levelReq: 3,
            stats: {
                damage: 0,
                defense: 26,
                health: 76,
                mana: 38,
                critChance: 0.19,
                speedBonus: 19
            },
            sellValue: 260,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_008',
            name: 'Cosmic Helm of the Phoenix +8',
            type: 'armor',
            rarity: 'Cosmic',
            levelReq: 3,
            stats: {
                damage: 0,
                defense: 29,
                health: 84,
                mana: 42,
                critChance: 0.21,
                speedBonus: 5
            },
            sellValue: 290,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_009',
            name: 'Common Boots of the Phoenix +9',
            type: 'armor',
            rarity: 'Common',
            levelReq: 3,
            stats: {
                damage: 0,
                defense: 32,
                health: 92,
                mana: 46,
                critChance: 0.23,
                speedBonus: 7
            },
            sellValue: 320,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_010',
            name: 'Uncommon Ring of the Phoenix +10',
            type: 'accessory',
            rarity: 'Uncommon',
            levelReq: 4,
            stats: {
                damage: 0,
                defense: 0,
                health: 100,
                mana: 50,
                critChance: 0.05,
                speedBonus: 9
            },
            sellValue: 350,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_011',
            name: 'Rare Blade of the Phoenix +11',
            type: 'weapon',
            rarity: 'Rare',
            levelReq: 4,
            stats: {
                damage: 54,
                defense: 0,
                health: 108,
                mana: 54,
                critChance: 0.07,
                speedBonus: 11
            },
            sellValue: 380,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_012',
            name: 'Epic Staff of the Phoenix +12',
            type: 'weapon',
            rarity: 'Epic',
            levelReq: 4,
            stats: {
                damage: 58,
                defense: 0,
                health: 116,
                mana: 58,
                critChance: 0.09,
                speedBonus: 13
            },
            sellValue: 410,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_013',
            name: 'Legendary Bow of the Phoenix +13',
            type: 'weapon',
            rarity: 'Legendary',
            levelReq: 5,
            stats: {
                damage: 62,
                defense: 0,
                health: 124,
                mana: 62,
                critChance: 0.11,
                speedBonus: 15
            },
            sellValue: 440,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_014',
            name: 'Mythic Dagger of the Phoenix +14',
            type: 'weapon',
            rarity: 'Mythic',
            levelReq: 5,
            stats: {
                damage: 66,
                defense: 0,
                health: 132,
                mana: 66,
                critChance: 0.13,
                speedBonus: 17
            },
            sellValue: 470,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_015',
            name: 'Artifact Hammer of the Phoenix +0',
            type: 'weapon',
            rarity: 'Artifact',
            levelReq: 5,
            stats: {
                damage: 70,
                defense: 0,
                health: 140,
                mana: 70,
                critChance: 0.15,
                speedBonus: 19
            },
            sellValue: 500,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_016',
            name: 'Cosmic Shield of the Phoenix +1',
            type: 'armor',
            rarity: 'Cosmic',
            levelReq: 6,
            stats: {
                damage: 0,
                defense: 53,
                health: 148,
                mana: 74,
                critChance: 0.17,
                speedBonus: 5
            },
            sellValue: 530,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_017',
            name: 'Common Armor of the Phoenix +2',
            type: 'armor',
            rarity: 'Common',
            levelReq: 6,
            stats: {
                damage: 0,
                defense: 56,
                health: 156,
                mana: 78,
                critChance: 0.19,
                speedBonus: 7
            },
            sellValue: 560,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_018',
            name: 'Uncommon Helm of the Phoenix +3',
            type: 'armor',
            rarity: 'Uncommon',
            levelReq: 6,
            stats: {
                damage: 0,
                defense: 59,
                health: 164,
                mana: 82,
                critChance: 0.21,
                speedBonus: 9
            },
            sellValue: 590,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_019',
            name: 'Rare Boots of the Phoenix +4',
            type: 'armor',
            rarity: 'Rare',
            levelReq: 7,
            stats: {
                damage: 0,
                defense: 62,
                health: 172,
                mana: 86,
                critChance: 0.23,
                speedBonus: 11
            },
            sellValue: 620,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_020',
            name: 'Epic Ring of the Phoenix +5',
            type: 'accessory',
            rarity: 'Epic',
            levelReq: 7,
            stats: {
                damage: 0,
                defense: 0,
                health: 180,
                mana: 90,
                critChance: 0.05,
                speedBonus: 13
            },
            sellValue: 650,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_021',
            name: 'Legendary Blade of the Phoenix +6',
            type: 'weapon',
            rarity: 'Legendary',
            levelReq: 7,
            stats: {
                damage: 94,
                defense: 0,
                health: 188,
                mana: 94,
                critChance: 0.07,
                speedBonus: 15
            },
            sellValue: 680,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_022',
            name: 'Mythic Staff of the Phoenix +7',
            type: 'weapon',
            rarity: 'Mythic',
            levelReq: 8,
            stats: {
                damage: 98,
                defense: 0,
                health: 196,
                mana: 98,
                critChance: 0.09,
                speedBonus: 17
            },
            sellValue: 710,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_023',
            name: 'Artifact Bow of the Phoenix +8',
            type: 'weapon',
            rarity: 'Artifact',
            levelReq: 8,
            stats: {
                damage: 102,
                defense: 0,
                health: 204,
                mana: 102,
                critChance: 0.11,
                speedBonus: 19
            },
            sellValue: 740,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_024',
            name: 'Cosmic Dagger of the Phoenix +9',
            type: 'weapon',
            rarity: 'Cosmic',
            levelReq: 8,
            stats: {
                damage: 106,
                defense: 0,
                health: 212,
                mana: 106,
                critChance: 0.13,
                speedBonus: 5
            },
            sellValue: 770,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_025',
            name: 'Common Hammer of the Phoenix +10',
            type: 'weapon',
            rarity: 'Common',
            levelReq: 9,
            stats: {
                damage: 110,
                defense: 0,
                health: 220,
                mana: 110,
                critChance: 0.15,
                speedBonus: 7
            },
            sellValue: 800,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_026',
            name: 'Uncommon Shield of the Phoenix +11',
            type: 'armor',
            rarity: 'Uncommon',
            levelReq: 9,
            stats: {
                damage: 0,
                defense: 83,
                health: 228,
                mana: 114,
                critChance: 0.17,
                speedBonus: 9
            },
            sellValue: 830,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_027',
            name: 'Rare Armor of the Phoenix +12',
            type: 'armor',
            rarity: 'Rare',
            levelReq: 9,
            stats: {
                damage: 0,
                defense: 86,
                health: 236,
                mana: 118,
                critChance: 0.19,
                speedBonus: 11
            },
            sellValue: 860,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_028',
            name: 'Epic Helm of the Phoenix +13',
            type: 'armor',
            rarity: 'Epic',
            levelReq: 10,
            stats: {
                damage: 0,
                defense: 89,
                health: 244,
                mana: 122,
                critChance: 0.21,
                speedBonus: 13
            },
            sellValue: 890,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_029',
            name: 'Legendary Boots of the Phoenix +14',
            type: 'armor',
            rarity: 'Legendary',
            levelReq: 10,
            stats: {
                damage: 0,
                defense: 92,
                health: 252,
                mana: 126,
                critChance: 0.23,
                speedBonus: 15
            },
            sellValue: 920,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_030',
            name: 'Mythic Ring of the Phoenix +0',
            type: 'accessory',
            rarity: 'Mythic',
            levelReq: 10,
            stats: {
                damage: 0,
                defense: 0,
                health: 260,
                mana: 130,
                critChance: 0.05,
                speedBonus: 17
            },
            sellValue: 950,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_031',
            name: 'Artifact Blade of the Phoenix +1',
            type: 'weapon',
            rarity: 'Artifact',
            levelReq: 11,
            stats: {
                damage: 134,
                defense: 0,
                health: 268,
                mana: 134,
                critChance: 0.07,
                speedBonus: 19
            },
            sellValue: 980,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_032',
            name: 'Cosmic Staff of the Phoenix +2',
            type: 'weapon',
            rarity: 'Cosmic',
            levelReq: 11,
            stats: {
                damage: 138,
                defense: 0,
                health: 276,
                mana: 138,
                critChance: 0.09,
                speedBonus: 5
            },
            sellValue: 1010,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_033',
            name: 'Common Bow of the Phoenix +3',
            type: 'weapon',
            rarity: 'Common',
            levelReq: 11,
            stats: {
                damage: 142,
                defense: 0,
                health: 284,
                mana: 142,
                critChance: 0.11,
                speedBonus: 7
            },
            sellValue: 1040,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_034',
            name: 'Uncommon Dagger of the Phoenix +4',
            type: 'weapon',
            rarity: 'Uncommon',
            levelReq: 12,
            stats: {
                damage: 146,
                defense: 0,
                health: 292,
                mana: 146,
                critChance: 0.13,
                speedBonus: 9
            },
            sellValue: 1070,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_035',
            name: 'Rare Hammer of the Phoenix +5',
            type: 'weapon',
            rarity: 'Rare',
            levelReq: 12,
            stats: {
                damage: 150,
                defense: 0,
                health: 300,
                mana: 150,
                critChance: 0.15,
                speedBonus: 11
            },
            sellValue: 1100,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_036',
            name: 'Epic Shield of the Phoenix +6',
            type: 'armor',
            rarity: 'Epic',
            levelReq: 12,
            stats: {
                damage: 0,
                defense: 113,
                health: 308,
                mana: 154,
                critChance: 0.17,
                speedBonus: 13
            },
            sellValue: 1130,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_037',
            name: 'Legendary Armor of the Phoenix +7',
            type: 'armor',
            rarity: 'Legendary',
            levelReq: 13,
            stats: {
                damage: 0,
                defense: 116,
                health: 316,
                mana: 158,
                critChance: 0.19,
                speedBonus: 15
            },
            sellValue: 1160,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_038',
            name: 'Mythic Helm of the Phoenix +8',
            type: 'armor',
            rarity: 'Mythic',
            levelReq: 13,
            stats: {
                damage: 0,
                defense: 119,
                health: 324,
                mana: 162,
                critChance: 0.21,
                speedBonus: 17
            },
            sellValue: 1190,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_039',
            name: 'Artifact Boots of the Phoenix +9',
            type: 'armor',
            rarity: 'Artifact',
            levelReq: 13,
            stats: {
                damage: 0,
                defense: 122,
                health: 332,
                mana: 166,
                critChance: 0.23,
                speedBonus: 19
            },
            sellValue: 1220,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_040',
            name: 'Cosmic Ring of the Phoenix +10',
            type: 'accessory',
            rarity: 'Cosmic',
            levelReq: 14,
            stats: {
                damage: 0,
                defense: 0,
                health: 340,
                mana: 170,
                critChance: 0.05,
                speedBonus: 5
            },
            sellValue: 1250,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_041',
            name: 'Common Blade of the Phoenix +11',
            type: 'weapon',
            rarity: 'Common',
            levelReq: 14,
            stats: {
                damage: 174,
                defense: 0,
                health: 348,
                mana: 174,
                critChance: 0.07,
                speedBonus: 7
            },
            sellValue: 1280,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_042',
            name: 'Uncommon Staff of the Phoenix +12',
            type: 'weapon',
            rarity: 'Uncommon',
            levelReq: 14,
            stats: {
                damage: 178,
                defense: 0,
                health: 356,
                mana: 178,
                critChance: 0.09,
                speedBonus: 9
            },
            sellValue: 1310,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_043',
            name: 'Rare Bow of the Phoenix +13',
            type: 'weapon',
            rarity: 'Rare',
            levelReq: 15,
            stats: {
                damage: 182,
                defense: 0,
                health: 364,
                mana: 182,
                critChance: 0.11,
                speedBonus: 11
            },
            sellValue: 1340,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_044',
            name: 'Epic Dagger of the Phoenix +14',
            type: 'weapon',
            rarity: 'Epic',
            levelReq: 15,
            stats: {
                damage: 186,
                defense: 0,
                health: 372,
                mana: 186,
                critChance: 0.13,
                speedBonus: 13
            },
            sellValue: 1370,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_045',
            name: 'Legendary Hammer of the Phoenix +0',
            type: 'weapon',
            rarity: 'Legendary',
            levelReq: 15,
            stats: {
                damage: 190,
                defense: 0,
                health: 380,
                mana: 190,
                critChance: 0.15,
                speedBonus: 15
            },
            sellValue: 1400,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_046',
            name: 'Mythic Shield of the Phoenix +1',
            type: 'armor',
            rarity: 'Mythic',
            levelReq: 16,
            stats: {
                damage: 0,
                defense: 143,
                health: 388,
                mana: 194,
                critChance: 0.17,
                speedBonus: 17
            },
            sellValue: 1430,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_047',
            name: 'Artifact Armor of the Phoenix +2',
            type: 'armor',
            rarity: 'Artifact',
            levelReq: 16,
            stats: {
                damage: 0,
                defense: 146,
                health: 396,
                mana: 198,
                critChance: 0.19,
                speedBonus: 19
            },
            sellValue: 1460,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_048',
            name: 'Cosmic Helm of the Phoenix +3',
            type: 'armor',
            rarity: 'Cosmic',
            levelReq: 16,
            stats: {
                damage: 0,
                defense: 149,
                health: 404,
                mana: 202,
                critChance: 0.21,
                speedBonus: 5
            },
            sellValue: 1490,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_049',
            name: 'Common Boots of the Phoenix +4',
            type: 'armor',
            rarity: 'Common',
            levelReq: 17,
            stats: {
                damage: 0,
                defense: 152,
                health: 412,
                mana: 206,
                critChance: 0.23,
                speedBonus: 7
            },
            sellValue: 1520,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_050',
            name: 'Uncommon Ring of the Phoenix +5',
            type: 'accessory',
            rarity: 'Uncommon',
            levelReq: 17,
            stats: {
                damage: 0,
                defense: 0,
                health: 420,
                mana: 210,
                critChance: 0.05,
                speedBonus: 9
            },
            sellValue: 1550,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_051',
            name: 'Rare Blade of the Phoenix +6',
            type: 'weapon',
            rarity: 'Rare',
            levelReq: 17,
            stats: {
                damage: 214,
                defense: 0,
                health: 428,
                mana: 214,
                critChance: 0.07,
                speedBonus: 11
            },
            sellValue: 1580,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_052',
            name: 'Epic Staff of the Phoenix +7',
            type: 'weapon',
            rarity: 'Epic',
            levelReq: 18,
            stats: {
                damage: 218,
                defense: 0,
                health: 436,
                mana: 218,
                critChance: 0.09,
                speedBonus: 13
            },
            sellValue: 1610,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_053',
            name: 'Legendary Bow of the Phoenix +8',
            type: 'weapon',
            rarity: 'Legendary',
            levelReq: 18,
            stats: {
                damage: 222,
                defense: 0,
                health: 444,
                mana: 222,
                critChance: 0.11,
                speedBonus: 15
            },
            sellValue: 1640,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_054',
            name: 'Mythic Dagger of the Phoenix +9',
            type: 'weapon',
            rarity: 'Mythic',
            levelReq: 18,
            stats: {
                damage: 226,
                defense: 0,
                health: 452,
                mana: 226,
                critChance: 0.13,
                speedBonus: 17
            },
            sellValue: 1670,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_055',
            name: 'Artifact Hammer of the Phoenix +10',
            type: 'weapon',
            rarity: 'Artifact',
            levelReq: 19,
            stats: {
                damage: 230,
                defense: 0,
                health: 460,
                mana: 230,
                critChance: 0.15,
                speedBonus: 19
            },
            sellValue: 1700,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_056',
            name: 'Cosmic Shield of the Phoenix +11',
            type: 'armor',
            rarity: 'Cosmic',
            levelReq: 19,
            stats: {
                damage: 0,
                defense: 173,
                health: 468,
                mana: 234,
                critChance: 0.17,
                speedBonus: 5
            },
            sellValue: 1730,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_057',
            name: 'Common Armor of the Phoenix +12',
            type: 'armor',
            rarity: 'Common',
            levelReq: 19,
            stats: {
                damage: 0,
                defense: 176,
                health: 476,
                mana: 238,
                critChance: 0.19,
                speedBonus: 7
            },
            sellValue: 1760,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_058',
            name: 'Uncommon Helm of the Phoenix +13',
            type: 'armor',
            rarity: 'Uncommon',
            levelReq: 20,
            stats: {
                damage: 0,
                defense: 179,
                health: 484,
                mana: 242,
                critChance: 0.21,
                speedBonus: 9
            },
            sellValue: 1790,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_059',
            name: 'Rare Boots of the Phoenix +14',
            type: 'armor',
            rarity: 'Rare',
            levelReq: 20,
            stats: {
                damage: 0,
                defense: 182,
                health: 492,
                mana: 246,
                critChance: 0.23,
                speedBonus: 11
            },
            sellValue: 1820,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_060',
            name: 'Epic Ring of the Phoenix +0',
            type: 'accessory',
            rarity: 'Epic',
            levelReq: 20,
            stats: {
                damage: 0,
                defense: 0,
                health: 500,
                mana: 250,
                critChance: 0.05,
                speedBonus: 13
            },
            sellValue: 1850,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_061',
            name: 'Legendary Blade of the Phoenix +1',
            type: 'weapon',
            rarity: 'Legendary',
            levelReq: 21,
            stats: {
                damage: 254,
                defense: 0,
                health: 508,
                mana: 254,
                critChance: 0.07,
                speedBonus: 15
            },
            sellValue: 1880,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_062',
            name: 'Mythic Staff of the Phoenix +2',
            type: 'weapon',
            rarity: 'Mythic',
            levelReq: 21,
            stats: {
                damage: 258,
                defense: 0,
                health: 516,
                mana: 258,
                critChance: 0.09,
                speedBonus: 17
            },
            sellValue: 1910,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_063',
            name: 'Artifact Bow of the Phoenix +3',
            type: 'weapon',
            rarity: 'Artifact',
            levelReq: 21,
            stats: {
                damage: 262,
                defense: 0,
                health: 524,
                mana: 262,
                critChance: 0.11,
                speedBonus: 19
            },
            sellValue: 1940,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_064',
            name: 'Cosmic Dagger of the Phoenix +4',
            type: 'weapon',
            rarity: 'Cosmic',
            levelReq: 22,
            stats: {
                damage: 266,
                defense: 0,
                health: 532,
                mana: 266,
                critChance: 0.13,
                speedBonus: 5
            },
            sellValue: 1970,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_065',
            name: 'Common Hammer of the Phoenix +5',
            type: 'weapon',
            rarity: 'Common',
            levelReq: 22,
            stats: {
                damage: 270,
                defense: 0,
                health: 540,
                mana: 270,
                critChance: 0.15,
                speedBonus: 7
            },
            sellValue: 2000,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_066',
            name: 'Uncommon Shield of the Phoenix +6',
            type: 'armor',
            rarity: 'Uncommon',
            levelReq: 22,
            stats: {
                damage: 0,
                defense: 203,
                health: 548,
                mana: 274,
                critChance: 0.17,
                speedBonus: 9
            },
            sellValue: 2030,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_067',
            name: 'Rare Armor of the Phoenix +7',
            type: 'armor',
            rarity: 'Rare',
            levelReq: 23,
            stats: {
                damage: 0,
                defense: 206,
                health: 556,
                mana: 278,
                critChance: 0.19,
                speedBonus: 11
            },
            sellValue: 2060,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_068',
            name: 'Epic Helm of the Phoenix +8',
            type: 'armor',
            rarity: 'Epic',
            levelReq: 23,
            stats: {
                damage: 0,
                defense: 209,
                health: 564,
                mana: 282,
                critChance: 0.21,
                speedBonus: 13
            },
            sellValue: 2090,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_069',
            name: 'Legendary Boots of the Phoenix +9',
            type: 'armor',
            rarity: 'Legendary',
            levelReq: 23,
            stats: {
                damage: 0,
                defense: 212,
                health: 572,
                mana: 286,
                critChance: 0.23,
                speedBonus: 15
            },
            sellValue: 2120,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_070',
            name: 'Mythic Ring of the Phoenix +10',
            type: 'accessory',
            rarity: 'Mythic',
            levelReq: 24,
            stats: {
                damage: 0,
                defense: 0,
                health: 580,
                mana: 290,
                critChance: 0.05,
                speedBonus: 17
            },
            sellValue: 2150,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_071',
            name: 'Artifact Blade of the Phoenix +11',
            type: 'weapon',
            rarity: 'Artifact',
            levelReq: 24,
            stats: {
                damage: 294,
                defense: 0,
                health: 588,
                mana: 294,
                critChance: 0.07,
                speedBonus: 19
            },
            sellValue: 2180,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_072',
            name: 'Cosmic Staff of the Phoenix +12',
            type: 'weapon',
            rarity: 'Cosmic',
            levelReq: 24,
            stats: {
                damage: 298,
                defense: 0,
                health: 596,
                mana: 298,
                critChance: 0.09,
                speedBonus: 5
            },
            sellValue: 2210,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_073',
            name: 'Common Bow of the Phoenix +13',
            type: 'weapon',
            rarity: 'Common',
            levelReq: 25,
            stats: {
                damage: 302,
                defense: 0,
                health: 604,
                mana: 302,
                critChance: 0.11,
                speedBonus: 7
            },
            sellValue: 2240,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_074',
            name: 'Uncommon Dagger of the Phoenix +14',
            type: 'weapon',
            rarity: 'Uncommon',
            levelReq: 25,
            stats: {
                damage: 306,
                defense: 0,
                health: 612,
                mana: 306,
                critChance: 0.13,
                speedBonus: 9
            },
            sellValue: 2270,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_075',
            name: 'Rare Hammer of the Phoenix +0',
            type: 'weapon',
            rarity: 'Rare',
            levelReq: 25,
            stats: {
                damage: 310,
                defense: 0,
                health: 620,
                mana: 310,
                critChance: 0.15,
                speedBonus: 11
            },
            sellValue: 2300,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_076',
            name: 'Epic Shield of the Phoenix +1',
            type: 'armor',
            rarity: 'Epic',
            levelReq: 26,
            stats: {
                damage: 0,
                defense: 233,
                health: 628,
                mana: 314,
                critChance: 0.17,
                speedBonus: 13
            },
            sellValue: 2330,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_077',
            name: 'Legendary Armor of the Phoenix +2',
            type: 'armor',
            rarity: 'Legendary',
            levelReq: 26,
            stats: {
                damage: 0,
                defense: 236,
                health: 636,
                mana: 318,
                critChance: 0.19,
                speedBonus: 15
            },
            sellValue: 2360,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_078',
            name: 'Mythic Helm of the Phoenix +3',
            type: 'armor',
            rarity: 'Mythic',
            levelReq: 26,
            stats: {
                damage: 0,
                defense: 239,
                health: 644,
                mana: 322,
                critChance: 0.21,
                speedBonus: 17
            },
            sellValue: 2390,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_079',
            name: 'Artifact Boots of the Phoenix +4',
            type: 'armor',
            rarity: 'Artifact',
            levelReq: 27,
            stats: {
                damage: 0,
                defense: 242,
                health: 652,
                mana: 326,
                critChance: 0.23,
                speedBonus: 19
            },
            sellValue: 2420,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_080',
            name: 'Cosmic Ring of the Phoenix +5',
            type: 'accessory',
            rarity: 'Cosmic',
            levelReq: 27,
            stats: {
                damage: 0,
                defense: 0,
                health: 660,
                mana: 330,
                critChance: 0.05,
                speedBonus: 5
            },
            sellValue: 2450,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_081',
            name: 'Common Blade of the Phoenix +6',
            type: 'weapon',
            rarity: 'Common',
            levelReq: 27,
            stats: {
                damage: 334,
                defense: 0,
                health: 668,
                mana: 334,
                critChance: 0.07,
                speedBonus: 7
            },
            sellValue: 2480,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_082',
            name: 'Uncommon Staff of the Phoenix +7',
            type: 'weapon',
            rarity: 'Uncommon',
            levelReq: 28,
            stats: {
                damage: 338,
                defense: 0,
                health: 676,
                mana: 338,
                critChance: 0.09,
                speedBonus: 9
            },
            sellValue: 2510,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_083',
            name: 'Rare Bow of the Phoenix +8',
            type: 'weapon',
            rarity: 'Rare',
            levelReq: 28,
            stats: {
                damage: 342,
                defense: 0,
                health: 684,
                mana: 342,
                critChance: 0.11,
                speedBonus: 11
            },
            sellValue: 2540,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_084',
            name: 'Epic Dagger of the Phoenix +9',
            type: 'weapon',
            rarity: 'Epic',
            levelReq: 28,
            stats: {
                damage: 346,
                defense: 0,
                health: 692,
                mana: 346,
                critChance: 0.13,
                speedBonus: 13
            },
            sellValue: 2570,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_085',
            name: 'Legendary Hammer of the Phoenix +10',
            type: 'weapon',
            rarity: 'Legendary',
            levelReq: 29,
            stats: {
                damage: 350,
                defense: 0,
                health: 700,
                mana: 350,
                critChance: 0.15,
                speedBonus: 15
            },
            sellValue: 2600,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_086',
            name: 'Mythic Shield of the Phoenix +11',
            type: 'armor',
            rarity: 'Mythic',
            levelReq: 29,
            stats: {
                damage: 0,
                defense: 263,
                health: 708,
                mana: 354,
                critChance: 0.17,
                speedBonus: 17
            },
            sellValue: 2630,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_087',
            name: 'Artifact Armor of the Phoenix +12',
            type: 'armor',
            rarity: 'Artifact',
            levelReq: 29,
            stats: {
                damage: 0,
                defense: 266,
                health: 716,
                mana: 358,
                critChance: 0.19,
                speedBonus: 19
            },
            sellValue: 2660,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_088',
            name: 'Cosmic Helm of the Phoenix +13',
            type: 'armor',
            rarity: 'Cosmic',
            levelReq: 30,
            stats: {
                damage: 0,
                defense: 269,
                health: 724,
                mana: 362,
                critChance: 0.21,
                speedBonus: 5
            },
            sellValue: 2690,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_089',
            name: 'Common Boots of the Phoenix +14',
            type: 'armor',
            rarity: 'Common',
            levelReq: 30,
            stats: {
                damage: 0,
                defense: 272,
                health: 732,
                mana: 366,
                critChance: 0.23,
                speedBonus: 7
            },
            sellValue: 2720,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_090',
            name: 'Uncommon Ring of the Phoenix +0',
            type: 'accessory',
            rarity: 'Uncommon',
            levelReq: 30,
            stats: {
                damage: 0,
                defense: 0,
                health: 740,
                mana: 370,
                critChance: 0.05,
                speedBonus: 9
            },
            sellValue: 2750,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_091',
            name: 'Rare Blade of the Phoenix +1',
            type: 'weapon',
            rarity: 'Rare',
            levelReq: 31,
            stats: {
                damage: 374,
                defense: 0,
                health: 748,
                mana: 374,
                critChance: 0.07,
                speedBonus: 11
            },
            sellValue: 2780,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_092',
            name: 'Epic Staff of the Phoenix +2',
            type: 'weapon',
            rarity: 'Epic',
            levelReq: 31,
            stats: {
                damage: 378,
                defense: 0,
                health: 756,
                mana: 378,
                critChance: 0.09,
                speedBonus: 13
            },
            sellValue: 2810,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_093',
            name: 'Legendary Bow of the Phoenix +3',
            type: 'weapon',
            rarity: 'Legendary',
            levelReq: 31,
            stats: {
                damage: 382,
                defense: 0,
                health: 764,
                mana: 382,
                critChance: 0.11,
                speedBonus: 15
            },
            sellValue: 2840,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_094',
            name: 'Mythic Dagger of the Phoenix +4',
            type: 'weapon',
            rarity: 'Mythic',
            levelReq: 32,
            stats: {
                damage: 386,
                defense: 0,
                health: 772,
                mana: 386,
                critChance: 0.13,
                speedBonus: 17
            },
            sellValue: 2870,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_095',
            name: 'Artifact Hammer of the Phoenix +5',
            type: 'weapon',
            rarity: 'Artifact',
            levelReq: 32,
            stats: {
                damage: 390,
                defense: 0,
                health: 780,
                mana: 390,
                critChance: 0.15,
                speedBonus: 19
            },
            sellValue: 2900,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_096',
            name: 'Cosmic Shield of the Phoenix +6',
            type: 'armor',
            rarity: 'Cosmic',
            levelReq: 32,
            stats: {
                damage: 0,
                defense: 293,
                health: 788,
                mana: 394,
                critChance: 0.17,
                speedBonus: 5
            },
            sellValue: 2930,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_097',
            name: 'Common Armor of the Phoenix +7',
            type: 'armor',
            rarity: 'Common',
            levelReq: 33,
            stats: {
                damage: 0,
                defense: 296,
                health: 796,
                mana: 398,
                critChance: 0.19,
                speedBonus: 7
            },
            sellValue: 2960,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_098',
            name: 'Uncommon Helm of the Phoenix +8',
            type: 'armor',
            rarity: 'Uncommon',
            levelReq: 33,
            stats: {
                damage: 0,
                defense: 299,
                health: 804,
                mana: 402,
                critChance: 0.21,
                speedBonus: 9
            },
            sellValue: 2990,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_099',
            name: 'Rare Boots of the Phoenix +9',
            type: 'armor',
            rarity: 'Rare',
            levelReq: 33,
            stats: {
                damage: 0,
                defense: 302,
                health: 812,
                mana: 406,
                critChance: 0.23,
                speedBonus: 11
            },
            sellValue: 3020,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_100',
            name: 'Epic Ring of the Phoenix +10',
            type: 'accessory',
            rarity: 'Epic',
            levelReq: 34,
            stats: {
                damage: 0,
                defense: 0,
                health: 820,
                mana: 410,
                critChance: 0.05,
                speedBonus: 13
            },
            sellValue: 3050,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_101',
            name: 'Legendary Blade of the Phoenix +11',
            type: 'weapon',
            rarity: 'Legendary',
            levelReq: 34,
            stats: {
                damage: 414,
                defense: 0,
                health: 828,
                mana: 414,
                critChance: 0.07,
                speedBonus: 15
            },
            sellValue: 3080,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_102',
            name: 'Mythic Staff of the Phoenix +12',
            type: 'weapon',
            rarity: 'Mythic',
            levelReq: 34,
            stats: {
                damage: 418,
                defense: 0,
                health: 836,
                mana: 418,
                critChance: 0.09,
                speedBonus: 17
            },
            sellValue: 3110,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_103',
            name: 'Artifact Bow of the Phoenix +13',
            type: 'weapon',
            rarity: 'Artifact',
            levelReq: 35,
            stats: {
                damage: 422,
                defense: 0,
                health: 844,
                mana: 422,
                critChance: 0.11,
                speedBonus: 19
            },
            sellValue: 3140,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_104',
            name: 'Cosmic Dagger of the Phoenix +14',
            type: 'weapon',
            rarity: 'Cosmic',
            levelReq: 35,
            stats: {
                damage: 426,
                defense: 0,
                health: 852,
                mana: 426,
                critChance: 0.13,
                speedBonus: 5
            },
            sellValue: 3170,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_105',
            name: 'Common Hammer of the Phoenix +0',
            type: 'weapon',
            rarity: 'Common',
            levelReq: 35,
            stats: {
                damage: 430,
                defense: 0,
                health: 860,
                mana: 430,
                critChance: 0.15,
                speedBonus: 7
            },
            sellValue: 3200,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_106',
            name: 'Uncommon Shield of the Phoenix +1',
            type: 'armor',
            rarity: 'Uncommon',
            levelReq: 36,
            stats: {
                damage: 0,
                defense: 323,
                health: 868,
                mana: 434,
                critChance: 0.17,
                speedBonus: 9
            },
            sellValue: 3230,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_107',
            name: 'Rare Armor of the Phoenix +2',
            type: 'armor',
            rarity: 'Rare',
            levelReq: 36,
            stats: {
                damage: 0,
                defense: 326,
                health: 876,
                mana: 438,
                critChance: 0.19,
                speedBonus: 11
            },
            sellValue: 3260,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_108',
            name: 'Epic Helm of the Phoenix +3',
            type: 'armor',
            rarity: 'Epic',
            levelReq: 36,
            stats: {
                damage: 0,
                defense: 329,
                health: 884,
                mana: 442,
                critChance: 0.21,
                speedBonus: 13
            },
            sellValue: 3290,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_109',
            name: 'Legendary Boots of the Phoenix +4',
            type: 'armor',
            rarity: 'Legendary',
            levelReq: 37,
            stats: {
                damage: 0,
                defense: 332,
                health: 892,
                mana: 446,
                critChance: 0.23,
                speedBonus: 15
            },
            sellValue: 3320,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_110',
            name: 'Mythic Ring of the Phoenix +5',
            type: 'accessory',
            rarity: 'Mythic',
            levelReq: 37,
            stats: {
                damage: 0,
                defense: 0,
                health: 900,
                mana: 450,
                critChance: 0.05,
                speedBonus: 17
            },
            sellValue: 3350,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_111',
            name: 'Artifact Blade of the Phoenix +6',
            type: 'weapon',
            rarity: 'Artifact',
            levelReq: 37,
            stats: {
                damage: 454,
                defense: 0,
                health: 908,
                mana: 454,
                critChance: 0.07,
                speedBonus: 19
            },
            sellValue: 3380,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_112',
            name: 'Cosmic Staff of the Phoenix +7',
            type: 'weapon',
            rarity: 'Cosmic',
            levelReq: 38,
            stats: {
                damage: 458,
                defense: 0,
                health: 916,
                mana: 458,
                critChance: 0.09,
                speedBonus: 5
            },
            sellValue: 3410,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_113',
            name: 'Common Bow of the Phoenix +8',
            type: 'weapon',
            rarity: 'Common',
            levelReq: 38,
            stats: {
                damage: 462,
                defense: 0,
                health: 924,
                mana: 462,
                critChance: 0.11,
                speedBonus: 7
            },
            sellValue: 3440,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_114',
            name: 'Uncommon Dagger of the Phoenix +9',
            type: 'weapon',
            rarity: 'Uncommon',
            levelReq: 38,
            stats: {
                damage: 466,
                defense: 0,
                health: 932,
                mana: 466,
                critChance: 0.13,
                speedBonus: 9
            },
            sellValue: 3470,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_115',
            name: 'Rare Hammer of the Phoenix +10',
            type: 'weapon',
            rarity: 'Rare',
            levelReq: 39,
            stats: {
                damage: 470,
                defense: 0,
                health: 940,
                mana: 470,
                critChance: 0.15,
                speedBonus: 11
            },
            sellValue: 3500,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_116',
            name: 'Epic Shield of the Phoenix +11',
            type: 'armor',
            rarity: 'Epic',
            levelReq: 39,
            stats: {
                damage: 0,
                defense: 353,
                health: 948,
                mana: 474,
                critChance: 0.17,
                speedBonus: 13
            },
            sellValue: 3530,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_117',
            name: 'Legendary Armor of the Phoenix +12',
            type: 'armor',
            rarity: 'Legendary',
            levelReq: 39,
            stats: {
                damage: 0,
                defense: 356,
                health: 956,
                mana: 478,
                critChance: 0.19,
                speedBonus: 15
            },
            sellValue: 3560,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_118',
            name: 'Mythic Helm of the Phoenix +13',
            type: 'armor',
            rarity: 'Mythic',
            levelReq: 40,
            stats: {
                damage: 0,
                defense: 359,
                health: 964,
                mana: 482,
                critChance: 0.21,
                speedBonus: 17
            },
            sellValue: 3590,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_119',
            name: 'Artifact Boots of the Phoenix +14',
            type: 'armor',
            rarity: 'Artifact',
            levelReq: 40,
            stats: {
                damage: 0,
                defense: 362,
                health: 972,
                mana: 486,
                critChance: 0.23,
                speedBonus: 19
            },
            sellValue: 3620,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_120',
            name: 'Cosmic Ring of the Phoenix +0',
            type: 'accessory',
            rarity: 'Cosmic',
            levelReq: 40,
            stats: {
                damage: 0,
                defense: 0,
                health: 980,
                mana: 490,
                critChance: 0.05,
                speedBonus: 5
            },
            sellValue: 3650,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_121',
            name: 'Common Blade of the Phoenix +1',
            type: 'weapon',
            rarity: 'Common',
            levelReq: 41,
            stats: {
                damage: 494,
                defense: 0,
                health: 988,
                mana: 494,
                critChance: 0.07,
                speedBonus: 7
            },
            sellValue: 3680,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_122',
            name: 'Uncommon Staff of the Phoenix +2',
            type: 'weapon',
            rarity: 'Uncommon',
            levelReq: 41,
            stats: {
                damage: 498,
                defense: 0,
                health: 996,
                mana: 498,
                critChance: 0.09,
                speedBonus: 9
            },
            sellValue: 3710,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_123',
            name: 'Rare Bow of the Phoenix +3',
            type: 'weapon',
            rarity: 'Rare',
            levelReq: 41,
            stats: {
                damage: 502,
                defense: 0,
                health: 1004,
                mana: 502,
                critChance: 0.11,
                speedBonus: 11
            },
            sellValue: 3740,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_124',
            name: 'Epic Dagger of the Phoenix +4',
            type: 'weapon',
            rarity: 'Epic',
            levelReq: 42,
            stats: {
                damage: 506,
                defense: 0,
                health: 1012,
                mana: 506,
                critChance: 0.13,
                speedBonus: 13
            },
            sellValue: 3770,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_125',
            name: 'Legendary Hammer of the Phoenix +5',
            type: 'weapon',
            rarity: 'Legendary',
            levelReq: 42,
            stats: {
                damage: 510,
                defense: 0,
                health: 1020,
                mana: 510,
                critChance: 0.15,
                speedBonus: 15
            },
            sellValue: 3800,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_126',
            name: 'Mythic Shield of the Phoenix +6',
            type: 'armor',
            rarity: 'Mythic',
            levelReq: 42,
            stats: {
                damage: 0,
                defense: 383,
                health: 1028,
                mana: 514,
                critChance: 0.17,
                speedBonus: 17
            },
            sellValue: 3830,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_127',
            name: 'Artifact Armor of the Phoenix +7',
            type: 'armor',
            rarity: 'Artifact',
            levelReq: 43,
            stats: {
                damage: 0,
                defense: 386,
                health: 1036,
                mana: 518,
                critChance: 0.19,
                speedBonus: 19
            },
            sellValue: 3860,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_128',
            name: 'Cosmic Helm of the Phoenix +8',
            type: 'armor',
            rarity: 'Cosmic',
            levelReq: 43,
            stats: {
                damage: 0,
                defense: 389,
                health: 1044,
                mana: 522,
                critChance: 0.21,
                speedBonus: 5
            },
            sellValue: 3890,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_129',
            name: 'Common Boots of the Phoenix +9',
            type: 'armor',
            rarity: 'Common',
            levelReq: 43,
            stats: {
                damage: 0,
                defense: 392,
                health: 1052,
                mana: 526,
                critChance: 0.23,
                speedBonus: 7
            },
            sellValue: 3920,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_130',
            name: 'Uncommon Ring of the Phoenix +10',
            type: 'accessory',
            rarity: 'Uncommon',
            levelReq: 44,
            stats: {
                damage: 0,
                defense: 0,
                health: 1060,
                mana: 530,
                critChance: 0.05,
                speedBonus: 9
            },
            sellValue: 3950,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_131',
            name: 'Rare Blade of the Phoenix +11',
            type: 'weapon',
            rarity: 'Rare',
            levelReq: 44,
            stats: {
                damage: 534,
                defense: 0,
                health: 1068,
                mana: 534,
                critChance: 0.07,
                speedBonus: 11
            },
            sellValue: 3980,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_132',
            name: 'Epic Staff of the Phoenix +12',
            type: 'weapon',
            rarity: 'Epic',
            levelReq: 44,
            stats: {
                damage: 538,
                defense: 0,
                health: 1076,
                mana: 538,
                critChance: 0.09,
                speedBonus: 13
            },
            sellValue: 4010,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_133',
            name: 'Legendary Bow of the Phoenix +13',
            type: 'weapon',
            rarity: 'Legendary',
            levelReq: 45,
            stats: {
                damage: 542,
                defense: 0,
                health: 1084,
                mana: 542,
                critChance: 0.11,
                speedBonus: 15
            },
            sellValue: 4040,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_134',
            name: 'Mythic Dagger of the Phoenix +14',
            type: 'weapon',
            rarity: 'Mythic',
            levelReq: 45,
            stats: {
                damage: 546,
                defense: 0,
                health: 1092,
                mana: 546,
                critChance: 0.13,
                speedBonus: 17
            },
            sellValue: 4070,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_135',
            name: 'Artifact Hammer of the Phoenix +0',
            type: 'weapon',
            rarity: 'Artifact',
            levelReq: 45,
            stats: {
                damage: 550,
                defense: 0,
                health: 1100,
                mana: 550,
                critChance: 0.15,
                speedBonus: 19
            },
            sellValue: 4100,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_136',
            name: 'Cosmic Shield of the Phoenix +1',
            type: 'armor',
            rarity: 'Cosmic',
            levelReq: 46,
            stats: {
                damage: 0,
                defense: 413,
                health: 1108,
                mana: 554,
                critChance: 0.17,
                speedBonus: 5
            },
            sellValue: 4130,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_137',
            name: 'Common Armor of the Phoenix +2',
            type: 'armor',
            rarity: 'Common',
            levelReq: 46,
            stats: {
                damage: 0,
                defense: 416,
                health: 1116,
                mana: 558,
                critChance: 0.19,
                speedBonus: 7
            },
            sellValue: 4160,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_138',
            name: 'Uncommon Helm of the Phoenix +3',
            type: 'armor',
            rarity: 'Uncommon',
            levelReq: 46,
            stats: {
                damage: 0,
                defense: 419,
                health: 1124,
                mana: 562,
                critChance: 0.21,
                speedBonus: 9
            },
            sellValue: 4190,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_139',
            name: 'Rare Boots of the Phoenix +4',
            type: 'armor',
            rarity: 'Rare',
            levelReq: 47,
            stats: {
                damage: 0,
                defense: 422,
                health: 1132,
                mana: 566,
                critChance: 0.23,
                speedBonus: 11
            },
            sellValue: 4220,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_140',
            name: 'Epic Ring of the Phoenix +5',
            type: 'accessory',
            rarity: 'Epic',
            levelReq: 47,
            stats: {
                damage: 0,
                defense: 0,
                health: 1140,
                mana: 570,
                critChance: 0.05,
                speedBonus: 13
            },
            sellValue: 4250,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_141',
            name: 'Legendary Blade of the Phoenix +6',
            type: 'weapon',
            rarity: 'Legendary',
            levelReq: 47,
            stats: {
                damage: 574,
                defense: 0,
                health: 1148,
                mana: 574,
                critChance: 0.07,
                speedBonus: 15
            },
            sellValue: 4280,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_142',
            name: 'Mythic Staff of the Phoenix +7',
            type: 'weapon',
            rarity: 'Mythic',
            levelReq: 48,
            stats: {
                damage: 578,
                defense: 0,
                health: 1156,
                mana: 578,
                critChance: 0.09,
                speedBonus: 17
            },
            sellValue: 4310,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_143',
            name: 'Artifact Bow of the Phoenix +8',
            type: 'weapon',
            rarity: 'Artifact',
            levelReq: 48,
            stats: {
                damage: 582,
                defense: 0,
                health: 1164,
                mana: 582,
                critChance: 0.11,
                speedBonus: 19
            },
            sellValue: 4340,
            description: 'Forged in the heart of Eldoria with artifact crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_144',
            name: 'Cosmic Dagger of the Phoenix +9',
            type: 'weapon',
            rarity: 'Cosmic',
            levelReq: 48,
            stats: {
                damage: 586,
                defense: 0,
                health: 1172,
                mana: 586,
                critChance: 0.13,
                speedBonus: 5
            },
            sellValue: 4370,
            description: 'Forged in the heart of Eldoria with cosmic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_145',
            name: 'Common Hammer of the Phoenix +10',
            type: 'weapon',
            rarity: 'Common',
            levelReq: 49,
            stats: {
                damage: 590,
                defense: 0,
                health: 1180,
                mana: 590,
                critChance: 0.15,
                speedBonus: 7
            },
            sellValue: 4400,
            description: 'Forged in the heart of Eldoria with common crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_146',
            name: 'Uncommon Shield of the Phoenix +11',
            type: 'armor',
            rarity: 'Uncommon',
            levelReq: 49,
            stats: {
                damage: 0,
                defense: 443,
                health: 1188,
                mana: 594,
                critChance: 0.17,
                speedBonus: 9
            },
            sellValue: 4430,
            description: 'Forged in the heart of Eldoria with uncommon crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_147',
            name: 'Rare Armor of the Phoenix +12',
            type: 'armor',
            rarity: 'Rare',
            levelReq: 49,
            stats: {
                damage: 0,
                defense: 446,
                health: 1196,
                mana: 598,
                critChance: 0.19,
                speedBonus: 11
            },
            sellValue: 4460,
            description: 'Forged in the heart of Eldoria with rare crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_148',
            name: 'Epic Helm of the Phoenix +13',
            type: 'armor',
            rarity: 'Epic',
            levelReq: 50,
            stats: {
                damage: 0,
                defense: 449,
                health: 1204,
                mana: 602,
                critChance: 0.21,
                speedBonus: 13
            },
            sellValue: 4490,
            description: 'Forged in the heart of Eldoria with epic crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_149',
            name: 'Legendary Boots of the Phoenix +14',
            type: 'armor',
            rarity: 'Legendary',
            levelReq: 50,
            stats: {
                damage: 0,
                defense: 452,
                health: 1212,
                mana: 606,
                critChance: 0.23,
                speedBonus: 15
            },
            sellValue: 4520,
            description: 'Forged in the heart of Eldoria with legendary crystalline resonance.'
        });
        catalog.push({
            id: 'item_sq_150',
            name: 'Mythic Ring of the Phoenix +0',
            type: 'accessory',
            rarity: 'Mythic',
            levelReq: 50,
            stats: {
                damage: 0,
                defense: 0,
                health: 1220,
                mana: 610,
                critChance: 0.05,
                speedBonus: 17
            },
            sellValue: 4550,
            description: 'Forged in the heart of Eldoria with mythic crystalline resonance.'
        });
        return catalog;
    }
}
