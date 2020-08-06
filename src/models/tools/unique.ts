import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface UniqueTool extends Tool {
  type: AlteryxToolType.Unique;
  Properties: {
    Configuration: {
      UniqueFields: Array<string>;
    };
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
