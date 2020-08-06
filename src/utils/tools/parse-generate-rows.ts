import { GenerateRowsTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseGenerateRows = (tool: any, xml: string): GenerateRowsTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];

  return {
    type: AlteryxToolType.GenerateRows,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        UpdateField: configuration.UpdateField?.[0]?.$?.value,
        UpdateFieldName: configuration.UpdateField_Name?.[0],
        CreateFieldName: configuration.CreateField_Name?.[0],
        CreateFieldType: configuration.CreateField_Type?.[0],
        CreateFieldSize: configuration.CreateField_Size?.[0],
        ExpressionInit: configuration.Expression_Init?.[0],
        ExpressionCond: configuration.Expression_Cond?.[0],
        ExpressionLoop: configuration.Expression_Loop?.[0],
      },
      Annotation: parseAnnotation(tool),
    }
  };
}
