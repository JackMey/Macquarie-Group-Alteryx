import { MultiFieldFormulaTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseMultiFieldFormula = (tool: any, xml: string): MultiFieldFormulaTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];

  return {
    type: AlteryxToolType.MultiFieldFormula,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        FieldType: configuration.FieldType?.[0],
        NewFieldAddOn: configuration.NewFieldAddOn?.[0],
        NewFieldAddOnPos: configuration.NewFieldAddOnPos?.[0],
        CopyOutput: configuration.CopyOutput?.[0]?.$?.value,
        Expression: configuration.Expression?.[0],
        ChangeFieldType: configuration.ChangeFieldType?.[0]?.$?.value,
        OutputFieldType: configuration.OutputFieldType?.[0]?.$,
        OrderChanged: configuration.Fields?.[0]?.$?.orderChanged,
        Fields: configuration.Fields?.[0]?.Field?.map((field) => ({ name: field?.$?.name, selected: field?.$?.selected || 'True' }))
      },
      Annotation: parseAnnotation(tool),
    }
  };
}
