import React from 'react';
import { Card, CardContent, Typography, makeStyles, List, ListItem, ListItemText, Grid, Tabs, Tab } from '@material-ui/core';
import { JoinTool } from '~/models';

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
  tool: JoinTool;
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

const Join = (props: Props) => {
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
            Join
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
            Join
          </Typography>
          <Grid className={classes.gridContainer} container spacing={3}>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.JoinInfo?.Left, 'Left')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.JoinInfo?.Right, 'Right')}</List>
            </Grid>
          </Grid>

          <Typography className={classes.heading} color="textSecondary" gutterBottom>
            Settings
          </Typography>
          <List>
            {createListItem(props.tool?.Properties?.Configuration?.OrderChanged, 'OrderChanged')}
          </List>
          <List>
            {createListItem(props.tool?.Properties?.Configuration?.CommaDecimal, 'CommaDecimal')}
          </List>

          <Typography color="textSecondary" gutterBottom>
            Select Fields
          </Typography>
          <Grid className={classes.gridContainer} container spacing={3}>
            {selectFields.map((key) => (
              <React.Fragment key={key.field}>
                <Grid item xs={6} sm={3}>
                  <List>{createListItem(key.field, 'Field')}</List>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <List>{createListItem(key.selected, 'Selected')}</List>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <List>{createListItem(key.rename!, 'Rename')}</List>
                </Grid>
                <Grid item xs={6} sm={3}>
                  <List>{createListItem(key.description!, 'Description')}</List>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
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

export default Join;
