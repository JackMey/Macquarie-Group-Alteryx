import { DynamicInputTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseDynamicInput = (tool: any, xml: string): DynamicInputTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];
  const fileConfiguration = configuration.InputConfiguration?.[0].Configuration?.[0];
  const modifications = configuration.Modifications?.[0]?.Modify;
  const modificationsAttributes = modifications
    ?.map((modification) => modification?.$) ?? [];
  const modificationsProperties = modifications
    ?.map((modification) =>
      Object.entries(modification)
        .filter(([key]) => key !== '$')
        .map(([key, value]: [string, any]) => [key, value?.[0]?.$?.value || value?.[0]])
        .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {})
    ) ?? [];
  
  return {
    type: AlteryxToolType.DynamicInput,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        File: fileConfiguration.File?.[0]._,
        Mode: configuration.Mode?.[0],
        ReadList_Field: configuration.ReadList_Field?.[0], // eslint-disable-line
        ReadList_Type: configuration.ReadList_Type?.[0], // eslint-disable-line
      },
      FormatSpecificOptions: {
        CodePage: fileConfiguration.FormatSpecificOptions?.[0].CodePage?.[0],
        Delimeter: fileConfiguration.FormatSpecificOptions?.[0].Delimeter?.[0],
        IgnoreErrors: fileConfiguration.FormatSpecificOptions?.[0].IgnoreErrors?.[0],
        FieldLen: fileConfiguration.FormatSpecificOptions?.[0].FieldLen?.[0],
        AllowShareWrite: fileConfiguration.FormatSpecificOptions?.[0].AllowShareWrite?.[0],
        HeaderRow: fileConfiguration.FormatSpecificOptions?.[0].HeaderRow?.[0],
        IgnoreQuotes: fileConfiguration.FormatSpecificOptions?.[0].IgnoreQuotes?.[0],
        ImportLine: fileConfiguration.FormatSpecificOptions?.[0].ImportLine?.[0],
      },
      Modifications: modificationsAttributes.map((mod, i) => ({ ...mod, ...modificationsProperties[i] })),
      Annotation: parseAnnotation(tool),
    }
  };
}
