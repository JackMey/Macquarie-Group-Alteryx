import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Menu from './menu';

describe('Menu', () => {
  const mockStore = configureStore([]);

  it('should render', () => {
    const store = mockStore({})

    const render = shallow(
      <Provider store={store}>
        <Menu setOpen={() => null} />
      </Provider>
    );

    expect(render).toBeTruthy();
  });
});
