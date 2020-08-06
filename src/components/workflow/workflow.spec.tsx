import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Workflow from './workflow';

describe('Workflow', () => {
  const mockStore = configureStore([]);

  it('should render', () => {
    const store = mockStore({})

    const render = shallow(
      <Provider store={store}>
        <Workflow />
      </Provider>
    );

    expect(render).toBeTruthy();
  });
});
