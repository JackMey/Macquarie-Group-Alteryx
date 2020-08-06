import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface MultiRowFormulaTool extends Tool {
  type: AlteryxToolType.MultiRowFormula;
  Properties: {
    Configuration: {
      UpdateField: string;
      UpdateFieldName: string;
      CreateFieldName: string;
      CreateFieldType: string;
      CreateFieldSize: string;
      OtherRows: string;
      NumRows: string;
      Expression: string;
      GroupByFields: Array<string>;
    };
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
