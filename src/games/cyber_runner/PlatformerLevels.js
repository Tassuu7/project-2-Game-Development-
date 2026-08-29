/**
 * NovaForge Cyber Runner 2099 Level Layouts & Speedrun Records
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export const PLATFORMER_LEVELS = [
    {
        levelId: 'cyber_level_01',
        title: 'Neo-Tokyo Sector 01',
        timeLimit: 65,
        goldMedalTime: 27,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 190, y: 520, w: 180, h: 20, type: 'moving', speed: 60 },
            { x: 500, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 860, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_02',
        title: 'Neo-Tokyo Sector 02',
        timeLimit: 70,
        goldMedalTime: 29,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 230, y: 520, w: 180, h: 20, type: 'moving', speed: 80 },
            { x: 550, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 920, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_03',
        title: 'Neo-Tokyo Sector 03',
        timeLimit: 75,
        goldMedalTime: 31,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 270, y: 520, w: 180, h: 20, type: 'moving', speed: 100 },
            { x: 600, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 800, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_04',
        title: 'Neo-Tokyo Sector 04',
        timeLimit: 80,
        goldMedalTime: 33,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 310, y: 520, w: 180, h: 20, type: 'moving', speed: 40 },
            { x: 450, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 860, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_05',
        title: 'Neo-Tokyo Sector 05',
        timeLimit: 85,
        goldMedalTime: 35,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 150, y: 520, w: 180, h: 20, type: 'moving', speed: 60 },
            { x: 500, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 920, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_06',
        title: 'Neo-Tokyo Sector 06',
        timeLimit: 90,
        goldMedalTime: 37,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 190, y: 520, w: 180, h: 20, type: 'moving', speed: 80 },
            { x: 550, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 800, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_07',
        title: 'Neo-Tokyo Sector 07',
        timeLimit: 95,
        goldMedalTime: 39,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 230, y: 520, w: 180, h: 20, type: 'moving', speed: 100 },
            { x: 600, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 860, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_08',
        title: 'Neo-Tokyo Sector 08',
        timeLimit: 100,
        goldMedalTime: 41,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 270, y: 520, w: 180, h: 20, type: 'moving', speed: 40 },
            { x: 450, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 920, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_09',
        title: 'Neo-Tokyo Sector 09',
        timeLimit: 105,
        goldMedalTime: 43,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 310, y: 520, w: 180, h: 20, type: 'moving', speed: 60 },
            { x: 500, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 800, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_10',
        title: 'Neo-Tokyo Sector 10',
        timeLimit: 110,
        goldMedalTime: 45,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 150, y: 520, w: 180, h: 20, type: 'moving', speed: 80 },
            { x: 550, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 860, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_11',
        title: 'Neo-Tokyo Sector 11',
        timeLimit: 115,
        goldMedalTime: 47,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 190, y: 520, w: 180, h: 20, type: 'moving', speed: 100 },
            { x: 600, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 920, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_12',
        title: 'Neo-Tokyo Sector 12',
        timeLimit: 120,
        goldMedalTime: 49,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 230, y: 520, w: 180, h: 20, type: 'moving', speed: 40 },
            { x: 450, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 800, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_13',
        title: 'Neo-Tokyo Sector 13',
        timeLimit: 125,
        goldMedalTime: 51,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 270, y: 520, w: 180, h: 20, type: 'moving', speed: 60 },
            { x: 500, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 860, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_14',
        title: 'Neo-Tokyo Sector 14',
        timeLimit: 130,
        goldMedalTime: 53,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 310, y: 520, w: 180, h: 20, type: 'moving', speed: 80 },
            { x: 550, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 920, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_15',
        title: 'Neo-Tokyo Sector 15',
        timeLimit: 135,
        goldMedalTime: 55,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 150, y: 520, w: 180, h: 20, type: 'moving', speed: 100 },
            { x: 600, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 800, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_16',
        title: 'Neo-Tokyo Sector 16',
        timeLimit: 140,
        goldMedalTime: 57,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 190, y: 520, w: 180, h: 20, type: 'moving', speed: 40 },
            { x: 450, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 860, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_17',
        title: 'Neo-Tokyo Sector 17',
        timeLimit: 145,
        goldMedalTime: 59,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 230, y: 520, w: 180, h: 20, type: 'moving', speed: 60 },
            { x: 500, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 920, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_18',
        title: 'Neo-Tokyo Sector 18',
        timeLimit: 150,
        goldMedalTime: 61,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 270, y: 520, w: 180, h: 20, type: 'moving', speed: 80 },
            { x: 550, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 800, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_19',
        title: 'Neo-Tokyo Sector 19',
        timeLimit: 155,
        goldMedalTime: 63,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 310, y: 520, w: 180, h: 20, type: 'moving', speed: 100 },
            { x: 600, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 860, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_20',
        title: 'Neo-Tokyo Sector 20',
        timeLimit: 160,
        goldMedalTime: 65,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 150, y: 520, w: 180, h: 20, type: 'moving', speed: 40 },
            { x: 450, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 920, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_21',
        title: 'Neo-Tokyo Sector 21',
        timeLimit: 165,
        goldMedalTime: 67,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 190, y: 520, w: 180, h: 20, type: 'moving', speed: 60 },
            { x: 500, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 800, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_22',
        title: 'Neo-Tokyo Sector 22',
        timeLimit: 170,
        goldMedalTime: 69,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 230, y: 520, w: 180, h: 20, type: 'moving', speed: 80 },
            { x: 550, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 860, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_23',
        title: 'Neo-Tokyo Sector 23',
        timeLimit: 175,
        goldMedalTime: 71,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 270, y: 520, w: 180, h: 20, type: 'moving', speed: 100 },
            { x: 600, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 920, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_24',
        title: 'Neo-Tokyo Sector 24',
        timeLimit: 180,
        goldMedalTime: 73,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 310, y: 520, w: 180, h: 20, type: 'moving', speed: 40 },
            { x: 450, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 800, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_25',
        title: 'Neo-Tokyo Sector 25',
        timeLimit: 185,
        goldMedalTime: 75,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 150, y: 520, w: 180, h: 20, type: 'moving', speed: 60 },
            { x: 500, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 860, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_26',
        title: 'Neo-Tokyo Sector 26',
        timeLimit: 190,
        goldMedalTime: 77,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 190, y: 520, w: 180, h: 20, type: 'moving', speed: 80 },
            { x: 550, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 920, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_27',
        title: 'Neo-Tokyo Sector 27',
        timeLimit: 195,
        goldMedalTime: 79,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 230, y: 520, w: 180, h: 20, type: 'moving', speed: 100 },
            { x: 600, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 800, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_28',
        title: 'Neo-Tokyo Sector 28',
        timeLimit: 200,
        goldMedalTime: 81,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 270, y: 520, w: 180, h: 20, type: 'moving', speed: 40 },
            { x: 450, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 860, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_29',
        title: 'Neo-Tokyo Sector 29',
        timeLimit: 205,
        goldMedalTime: 83,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 310, y: 520, w: 180, h: 20, type: 'moving', speed: 60 },
            { x: 500, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 920, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_30',
        title: 'Neo-Tokyo Sector 30',
        timeLimit: 210,
        goldMedalTime: 85,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 150, y: 520, w: 180, h: 20, type: 'moving', speed: 80 },
            { x: 550, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 800, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_31',
        title: 'Neo-Tokyo Sector 31',
        timeLimit: 215,
        goldMedalTime: 87,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 190, y: 520, w: 180, h: 20, type: 'moving', speed: 100 },
            { x: 600, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 860, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_32',
        title: 'Neo-Tokyo Sector 32',
        timeLimit: 220,
        goldMedalTime: 89,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 230, y: 520, w: 180, h: 20, type: 'moving', speed: 40 },
            { x: 450, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 920, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_33',
        title: 'Neo-Tokyo Sector 33',
        timeLimit: 225,
        goldMedalTime: 91,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 270, y: 520, w: 180, h: 20, type: 'moving', speed: 60 },
            { x: 500, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 800, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_34',
        title: 'Neo-Tokyo Sector 34',
        timeLimit: 230,
        goldMedalTime: 93,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 310, y: 520, w: 180, h: 20, type: 'moving', speed: 80 },
            { x: 550, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 860, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_35',
        title: 'Neo-Tokyo Sector 35',
        timeLimit: 235,
        goldMedalTime: 95,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 150, y: 520, w: 180, h: 20, type: 'moving', speed: 100 },
            { x: 600, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 920, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_36',
        title: 'Neo-Tokyo Sector 36',
        timeLimit: 240,
        goldMedalTime: 97,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 190, y: 520, w: 180, h: 20, type: 'moving', speed: 40 },
            { x: 450, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 800, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_37',
        title: 'Neo-Tokyo Sector 37',
        timeLimit: 245,
        goldMedalTime: 99,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 230, y: 520, w: 180, h: 20, type: 'moving', speed: 60 },
            { x: 500, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 860, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_38',
        title: 'Neo-Tokyo Sector 38',
        timeLimit: 250,
        goldMedalTime: 101,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 270, y: 520, w: 180, h: 20, type: 'moving', speed: 80 },
            { x: 550, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 920, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_39',
        title: 'Neo-Tokyo Sector 39',
        timeLimit: 255,
        goldMedalTime: 103,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 310, y: 520, w: 180, h: 20, type: 'moving', speed: 100 },
            { x: 600, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 800, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
    {
        levelId: 'cyber_level_40',
        title: 'Neo-Tokyo Sector 40',
        timeLimit: 260,
        goldMedalTime: 105,
        platforms: [
            { x: 0, y: 650, w: 1280, h: 70, type: 'solid' },
            { x: 150, y: 520, w: 180, h: 20, type: 'moving', speed: 40 },
            { x: 450, y: 400, w: 200, h: 20, type: 'crumbly', breakTime: 1.2 },
            { x: 860, y: 280, w: 160, h: 20, type: 'jump_pad', boost: 650 },
            { x: 1100, y: 180, w: 140, h: 20, type: 'goal' }
        ],
        hazards: [
            { x: 300, y: 630, w: 80, h: 20, type: 'laser_beam', cycle: 2.0 },
            { x: 700, y: 380, radius: 18, type: 'sawblade', rotSpeed: 4.0 }
        ],
        energyCores: [
            { x: 200, y: 480, points: 500 },
            { x: 550, y: 350, points: 500 },
            { x: 900, y: 230, points: 500 }
        ]
    },
];
