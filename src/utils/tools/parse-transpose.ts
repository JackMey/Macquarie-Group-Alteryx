import { TransposeTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseTranspose = (tool: any, xml: string): TransposeTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];
  const keyFields = configuration.KeyFields?.[0]?.Field?.map((field) => field.$.field);
  const dataFields = configuration.DataFields?.[0]?.Field?.map((field) => ({ field: field.$.field, selected: field.$.selected }));

  return {
    type: AlteryxToolType.Transpose,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        KeyFields: keyFields,
        DataFields: dataFields,
      },
      Annotation: parseAnnotation(tool),
    }
  };
}
