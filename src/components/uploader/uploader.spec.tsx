import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Uploader from './uploader';

describe('Uploader', () => {
  const mockStore = configureStore([]);

  it('should render', () => {
    const store = mockStore({})

    const render = shallow(
      <Provider store={store}>
        <Uploader />
      </Provider>
    );

    expect(render).toBeTruthy();
  });
});
