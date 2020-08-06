import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface UnionTool extends Tool {
  type: AlteryxToolType.Union;
  Properties: {
    Configuration: {
      Mode: string;
      OutputMode: string;
      OutputOrder: Array<string>;
    };
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
