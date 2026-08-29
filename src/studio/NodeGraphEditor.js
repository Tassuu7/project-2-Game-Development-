/**
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
