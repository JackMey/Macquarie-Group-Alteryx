import { UniqueTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseUnique = (tool: any, xml: string): UniqueTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];
  const uniqueFields = configuration.UniqueFields?.[0]?.Field?.map((field) => field.$.field);

  return {
    type: AlteryxToolType.Unique,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        UniqueFields: uniqueFields,
      },
      Annotation: parseAnnotation(tool),
    }
  };
}
