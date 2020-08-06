import { RunningTotalTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseRunningTotal = (tool: any, xml: string): RunningTotalTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];
  const groupByFields = configuration.GroupByFields?.[0]?.Field?.map((field) => field.$.field);
  const runningTotalFields = configuration.RunningTotalFields?.[0]?.Field?.map((field) => field.$.field);

  return {
    type: AlteryxToolType.RunningTotal,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        GroupByFields: groupByFields,
        RunningTotalFields: runningTotalFields,
      },
      Annotation: parseAnnotation(tool),
    }
  };
}
