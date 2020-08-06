import React from 'react';
import { shallow } from 'enzyme';
import { AlteryxToolType, DbFileOutputTool } from '~/models';
import DbFileOutput from './db-file-output';

describe('DbFileOutput', () => {
  it('should render', () => {
    const tool: DbFileOutputTool = {
      type: AlteryxToolType.DbFileOutput,
      ToolID: '1',
      ToolXML: '',
      Properties: {
        Configuration: {
          FormatSpecificOptions: {}
        }
      }
    } as DbFileOutputTool;

    const render = shallow(<DbFileOutput tool={tool}/>);

    expect(render).toBeTruthy();
  });
});
