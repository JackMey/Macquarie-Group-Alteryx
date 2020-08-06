import React from 'react';
import { shallow } from 'enzyme';
import { AlteryxToolType, DbFileInputTool } from '~/models';
import DbFileInput from './db-file-input';

describe('DbFileInput', () => {
  it('should render', () => {
    const tool: DbFileInputTool = {
      type: AlteryxToolType.DbFileInput,
      ToolID: '1',
      ToolXML: '',
      Properties: {
        Configuration: {
          File: '',
          FormatSpecificOptions: {},
        },
      }
    } as DbFileInputTool;

    const render = shallow(<DbFileInput tool={tool}/>);

    expect(render).toBeTruthy();
  });
});
