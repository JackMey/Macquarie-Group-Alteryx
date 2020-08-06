import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles, IconButton, Tooltip } from '@material-ui/core';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { ToggleDarkModeAction } from '~/store/theme/theme-actions';

const useStyles = makeStyles({
  button: {
    margin: '0 .5rem',
  },
});

const ToggleDarkMode = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <Tooltip title="Toggle Dark Mode">
      <IconButton className={classes.button} onClick={() => dispatch(new ToggleDarkModeAction())}>
        <Brightness3Icon />
      </IconButton>
    </Tooltip>
  );
};

export default ToggleDarkMode;
