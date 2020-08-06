import { parseToolType } from './parse-tool-type';
import { AlteryxToolType, Tool } from '../models';
import { parseCrossTab } from './tools/parse-cross-tab';
import { parseDbFileInput } from './tools/parse-db-file-input';
import { parseAppendFields } from './tools/parse-append-fields';
import { parseDbFileOutput } from './tools/parse-db-file-output';
import { parseDynamicInput } from './tools/parse-dynamic-input';
import { parseFilter } from './tools/parse-filter';
import { parseFindReplace } from './tools/parse-find-replace';
import { parseFormula } from './tools/parse-formula';
import { parseGenerateRows } from './tools/parse-generate-rows';
import { parseJoin } from './tools/parse-join';
import { parseMultiFieldFormula } from './tools/parse-multi-field-formula';
import { parseMultiRowFormula } from './tools/parse-multi-row-formula';
import { parseRandomRecords } from './tools/parse-random-records';
import { parseRunningTotal } from './tools/parse-running-total';
import { parseSample } from './tools/parse-sample';
import { parseSelect } from './tools/parse-select';
import { parseSort } from './tools/parse-sort';
import { parseSummarize } from './tools/parse-summarize';
import { parseTranspose } from './tools/parse-transpose';
import { parseUnion } from './tools/parse-union';
import { parseUnique } from './tools/parse-unique';
import { parseUnknown } from './tools/parse-unknown';

export const parseTool = (tool: any, xml: string): Tool => {
  const type = parseToolType(tool);

  switch (type) {
    case AlteryxToolType.AppendFields:
      return parseAppendFields(tool, xml);
    case AlteryxToolType.CrossTab:
      return parseCrossTab(tool, xml);
    case AlteryxToolType.DbFileInput:
      return parseDbFileInput(tool, xml);
    case AlteryxToolType.DbFileOutput:
      return parseDbFileOutput(tool, xml);
    case AlteryxToolType.DynamicInput:
      return parseDynamicInput(tool, xml);
    case AlteryxToolType.Filter:
      return parseFilter(tool, xml);
    case AlteryxToolType.FindReplace:
      return parseFindReplace(tool, xml);
    case AlteryxToolType.Formula:
      return parseFormula(tool, xml);
    case AlteryxToolType.GenerateRows:
      return parseGenerateRows(tool, xml);
    case AlteryxToolType.Join:
      return parseJoin(tool, xml);
    case AlteryxToolType.MultiFieldFormula:
      return parseMultiFieldFormula(tool, xml);
    case AlteryxToolType.MultiRowFormula:
      return parseMultiRowFormula(tool, xml);
    case AlteryxToolType.RandomRecords:
      return parseRandomRecords(tool, xml);
    case AlteryxToolType.RunningTotal:
      return parseRunningTotal(tool, xml);
    case AlteryxToolType.Sample:
      return parseSample(tool, xml);
    case AlteryxToolType.Select:
      return parseSelect(tool, xml);
    case AlteryxToolType.Sort:
      return parseSort(tool, xml);
    case AlteryxToolType.Summarize:
      return parseSummarize(tool, xml);
    case AlteryxToolType.Transpose:
      return parseTranspose(tool, xml);
    case AlteryxToolType.Union:
      return parseUnion(tool, xml);
    case AlteryxToolType.Unique:
      return parseUnique(tool, xml);
    case AlteryxToolType.Unknown:
      return parseUnknown(tool, xml);
  }

  throw new Error(`Unreachable - Unhandled Tool Type: ${type}`);
}

