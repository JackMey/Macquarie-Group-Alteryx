import { SortTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseSort = (tool: any, xml: string): SortTool => {
  return {
    type: AlteryxToolType.Sort,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: tool.Properties?.[0].Configuration?.[0].SortInfo?.[0]?.Field?.map((field: any) => field?.$),
      Annotation: parseAnnotation(tool),
    }
  };
}
