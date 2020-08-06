import React from 'react';
import { shallow } from 'enzyme';
import { AlteryxToolType } from '~/models';
import RunningTotal from './running-total';

describe('RunningTotal', () => {
  it('should render', () => {
    const tool: any = {
      type: AlteryxToolType.RunningTotal,
      ToolID: '1',
      ToolXML: '',
    } as any;

    const render = shallow(<RunningTotal tool={tool}/>);

    expect(render).toBeTruthy();
  });
});
