import { SampleTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseSample = (tool: any, xml: string): SampleTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];

  return {
    type: AlteryxToolType.Sample,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        Mode: configuration.Mode?.[0],
        N: configuration.N?.[0],
        OrderChanged: configuration.GroupFields?.[0].$?.orderChanged,
        GroupFields: configuration.GroupFields?.[0].Field?.map((field: any) => field.$.name),
      },
      Annotation: parseAnnotation(tool),
    }
  };
}
