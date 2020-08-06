import { JoinTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseJoin = (tool: any, xml: string): JoinTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];
  const selectFields = configuration?.SelectConfiguration?.[0]?.Configuration?.[0]?.SelectFields?.[0].SelectField
    .map((field: any) => field.$);
  const joinInfo = configuration?.JoinInfo;

  return {
    type: AlteryxToolType.Join,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      JoinInfo: {
        Left: joinInfo.find((info: any) => info.$.connection === 'Left').Field?.[0].$.field,
        Right: joinInfo.find((info: any) => info.$.connection === 'Right').Field?.[0].$.field,
      },
      Configuration: {
        OrderChanged: configuration?.SelectConfiguration?.[0]?.Configuration?.[0]?.OrderChanged?.[0]?.$.value,
        CommaDecimal: configuration?.SelectConfiguration?.[0]?.Configuration?.[0]?.CommaDecimal?.[0]?.$.value,
        SelectFields: selectFields,
      },
      Annotation: parseAnnotation(tool),
    }
  };
}