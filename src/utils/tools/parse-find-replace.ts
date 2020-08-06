import { FindReplaceTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseFindReplace = (tool: any, xml: string): FindReplaceTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];

  return {
    type: AlteryxToolType.FindReplace,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        FieldFind: configuration.FieldFind?.[0],
        FieldSearch: configuration.FieldSearch?.[0],
        ReplaceFoundField: configuration.ReplaceFoundField?.[0],
        FindMode: configuration.FindMode?.[0],
        NoCase: configuration.NoCase?.[0]?.$?.value,
        MatchWholeWord: configuration.MatchWholeWord?.[0]?.$?.value,
        ReplaceMode: configuration.ReplaceMode?.[0],
        ReplaceMultipleFound: configuration.ReplaceMultipleFound?.[0]?.$?.value,
        ReplaceAppendFields: configuration.ReplaceAppendFields?.[0].Field?.map((field: any) => field.$.field),
      },
      Annotation: parseAnnotation(tool),
    }
  };
}
