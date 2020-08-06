import React from 'react';
import { Card, CardContent, Typography, makeStyles } from '@material-ui/core';
import { Tool } from '~/models';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '1rem 0',
  },
  xml: {
    fontSize: 14,
    whiteSpace: 'break-spaces',
  },
});

interface Props {
  tool: Tool;
}

const Unknown = (props: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h4" component="h4" gutterBottom>
        {props.tool.type}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Tool ID: {props.tool.ToolID}
        </Typography>
        <Typography className={classes.xml} gutterBottom>
          {props.tool.ToolXML}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Unknown;
