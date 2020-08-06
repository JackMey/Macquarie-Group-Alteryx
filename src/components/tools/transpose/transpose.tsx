import React from 'react';
import { Card, CardContent, Typography, makeStyles, List, ListItem, ListItemText, Grid, Tabs, Tab } from '@material-ui/core';
import { TransposeTool } from '~/models';

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
  tool: TransposeTool;
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

const Transpose = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const keyFields = props.tool?.Properties?.Configuration?.KeyFields;
  const dataFields = props.tool?.Properties?.Configuration?.DataFields;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Tabs className={classes.tabs} value={value} onChange={(_, index) => setValue(index)}>
          <Tab label="Overview" />
          <Tab label="XML" />
        </Tabs>
        {value === 0 ? <div>
          <Typography variant="h4" component="h4" gutterBottom>
            Transpose
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

          {keyFields && (
            <>
              <Typography className={classes.heading} color="textSecondary" gutterBottom>
                Key Fields
              </Typography>
              <Grid className={classes.gridContainer} container spacing={3}>
                {keyFields.map((field, i) => (
                  createGridItem(field, 'Field', 'field' + i)
                ))}
              </Grid>
            </>
          )}

          {dataFields && (
            <>
              <Typography className={classes.heading} color="textSecondary" gutterBottom>
                Key Fields
              </Typography>
              <Grid className={classes.gridContainer} container spacing={3}>
                {dataFields.map((field, i) => (
                  createGridItem(field.selected, field.field, 'field' + i)
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

export default Transpose;
