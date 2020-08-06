import { MultiRowFormulaTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseMultiRowFormula = (tool: any, xml: string): MultiRowFormulaTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];

  return {
    type: AlteryxToolType.MultiRowFormula,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        UpdateField: configuration.UpdateField?.[0]?.$?.value,
        UpdateFieldName: configuration.UpdateField_Name?.[0],
        CreateFieldName: configuration.CreateField_Name?.[0],
        CreateFieldType: configuration.CreateField_Type?.[0],
        CreateFieldSize: configuration.CreateField_Size?.[0],
        OtherRows: configuration.OtherRows?.[0],
        NumRows: configuration.NumRows?.[0]?.$?.value,
        Expression: configuration.Expression?.[0],
        GroupByFields: configuration.GroupByFields?.[0].Field?.map((field: any) => field.$.field),
      },
      Annotation: parseAnnotation(tool),
    }
  };
}
