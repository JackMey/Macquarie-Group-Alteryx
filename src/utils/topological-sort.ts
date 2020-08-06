import { AlteryxConnection } from '~/models';

function parseConnections(connections: Array<AlteryxConnection>): Record<string, Array<string>> {
  const graph = {};
  
  connections.forEach((connection) => {
    const origin = connection.origin.ToolID;
    const destination = connection.destination.ToolID;
  
    if (!graph[origin]) {
      graph[origin] = [];
    }
    if (!graph[destination]) {
      graph[destination] = [];
    }

    graph[origin].push(destination);
  });

  return graph;
}

function dfs(node: string, graph: Record<string, Array<string>>, marked: Array<boolean>, stack: Array<string>): void {
  if (marked[node]) {
    return;
  };

  stack.unshift(node);

  marked[node] = true;

  graph[node]
    .filter((neighbor) => !marked[neighbor])
    .forEach((neighbor) => dfs(neighbor, graph, marked, stack));
}

export function topologicalSort(connections: Array<AlteryxConnection>): Array<string> {
  const graph = parseConnections(connections);
  const toolIds = Object.keys(graph);
  const marked = toolIds.map(() => false);
  const ordering: Array<string> = [];

  for (const id of toolIds) {
    if (marked[id]) {
      continue;
    }

    const stack: Array<string> = [];
    dfs(id, graph, marked, stack);

    for (const id of stack) {
      ordering.unshift(id);
    };
  }

  return ordering;
}