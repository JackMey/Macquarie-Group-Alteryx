import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { createMuiTheme, ThemeProvider, CssBaseline } from '@material-ui/core';
import store from '~/store/root-store';
import Layout from './layout/layout';
import { LoadAlteryxWorkflowAction } from '~/store/alteryx-workflow/alteryx-workflow-actions';
import { LoadThemeAction } from '~/store/theme/theme-actions';
import { getIsDarkmode } from '~/store/theme/theme-selectors';
import { blue, grey } from '@material-ui/core/colors';

const AppTheme = (props: { children: JSX.Element }) => {
  const isDarkMode = useSelector(getIsDarkmode);

  const theme = createMuiTheme({
    palette: {
      type: isDarkMode ? 'dark' : 'light',
      primary: {
        main: isDarkMode ? grey[800] : blue[700]
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
}

class App extends React.PureComponent {

  componentDidMount() {
    store.dispatch(new LoadAlteryxWorkflowAction());
    store.dispatch(new LoadThemeAction());
  }

  public render() {
    return (
      <Provider store={store}>
        <AppTheme>
          <Layout />
        </AppTheme>
      </Provider>
    );
  }
}

export default App;
