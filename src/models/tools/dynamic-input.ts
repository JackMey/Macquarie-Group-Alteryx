import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface DynamicInputTool extends Tool {
  type: AlteryxToolType.DynamicInput;
  Properties: {
    Configuration: {
      File: string;
      Mode: string;
      ReadList_Field: string;
      ReadList_Type: string;
    };
    FormatSpecificOptions: {
      CodePage: string;
      Delimeter: string;
      IgnoreErrors: string;
      FieldLen: string;
      AllowShareWrite: string;
      HeaderRow: string;
      IgnoreQuotes: string;
      ImportLine: string;
    };
    Modifications: Array<Record<string, string>>;
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
