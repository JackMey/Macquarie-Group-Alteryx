import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface RandomRecordsTool extends Tool {
  type: AlteryxToolType.RandomRecords;
  Properties: {
    Configuration: {
      Values: Array<{
        name: string;
        value: string;
      }>;
    };
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
