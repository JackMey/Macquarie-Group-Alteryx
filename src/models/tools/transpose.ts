import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface TransposeTool extends Tool {
  type: AlteryxToolType.Transpose;
  Properties: {
    Configuration: {
      KeyFields: Array<string>;
      DataFields: Array<{
        field: string;
        selected: string;
      }>;
    };
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
