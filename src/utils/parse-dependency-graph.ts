import * as d3 from 'd3';
import { Tool, AlteryxConnection } from '~/models';

export const parseDependencyGraph = (tools: Array<Tool>, connections: Array<AlteryxConnection>, progress: string) => {
  if (!tools || !connections) {
    return { nodes: [], links: [] };
  }
  
  const currentProgressIndex = tools.findIndex((tool) => tool.ToolID === progress);
  const previousTools = tools.slice(0, currentProgressIndex + 1).map((tool) => tool.ToolID);

  const nodes = tools.map((tool) => ({
    id: tool.ToolID,
    label: tool.type as string,
    class: previousTools.includes(tool.ToolID)
      ? tool.ToolID === progress ? 'dependency-graph__current-tool' : 'dependency-graph__previous-tool'
      : 'dependency-graph__next-tool',
  }));
  const links = connections.map((connection) => ({
    source: connection.origin.ToolID,
    target: connection.destination.ToolID,
    class: previousTools.includes(connection.destination.ToolID) ? 'dependency-graph__previous-connection' : 'dependency-graph__next-connection',
    config: {
      curve: d3.curveBasis,
    }
  }));

  return { nodes, links };
}
