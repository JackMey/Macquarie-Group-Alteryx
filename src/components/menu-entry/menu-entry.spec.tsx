import React from 'react';
import { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import MenuEntry from './menu-entry';
import { AlteryxWorkflow } from '~/models';

describe('MenuEntry', () => {
  const mockStore = configureStore([]);

  it('should render', () => {
    const store = mockStore({});
    const mockWorkflow: AlteryxWorkflow = {
      id: '1',
      name: 'test',
      timeAdded: '12345',
      content: {},
      xml: '',
    };

    const render = shallow(
      <Provider store={store}>
        <MenuEntry workflow={mockWorkflow} />
      </Provider>
    );

    expect(render).toBeTruthy();
  });
});
