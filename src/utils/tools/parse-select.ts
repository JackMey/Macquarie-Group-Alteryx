import { SelectTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseSelect = (tool: any, xml: string): SelectTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];
  const selectFields = configuration?.SelectFields?.[0].SelectField
    .map((field: any) => field.$);

  return {
    type: AlteryxToolType.Select,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        OrderChanged: configuration?.OrderChanged?.[0]?.$.value,
        CommaDecimal: configuration?.CommaDecimal?.[0]?.$.value,
        SelectFields: selectFields,
      },
      Annotation: parseAnnotation(tool),
    }
  };
}