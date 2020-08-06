import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface AppendFieldsTool extends Tool {
  type: AlteryxToolType.AppendFields;
  Properties: {
    Configuration: {
      CartesianMode: string;
      OrderChanged: string;
      CommaDecimal: string;
      SelectFields: Array<{
        field: string;
        selected: string;
        input?: string;
        rename?: string;
        type?: string;
        size?: string;
        description?: string;
      }>;
    };
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
