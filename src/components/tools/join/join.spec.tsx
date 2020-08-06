import React from 'react';
import { shallow } from 'enzyme';
import { AlteryxToolType } from '~/models';
import Join from './join';

describe('Join', () => {
  it('should render', () => {
    const tool: any = {
      type: AlteryxToolType.Join,
      ToolID: '3',
      ToolXML: '',
      Properties: {
        Configuration: {
          JoinInfo: {},
          OrderChanged: '',
          CommaDecimal: '',
          SelectFields: [],
        }
      }
    };

    const render = shallow(<Join tool={tool}/>);

    expect(render).toBeTruthy();
  });
});
