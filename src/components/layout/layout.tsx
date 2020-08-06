import React, { useState } from 'react';
import clsx from 'clsx';
import { CssBaseline, Drawer, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '../menu/menu';
import DependencyGraph from '../dependency-graph/dependency-graph';
import Workflow from '../workflow/workflow';
import ToggleDarkMode from '../toggle-dark-mode/toggle-dark-mode';
import DeleteWorkflow from '../delete-workflow/delete-workflow';
import { useSelector } from 'react-redux';
import { getSelectedAlteryxWorkflow } from '~/store/alteryx-workflow/alteryx-workflow-selectors';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100vw',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    height: '4rem'
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  title: {
    flex: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
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
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    overflow: 'auto',
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  chart: {
    height: '50%',
    width: '100%',
  },
  workflow: {
    flex: '1',
  },
  dependencyGraph: {
    position: 'relative',
    flex: '0 0 400px'
  }
}));

const Layout = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const selectedWorkflow = useSelector(getSelectedAlteryxWorkflow);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="static"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {'MQU Group 4' + (!!selectedWorkflow ? ` - ${selectedWorkflow.name}` : '')}
          </Typography>
          <ToggleDarkMode />
          <DeleteWorkflow />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Menu setOpen={setOpen} />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.workflow}>
          <Workflow />
        </div>
        <div className={classes.dependencyGraph}>
          <DependencyGraph />
        </div>
      </main>
    </div>
  );
}

export default Layout;
