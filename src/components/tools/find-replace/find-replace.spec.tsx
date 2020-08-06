import React from 'react';
import { shallow } from 'enzyme';
import { AlteryxToolType } from '~/models';
import FindReplace from './find-replace';

describe('FindReplace', () => {
  it('should render', () => {
    const tool: any = {
      type: AlteryxToolType.FindReplace,
      ToolID: '1',
      ToolXML: '',
    } as any;

    const render = shallow(<FindReplace tool={tool}/>);

    expect(render).toBeTruthy();
  });
});
