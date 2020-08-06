import React from 'react';
import { shallow } from 'enzyme';
import { AlteryxToolType } from '~/models';
import GenerateRows from './generate-rows';

describe('GenerateRows', () => {
  it('should render', () => {
    const tool: any = {
      type: AlteryxToolType.GenerateRows,
      ToolID: '1',
      ToolXML: '',
    } as any;

    const render = shallow(<GenerateRows tool={tool}/>);

    expect(render).toBeTruthy();
  });
});
