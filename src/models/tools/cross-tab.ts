import { Tool } from './tool';
import { AlteryxToolType } from '../alteryx-tool-type';

export interface CrossTabTool extends Tool {
  type: AlteryxToolType.CrossTab;
  Properties: {
    Configuration: {
      GroupFields: Array<string>;
      HeaderField: string;
      DataField: string;
      Methods: Array<string>;
      Separator: string;
      FieldSize: string;
    };
    MetaInfo: {
      RecordInfo: Array<{
        name: string;
        size: string;
        source: string;
        type: string;
      }>;
      SortInfo: Array<{
        field: string;
        order: string;
      }>;
    };
    Annotation: {
      Name?: string;
      Annotation: string;
    };
  };
}
