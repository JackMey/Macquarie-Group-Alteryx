import React from 'react';
import { shallow } from 'enzyme';
import { AlteryxToolType } from '~/models';
import Union from './union';

describe('Union', () => {
  it('should render', () => {
    const tool: any = {
      type: AlteryxToolType.Union,
      ToolID: '1',
      ToolXML: '',
    } as any;

    const render = shallow(<Union tool={tool}/>);

    expect(render).toBeTruthy();
  });
});
