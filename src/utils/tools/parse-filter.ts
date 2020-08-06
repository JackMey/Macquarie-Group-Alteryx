import { FilterTool, AlteryxToolType } from '~/models';
import { extractToolXml } from '../extract-tool-xml';
import { parseAnnotation } from '../parse-annotation';

export const parseFilter = (tool: any, xml: string): FilterTool => {
  const configuration = tool?.Properties?.[0]?.Configuration?.[0];
  const simple = configuration?.Simple?.[0];
  const operands = simple?.Operands?.[0];
  const mappedOperands = operands
    ? Object.keys(operands).reduce((options, key) => ({ ...options, [key]: operands[key]?.[0] }), {})
    : {};

  return {
    type: AlteryxToolType.Filter,
    ToolID: tool.$.ToolID,
    ToolXML: extractToolXml(tool.$.ToolID, xml),
    Properties: {
      Configuration: {
        Expression: configuration?.Expression?.[0],
        Mode: configuration?.Mode?.[0],
        Simple: {
          Operator: simple?.Operator?.[0],
          Field: simple?.Field?.[0],
          Operands: mappedOperands
        }
      },
      Annotation: parseAnnotation(tool),
    }
  };
}
