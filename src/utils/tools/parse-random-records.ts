import { RandomRecordsTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseRandomRecords = (tool: any, xml: string): RandomRecordsTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];
  const values = configuration?.Value.map((value: any) => ({ name: value.$.name, value: value._ }));

  return {
    type: AlteryxToolType.RandomRecords,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        Values: values,
      },
      Annotation: parseAnnotation(tool),
    }
  };
}
