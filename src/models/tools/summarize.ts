import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface SummarizeTool extends Tool {
  type: AlteryxToolType.Summarize;
  Properties: {
    Configuration: {
      SummarizeFields: Array<{
        field: string;
        action: string;
        rename: string;
      }>;
    };
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
