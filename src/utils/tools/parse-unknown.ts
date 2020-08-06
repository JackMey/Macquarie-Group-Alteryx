import { AlteryxToolType, UnknownTool } from '~/models';
import { extractToolXml } from '../extract-tool-xml';

export const parseUnknown = (tool: any, xml: string): UnknownTool => {
  return {
    type: AlteryxToolType.Unknown,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: JSON.stringify(tool.Properties[0]),
  };
}
