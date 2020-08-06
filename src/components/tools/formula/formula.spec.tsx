import React from 'react';
import { shallow } from 'enzyme';
import { AlteryxToolType } from '~/models';
import Formula from './formula';

describe('Formula', () => {
  it('should render', () => {
    const tool: any = {
      type: AlteryxToolType.Formula,
      ToolID: '3',
      ToolXML: '',
      Properties: {
        Configuration: {
          FormulaFields: [],
        }
      }
    };

    const render = shallow(<Formula tool={tool}/>);

    expect(render).toBeTruthy();
  });
});
