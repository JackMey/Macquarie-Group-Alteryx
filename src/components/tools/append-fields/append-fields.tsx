import React from 'react';
import { Card, CardContent, Typography, makeStyles, List, ListItem, ListItemText, Grid, Tabs, Tab } from '@material-ui/core';
import { AppendFieldsTool } from '~/models';

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
  tool: AppendFieldsTool;
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

const AppendFields = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const selectFields = props.tool?.Properties?.Configuration?.SelectFields;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Tabs className={classes.tabs} value={value} onChange={(_, index) => setValue(index)}>
          <Tab label="Overview" />
          <Tab label="XML" />
        </Tabs>
        {value === 0 ? <div>
          <Typography variant="h4" component="h4" gutterBottom>
            Append Fields
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
              <List>{createListItem(props.tool?.Properties?.Configuration?.CartesianMode, 'Cartesian Mode')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.OrderChanged, 'Order Changed')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.CommaDecimal, 'Comma Decimal')}</List>
            </Grid>
          </Grid>

          {selectFields && (
            <>
              <Typography className={classes.heading} color="textSecondary" gutterBottom>
                Select Fields
              </Typography>
              {selectFields.map((field, i) => (
                <Grid className={classes.gridContainer} container spacing={3} key={i}>
                  {createGridItem(field.field, 'Field', 'field' + i)}
                  {createGridItem(field.selected, 'Selected', 'selected' + i)}
                  {createGridItem(field.input, 'Input', 'input' + i)}
                  {createGridItem(field.rename, 'Rename', 'rename' + i)}
                  {createGridItem(field.type, 'Type', 'type' + i)}
                  {createGridItem(field.size, 'Size', 'size' + i)}
                  {createGridItem(field.description, 'Description', 'description' + i)}
                </Grid>
              ))}
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

export default AppendFields;
