import React from 'react';
import { shallow } from 'enzyme';
import { AlteryxToolType } from '~/models';
import DynamicInput from './dynamic-input';

describe('DynamicInput', () => {
  it('should render', () => {
    const tool: any = {
      type: AlteryxToolType.DynamicInput,
      ToolID: '1',
      ToolXML: '',
      Configuration: {},
      FormatSpecificOptions: {},
      Modifications: [],
    } as any;

    const render = shallow(<DynamicInput tool={tool}/>);

    expect(render).toBeTruthy();
  });
});
