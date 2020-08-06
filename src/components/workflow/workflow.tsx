import React from 'react';
import { useSelector } from 'react-redux';
import { getSortedWorkflowNodes } from '~/store/alteryx-workflow/alteryx-workflow-selectors';
import ToolContainer from '../tool-container/tool-container';

const Workflow = () => {
  const tools = useSelector(getSortedWorkflowNodes);
  return tools ? <ToolContainer tools={tools} /> : null;
};

export default Workflow;
