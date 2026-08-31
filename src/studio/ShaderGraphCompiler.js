/**
 * NovaForge Real-Time Canvas Shader Graph Node Compiler
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */
export class ShaderGraphCompiler {
    static compileNodeTree(nodes) {
        return nodes.map(n => n.title).join(' -> ');
    }
}
