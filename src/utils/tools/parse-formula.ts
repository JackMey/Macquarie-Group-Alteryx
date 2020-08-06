import { FormulaTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseFormula = (tool: any, xml: string): FormulaTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];
  const formulaFields = configuration?.FormulaFields?.[0].FormulaField
    .map((field: any) => field.$);

  return {
    type: AlteryxToolType.Formula,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        FormulaFields: formulaFields,
      },
      Annotation: parseAnnotation(tool),
    }
  };
}