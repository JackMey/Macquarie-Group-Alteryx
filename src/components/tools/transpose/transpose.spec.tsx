import React from 'react';
import { shallow } from 'enzyme';
import { AlteryxToolType } from '~/models';
import Transpose from './transpose';

describe('Transpose', () => {
  it('should render', () => {
    const tool: any = {
      type: AlteryxToolType.Transpose,
      ToolID: '1',
      ToolXML: '',
      KeyFields: [],
      DataFields: [],
    } as any;

    const render = shallow(<Transpose tool={tool}/>);

    expect(render).toBeTruthy();
  });
});
