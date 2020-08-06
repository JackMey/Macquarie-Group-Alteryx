import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface SelectTool extends Tool {
  type: AlteryxToolType.Select;
  Properties: {
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
