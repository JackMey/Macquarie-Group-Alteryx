import {
  combineReducers,
  Dispatch,
  AnyAction,
  Middleware,
  applyMiddleware,
  compose,
  createStore
} from 'redux';
import { AlterxWorkflowState, alteryxWorkflowReducer } from './alteryx-workflow/alteryx-workflow-reducers';
import { ThemeState, themeReducer } from './theme/theme-reducers';

export interface AppState {
  alteryxWorkflow: AlterxWorkflowState;
  theme: ThemeState;
}

export const rootReducer = combineReducers<AppState>({
  alteryxWorkflow: alteryxWorkflowReducer,
  theme: themeReducer,
});

const initialState = {};

const enhancers: Array<Function> = [];

const simplifyObjectMiddleware = () => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
  next({ ...action });
};

const middleware: Array<Middleware> = [
  simplifyObjectMiddleware,
];

if (process.env.NODE_ENV !== 'production') {
  const devToolsExtension = (window as any).__REDUX_DEVTOOLS_EXTENSION__; // eslint-disable-line

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers,
);

export default createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);
