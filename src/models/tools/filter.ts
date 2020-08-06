import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface FilterTool extends Tool {
  type: AlteryxToolType.Filter;
  Properties: {
    Configuration: {
      Expression: string;
      Mode: string;
      Simple: {
        Operator: string;
        Field: string;
        Operands: Record<string, string>;
      };
    };
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}