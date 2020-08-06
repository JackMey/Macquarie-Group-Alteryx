import { DbFileOutputTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseDbFileOutput = (tool: any, xml: string): DbFileOutputTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];
  const formatSpecificOptions = configuration?.FormatSpecificOptions?.[0];
  const mappedOptions = Object.keys(formatSpecificOptions)
    .reduce((options, key) => ({ ...options, [key]: formatSpecificOptions[key]?.[0] }), {});

  return {
    type: AlteryxToolType.DbFileOutput,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        File: configuration?.File?.[0]?._,
        FormatSpecificOptions: mappedOptions,
        MultiFile: {
          value: configuration?.MultiFile?.[0]?.$?.value,
          Type: configuration?.MultiFileType?.[0],
          Field: configuration?.MultiFileField?.[0],
        },
      },
      Annotation: parseAnnotation(tool),
    }
  };
}
