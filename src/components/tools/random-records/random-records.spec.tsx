import React from 'react';
import { shallow } from 'enzyme';
import { AlteryxToolType } from '~/models';
import RandomRecords from './random-records';

describe('RandomRecords', () => {
  it('should render', () => {
    const tool: any = {
      type: AlteryxToolType.RandomRecords,
      ToolID: '3',
      ToolXML: '',
      Properties: {
        Configuration: {
          Values: []
        }
      }
    };

    const render = shallow(<RandomRecords tool={tool}/>);

    expect(render).toBeTruthy();
  });
});
