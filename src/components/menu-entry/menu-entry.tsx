import React from 'react';
import { makeStyles } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { AlteryxWorkflow } from '~/models';
import { SelectAlteryxWorkflowAction } from '~/store/alteryx-workflow/alteryx-workflow-actions';
import { useDispatch } from 'react-redux';

type Props = {
  workflow: AlteryxWorkflow;
}

const useStyles = makeStyles({
  menuItem: {
    '& > *': {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
});

const MenuEntry = (props: Props) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <ListItem button onClick={() => dispatch(new SelectAlteryxWorkflowAction(props.workflow.id))}>
      <ListItemText className={classes.menuItem} primary={props.workflow.name} secondary={`Created: ${props.workflow.timeAdded}`} />
    </ListItem>
  );
}

export default MenuEntry;