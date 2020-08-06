import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import Uploader from '../uploader/uploader';
import { useSelector } from 'react-redux';
import { getAllAlteryxWorkflows } from '~/store/alteryx-workflow/alteryx-workflow-selectors';
import MenuEntry from '../menu-entry/menu-entry';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }
}));

type Props = {
  setOpen(value: boolean): void;
}

const Menu = (props: Props) => {
  const classes = useStyles();
  const theme = useTheme();

  const workflows = useSelector(getAllAlteryxWorkflows);

  return (
    <>
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => props.setOpen(false)}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {workflows.map((workflow) => <MenuEntry key={workflow.id} workflow={workflow} />)}
        <ListItem key={'UPLOADER'}>
          <Uploader />
        </ListItem>
      </List>
    </>
  );
}

export default Menu;