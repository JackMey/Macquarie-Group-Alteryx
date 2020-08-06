import React from 'react';
import { shallow } from 'enzyme';
import { AlteryxToolType } from '~/models';
import Select from './select';

describe('Select', () => {
  it('should render', () => {
    const tool: any = {
      type: AlteryxToolType.Select,
      ToolID: '3',
      ToolXML: '',
      Properties: {
        Configuration: {
          OrderChanged: '',
          CommaDecimal: '',
          SelectFields: [],
        }
      }
    };

    const render = shallow(<Select tool={tool}/>);

    expect(render).toBeTruthy();
  });
});
