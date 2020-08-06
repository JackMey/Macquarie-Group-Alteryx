import React from 'react';
import { shallow } from 'enzyme';
import { Tool, AlteryxToolType } from '~/models';
import Unknown from './unknown';

describe('Unknown', () => {
  it('should render', () => {
    const tool: Tool = {
      type: AlteryxToolType.Unknown,
      ToolID: '1',
      ToolXML: '',
    };

    const render = shallow(<Unknown tool={tool} />);

    expect(render).toBeTruthy();
  });
});
