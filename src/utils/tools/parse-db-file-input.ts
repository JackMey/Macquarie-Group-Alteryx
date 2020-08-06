import { DbFileInputTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseDbFileInput = (tool: any, xml: string): DbFileInputTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];
  const formatSpecificOptions = configuration?.FormatSpecificOptions?.[0];
  const metaInfo = tool?.Properties?.[0]?.MetaInfo?.[0]?.RecordInfo?.[0]?.Field;
  const mappedOptions = Object.keys(formatSpecificOptions)
    .reduce((options, key) => ({ ...options, [key]: formatSpecificOptions[key]?.[0] }), {});

  return {
    type: AlteryxToolType.DbFileInput,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        File: configuration?.File?.[0]?._,
        FormatSpecificOptions: mappedOptions,
      },
      MetaInfo: metaInfo?.map((info: any) => info?.$),
      Annotation: parseAnnotation(tool),
    }
  };
}
