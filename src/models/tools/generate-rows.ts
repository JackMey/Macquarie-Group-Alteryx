import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface GenerateRowsTool extends Tool {
  type: AlteryxToolType.GenerateRows;
  Properties: {
    Configuration: {
      UpdateField: string;
      UpdateFieldName: string;
      CreateFieldName: string;
      CreateFieldType: string;
      CreateFieldSize: string;
      ExpressionInit: string;
      ExpressionCond: string;
      ExpressionLoop: string;
    };
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
