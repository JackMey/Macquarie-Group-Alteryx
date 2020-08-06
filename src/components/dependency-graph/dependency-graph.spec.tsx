import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { shallow } from 'enzyme';
import DependencyGraph from './dependency-graph';

describe('DependencyGraph', () => {
  const mockStore = configureStore([]);

  it('should render', () => {
    const store = mockStore({});

    const render = shallow(
      <Provider store={store}>
        <DependencyGraph />
      </Provider>
    );

    expect(render).toBeTruthy();
  });
});
