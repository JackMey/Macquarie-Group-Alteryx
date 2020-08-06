import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface FindReplaceTool extends Tool {
  type: AlteryxToolType.FindReplace;
  Properties: {
    Configuration: {
      FieldFind: string;
      FieldSearch: string;
      ReplaceFoundField: string;
      FindMode: string;
      NoCase: string;
      MatchWholeWord: string;
      ReplaceMode: string;
      ReplaceMultipleFound: string;
      ReplaceAppendFields: Array<string>;
    };
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
