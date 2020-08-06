import { CrossTabTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseCrossTab = (tool: any, xml: string): CrossTabTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];
  const metaInfo = tool?.Properties?.[0]?.MetaInfo?.[0];

  return {
    type: AlteryxToolType.CrossTab,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        GroupFields: configuration.GroupFields?.[0]?.Field?.map((field: any) => field.$.field),
        HeaderField: configuration.HeaderField?.[0]?.$?.field,
        DataField: configuration.DataField?.[0]?.$?.field,
        Methods: configuration.Methods?.[0].Method?.map((method: any) => method.$.method),
        Separator: configuration.Methods?.[0]?.Separator,
        FieldSize: configuration.Methods?.[0]?.FieldSize?.[0]?.$?.value,
      },
      MetaInfo: {
        RecordInfo: metaInfo.RecordInfo?.[0].Field?.map((field: any) => field.$),
        SortInfo: metaInfo.SortInfo?.[0].Field?.map((field: any) => field.$),
      },
      Annotation: parseAnnotation(tool),
    }
  };
}
