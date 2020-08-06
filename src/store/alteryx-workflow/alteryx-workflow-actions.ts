import { Action } from 'redux';
import { AlteryxWorkflow } from '~/models';

export enum AlteryxWorkflowActionTypes {
  ADD_ALTERYX_WORKFLOW = '[ALTERYX_WORKFLOW] ADD_ALTERYX_WORKFLOW',
  LOAD_ALTERYX_WORKFLOW = '[ALTERYX_WORKFLOW] LOAD_ALTERYX_WORKFLOW',
  DELETE_ALTERYX_WORKFLOW = '[ALTERYX_WORKFLOW] DELETE_ALTERYX_WORKFLOW',
  SELECT_ALTERYX_WORKFLOW = '[ALTERYX_WORKFLOW] SELECT_ALTERYX_WORKFLOW',
  SET_SCROLL_PROGRESS = '[ALTERYX_WORKFLOW] SET_SCROLL_PROGRESS',
}

export class AddAlteryxWorkflowAction implements Action {
  public readonly type = AlteryxWorkflowActionTypes.ADD_ALTERYX_WORKFLOW;

  constructor(public payload: AlteryxWorkflow) { }
}

export class LoadAlteryxWorkflowAction implements Action {
  public readonly type = AlteryxWorkflowActionTypes.LOAD_ALTERYX_WORKFLOW;
}

export class DeleteAlteryxWorkflowAction implements Action {
  public readonly type = AlteryxWorkflowActionTypes.DELETE_ALTERYX_WORKFLOW;

  constructor(public payload: string) { }
}

export class SelectAlteryxWorkflowAction implements Action {
  public readonly type = AlteryxWorkflowActionTypes.SELECT_ALTERYX_WORKFLOW;

  constructor(public payload: string) { }
}

export class SetScrollProgress implements Action {
  public readonly type = AlteryxWorkflowActionTypes.SET_SCROLL_PROGRESS;

  constructor(public payload: string) { }
}

export type AlteryxWorkflowAction = AddAlteryxWorkflowAction
  | LoadAlteryxWorkflowAction
  | DeleteAlteryxWorkflowAction
  | SelectAlteryxWorkflowAction
  | SetScrollProgress;
