import React from 'react';
import { shallow } from 'enzyme';
import { Tool, AlteryxToolType, FilterTool } from '~/models';
import Filter from './filter';

describe('Filter', () => {
  it('should render', () => {
    const tool: Tool = {
      type: AlteryxToolType.Filter,
      ToolID: '1',
      ToolXML: '',
    };

    const render = shallow(<Filter tool={tool as FilterTool}/>);

    expect(render).toBeTruthy();
  });
});
