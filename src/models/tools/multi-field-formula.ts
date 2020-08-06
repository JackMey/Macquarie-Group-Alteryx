import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface MultiFieldFormulaTool extends Tool {
  type: AlteryxToolType.MultiFieldFormula;
  Properties: {
    Configuration: {
      FieldType: string;
      NewFieldAddOn: string;
      NewFieldAddOnPos: string;
      CopyOutput: string;
      Expression: string;
      ChangeFieldType: string;
      OrderChanged: string;
      OutputFieldType: {
        type: string;
        size: string;
        scale: string;
      };
      Fields: Array<{
        name: string;
        selected: string;
      }>;
    };
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
