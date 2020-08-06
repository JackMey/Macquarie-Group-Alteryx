import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ToggleDarkMode from './toggle-dark-mode';

describe('ToggleDarkMode', () => {
  const mockStore = configureStore([]);

  it('should render', () => {
    const store = mockStore({})

    const render = shallow(
      <Provider store={store}>
        <ToggleDarkMode />
      </Provider>
    );

    expect(render).toBeTruthy();
  });
});
