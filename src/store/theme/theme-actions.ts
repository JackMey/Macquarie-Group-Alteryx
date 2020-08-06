import { Action } from 'redux';

export enum ThemeActionTypes {
  TOGGLE_DARK_MODE = '[THEME] TOGGLE_DARK_MODE',
  LOAD_THEME = '[THEME] LOAD_THEME',
}

export class ToggleDarkModeAction implements Action {
  public readonly type = ThemeActionTypes.TOGGLE_DARK_MODE;
}

export class LoadThemeAction implements Action {
  public readonly type = ThemeActionTypes.LOAD_THEME;
}

export type ThemeAction = ToggleDarkModeAction | LoadThemeAction;
