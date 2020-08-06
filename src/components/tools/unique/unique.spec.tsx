import React from 'react';
import { shallow } from 'enzyme';
import { AlteryxToolType } from '~/models';
import Unique from './unique';

describe('Unique', () => {
  it('should render', () => {
    const tool: any = {
      type: AlteryxToolType.Unique,
      ToolID: '1',
      ToolXML: '',
      UniqueFields: [],
    } as any;

    const render = shallow(<Unique tool={tool}/>);

    expect(render).toBeTruthy();
  });
});
