import React from 'react';
import { Card, CardContent, Typography, makeStyles, List, ListItem, ListItemText, Grid, Tabs, Tab } from '@material-ui/core';
import { FindReplaceTool } from '~/models';

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
  tool: FindReplaceTool;
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

const FindReplace = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const replaceAppendFields = props.tool?.Properties?.Configuration?.ReplaceAppendFields;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Tabs className={classes.tabs} value={value} onChange={(_, index) => setValue(index)}>
          <Tab label="Overview" />
          <Tab label="XML" />
        </Tabs>
        {value === 0 ? <div>
          <Typography variant="h4" component="h4" gutterBottom>
            Find Replace
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
              <List>{createListItem(props.tool?.Properties?.Configuration?.FieldFind, 'FieldFind')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.FieldSearch, 'FieldSearch')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.ReplaceFoundField, 'ReplaceFoundField')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.FindMode, 'FindMode')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.NoCase, 'NoCase')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.MatchWholeWord, 'MatchWholeWord')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.ReplaceMode, 'ReplaceMode')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.ReplaceMultipleFound, 'ReplaceMultipleFound')}</List>
            </Grid>
          </Grid>

          {replaceAppendFields && (
            <>
              <Typography className={classes.heading} color="textSecondary" gutterBottom>
                Replace Append Fields
              </Typography>
              <Grid className={classes.gridContainer} container spacing={3}>
                {replaceAppendFields.map((field) => (
                  <Grid item xs={6} sm={3} key={field}>
                    <List>{createListItem(field, 'Field')}</List>
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

export default FindReplace;
