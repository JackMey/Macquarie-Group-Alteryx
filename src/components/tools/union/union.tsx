import React from 'react';
import { Card, CardContent, Typography, makeStyles, List, ListItem, ListItemText, Grid, Tabs, Tab } from '@material-ui/core';
import { UnionTool } from '~/models';

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
  tool: UnionTool;
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

const Union = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const outputOrder = props.tool?.Properties?.Configuration?.OutputOrder;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Tabs className={classes.tabs} value={value} onChange={(_, index) => setValue(index)}>
          <Tab label="Overview" />
          <Tab label="XML" />
        </Tabs>
        {value === 0 ? <div>
          <Typography variant="h4" component="h4" gutterBottom>
            Union
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
            Mode
          </Typography>
          <Grid className={classes.gridContainer} container spacing={3}>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.Mode, 'Mode')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.OutputMode, 'Output Mode')}</List>
            </Grid>
          </Grid>

          {outputOrder && <Grid className={classes.gridContainer} container spacing={3}>
            {outputOrder.map((order, i) => (
              <Grid item xs={6} sm={3} key={order}>
                <List>{createListItem(`Connection ${order}`, `Order ${i + 1}`)}</List>
              </Grid>
            ))}
          </Grid>}
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

export default Union;
