import React from 'react';
import { Card, CardContent, Typography, makeStyles, List, ListItem, ListItemText, Grid, Tabs, Tab } from '@material-ui/core';
import { RunningTotalTool } from '~/models';

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
  tool: RunningTotalTool;
}

const createListItem = (primary?: string, secondary?: string) => {
  if (primary && secondary) {
    return (
      <ListItem>
        <ListItemText primary={primary} secondary={secondary} />
      </ListItem>
    )
  }

  return null;
}

const createGridItem = (primary?: string, secondary?: string, key?: string) => {
  if (primary && secondary) {
    return (
      <Grid item xs={6} sm={3} key={key}>
        <List>{createListItem(primary, secondary)}</List>
      </Grid>
    )
  }

  return null;
}

const RunningTotal = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const groupByFields = props.tool?.Properties?.Configuration?.GroupByFields;
  const runningTotalFields = props.tool?.Properties?.Configuration?.RunningTotalFields;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Tabs className={classes.tabs} value={value} onChange={(_, index) => setValue(index)}>
          <Tab label="Overview" />
          <Tab label="XML" />
        </Tabs>
        {value === 0 ? <div>
          <Typography variant="h4" component="h4" gutterBottom>
            Running Total
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

          {groupByFields && (
            <>
              <Typography className={classes.heading} color="textSecondary" gutterBottom>
                Group By Fields
              </Typography>
              <Grid className={classes.gridContainer} container spacing={3}>
                {groupByFields.map((field, i) => (
                  createGridItem(field, 'Field', 'field' + i)
                ))}
              </Grid>
            </>
          )}

          {runningTotalFields && (
            <>
              <Typography className={classes.heading} color="textSecondary" gutterBottom>
                Running Total Fields
              </Typography>
              <Grid className={classes.gridContainer} container spacing={3}>
                {runningTotalFields.map((field, i) => (
                  createGridItem(field, 'Field', 'field' + i)
                ))}
              </Grid>
            </>
          )}
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

export default RunningTotal;
