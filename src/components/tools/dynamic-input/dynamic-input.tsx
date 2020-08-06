import React from 'react';
import { Card, CardContent, Typography, makeStyles, List, ListItem, ListItemText, Grid, Tabs, Tab } from '@material-ui/core';
import { DynamicInputTool } from '~/models';

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
  tool: DynamicInputTool;
}

const createListItem = (primary?: string, secondary?: string) => {
  if (primary && secondary) {
    return (
      <ListItem>
        <ListItemText primary={primary} secondary={secondary} />
      </ListItem>
    );
  }

  return null;
}

const createGridItem = (primary?: string, secondary?: string, key?: string) => {
  if (primary && secondary) {
    return (
      <Grid item xs={6} sm={3} key={key}>
        <List>{createListItem(primary, secondary)}</List>
      </Grid>
    );
  }

  return null;
}

const DynamicInput = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const configuration = props.tool?.Properties?.Configuration;
  const formatSpecificOptions = props.tool?.Properties?.FormatSpecificOptions;
  const modifications = props.tool?.Properties?.Modifications;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Tabs className={classes.tabs} value={value} onChange={(_, index) => setValue(index)}>
          <Tab label="Overview" />
          <Tab label="XML" />
        </Tabs>
        {value === 0 ? <div>
          <Typography variant="h4" component="h4" gutterBottom>
            Dynamic Input
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
            File
          </Typography>
          <List>{createListItem(configuration?.File, 'File')}</List>

          <Typography className={classes.heading} color="textSecondary" gutterBottom>
            Options
          </Typography>
          <Grid className={classes.gridContainer} container spacing={3}>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(configuration?.Mode, 'Mode')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(configuration?.ReadList_Field, 'Read List Field')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(configuration?.ReadList_Type, 'Read List Type')}</List>
            </Grid>
          </Grid>

          <Typography className={classes.heading} color="textSecondary" gutterBottom>
            Format Specific Options
          </Typography>
          <Grid className={classes.gridContainer} container spacing={3}>
            {createGridItem(formatSpecificOptions?.CodePage, 'Code Page')}
            {createGridItem(formatSpecificOptions?.Delimeter, 'Delimeter')}
            {createGridItem(formatSpecificOptions?.IgnoreErrors, 'Ignore Errors')}
            {createGridItem(formatSpecificOptions?.FieldLen, 'Field Len')}
            {createGridItem(formatSpecificOptions?.AllowShareWrite, 'Allow Share Write')}
            {createGridItem(formatSpecificOptions?.HeaderRow, 'Header Row')}
            {createGridItem(formatSpecificOptions?.IgnoreQuotes, 'Ignore Quotes')}
            {createGridItem(formatSpecificOptions?.ImportLine, 'Import Line')}
          </Grid>

          {modifications && (
            <>
              <Typography className={classes.heading} color="textSecondary" gutterBottom>
                Select Fields
              </Typography>
              {modifications?.map((modification, i) => (
                <Grid className={classes.gridContainer} container spacing={3} key={i}>
                  {createGridItem(modification.Action, 'Action', 'Action' + i)}
                  {createGridItem(modification.Field, 'Field', 'Field' + i)}
                  {createGridItem(modification.Annotation, 'Annotation', 'Annotation' + i)}
                  {Object.entries(modification)
                    .filter(([key]) => !['Field', 'Action', 'Annotation'].includes(key))
                    .map(([key, value]) => createGridItem(value, key, key + i))}
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

export default DynamicInput;
