import { createSelector } from 'reselect';
import { AppState } from '../root-store';
import { ThemeState } from './theme-reducers';

const themeStateSelector = (state: AppState): ThemeState => state.theme;

export const getIsDarkmode = createSelector(
  themeStateSelector,
  (state: ThemeState): boolean => state.darkmode,
);
