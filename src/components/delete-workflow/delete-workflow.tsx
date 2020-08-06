import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, makeStyles, Tooltip } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { getSelectedAlteryxWorkflowId } from '~/store/alteryx-workflow/alteryx-workflow-selectors';
import { DeleteAlteryxWorkflowAction } from '~/store/alteryx-workflow/alteryx-workflow-actions';

const useStyles = makeStyles({
  button: {
    margin: '0 .5rem',
  },
});

const DeleteWorkflow = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const workflowId = useSelector(getSelectedAlteryxWorkflowId);

  if (!workflowId) {
    return null;
  }

  return (
    <Tooltip title="Delete Current Workflow">
      <Button color="secondary" variant="contained" disableElevation className={classes.button} startIcon={<DeleteIcon />}
        onClick={() => dispatch(new DeleteAlteryxWorkflowAction(workflowId))}>
          Delete
        </Button>
    </Tooltip>
  );
};

export default DeleteWorkflow;
