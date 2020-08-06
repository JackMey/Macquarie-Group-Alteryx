import React from 'react';
import { shallow } from 'enzyme';
import { AlteryxToolType } from '~/models';
import Summarize from './summarize';

describe('Summarize', () => {
  it('should render', () => {
    const tool: any = {
      type: AlteryxToolType.Summarize,
      ToolID: '1',
      ToolXML: '',
    } as any;

    const render = shallow(<Summarize tool={tool}/>);

    expect(render).toBeTruthy();
  });
});
