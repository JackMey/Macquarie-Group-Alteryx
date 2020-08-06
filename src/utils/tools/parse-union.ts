import { UnionTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseUnion = (tool: any, xml: string): UnionTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];
  const mode = configuration.Mode?.[0];
  const outputMode = configuration[mode + '_OutputMode']?.[0];

  return {
    type: AlteryxToolType.Union,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        Mode: mode,
        OutputMode: outputMode,
        OutputOrder: configuration.OutputOrder?.[0].Connection,
      },
      Annotation: parseAnnotation(tool),
    }
  };
}
