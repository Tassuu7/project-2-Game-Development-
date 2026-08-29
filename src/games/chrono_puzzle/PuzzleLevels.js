/**
 * NovaForge Chrono Puzzle Comprehensive Level Definitions & Grid Solutions
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export const PUZZLE_LEVELS = [
    {
        id: 'puzzle_level_01',
        title: 'Temporal Chamber 01',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 1 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (1 % 3), targetX: 6, targetY: 2 + (1 % 3) },
            { id: 'b2', x: 4, y: 3 + (1 % 2), targetX: 6, targetY: 3 + (1 % 2) },
            { id: 'b3', x: 3 + (1 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (1 % 3) },
            { x: 6, y: 3 + (1 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_02',
        title: 'Temporal Chamber 02',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 2 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (2 % 3), targetX: 6, targetY: 2 + (2 % 3) },
            { id: 'b2', x: 4, y: 3 + (2 % 2), targetX: 6, targetY: 3 + (2 % 2) },
            { id: 'b3', x: 3 + (2 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (2 % 3) },
            { x: 6, y: 3 + (2 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_03',
        title: 'Temporal Chamber 03',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 3 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (3 % 3), targetX: 6, targetY: 2 + (3 % 3) },
            { id: 'b2', x: 4, y: 3 + (3 % 2), targetX: 6, targetY: 3 + (3 % 2) },
            { id: 'b3', x: 3 + (3 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (3 % 3) },
            { x: 6, y: 3 + (3 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_04',
        title: 'Temporal Chamber 04',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 4 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (4 % 3), targetX: 6, targetY: 2 + (4 % 3) },
            { id: 'b2', x: 4, y: 3 + (4 % 2), targetX: 6, targetY: 3 + (4 % 2) },
            { id: 'b3', x: 3 + (4 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (4 % 3) },
            { x: 6, y: 3 + (4 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_05',
        title: 'Temporal Chamber 05',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 5 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (5 % 3), targetX: 6, targetY: 2 + (5 % 3) },
            { id: 'b2', x: 4, y: 3 + (5 % 2), targetX: 6, targetY: 3 + (5 % 2) },
            { id: 'b3', x: 3 + (5 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (5 % 3) },
            { x: 6, y: 3 + (5 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_06',
        title: 'Temporal Chamber 06',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 6 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (6 % 3), targetX: 6, targetY: 2 + (6 % 3) },
            { id: 'b2', x: 4, y: 3 + (6 % 2), targetX: 6, targetY: 3 + (6 % 2) },
            { id: 'b3', x: 3 + (6 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (6 % 3) },
            { x: 6, y: 3 + (6 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_07',
        title: 'Temporal Chamber 07',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 7 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (7 % 3), targetX: 6, targetY: 2 + (7 % 3) },
            { id: 'b2', x: 4, y: 3 + (7 % 2), targetX: 6, targetY: 3 + (7 % 2) },
            { id: 'b3', x: 3 + (7 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (7 % 3) },
            { x: 6, y: 3 + (7 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_08',
        title: 'Temporal Chamber 08',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 8 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (8 % 3), targetX: 6, targetY: 2 + (8 % 3) },
            { id: 'b2', x: 4, y: 3 + (8 % 2), targetX: 6, targetY: 3 + (8 % 2) },
            { id: 'b3', x: 3 + (8 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (8 % 3) },
            { x: 6, y: 3 + (8 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_09',
        title: 'Temporal Chamber 09',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 9 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (9 % 3), targetX: 6, targetY: 2 + (9 % 3) },
            { id: 'b2', x: 4, y: 3 + (9 % 2), targetX: 6, targetY: 3 + (9 % 2) },
            { id: 'b3', x: 3 + (9 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (9 % 3) },
            { x: 6, y: 3 + (9 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_10',
        title: 'Temporal Chamber 10',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 10 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (10 % 3), targetX: 6, targetY: 2 + (10 % 3) },
            { id: 'b2', x: 4, y: 3 + (10 % 2), targetX: 6, targetY: 3 + (10 % 2) },
            { id: 'b3', x: 3 + (10 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (10 % 3) },
            { x: 6, y: 3 + (10 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_11',
        title: 'Temporal Chamber 11',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 11 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (11 % 3), targetX: 6, targetY: 2 + (11 % 3) },
            { id: 'b2', x: 4, y: 3 + (11 % 2), targetX: 6, targetY: 3 + (11 % 2) },
            { id: 'b3', x: 3 + (11 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (11 % 3) },
            { x: 6, y: 3 + (11 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_12',
        title: 'Temporal Chamber 12',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 12 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (12 % 3), targetX: 6, targetY: 2 + (12 % 3) },
            { id: 'b2', x: 4, y: 3 + (12 % 2), targetX: 6, targetY: 3 + (12 % 2) },
            { id: 'b3', x: 3 + (12 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (12 % 3) },
            { x: 6, y: 3 + (12 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_13',
        title: 'Temporal Chamber 13',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 13 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (13 % 3), targetX: 6, targetY: 2 + (13 % 3) },
            { id: 'b2', x: 4, y: 3 + (13 % 2), targetX: 6, targetY: 3 + (13 % 2) },
            { id: 'b3', x: 3 + (13 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (13 % 3) },
            { x: 6, y: 3 + (13 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_14',
        title: 'Temporal Chamber 14',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 14 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (14 % 3), targetX: 6, targetY: 2 + (14 % 3) },
            { id: 'b2', x: 4, y: 3 + (14 % 2), targetX: 6, targetY: 3 + (14 % 2) },
            { id: 'b3', x: 3 + (14 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (14 % 3) },
            { x: 6, y: 3 + (14 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_15',
        title: 'Temporal Chamber 15',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 15 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (15 % 3), targetX: 6, targetY: 2 + (15 % 3) },
            { id: 'b2', x: 4, y: 3 + (15 % 2), targetX: 6, targetY: 3 + (15 % 2) },
            { id: 'b3', x: 3 + (15 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (15 % 3) },
            { x: 6, y: 3 + (15 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_16',
        title: 'Temporal Chamber 16',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 16 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (16 % 3), targetX: 6, targetY: 2 + (16 % 3) },
            { id: 'b2', x: 4, y: 3 + (16 % 2), targetX: 6, targetY: 3 + (16 % 2) },
            { id: 'b3', x: 3 + (16 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (16 % 3) },
            { x: 6, y: 3 + (16 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_17',
        title: 'Temporal Chamber 17',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 17 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (17 % 3), targetX: 6, targetY: 2 + (17 % 3) },
            { id: 'b2', x: 4, y: 3 + (17 % 2), targetX: 6, targetY: 3 + (17 % 2) },
            { id: 'b3', x: 3 + (17 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (17 % 3) },
            { x: 6, y: 3 + (17 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_18',
        title: 'Temporal Chamber 18',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 18 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (18 % 3), targetX: 6, targetY: 2 + (18 % 3) },
            { id: 'b2', x: 4, y: 3 + (18 % 2), targetX: 6, targetY: 3 + (18 % 2) },
            { id: 'b3', x: 3 + (18 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (18 % 3) },
            { x: 6, y: 3 + (18 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_19',
        title: 'Temporal Chamber 19',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 19 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (19 % 3), targetX: 6, targetY: 2 + (19 % 3) },
            { id: 'b2', x: 4, y: 3 + (19 % 2), targetX: 6, targetY: 3 + (19 % 2) },
            { id: 'b3', x: 3 + (19 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (19 % 3) },
            { x: 6, y: 3 + (19 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_20',
        title: 'Temporal Chamber 20',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 20 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (20 % 3), targetX: 6, targetY: 2 + (20 % 3) },
            { id: 'b2', x: 4, y: 3 + (20 % 2), targetX: 6, targetY: 3 + (20 % 2) },
            { id: 'b3', x: 3 + (20 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (20 % 3) },
            { x: 6, y: 3 + (20 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_21',
        title: 'Temporal Chamber 21',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 21 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (21 % 3), targetX: 6, targetY: 2 + (21 % 3) },
            { id: 'b2', x: 4, y: 3 + (21 % 2), targetX: 6, targetY: 3 + (21 % 2) },
            { id: 'b3', x: 3 + (21 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (21 % 3) },
            { x: 6, y: 3 + (21 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_22',
        title: 'Temporal Chamber 22',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 22 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (22 % 3), targetX: 6, targetY: 2 + (22 % 3) },
            { id: 'b2', x: 4, y: 3 + (22 % 2), targetX: 6, targetY: 3 + (22 % 2) },
            { id: 'b3', x: 3 + (22 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (22 % 3) },
            { x: 6, y: 3 + (22 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_23',
        title: 'Temporal Chamber 23',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 23 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (23 % 3), targetX: 6, targetY: 2 + (23 % 3) },
            { id: 'b2', x: 4, y: 3 + (23 % 2), targetX: 6, targetY: 3 + (23 % 2) },
            { id: 'b3', x: 3 + (23 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (23 % 3) },
            { x: 6, y: 3 + (23 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_24',
        title: 'Temporal Chamber 24',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 24 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (24 % 3), targetX: 6, targetY: 2 + (24 % 3) },
            { id: 'b2', x: 4, y: 3 + (24 % 2), targetX: 6, targetY: 3 + (24 % 2) },
            { id: 'b3', x: 3 + (24 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (24 % 3) },
            { x: 6, y: 3 + (24 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_25',
        title: 'Temporal Chamber 25',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 25 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (25 % 3), targetX: 6, targetY: 2 + (25 % 3) },
            { id: 'b2', x: 4, y: 3 + (25 % 2), targetX: 6, targetY: 3 + (25 % 2) },
            { id: 'b3', x: 3 + (25 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (25 % 3) },
            { x: 6, y: 3 + (25 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_26',
        title: 'Temporal Chamber 26',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 26 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (26 % 3), targetX: 6, targetY: 2 + (26 % 3) },
            { id: 'b2', x: 4, y: 3 + (26 % 2), targetX: 6, targetY: 3 + (26 % 2) },
            { id: 'b3', x: 3 + (26 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (26 % 3) },
            { x: 6, y: 3 + (26 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_27',
        title: 'Temporal Chamber 27',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 27 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (27 % 3), targetX: 6, targetY: 2 + (27 % 3) },
            { id: 'b2', x: 4, y: 3 + (27 % 2), targetX: 6, targetY: 3 + (27 % 2) },
            { id: 'b3', x: 3 + (27 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (27 % 3) },
            { x: 6, y: 3 + (27 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_28',
        title: 'Temporal Chamber 28',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 28 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (28 % 3), targetX: 6, targetY: 2 + (28 % 3) },
            { id: 'b2', x: 4, y: 3 + (28 % 2), targetX: 6, targetY: 3 + (28 % 2) },
            { id: 'b3', x: 3 + (28 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (28 % 3) },
            { x: 6, y: 3 + (28 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_29',
        title: 'Temporal Chamber 29',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 29 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (29 % 3), targetX: 6, targetY: 2 + (29 % 3) },
            { id: 'b2', x: 4, y: 3 + (29 % 2), targetX: 6, targetY: 3 + (29 % 2) },
            { id: 'b3', x: 3 + (29 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (29 % 3) },
            { x: 6, y: 3 + (29 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_30',
        title: 'Temporal Chamber 30',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 30 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (30 % 3), targetX: 6, targetY: 2 + (30 % 3) },
            { id: 'b2', x: 4, y: 3 + (30 % 2), targetX: 6, targetY: 3 + (30 % 2) },
            { id: 'b3', x: 3 + (30 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (30 % 3) },
            { x: 6, y: 3 + (30 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_31',
        title: 'Temporal Chamber 31',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 31 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (31 % 3), targetX: 6, targetY: 2 + (31 % 3) },
            { id: 'b2', x: 4, y: 3 + (31 % 2), targetX: 6, targetY: 3 + (31 % 2) },
            { id: 'b3', x: 3 + (31 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (31 % 3) },
            { x: 6, y: 3 + (31 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_32',
        title: 'Temporal Chamber 32',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 32 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (32 % 3), targetX: 6, targetY: 2 + (32 % 3) },
            { id: 'b2', x: 4, y: 3 + (32 % 2), targetX: 6, targetY: 3 + (32 % 2) },
            { id: 'b3', x: 3 + (32 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (32 % 3) },
            { x: 6, y: 3 + (32 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_33',
        title: 'Temporal Chamber 33',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 33 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (33 % 3), targetX: 6, targetY: 2 + (33 % 3) },
            { id: 'b2', x: 4, y: 3 + (33 % 2), targetX: 6, targetY: 3 + (33 % 2) },
            { id: 'b3', x: 3 + (33 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (33 % 3) },
            { x: 6, y: 3 + (33 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_34',
        title: 'Temporal Chamber 34',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 34 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (34 % 3), targetX: 6, targetY: 2 + (34 % 3) },
            { id: 'b2', x: 4, y: 3 + (34 % 2), targetX: 6, targetY: 3 + (34 % 2) },
            { id: 'b3', x: 3 + (34 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (34 % 3) },
            { x: 6, y: 3 + (34 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_35',
        title: 'Temporal Chamber 35',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 35 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (35 % 3), targetX: 6, targetY: 2 + (35 % 3) },
            { id: 'b2', x: 4, y: 3 + (35 % 2), targetX: 6, targetY: 3 + (35 % 2) },
            { id: 'b3', x: 3 + (35 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (35 % 3) },
            { x: 6, y: 3 + (35 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_36',
        title: 'Temporal Chamber 36',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 36 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (36 % 3), targetX: 6, targetY: 2 + (36 % 3) },
            { id: 'b2', x: 4, y: 3 + (36 % 2), targetX: 6, targetY: 3 + (36 % 2) },
            { id: 'b3', x: 3 + (36 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (36 % 3) },
            { x: 6, y: 3 + (36 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_37',
        title: 'Temporal Chamber 37',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 37 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (37 % 3), targetX: 6, targetY: 2 + (37 % 3) },
            { id: 'b2', x: 4, y: 3 + (37 % 2), targetX: 6, targetY: 3 + (37 % 2) },
            { id: 'b3', x: 3 + (37 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (37 % 3) },
            { x: 6, y: 3 + (37 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_38',
        title: 'Temporal Chamber 38',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 38 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (38 % 3), targetX: 6, targetY: 2 + (38 % 3) },
            { id: 'b2', x: 4, y: 3 + (38 % 2), targetX: 6, targetY: 3 + (38 % 2) },
            { id: 'b3', x: 3 + (38 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (38 % 3) },
            { x: 6, y: 3 + (38 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_39',
        title: 'Temporal Chamber 39',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 39 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (39 % 3), targetX: 6, targetY: 2 + (39 % 3) },
            { id: 'b2', x: 4, y: 3 + (39 % 2), targetX: 6, targetY: 3 + (39 % 2) },
            { id: 'b3', x: 3 + (39 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (39 % 3) },
            { x: 6, y: 3 + (39 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
    {
        id: 'puzzle_level_40',
        title: 'Temporal Chamber 40',
        gridWidth: 10,
        gridHeight: 10,
        parMoves: 15 + 40 * 2,
        playerStart: { x: 2, y: 2 },
        blocks: [
            { id: 'b1', x: 3, y: 2 + (40 % 3), targetX: 6, targetY: 2 + (40 % 3) },
            { id: 'b2', x: 4, y: 3 + (40 % 2), targetX: 6, targetY: 3 + (40 % 2) },
            { id: 'b3', x: 3 + (40 % 3), y: 5, targetX: 7, targetY: 5 }
        ],
        targets: [
            { x: 6, y: 2 + (40 % 3) },
            { x: 6, y: 3 + (40 % 2) },
            { x: 7, y: 5 }
        ],
        walls: [
            { x: 0, y: 0, w: 10, h: 1 },
            { x: 0, y: 9, w: 10, h: 1 },
            { x: 0, y: 0, w: 1, h: 10 },
            { x: 9, y: 0, w: 1, h: 10 }
        ]
    },
];
