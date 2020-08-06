import React from 'react';
import { shallow } from 'enzyme';
import { AlteryxToolType } from '~/models';
import CrossTab from './cross-tab';

describe('CrossTab', () => {
  it('should render', () => {
    const tool: any = {
      type: AlteryxToolType.CrossTab,
      ToolID: '1',
      ToolXML: '',
    } as any;

    const render = shallow(<CrossTab tool={tool}/>);

    expect(render).toBeTruthy();
  });
});
