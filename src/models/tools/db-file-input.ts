import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface DbFileInputTool extends Tool {
  type: AlteryxToolType.DbFileInput;
  Properties: {
    Configuration: {
      File: string;
      FormatSpecificOptions: Record<string, string>;
    };
    MetaInfo: Array<{
      name: string;
      size: string;
      source: string;
      type: string;
    }>;
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
