import React from 'react';
import { Card, CardContent, Typography, makeStyles, List, ListItem, ListItemText, Grid, Tabs, Tab } from '@material-ui/core';
import { MultiRowFormulaTool } from '~/models';

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
  tool: MultiRowFormulaTool;
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

const MultiRowFormula = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const groupByFields = props.tool?.Properties?.Configuration?.GroupByFields;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Tabs className={classes.tabs} value={value} onChange={(_, index) => setValue(index)}>
          <Tab label="Overview" />
          <Tab label="XML" />
        </Tabs>
        {value === 0 ? <div>
          <Typography variant="h4" component="h4" gutterBottom>
            Multi Row Formula
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
            Options
          </Typography>
          <Grid className={classes.gridContainer} container spacing={3}>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.UpdateField, 'Update Field')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.UpdateFieldName, 'Update Field Name')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.CreateFieldName, 'Create Field Name')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.CreateFieldType, 'Create Field Type')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.CreateFieldSize, 'Create Field Size')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.OtherRows, 'Other Rows')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.NumRows, 'Number of Rows')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.Expression, 'Expression')}</List>
            </Grid>
          </Grid>

          {groupByFields && (
            <>
              <Typography className={classes.heading} color="textSecondary" gutterBottom>
                Group By Fields
              </Typography>
              <Grid className={classes.gridContainer} container spacing={3}>
                {groupByFields.map((group) => (
                  <Grid item xs={6} sm={3} key={group}>
                    <List>{createListItem(group, 'Field')}</List>
                  </Grid>
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

export default MultiRowFormula;
