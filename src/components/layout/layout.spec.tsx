import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import Layout from './layout';

describe('Layout', () => {
  const mockStore = configureStore([]);

  it('should render', () => {
    const store = mockStore({});

    const render = shallow(
      <Provider store={store}>
        <Layout />
      </Provider>
    );

    expect(render).toBeTruthy();
  });
});
