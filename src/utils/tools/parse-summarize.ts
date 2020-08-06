import { SummarizeTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseSummarize = (tool: any, xml: string): SummarizeTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];

  return {
    type: AlteryxToolType.Summarize,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        SummarizeFields: configuration?.SummarizeFields?.[0].SummarizeField.map((field: any) => field.$),
      },
      Annotation: parseAnnotation(tool),
    }
  };
}
