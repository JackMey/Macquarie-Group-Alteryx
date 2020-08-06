export const flattenTools = (nodes: Array<any>): Array<any> => {
  if (!nodes) {
    return [];
  }

  const flattenedNodes: Array<any> = [];

  for (const node of nodes) {
    const { ChildNodes, ...nodeWithoutChildren } = node;

    flattenedNodes.push(nodeWithoutChildren);

    if (ChildNodes) {
      const childNodes = ChildNodes[0].Node;

      const flatChildNodes = flattenTools(childNodes);

      flatChildNodes.forEach((child: any) => flattenedNodes.push(child));
    }
  }

  return flattenedNodes;
}