import React from 'react';
import { Card, CardContent, Typography, makeStyles, List, ListItem, ListItemText, Grid, Tabs, Tab } from '@material-ui/core';
import { DbFileInputTool } from '~/models';

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
  tool: DbFileInputTool;
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

const DbFileInput = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const formatSpecificOptions = props.tool?.Properties?.Configuration?.FormatSpecificOptions;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Tabs className={classes.tabs} value={value} onChange={(_, index) => setValue(index)}>
          <Tab label="Overview" />
          <Tab label="XML" />
        </Tabs>
        {value === 0 ? <div>
          <Typography variant="h4" component="h4" gutterBottom>
            DbFileInput
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

          <Typography color="textSecondary" gutterBottom>
            File
          </Typography>
          <List>
            {createListItem(props.tool?.Properties?.Configuration?.File, 'File')}
          </List>

          <Typography color="textSecondary" gutterBottom>
            Format Specific Options
          </Typography>
          <Grid className={classes.gridContainer} container spacing={3}>
            {Object.keys(formatSpecificOptions).map((key) => (
              <Grid item xs={6} sm={3} key={key}>
                <List>{createListItem(formatSpecificOptions?.[key], key)}</List>
              </Grid>
            ))}
          </Grid>

          <Typography className={classes.heading} color="textSecondary" gutterBottom>
            Meta Data
          </Typography>
          {props.tool?.Properties?.MetaInfo?.map((info, i) => (
            <Grid className={classes.gridContainer} container spacing={3} key={i}>
              <Grid item xs={6} sm={3} key={'name' + i}>
                <List>{createListItem(info.name, 'Field Name')}</List>
              </Grid>
              <Grid item xs={6} sm={3} key={'source' + i}>
                <List>{createListItem(info.source, 'Source')}</List>
              </Grid>
              <Grid item xs={6} sm={3} key={'type' + i}>
                <List>{createListItem(info.type, 'Type')}</List>
              </Grid>
              <Grid item xs={6} sm={3} key={'size' + i}>
                <List>{createListItem(info.size, 'Size')}</List>
              </Grid>
            </Grid>
          ))}
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

export default DbFileInput;
