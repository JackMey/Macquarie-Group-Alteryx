import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface FormulaTool extends Tool {
  type: AlteryxToolType.Formula;
  Properties: {
    Configuration: {
      FormulaFields: Array<{
        expression: string;
        field: string;
        size: string;
        type: string;
      }>;
    };
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
