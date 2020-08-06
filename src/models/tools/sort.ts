import { Tool } from './tool';

export interface SortTool extends Tool {
  Properties: {
    Configuration: Array<{ field: string; order: string }>;
    Annotation: {
      Name: string;
      Annotation: string;
    };
  };
}
