import React from 'react';
import { shallow } from 'enzyme';
import { AlteryxToolType } from '~/models';
import Sample from './sample';

describe('Sample', () => {
  it('should render', () => {
    const tool: any = {
      type: AlteryxToolType.Sample,
      ToolID: '1',
      ToolXML: '',
    } as any;

    const render = shallow(<Sample tool={tool}/>);

    expect(render).toBeTruthy();
  });
});
