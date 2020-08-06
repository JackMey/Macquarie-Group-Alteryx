import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface JoinTool extends Tool {
  type: AlteryxToolType.Join;
  Properties: {
    JoinInfo: {
      Left: string;
      Right: string;
    };
    Configuration: {
      OrderChanged: string;
      CommaDecimal: string;
      SelectFields: Array<{
        field: string;
        selected: string;
        rename?: string;
        description?: string;
      }>;
    };
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
