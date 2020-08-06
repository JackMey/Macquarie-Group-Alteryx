import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface RunningTotalTool extends Tool {
  type: AlteryxToolType.RunningTotal;
  Properties: {
    Configuration: {
      GroupByFields: Array<string>;
      RunningTotalFields: Array<string>;
    };
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
