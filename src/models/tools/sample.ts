import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface SampleTool extends Tool {
  type: AlteryxToolType.Sample;
  Properties: {
    Configuration: {
      Mode: string;
      N: string;
      OrderChanged: string;
      GroupFields: Array<string>;
    };
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
