import { AlteryxToolType } from "../alteryx-tool-type";

export interface Tool {
  type: AlteryxToolType;
  ToolID: string;
  ToolXML: string;
}
