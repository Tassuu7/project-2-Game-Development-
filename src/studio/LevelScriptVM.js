/**
 * NovaForge Lightweight Level Scripting Virtual Machine & Event Dispatcher
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class LevelScriptVM {
    constructor(engine) {
        this.engine = engine;
        this.variables = new Map();
        this.instructions = [];
        this.programCounter = 0;
        this.halted = false;
    }

    loadBytecode(instructions) {
        this.instructions = instructions;
        this.programCounter = 0;
        this.halted = false;
    }

    step() {
        if (this.halted || this.programCounter >= this.instructions.length) {
            this.halted = true;
            return;
        }

        const inst = this.instructions[this.programCounter++];
        switch (inst.op) {
            case 'SET_VAR':
                this.variables.set(inst.arg1, inst.arg2);
                break;
            case 'SPAWN_ENEMY':
                if (this.engine && this.engine.activeScene) {
                    console.log(`[LevelVM] Spawning ${inst.arg1} at (${inst.arg2}, ${inst.arg3})`);
                }
                break;
            case 'PLAY_SOUND':
                if (this.engine && this.engine.soundBank) {
                    this.engine.soundBank.play(inst.arg1);
                }
                break;
            case 'WAIT':
                // Handled in timer loop
                break;
            case 'HALT':
                this.halted = true;
                break;
        }
    }
}
