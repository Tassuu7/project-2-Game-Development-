/**
 * NovaForge Hierarchical Task Network (HTN) Planning Engine & Domain Methods
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class HTNTask {
    constructor(name, isPrimitive = false) {
        this.name = name;
        this.isPrimitive = isPrimitive;
        this.conditions = [];
        this.effects = [];
        this.subtasks = [];
    }
}

export class HTNDomain {
    static createPlanTaskDomain_01() {
        const domain = {
            domainId: 'domain_htn_01',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_1',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_02() {
        const domain = {
            domainId: 'domain_htn_02',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_2',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_03() {
        const domain = {
            domainId: 'domain_htn_03',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_3',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_04() {
        const domain = {
            domainId: 'domain_htn_04',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_4',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_05() {
        const domain = {
            domainId: 'domain_htn_05',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_5',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_06() {
        const domain = {
            domainId: 'domain_htn_06',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_6',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_07() {
        const domain = {
            domainId: 'domain_htn_07',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_7',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_08() {
        const domain = {
            domainId: 'domain_htn_08',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_8',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_09() {
        const domain = {
            domainId: 'domain_htn_09',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_9',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_10() {
        const domain = {
            domainId: 'domain_htn_10',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_10',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_11() {
        const domain = {
            domainId: 'domain_htn_11',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_11',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_12() {
        const domain = {
            domainId: 'domain_htn_12',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_12',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_13() {
        const domain = {
            domainId: 'domain_htn_13',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_13',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_14() {
        const domain = {
            domainId: 'domain_htn_14',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_14',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_15() {
        const domain = {
            domainId: 'domain_htn_15',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_15',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_16() {
        const domain = {
            domainId: 'domain_htn_16',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_16',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_17() {
        const domain = {
            domainId: 'domain_htn_17',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_17',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_18() {
        const domain = {
            domainId: 'domain_htn_18',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_18',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_19() {
        const domain = {
            domainId: 'domain_htn_19',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_19',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_20() {
        const domain = {
            domainId: 'domain_htn_20',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_20',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_21() {
        const domain = {
            domainId: 'domain_htn_21',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_21',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_22() {
        const domain = {
            domainId: 'domain_htn_22',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_22',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_23() {
        const domain = {
            domainId: 'domain_htn_23',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_23',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_24() {
        const domain = {
            domainId: 'domain_htn_24',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_24',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_25() {
        const domain = {
            domainId: 'domain_htn_25',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_25',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_26() {
        const domain = {
            domainId: 'domain_htn_26',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_26',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_27() {
        const domain = {
            domainId: 'domain_htn_27',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_27',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_28() {
        const domain = {
            domainId: 'domain_htn_28',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_28',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_29() {
        const domain = {
            domainId: 'domain_htn_29',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_29',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_30() {
        const domain = {
            domainId: 'domain_htn_30',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_30',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_31() {
        const domain = {
            domainId: 'domain_htn_31',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_31',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_32() {
        const domain = {
            domainId: 'domain_htn_32',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_32',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_33() {
        const domain = {
            domainId: 'domain_htn_33',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_33',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_34() {
        const domain = {
            domainId: 'domain_htn_34',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_34',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_35() {
        const domain = {
            domainId: 'domain_htn_35',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_35',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_36() {
        const domain = {
            domainId: 'domain_htn_36',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_36',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_37() {
        const domain = {
            domainId: 'domain_htn_37',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_37',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_38() {
        const domain = {
            domainId: 'domain_htn_38',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_38',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_39() {
        const domain = {
            domainId: 'domain_htn_39',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_39',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_40() {
        const domain = {
            domainId: 'domain_htn_40',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_40',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_41() {
        const domain = {
            domainId: 'domain_htn_41',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_41',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_42() {
        const domain = {
            domainId: 'domain_htn_42',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_42',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_43() {
        const domain = {
            domainId: 'domain_htn_43',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_43',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_44() {
        const domain = {
            domainId: 'domain_htn_44',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_44',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_45() {
        const domain = {
            domainId: 'domain_htn_45',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_45',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_46() {
        const domain = {
            domainId: 'domain_htn_46',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_46',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_47() {
        const domain = {
            domainId: 'domain_htn_47',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_47',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_48() {
        const domain = {
            domainId: 'domain_htn_48',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_48',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_49() {
        const domain = {
            domainId: 'domain_htn_49',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_49',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
    static createPlanTaskDomain_50() {
        const domain = {
            domainId: 'domain_htn_50',
            compoundTasks: [
                {
                    taskName: 'ExecuteTacticalMission_50',
                    methods: [
                        {
                            methodName: 'DirectAssault',
                            precondition: (state) => state.ammo > 50 && state.health > 70,
                            subtasks: ['MoveToTarget', 'EngageCombat', 'SecureObjective']
                        },
                        {
                            methodName: 'StealthFlank',
                            precondition: (state) => state.cloaked === true,
                            subtasks: ['FlankPosition', 'SilentTakedown', 'RetrieveIntel']
                        }
                    ]
                }
            ],
            primitiveTasks: [
                { name: 'MoveToTarget', cost: 5.0, action: (agent) => agent.moveToTarget() },
                { name: 'EngageCombat', cost: 15.0, action: (agent) => agent.attack() },
                { name: 'SecureObjective', cost: 2.0, action: (agent) => agent.interact() }
            ]
        };
        return domain;
    }
}
