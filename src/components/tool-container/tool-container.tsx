import React, { useMemo } from 'react';
import { InView } from 'react-intersection-observer';
import {
  Tool,
  AlteryxToolType,
  AppendFieldsTool,
  CrossTabTool,
  DbFileInputTool,
  DbFileOutputTool,
  DynamicInputTool,
  FilterTool,
  FindReplaceTool,
  FormulaTool,
  GenerateRowsTool,
  JoinTool,
  MultiFieldFormulaTool,
  MultiRowFormulaTool,
  RandomRecordsTool,
  RunningTotalTool,
  SampleTool,
  SelectTool,
  SortTool,
  SummarizeTool,
  TransposeTool,
  UnionTool,
  UniqueTool
} from '~/models';
import AppendFields from '../tools/append-fields/append-fields';
import CrossTab from '../tools/cross-tab/cross-tab';
import DbFileInput from '../tools/db-file-input/db-file-input';
import DbFileOutput from '../tools/db-file-output/db-file-output';
import DynamicInput from '../tools/dynamic-input/dynamic-input';
import Filter from '../tools/filter/filter';
import FindReplace from '../tools/find-replace/find-replace';
import Formula from '../tools/formula/formula';
import GenerateRows from '../tools/generate-rows/generate-rows';
import Join from '../tools/join/join';
import MultiFieldFormula from '../tools/multi-field-formula/multi-field-formula';
import MultiRowFormula from '../tools/multi-row-formula/multi-row-formula';
import RandomRecords from '../tools/random-records/random-records';
import RunningTotal from '../tools/running-total/running-total';
import Sample from '../tools/sample/sample';
import Select from '../tools/select/select';
import Sort from '../tools/sort/sort';
import Summarize from '../tools/summarize/summarize';
import Transpose from '../tools/transpose/transpose';
import Union from '../tools/union/union';
import Unique from '../tools/unique/unique';
import Unknown from '../tools/unknown/unknown';
import { useDispatch } from 'react-redux';
import { SetScrollProgress } from '~/store/alteryx-workflow/alteryx-workflow-actions';

interface Props {
  tools: Array<Tool>;
}

const ToolContainer = (props: Props) => {
  const dispatch = useDispatch();

  const components = useMemo(() => {
    return props.tools.map((tool): [JSX.Element, string] => {
      switch (tool.type) {
        case AlteryxToolType.AppendFields:
          return [<AppendFields tool={tool as AppendFieldsTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.CrossTab:
          return [<CrossTab tool={tool as CrossTabTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.DbFileInput:
          return [<DbFileInput tool={tool as DbFileInputTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.DbFileOutput:
          return [<DbFileOutput tool={tool as DbFileOutputTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.DynamicInput:
          return [<DynamicInput tool={tool as DynamicInputTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.Filter:
          return [<Filter tool={tool as FilterTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.FindReplace:
          return [<FindReplace tool={tool as FindReplaceTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.Formula:
          return [<Formula tool={tool as FormulaTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.GenerateRows:
          return [<GenerateRows tool={tool as GenerateRowsTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.Join:
          return [<Join tool={tool as JoinTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.MultiFieldFormula:
          return [<MultiFieldFormula tool={tool as MultiFieldFormulaTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.MultiRowFormula:
          return [<MultiRowFormula tool={tool as MultiRowFormulaTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.RandomRecords:
          return [<RandomRecords tool={tool as RandomRecordsTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.RunningTotal:
          return [<RunningTotal tool={tool as RunningTotalTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.Sample:
          return [<Sample tool={tool as SampleTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.Select:
          return [<Select tool={tool as SelectTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.Sort:
          return [<Sort tool={tool as SortTool}key={tool.ToolID}  />, tool.ToolID];
        case AlteryxToolType.Summarize:
          return [<Summarize tool={tool as SummarizeTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.Transpose:
          return [<Transpose tool={tool as TransposeTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.Union:
          return [<Union tool={tool as UnionTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.Unique:
          return [<Unique tool={tool as UniqueTool} key={tool.ToolID} />, tool.ToolID];
        case AlteryxToolType.Unknown:
        default:
          return [<Unknown tool={tool} key={tool.ToolID} />, tool.ToolID];
      }
    }).map(([tool, id]) => (
      <InView key={id} as="div" threshold={.4} onChange={(inView) => inView && dispatch(new SetScrollProgress(id))}>
        {tool}
      </InView>
    ))
  }, [props.tools]);
  return <>{components}</>;
};

export default ToolContainer;
