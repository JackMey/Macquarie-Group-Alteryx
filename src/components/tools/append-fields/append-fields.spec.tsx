import React from 'react';
import { shallow } from 'enzyme';
import { AlteryxToolType } from '~/models';
import AppendFields from './append-fields';

describe('AppendFields', () => {
  it('should render', () => {
    const tool: any = {
      type: AlteryxToolType.AppendFields,
      ToolID: '1',
      ToolXML: '',
    } as any;

    const render = shallow(<AppendFields tool={tool}/>);

    expect(render).toBeTruthy();
  });
});
