import { AppendFieldsTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseAppendFields = (tool: any, xml: string): AppendFieldsTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];
  const selectedConfiguration = configuration.SelectConfiguration?.[0]?.Configuration?.[0];

  return {
    type: AlteryxToolType.AppendFields,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        CartesianMode: configuration.CartesianMode?.[0],
        OrderChanged: selectedConfiguration.OrderChanged?.[0]?.$?.value,
        CommaDecimal: selectedConfiguration.CommaDecimal?.[0]?.$?.value,
        SelectFields: selectedConfiguration.SelectFields?.[0].SelectField?.map((field: any) => field.$),
      },
      Annotation: parseAnnotation(tool),
    }
  };
}
