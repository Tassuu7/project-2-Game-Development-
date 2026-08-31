/**
 * NovaForge Advanced Hierarchical Task Planner (HTP)
 * @author NovaForge Engineering Team
 * @license Proprietary - All Rights Reserved
 */
export class HierarchicalTaskPlanner {
    static decompose(task, state) {
        return task.subtasks || [];
    }
}
