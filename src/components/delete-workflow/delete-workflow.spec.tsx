import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import DeleteWorkflow from './delete-workflow';

describe('DeleteWorkflow', () => {
  const mockStore = configureStore([]);

  it('should render', () => {
    const store = mockStore({})

    const render = shallow(
      <Provider store={store}>
        <DeleteWorkflow />
      </Provider>
    );

    expect(render).toBeTruthy();
  });
});
