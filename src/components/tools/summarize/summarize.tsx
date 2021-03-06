import React from 'react';
import { Card, CardContent, Typography, makeStyles, List, ListItem, ListItemText, Grid, Tabs, Tab } from '@material-ui/core';
import { SummarizeTool } from '~/models';

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
  tool: SummarizeTool;
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

const Summarize = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Tabs className={classes.tabs} value={value} onChange={(_, index) => setValue(index)}>
          <Tab label="Overview" />
          <Tab label="XML" />
        </Tabs>
        {value === 0 ? <div>
          <Typography variant="h4" component="h4" gutterBottom>
            Summarize
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
            Summarize Fields
          </Typography>
          {props.tool?.Properties?.Configuration?.SummarizeFields?.map((info, i) => (
            <Grid className={classes.gridContainer} container spacing={3} key={i}>
              <Grid item xs={4} key={'field' + i}>
                <List>{createListItem(info.field, 'Field Name')}</List>
              </Grid>
              <Grid item xs={4} key={'action' + i}>
                <List>{createListItem(info.action, 'Action')}</List>
              </Grid>
              <Grid item xs={4} key={'rename' + i}>
                <List>{createListItem(info.rename, 'Rename')}</List>
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

export default Summarize;
