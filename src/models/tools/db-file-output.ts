import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface DbFileOutputTool extends Tool {
  type: AlteryxToolType.DbFileOutput;
  Properties: {
    Configuration: {
      File: string;
      FormatSpecificOptions: Record<string, string>;
      MultiFile: {
        value: string;
        Type: string;
        Field: string;
      };
    };
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
