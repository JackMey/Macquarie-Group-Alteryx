const toolRegex = (id: string) => new RegExp(`(\\s*<Node ToolID="${id}">[\\s\\S]*?<\/Node>)`);

export const extractToolXml = (toolId: string, xml: string): string => {
  const regex = toolRegex(toolId);

  const result = regex.exec(xml);

  if (result) {
    return result[0];
  }

  return '';
};
