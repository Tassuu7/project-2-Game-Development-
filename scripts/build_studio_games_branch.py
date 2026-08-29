# -*- coding: utf-8 -*-
import sys
import os
sys.path.insert(0, '.')
from scripts.code_gen_lib import write_file

def build_studio_games():
    # 1. src/studio/NodeGraphEditor.js
    write_file("src/studio/NodeGraphEditor.js", """/**
 * NovaForge Visual Node Graph Canvas & Dataflow Engine
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class GraphNode {
    constructor(id, title, x = 100, y = 100) {
        this.id = id;
        this.title = title;
        this.x = x;
        this.y = y;
        this.width = 160;
        this.height = 100;
        this.inputs = [];
        this.outputs = [];
    }

    addInput(name, type = 'number') {
        this.inputs.push({ name, type, connectedTo: null });
        return this;
    }

    addOutput(name, type = 'number') {
        this.outputs.push({ name, type, connections: [] });
        return this;
    }
}

export class NodeGraphEditor {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas ? canvas.getContext('2d') : null;
        this.nodes = new Map();
        this.selectedNode = null;
        this.pan = { x: 0, y: 0 };
        this.zoom = 1.0;
    }

    addNode(node) {
        this.nodes.set(node.id, node);
        return node;
    }

    connect(fromNodeId, outputIdx, toNodeId, inputIdx) {
        const fromNode = this.nodes.get(fromNodeId);
        const toNode = this.nodes.get(toNodeId);
        if (fromNode && toNode && fromNode.outputs[outputIdx] && toNode.inputs[inputIdx]) {
            fromNode.outputs[outputIdx].connections.push({ nodeId: toNodeId, inputIdx });
            toNode.inputs[inputIdx].connectedTo = { nodeId: fromNodeId, outputIdx };
        }
    }

    render(ctx) {
        ctx.fillStyle = '#11131f';
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw connections
        ctx.strokeStyle = '#00e5ff';
        ctx.lineWidth = 2;
        for (const node of this.nodes.values()) {
            for (let i = 0; i < node.outputs.length; i++) {
                const outPin = node.outputs[i];
                for (const conn of outPin.connections) {
                    const target = this.nodes.get(conn.nodeId);
                    if (target) {
                        const startX = node.x + node.width;
                        const startY = node.y + 30 + i * 20;
                        const endX = target.x;
                        const endY = target.y + 30 + conn.inputIdx * 20;

                        ctx.beginPath();
                        ctx.moveTo(startX, startY);
                        ctx.bezierCurveTo(startX + 50, startY, endX - 50, endY, endX, endY);
                        ctx.stroke();
                    }
                }
            }
        }

        // Draw nodes
        for (const node of this.nodes.values()) {
            ctx.fillStyle = '#1e2238';
            ctx.strokeStyle = '#39ff14';
            ctx.lineWidth = 1;
            ctx.fillRect(node.x, node.y, node.width, node.height);
            ctx.strokeRect(node.x, node.y, node.width, node.height);

            // Title bar
            ctx.fillStyle = '#2d325a';
            ctx.fillRect(node.x, node.y, node.width, 24);
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 12px sans-serif';
            ctx.fillText(node.title, node.x + 8, node.y + 16);
        }
    }
}
""")

    # 2. src/studio/AutoTileWangEngine.js
    write_file("src/studio/AutoTileWangEngine.js", """/**
 * NovaForge 2-Corner & 4-Edge Wang Tile Auto-Tiling Engine (Blob Map Resolution)
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */

export class AutoTileWangEngine {
    constructor(tileWidth = 32, tileHeight = 32) {
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        // 16-Tile Bitmask lookup table (North=1, East=2, South=4, West=8)
        this.bitmaskLookup = new Int32Array([
            0,  // 0000: Isolated
            1,  // 0001: North only
            2,  // 0010: East only
            3,  // 0011: North-East corner
            4,  // 0100: South only
            5,  // 0101: Vertical corridor
            6,  // 0110: South-East corner
            7,  // 0111: T-Junction East
            8,  // 1000: West only
            9,  // 1001: North-West corner
            10, // 1010: Horizontal corridor
            11, // 1011: T-Junction North
            12, // 1100: South-West corner
            13, // 1101: T-Junction West
            14, // 1110: T-Junction South
            15  // 1111: Center 4-way solid
        ]);
    }

    calculateBitmask(grid, width, height, x, y, solidValue = 1) {
        if (grid[y * width + x] !== solidValue) return -1;

        let mask = 0;
        if (y > 0 && grid[(y - 1) * width + x] === solidValue) mask |= 1;          // North
        if (x < width - 1 && grid[y * width + (x + 1)] === solidValue) mask |= 2;   // East
        if (y < height - 1 && grid[(y + 1) * width + x] === solidValue) mask |= 4; // South
        if (x > 0 && grid[y * width + (x - 1)] === solidValue) mask |= 8;          // West

        return this.bitmaskLookup[mask];
    }
}
""")

    # 3. src/studio/LevelScriptVM.js
    write_file("src/studio/LevelScriptVM.js", """/**
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
""")

build_studio_games()
