import { AlteryxToolType } from '../models/alteryx-tool-type';

export const parseToolType = (tool: any): AlteryxToolType => {
  const plugin = tool.GuiSettings && tool.GuiSettings[0]?.$?.Plugin;

  switch (plugin) {
    case 'AlteryxBasePluginsGui.AppendFields.AppendFields':
      return AlteryxToolType.AppendFields;
    case 'AlteryxBasePluginsGui.CrossTab.CrossTab':
      return AlteryxToolType.CrossTab;
    case 'AlteryxBasePluginsGui.DbFileInput.DbFileInput':
      return AlteryxToolType.DbFileInput;
    case 'AlteryxBasePluginsGui.DbFileOutput.DbFileOutput':
      return AlteryxToolType.DbFileOutput;
    case 'AlteryxBasePluginsGui.DynamicInput.DynamicInput':
      return AlteryxToolType.DynamicInput;
    case 'AlteryxBasePluginsGui.Filter.Filter':
      return AlteryxToolType.Filter;
    case 'AlteryxBasePluginsGui.FindReplace.FindReplace':
      return AlteryxToolType.FindReplace;
    case 'AlteryxBasePluginsGui.Formula.Formula':
      return AlteryxToolType.Formula;
    case 'AlteryxBasePluginsGui.GenerateRows.GenerateRows':
      return AlteryxToolType.GenerateRows;
    case 'AlteryxBasePluginsGui.Join.Join':
      return AlteryxToolType.Join;
    case 'AlteryxBasePluginsGui.MultiFieldFormula.MultiFieldFormula':
      return AlteryxToolType.MultiFieldFormula;
    case 'AlteryxBasePluginsGui.MultiRowFormula.MultiRowFormula':
      return AlteryxToolType.MultiRowFormula;
    case 'AlteryxBasePluginsGui.RunningTotal.RunningTotal':
      return AlteryxToolType.RunningTotal;
    case 'AlteryxBasePluginsGui.Sample.Sample':
      return AlteryxToolType.Sample;
    case 'AlteryxBasePluginsGui.AlteryxSelect.AlteryxSelect':
      return AlteryxToolType.Select;
    case 'AlteryxBasePluginsGui.Sort.Sort':
      return AlteryxToolType.Sort;
    case 'AlteryxSpatialPluginsGui.Summarize.Summarize':
      return AlteryxToolType.Summarize;
    case 'AlteryxBasePluginsGui.Transpose.Transpose':
      return AlteryxToolType.Transpose;
    case 'AlteryxBasePluginsGui.Union.Union':
      return AlteryxToolType.Union;
    case 'AlteryxBasePluginsGui.Unique.Unique':
      return AlteryxToolType.Unique;
  }

  const macro = tool.EngineSettings && tool.EngineSettings[0]?.$?.Macro;

  switch (macro) {
    case 'RandomRecords.yxmc':
      return AlteryxToolType.RandomRecords;
  }

  return AlteryxToolType.Unknown;
};
