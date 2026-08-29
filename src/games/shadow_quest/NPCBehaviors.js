/**
 * NovaForge Shadow Quest 80 NPC Schedules, Merchant Inventories & AI Dialogue
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class NPCBehaviors {
    static getNPCProfiles() {
        const profiles = [];
        profiles.push({
            npcId: 'npc_sq_001',
            name: 'Blacksmith Eldon 1',
            role: 'Blacksmith',
            location: { district: 'District B', x: 115, y: 120 },
            dialogueTreeId: 'dialogue_npc_001',
            merchantInventory: [
                { itemId: 'item_sq_004', stock: 4, priceMultiplier: 1.1 },
                { itemId: 'item_sq_006', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 115, locationY: 120 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_002',
            name: 'Alchemist Eldon 2',
            role: 'Alchemist',
            location: { district: 'District C', x: 130, y: 140 },
            dialogueTreeId: 'dialogue_npc_002',
            merchantInventory: [
                { itemId: 'item_sq_007', stock: 5, priceMultiplier: 1.1 },
                { itemId: 'item_sq_011', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 130, locationY: 140 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_003',
            name: 'Guildmaster Eldon 3',
            role: 'Guildmaster',
            location: { district: 'District D', x: 145, y: 160 },
            dialogueTreeId: 'dialogue_npc_003',
            merchantInventory: [
                { itemId: 'item_sq_010', stock: 6, priceMultiplier: 1.1 },
                { itemId: 'item_sq_016', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 145, locationY: 160 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_004',
            name: 'Guard Captain Eldon 4',
            role: 'Guard Captain',
            location: { district: 'District E', x: 160, y: 180 },
            dialogueTreeId: 'dialogue_npc_004',
            merchantInventory: [
                { itemId: 'item_sq_013', stock: 7, priceMultiplier: 1.1 },
                { itemId: 'item_sq_021', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 160, locationY: 180 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_005',
            name: 'High Priest Eldon 5',
            role: 'High Priest',
            location: { district: 'District F', x: 175, y: 200 },
            dialogueTreeId: 'dialogue_npc_005',
            merchantInventory: [
                { itemId: 'item_sq_016', stock: 3, priceMultiplier: 1.1 },
                { itemId: 'item_sq_026', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 175, locationY: 200 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_006',
            name: 'Wandering Merchant Eldon 6',
            role: 'Wandering Merchant',
            location: { district: 'District G', x: 190, y: 220 },
            dialogueTreeId: 'dialogue_npc_006',
            merchantInventory: [
                { itemId: 'item_sq_019', stock: 4, priceMultiplier: 1.1 },
                { itemId: 'item_sq_031', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 190, locationY: 220 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_007',
            name: 'Innkeeper Eldon 7',
            role: 'Innkeeper',
            location: { district: 'District H', x: 205, y: 240 },
            dialogueTreeId: 'dialogue_npc_007',
            merchantInventory: [
                { itemId: 'item_sq_022', stock: 5, priceMultiplier: 1.1 },
                { itemId: 'item_sq_036', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 205, locationY: 240 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_008',
            name: 'Enchanter Eldon 8',
            role: 'Enchanter',
            location: { district: 'District A', x: 220, y: 260 },
            dialogueTreeId: 'dialogue_npc_008',
            merchantInventory: [
                { itemId: 'item_sq_025', stock: 6, priceMultiplier: 1.1 },
                { itemId: 'item_sq_041', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 220, locationY: 260 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_009',
            name: 'Blacksmith Eldon 9',
            role: 'Blacksmith',
            location: { district: 'District B', x: 235, y: 280 },
            dialogueTreeId: 'dialogue_npc_009',
            merchantInventory: [
                { itemId: 'item_sq_028', stock: 7, priceMultiplier: 1.1 },
                { itemId: 'item_sq_046', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 235, locationY: 280 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_010',
            name: 'Alchemist Eldon 10',
            role: 'Alchemist',
            location: { district: 'District C', x: 250, y: 300 },
            dialogueTreeId: 'dialogue_npc_010',
            merchantInventory: [
                { itemId: 'item_sq_031', stock: 3, priceMultiplier: 1.1 },
                { itemId: 'item_sq_051', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 250, locationY: 300 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_011',
            name: 'Guildmaster Eldon 11',
            role: 'Guildmaster',
            location: { district: 'District D', x: 265, y: 320 },
            dialogueTreeId: 'dialogue_npc_011',
            merchantInventory: [
                { itemId: 'item_sq_034', stock: 4, priceMultiplier: 1.1 },
                { itemId: 'item_sq_056', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 265, locationY: 320 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_012',
            name: 'Guard Captain Eldon 12',
            role: 'Guard Captain',
            location: { district: 'District E', x: 280, y: 340 },
            dialogueTreeId: 'dialogue_npc_012',
            merchantInventory: [
                { itemId: 'item_sq_037', stock: 5, priceMultiplier: 1.1 },
                { itemId: 'item_sq_061', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 280, locationY: 340 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_013',
            name: 'High Priest Eldon 13',
            role: 'High Priest',
            location: { district: 'District F', x: 295, y: 360 },
            dialogueTreeId: 'dialogue_npc_013',
            merchantInventory: [
                { itemId: 'item_sq_040', stock: 6, priceMultiplier: 1.1 },
                { itemId: 'item_sq_066', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 295, locationY: 360 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_014',
            name: 'Wandering Merchant Eldon 14',
            role: 'Wandering Merchant',
            location: { district: 'District G', x: 310, y: 380 },
            dialogueTreeId: 'dialogue_npc_014',
            merchantInventory: [
                { itemId: 'item_sq_043', stock: 7, priceMultiplier: 1.1 },
                { itemId: 'item_sq_071', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 310, locationY: 380 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_015',
            name: 'Innkeeper Eldon 15',
            role: 'Innkeeper',
            location: { district: 'District H', x: 325, y: 400 },
            dialogueTreeId: 'dialogue_npc_015',
            merchantInventory: [
                { itemId: 'item_sq_046', stock: 3, priceMultiplier: 1.1 },
                { itemId: 'item_sq_076', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 325, locationY: 400 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_016',
            name: 'Enchanter Eldon 16',
            role: 'Enchanter',
            location: { district: 'District A', x: 340, y: 420 },
            dialogueTreeId: 'dialogue_npc_016',
            merchantInventory: [
                { itemId: 'item_sq_049', stock: 4, priceMultiplier: 1.1 },
                { itemId: 'item_sq_081', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 340, locationY: 420 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_017',
            name: 'Blacksmith Eldon 17',
            role: 'Blacksmith',
            location: { district: 'District B', x: 355, y: 440 },
            dialogueTreeId: 'dialogue_npc_017',
            merchantInventory: [
                { itemId: 'item_sq_052', stock: 5, priceMultiplier: 1.1 },
                { itemId: 'item_sq_086', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 355, locationY: 440 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_018',
            name: 'Alchemist Eldon 18',
            role: 'Alchemist',
            location: { district: 'District C', x: 370, y: 460 },
            dialogueTreeId: 'dialogue_npc_018',
            merchantInventory: [
                { itemId: 'item_sq_055', stock: 6, priceMultiplier: 1.1 },
                { itemId: 'item_sq_091', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 370, locationY: 460 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_019',
            name: 'Guildmaster Eldon 19',
            role: 'Guildmaster',
            location: { district: 'District D', x: 385, y: 480 },
            dialogueTreeId: 'dialogue_npc_019',
            merchantInventory: [
                { itemId: 'item_sq_058', stock: 7, priceMultiplier: 1.1 },
                { itemId: 'item_sq_096', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 385, locationY: 480 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_020',
            name: 'Guard Captain Eldon 20',
            role: 'Guard Captain',
            location: { district: 'District E', x: 400, y: 500 },
            dialogueTreeId: 'dialogue_npc_020',
            merchantInventory: [
                { itemId: 'item_sq_061', stock: 3, priceMultiplier: 1.1 },
                { itemId: 'item_sq_101', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 400, locationY: 500 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_021',
            name: 'High Priest Eldon 21',
            role: 'High Priest',
            location: { district: 'District F', x: 415, y: 520 },
            dialogueTreeId: 'dialogue_npc_021',
            merchantInventory: [
                { itemId: 'item_sq_064', stock: 4, priceMultiplier: 1.1 },
                { itemId: 'item_sq_106', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 415, locationY: 520 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_022',
            name: 'Wandering Merchant Eldon 22',
            role: 'Wandering Merchant',
            location: { district: 'District G', x: 430, y: 540 },
            dialogueTreeId: 'dialogue_npc_022',
            merchantInventory: [
                { itemId: 'item_sq_067', stock: 5, priceMultiplier: 1.1 },
                { itemId: 'item_sq_111', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 430, locationY: 540 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_023',
            name: 'Innkeeper Eldon 23',
            role: 'Innkeeper',
            location: { district: 'District H', x: 445, y: 560 },
            dialogueTreeId: 'dialogue_npc_023',
            merchantInventory: [
                { itemId: 'item_sq_070', stock: 6, priceMultiplier: 1.1 },
                { itemId: 'item_sq_116', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 445, locationY: 560 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_024',
            name: 'Enchanter Eldon 24',
            role: 'Enchanter',
            location: { district: 'District A', x: 460, y: 580 },
            dialogueTreeId: 'dialogue_npc_024',
            merchantInventory: [
                { itemId: 'item_sq_073', stock: 7, priceMultiplier: 1.1 },
                { itemId: 'item_sq_121', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 460, locationY: 580 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_025',
            name: 'Blacksmith Eldon 25',
            role: 'Blacksmith',
            location: { district: 'District B', x: 475, y: 100 },
            dialogueTreeId: 'dialogue_npc_025',
            merchantInventory: [
                { itemId: 'item_sq_076', stock: 3, priceMultiplier: 1.1 },
                { itemId: 'item_sq_126', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 475, locationY: 100 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_026',
            name: 'Alchemist Eldon 26',
            role: 'Alchemist',
            location: { district: 'District C', x: 490, y: 120 },
            dialogueTreeId: 'dialogue_npc_026',
            merchantInventory: [
                { itemId: 'item_sq_079', stock: 4, priceMultiplier: 1.1 },
                { itemId: 'item_sq_131', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 490, locationY: 120 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_027',
            name: 'Guildmaster Eldon 27',
            role: 'Guildmaster',
            location: { district: 'District D', x: 505, y: 140 },
            dialogueTreeId: 'dialogue_npc_027',
            merchantInventory: [
                { itemId: 'item_sq_082', stock: 5, priceMultiplier: 1.1 },
                { itemId: 'item_sq_136', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 505, locationY: 140 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_028',
            name: 'Guard Captain Eldon 28',
            role: 'Guard Captain',
            location: { district: 'District E', x: 520, y: 160 },
            dialogueTreeId: 'dialogue_npc_028',
            merchantInventory: [
                { itemId: 'item_sq_085', stock: 6, priceMultiplier: 1.1 },
                { itemId: 'item_sq_141', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 520, locationY: 160 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_029',
            name: 'High Priest Eldon 29',
            role: 'High Priest',
            location: { district: 'District F', x: 535, y: 180 },
            dialogueTreeId: 'dialogue_npc_029',
            merchantInventory: [
                { itemId: 'item_sq_088', stock: 7, priceMultiplier: 1.1 },
                { itemId: 'item_sq_146', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 535, locationY: 180 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_030',
            name: 'Wandering Merchant Eldon 30',
            role: 'Wandering Merchant',
            location: { district: 'District G', x: 550, y: 200 },
            dialogueTreeId: 'dialogue_npc_030',
            merchantInventory: [
                { itemId: 'item_sq_091', stock: 3, priceMultiplier: 1.1 },
                { itemId: 'item_sq_001', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 550, locationY: 200 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_031',
            name: 'Innkeeper Eldon 31',
            role: 'Innkeeper',
            location: { district: 'District H', x: 565, y: 220 },
            dialogueTreeId: 'dialogue_npc_031',
            merchantInventory: [
                { itemId: 'item_sq_094', stock: 4, priceMultiplier: 1.1 },
                { itemId: 'item_sq_006', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 565, locationY: 220 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_032',
            name: 'Enchanter Eldon 32',
            role: 'Enchanter',
            location: { district: 'District A', x: 580, y: 240 },
            dialogueTreeId: 'dialogue_npc_032',
            merchantInventory: [
                { itemId: 'item_sq_097', stock: 5, priceMultiplier: 1.1 },
                { itemId: 'item_sq_011', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 580, locationY: 240 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_033',
            name: 'Blacksmith Eldon 33',
            role: 'Blacksmith',
            location: { district: 'District B', x: 595, y: 260 },
            dialogueTreeId: 'dialogue_npc_033',
            merchantInventory: [
                { itemId: 'item_sq_100', stock: 6, priceMultiplier: 1.1 },
                { itemId: 'item_sq_016', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 595, locationY: 260 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_034',
            name: 'Alchemist Eldon 34',
            role: 'Alchemist',
            location: { district: 'District C', x: 610, y: 280 },
            dialogueTreeId: 'dialogue_npc_034',
            merchantInventory: [
                { itemId: 'item_sq_103', stock: 7, priceMultiplier: 1.1 },
                { itemId: 'item_sq_021', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 610, locationY: 280 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_035',
            name: 'Guildmaster Eldon 35',
            role: 'Guildmaster',
            location: { district: 'District D', x: 625, y: 300 },
            dialogueTreeId: 'dialogue_npc_035',
            merchantInventory: [
                { itemId: 'item_sq_106', stock: 3, priceMultiplier: 1.1 },
                { itemId: 'item_sq_026', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 625, locationY: 300 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_036',
            name: 'Guard Captain Eldon 36',
            role: 'Guard Captain',
            location: { district: 'District E', x: 640, y: 320 },
            dialogueTreeId: 'dialogue_npc_036',
            merchantInventory: [
                { itemId: 'item_sq_109', stock: 4, priceMultiplier: 1.1 },
                { itemId: 'item_sq_031', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 640, locationY: 320 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_037',
            name: 'High Priest Eldon 37',
            role: 'High Priest',
            location: { district: 'District F', x: 655, y: 340 },
            dialogueTreeId: 'dialogue_npc_037',
            merchantInventory: [
                { itemId: 'item_sq_112', stock: 5, priceMultiplier: 1.1 },
                { itemId: 'item_sq_036', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 655, locationY: 340 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_038',
            name: 'Wandering Merchant Eldon 38',
            role: 'Wandering Merchant',
            location: { district: 'District G', x: 670, y: 360 },
            dialogueTreeId: 'dialogue_npc_038',
            merchantInventory: [
                { itemId: 'item_sq_115', stock: 6, priceMultiplier: 1.1 },
                { itemId: 'item_sq_041', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 670, locationY: 360 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_039',
            name: 'Innkeeper Eldon 39',
            role: 'Innkeeper',
            location: { district: 'District H', x: 685, y: 380 },
            dialogueTreeId: 'dialogue_npc_039',
            merchantInventory: [
                { itemId: 'item_sq_118', stock: 7, priceMultiplier: 1.1 },
                { itemId: 'item_sq_046', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 685, locationY: 380 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_040',
            name: 'Enchanter Eldon 40',
            role: 'Enchanter',
            location: { district: 'District A', x: 700, y: 400 },
            dialogueTreeId: 'dialogue_npc_040',
            merchantInventory: [
                { itemId: 'item_sq_121', stock: 3, priceMultiplier: 1.1 },
                { itemId: 'item_sq_051', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 700, locationY: 400 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_041',
            name: 'Blacksmith Eldon 41',
            role: 'Blacksmith',
            location: { district: 'District B', x: 715, y: 420 },
            dialogueTreeId: 'dialogue_npc_041',
            merchantInventory: [
                { itemId: 'item_sq_124', stock: 4, priceMultiplier: 1.1 },
                { itemId: 'item_sq_056', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 715, locationY: 420 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_042',
            name: 'Alchemist Eldon 42',
            role: 'Alchemist',
            location: { district: 'District C', x: 730, y: 440 },
            dialogueTreeId: 'dialogue_npc_042',
            merchantInventory: [
                { itemId: 'item_sq_127', stock: 5, priceMultiplier: 1.1 },
                { itemId: 'item_sq_061', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 730, locationY: 440 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_043',
            name: 'Guildmaster Eldon 43',
            role: 'Guildmaster',
            location: { district: 'District D', x: 745, y: 460 },
            dialogueTreeId: 'dialogue_npc_043',
            merchantInventory: [
                { itemId: 'item_sq_130', stock: 6, priceMultiplier: 1.1 },
                { itemId: 'item_sq_066', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 745, locationY: 460 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_044',
            name: 'Guard Captain Eldon 44',
            role: 'Guard Captain',
            location: { district: 'District E', x: 760, y: 480 },
            dialogueTreeId: 'dialogue_npc_044',
            merchantInventory: [
                { itemId: 'item_sq_133', stock: 7, priceMultiplier: 1.1 },
                { itemId: 'item_sq_071', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 760, locationY: 480 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_045',
            name: 'High Priest Eldon 45',
            role: 'High Priest',
            location: { district: 'District F', x: 775, y: 500 },
            dialogueTreeId: 'dialogue_npc_045',
            merchantInventory: [
                { itemId: 'item_sq_136', stock: 3, priceMultiplier: 1.1 },
                { itemId: 'item_sq_076', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 775, locationY: 500 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_046',
            name: 'Wandering Merchant Eldon 46',
            role: 'Wandering Merchant',
            location: { district: 'District G', x: 790, y: 520 },
            dialogueTreeId: 'dialogue_npc_046',
            merchantInventory: [
                { itemId: 'item_sq_139', stock: 4, priceMultiplier: 1.1 },
                { itemId: 'item_sq_081', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 790, locationY: 520 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_047',
            name: 'Innkeeper Eldon 47',
            role: 'Innkeeper',
            location: { district: 'District H', x: 805, y: 540 },
            dialogueTreeId: 'dialogue_npc_047',
            merchantInventory: [
                { itemId: 'item_sq_142', stock: 5, priceMultiplier: 1.1 },
                { itemId: 'item_sq_086', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 805, locationY: 540 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_048',
            name: 'Enchanter Eldon 48',
            role: 'Enchanter',
            location: { district: 'District A', x: 820, y: 560 },
            dialogueTreeId: 'dialogue_npc_048',
            merchantInventory: [
                { itemId: 'item_sq_145', stock: 6, priceMultiplier: 1.1 },
                { itemId: 'item_sq_091', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 820, locationY: 560 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_049',
            name: 'Blacksmith Eldon 49',
            role: 'Blacksmith',
            location: { district: 'District B', x: 835, y: 580 },
            dialogueTreeId: 'dialogue_npc_049',
            merchantInventory: [
                { itemId: 'item_sq_148', stock: 7, priceMultiplier: 1.1 },
                { itemId: 'item_sq_096', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 835, locationY: 580 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_050',
            name: 'Alchemist Eldon 50',
            role: 'Alchemist',
            location: { district: 'District C', x: 850, y: 100 },
            dialogueTreeId: 'dialogue_npc_050',
            merchantInventory: [
                { itemId: 'item_sq_001', stock: 3, priceMultiplier: 1.1 },
                { itemId: 'item_sq_101', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 850, locationY: 100 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_051',
            name: 'Guildmaster Eldon 51',
            role: 'Guildmaster',
            location: { district: 'District D', x: 865, y: 120 },
            dialogueTreeId: 'dialogue_npc_051',
            merchantInventory: [
                { itemId: 'item_sq_004', stock: 4, priceMultiplier: 1.1 },
                { itemId: 'item_sq_106', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 865, locationY: 120 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_052',
            name: 'Guard Captain Eldon 52',
            role: 'Guard Captain',
            location: { district: 'District E', x: 880, y: 140 },
            dialogueTreeId: 'dialogue_npc_052',
            merchantInventory: [
                { itemId: 'item_sq_007', stock: 5, priceMultiplier: 1.1 },
                { itemId: 'item_sq_111', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 880, locationY: 140 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_053',
            name: 'High Priest Eldon 53',
            role: 'High Priest',
            location: { district: 'District F', x: 895, y: 160 },
            dialogueTreeId: 'dialogue_npc_053',
            merchantInventory: [
                { itemId: 'item_sq_010', stock: 6, priceMultiplier: 1.1 },
                { itemId: 'item_sq_116', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 895, locationY: 160 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_054',
            name: 'Wandering Merchant Eldon 54',
            role: 'Wandering Merchant',
            location: { district: 'District G', x: 110, y: 180 },
            dialogueTreeId: 'dialogue_npc_054',
            merchantInventory: [
                { itemId: 'item_sq_013', stock: 7, priceMultiplier: 1.1 },
                { itemId: 'item_sq_121', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 110, locationY: 180 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_055',
            name: 'Innkeeper Eldon 55',
            role: 'Innkeeper',
            location: { district: 'District H', x: 125, y: 200 },
            dialogueTreeId: 'dialogue_npc_055',
            merchantInventory: [
                { itemId: 'item_sq_016', stock: 3, priceMultiplier: 1.1 },
                { itemId: 'item_sq_126', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 125, locationY: 200 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_056',
            name: 'Enchanter Eldon 56',
            role: 'Enchanter',
            location: { district: 'District A', x: 140, y: 220 },
            dialogueTreeId: 'dialogue_npc_056',
            merchantInventory: [
                { itemId: 'item_sq_019', stock: 4, priceMultiplier: 1.1 },
                { itemId: 'item_sq_131', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 140, locationY: 220 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_057',
            name: 'Blacksmith Eldon 57',
            role: 'Blacksmith',
            location: { district: 'District B', x: 155, y: 240 },
            dialogueTreeId: 'dialogue_npc_057',
            merchantInventory: [
                { itemId: 'item_sq_022', stock: 5, priceMultiplier: 1.1 },
                { itemId: 'item_sq_136', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 155, locationY: 240 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_058',
            name: 'Alchemist Eldon 58',
            role: 'Alchemist',
            location: { district: 'District C', x: 170, y: 260 },
            dialogueTreeId: 'dialogue_npc_058',
            merchantInventory: [
                { itemId: 'item_sq_025', stock: 6, priceMultiplier: 1.1 },
                { itemId: 'item_sq_141', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 170, locationY: 260 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_059',
            name: 'Guildmaster Eldon 59',
            role: 'Guildmaster',
            location: { district: 'District D', x: 185, y: 280 },
            dialogueTreeId: 'dialogue_npc_059',
            merchantInventory: [
                { itemId: 'item_sq_028', stock: 7, priceMultiplier: 1.1 },
                { itemId: 'item_sq_146', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 185, locationY: 280 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_060',
            name: 'Guard Captain Eldon 60',
            role: 'Guard Captain',
            location: { district: 'District E', x: 200, y: 300 },
            dialogueTreeId: 'dialogue_npc_060',
            merchantInventory: [
                { itemId: 'item_sq_031', stock: 3, priceMultiplier: 1.1 },
                { itemId: 'item_sq_001', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 200, locationY: 300 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_061',
            name: 'High Priest Eldon 61',
            role: 'High Priest',
            location: { district: 'District F', x: 215, y: 320 },
            dialogueTreeId: 'dialogue_npc_061',
            merchantInventory: [
                { itemId: 'item_sq_034', stock: 4, priceMultiplier: 1.1 },
                { itemId: 'item_sq_006', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 215, locationY: 320 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_062',
            name: 'Wandering Merchant Eldon 62',
            role: 'Wandering Merchant',
            location: { district: 'District G', x: 230, y: 340 },
            dialogueTreeId: 'dialogue_npc_062',
            merchantInventory: [
                { itemId: 'item_sq_037', stock: 5, priceMultiplier: 1.1 },
                { itemId: 'item_sq_011', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 230, locationY: 340 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_063',
            name: 'Innkeeper Eldon 63',
            role: 'Innkeeper',
            location: { district: 'District H', x: 245, y: 360 },
            dialogueTreeId: 'dialogue_npc_063',
            merchantInventory: [
                { itemId: 'item_sq_040', stock: 6, priceMultiplier: 1.1 },
                { itemId: 'item_sq_016', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 245, locationY: 360 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_064',
            name: 'Enchanter Eldon 64',
            role: 'Enchanter',
            location: { district: 'District A', x: 260, y: 380 },
            dialogueTreeId: 'dialogue_npc_064',
            merchantInventory: [
                { itemId: 'item_sq_043', stock: 7, priceMultiplier: 1.1 },
                { itemId: 'item_sq_021', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 260, locationY: 380 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_065',
            name: 'Blacksmith Eldon 65',
            role: 'Blacksmith',
            location: { district: 'District B', x: 275, y: 400 },
            dialogueTreeId: 'dialogue_npc_065',
            merchantInventory: [
                { itemId: 'item_sq_046', stock: 3, priceMultiplier: 1.1 },
                { itemId: 'item_sq_026', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 275, locationY: 400 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_066',
            name: 'Alchemist Eldon 66',
            role: 'Alchemist',
            location: { district: 'District C', x: 290, y: 420 },
            dialogueTreeId: 'dialogue_npc_066',
            merchantInventory: [
                { itemId: 'item_sq_049', stock: 4, priceMultiplier: 1.1 },
                { itemId: 'item_sq_031', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 290, locationY: 420 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_067',
            name: 'Guildmaster Eldon 67',
            role: 'Guildmaster',
            location: { district: 'District D', x: 305, y: 440 },
            dialogueTreeId: 'dialogue_npc_067',
            merchantInventory: [
                { itemId: 'item_sq_052', stock: 5, priceMultiplier: 1.1 },
                { itemId: 'item_sq_036', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 305, locationY: 440 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_068',
            name: 'Guard Captain Eldon 68',
            role: 'Guard Captain',
            location: { district: 'District E', x: 320, y: 460 },
            dialogueTreeId: 'dialogue_npc_068',
            merchantInventory: [
                { itemId: 'item_sq_055', stock: 6, priceMultiplier: 1.1 },
                { itemId: 'item_sq_041', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 320, locationY: 460 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_069',
            name: 'High Priest Eldon 69',
            role: 'High Priest',
            location: { district: 'District F', x: 335, y: 480 },
            dialogueTreeId: 'dialogue_npc_069',
            merchantInventory: [
                { itemId: 'item_sq_058', stock: 7, priceMultiplier: 1.1 },
                { itemId: 'item_sq_046', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 335, locationY: 480 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_070',
            name: 'Wandering Merchant Eldon 70',
            role: 'Wandering Merchant',
            location: { district: 'District G', x: 350, y: 500 },
            dialogueTreeId: 'dialogue_npc_070',
            merchantInventory: [
                { itemId: 'item_sq_061', stock: 3, priceMultiplier: 1.1 },
                { itemId: 'item_sq_051', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 350, locationY: 500 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_071',
            name: 'Innkeeper Eldon 71',
            role: 'Innkeeper',
            location: { district: 'District H', x: 365, y: 520 },
            dialogueTreeId: 'dialogue_npc_071',
            merchantInventory: [
                { itemId: 'item_sq_064', stock: 4, priceMultiplier: 1.1 },
                { itemId: 'item_sq_056', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 365, locationY: 520 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_072',
            name: 'Enchanter Eldon 72',
            role: 'Enchanter',
            location: { district: 'District A', x: 380, y: 540 },
            dialogueTreeId: 'dialogue_npc_072',
            merchantInventory: [
                { itemId: 'item_sq_067', stock: 5, priceMultiplier: 1.1 },
                { itemId: 'item_sq_061', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 380, locationY: 540 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_073',
            name: 'Blacksmith Eldon 73',
            role: 'Blacksmith',
            location: { district: 'District B', x: 395, y: 560 },
            dialogueTreeId: 'dialogue_npc_073',
            merchantInventory: [
                { itemId: 'item_sq_070', stock: 6, priceMultiplier: 1.1 },
                { itemId: 'item_sq_066', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 395, locationY: 560 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_074',
            name: 'Alchemist Eldon 74',
            role: 'Alchemist',
            location: { district: 'District C', x: 410, y: 580 },
            dialogueTreeId: 'dialogue_npc_074',
            merchantInventory: [
                { itemId: 'item_sq_073', stock: 7, priceMultiplier: 1.1 },
                { itemId: 'item_sq_071', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 410, locationY: 580 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_075',
            name: 'Guildmaster Eldon 75',
            role: 'Guildmaster',
            location: { district: 'District D', x: 425, y: 100 },
            dialogueTreeId: 'dialogue_npc_075',
            merchantInventory: [
                { itemId: 'item_sq_076', stock: 3, priceMultiplier: 1.1 },
                { itemId: 'item_sq_076', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 425, locationY: 100 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_076',
            name: 'Guard Captain Eldon 76',
            role: 'Guard Captain',
            location: { district: 'District E', x: 440, y: 120 },
            dialogueTreeId: 'dialogue_npc_076',
            merchantInventory: [
                { itemId: 'item_sq_079', stock: 4, priceMultiplier: 1.1 },
                { itemId: 'item_sq_081', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 440, locationY: 120 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_077',
            name: 'High Priest Eldon 77',
            role: 'High Priest',
            location: { district: 'District F', x: 455, y: 140 },
            dialogueTreeId: 'dialogue_npc_077',
            merchantInventory: [
                { itemId: 'item_sq_082', stock: 5, priceMultiplier: 1.1 },
                { itemId: 'item_sq_086', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 455, locationY: 140 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_078',
            name: 'Wandering Merchant Eldon 78',
            role: 'Wandering Merchant',
            location: { district: 'District G', x: 470, y: 160 },
            dialogueTreeId: 'dialogue_npc_078',
            merchantInventory: [
                { itemId: 'item_sq_085', stock: 6, priceMultiplier: 1.1 },
                { itemId: 'item_sq_091', stock: 2, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 470, locationY: 160 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_079',
            name: 'Innkeeper Eldon 79',
            role: 'Innkeeper',
            location: { district: 'District H', x: 485, y: 180 },
            dialogueTreeId: 'dialogue_npc_079',
            merchantInventory: [
                { itemId: 'item_sq_088', stock: 7, priceMultiplier: 1.1 },
                { itemId: 'item_sq_096', stock: 3, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 485, locationY: 180 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        profiles.push({
            npcId: 'npc_sq_080',
            name: 'Enchanter Eldon 80',
            role: 'Enchanter',
            location: { district: 'District A', x: 500, y: 200 },
            dialogueTreeId: 'dialogue_npc_080',
            merchantInventory: [
                { itemId: 'item_sq_091', stock: 3, priceMultiplier: 1.1 },
                { itemId: 'item_sq_101', stock: 4, priceMultiplier: 1.25 }
            ],
            schedule: [
                { time: '08:00', activity: 'open_shop', locationX: 500, locationY: 200 },
                { time: '18:00', activity: 'tavern_relax', locationX: 450, locationY: 300 },
                { time: '22:00', activity: 'sleep', locationX: 120, locationY: 150 }
            ]
        });
        return profiles;
    }
}
