import React from 'react';
import { Card, CardContent, Typography, makeStyles, List, ListItem, ListItemText, Grid, Tabs, Tab } from '@material-ui/core';
import { FilterTool } from '~/models';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '1rem 0',
  },
  annotation: {
    fontSize: 16,
    whiteSpace: 'break-spaces',
  },
  gridContainer: {
  },
  heading: {
    margin: '1rem 0',
  },
  tabs: {
    margin: '-1rem -1rem 2rem',
  }
});

interface Props {
  tool: FilterTool;
}

const createListItem = (primary: string, secondary: string) => {
  if (primary) {
    return (
      <ListItem>
        <ListItemText primary={primary} secondary={secondary} />
      </ListItem>
    )
  }

  return null;
} 

const Filter = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const mode = props.tool?.Properties?.Configuration?.Mode;
  const { Operand, ...otherOperands } = props.tool?.Properties?.Configuration?.Simple?.Operands || {};

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Tabs className={classes.tabs} value={value} onChange={(_, index) => setValue(index)}>
          <Tab label="Overview" />
          <Tab label="XML" />
        </Tabs>
        {value === 0 ? <div>
          <Typography variant="h4" component="h4" gutterBottom>
            Filter
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Tool ID: {props.tool.ToolID}
          </Typography>

          <Typography className={classes.heading} color="textSecondary" gutterBottom>
            Annotations
          </Typography>
          <Typography className={classes.annotation} gutterBottom>
            {props.tool?.Properties?.Annotation?.Annotation}
          </Typography>

          <Typography className={classes.heading} color="textSecondary" gutterBottom>
            Settings
          </Typography>
          <List>{createListItem(mode, 'Mode')}</List>
          <List>{createListItem(props.tool?.Properties?.Configuration?.Expression, 'Expression')}</List>
          <Grid className={classes.gridContainer} container spacing={3}>
            <Grid item xs={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.Simple?.Field, 'Field')}</List> 
            </Grid>
            <Grid item xs={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.Simple?.Operator, 'Operator')}</List> 
            </Grid>
            <Grid item xs={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.Simple?.Operands?.Operand, 'Operand')}</List> 
            </Grid>
          </Grid>
          {mode === 'Simple' ? (
            <>
            <Typography color="textSecondary" gutterBottom>
              Other Operands
            </Typography>
            <Grid className={classes.gridContainer} container spacing={3}>
              {Object.keys(otherOperands).map((key) => (
                <Grid item xs={6} sm={3} key={key}>
                  <List>{createListItem(otherOperands?.[key], key)}</List>
                </Grid>
              ))}
            </Grid>
            </>
          ) : null}
        </div>
        :
        <Typography className={classes.annotation} gutterBottom>
          {props.tool?.ToolXML}
        </Typography>
      }
      </CardContent>
    </Card>
  );
};

export default Filter;
