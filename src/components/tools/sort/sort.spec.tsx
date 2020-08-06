import React from 'react';
import { shallow } from 'enzyme';
import { Tool, AlteryxToolType, SortTool } from '~/models';
import Sort from './sort';

describe('Sort', () => {
  it('should render', () => {
    const tool: Tool = {
      type: AlteryxToolType.Sort,
      ToolID: '1',
      ToolXML: '',
    };

    const render = shallow(<Sort tool={tool as SortTool}/>);

    expect(render).toBeTruthy();
  });
});
