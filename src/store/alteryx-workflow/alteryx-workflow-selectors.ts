import { createSelector } from 'reselect';
import { AppState } from '../root-store';
import { AlterxWorkflowState } from './alteryx-workflow-reducers';
import { AlteryxWorkflow, AlteryxConnection, Tool } from '~/models';
import { parseTool, topologicalSort, parseConnection, flattenTools, parseDependencyGraph } from '~/utils';

const alteryxXmlStateSelector = (state: AppState): AlterxWorkflowState => state.alteryxWorkflow;

export const getAllAlteryxWorkflows = createSelector(
  alteryxXmlStateSelector,
  (state: AlterxWorkflowState): Array<AlteryxWorkflow> => state.alteryxWorkflows,
);

export const getSelectedAlteryxWorkflowId = createSelector(
  alteryxXmlStateSelector,
  (state: AlterxWorkflowState): string => state.selectedWorkflow,
);

export const getScrollProgress = createSelector(
  alteryxXmlStateSelector,
  (state: AlterxWorkflowState): string => state.scrollProgress,
);

export const getSelectedAlteryxWorkflow = createSelector(
  getAllAlteryxWorkflows,
  getSelectedAlteryxWorkflowId,
  (alteryxWorkflows: Array<AlteryxWorkflow>, selectedWorkflowId: string): AlteryxWorkflow =>
    alteryxWorkflows.find((workflows) => workflows.id === selectedWorkflowId)!,
);

export const getWorflowConnections = createSelector(
  getSelectedAlteryxWorkflow,
  (workflow: AlteryxWorkflow): Array<AlteryxConnection> =>
    workflow?.content.AlteryxDocument.Connections[0].Connection
      .map((connection: any) => parseConnection(connection))
  );

export const getSortedWorflowConnections = createSelector(
  getWorflowConnections,
  (connections: Array<AlteryxConnection>): Array<string> => connections && topologicalSort(connections));

export const getFlatSelectedWorkflowNodes = createSelector(
  getSelectedAlteryxWorkflow,
  (workflow: AlteryxWorkflow): Array<Tool> => flattenTools(workflow?.content.AlteryxDocument.Nodes[0].Node)
);

export const getWorflowNodes = createSelector(
  getFlatSelectedWorkflowNodes,
  getSelectedAlteryxWorkflow,
  (nodes: Array<any>, workflow: AlteryxWorkflow): Array<Tool> =>
    nodes.map((tool: any) => parseTool(tool, workflow.xml)) ?? []
);

export const getSortedWorkflowNodes = createSelector(
  getWorflowNodes,
  getSortedWorflowConnections,
  (tools: Array<Tool>, ordering: Array<string>): Array<Tool> =>
    tools && ordering && ordering.map((id) => tools.find((tool) => tool.ToolID === id)!)
);

export const getDependencyGraph = createSelector(
  getSortedWorkflowNodes,
  getWorflowConnections,
  getScrollProgress,
  (tools: Array<Tool>, connections: Array<AlteryxConnection>, progress: string) => parseDependencyGraph(tools, connections, progress)
);
