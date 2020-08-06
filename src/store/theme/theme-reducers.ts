import { ThemeAction, ThemeActionTypes } from './theme-actions';

export interface ThemeState {
  darkmode: boolean;
}

const initialState: ThemeState = {
  darkmode: false,
};

export function themeReducer(state: ThemeState = initialState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case ThemeActionTypes.TOGGLE_DARK_MODE: {
      const newSetting = !state.darkmode;

      localStorage.setItem('darkmode', newSetting.toString());

      return {
        ...state,
        darkmode: newSetting,
      };
    }

    case ThemeActionTypes.LOAD_THEME: {
      const darkmode = localStorage.getItem('darkmode') === 'true';

      return {
        ...state,
        darkmode,
      };
    }

    default:
      return state;
  }
}
