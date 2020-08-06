import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ToolContainer from './tool-container';

describe('ToolContainer', () => {
  const mockStore = configureStore([]);

  it('should render', () => {
    const store = mockStore({})

    const render = shallow(
      <Provider store={store}>
        <ToolContainer tools={[]} />
      </Provider>
    );

    expect(render).toBeTruthy();
  });
});
