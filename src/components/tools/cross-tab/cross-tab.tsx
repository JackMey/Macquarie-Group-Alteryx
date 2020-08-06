import React from 'react';
import { Card, CardContent, Typography, makeStyles, List, ListItem, ListItemText, Grid, Tabs, Tab } from '@material-ui/core';
import { CrossTabTool } from '~/models';

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
  tool: CrossTabTool;
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

const CrossTab = (props: Props) => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const groupFields = props.tool?.Properties?.Configuration?.GroupFields;
  const methods = props.tool?.Properties?.Configuration?.Methods;
  const recordInfo = props.tool?.Properties?.MetaInfo?.RecordInfo;
  const sortInfo = props.tool?.Properties?.MetaInfo?.SortInfo;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Tabs className={classes.tabs} value={value} onChange={(_, index) => setValue(index)}>
          <Tab label="Overview" />
          <Tab label="XML" />
        </Tabs>
        {value === 0 ? <div>
          <Typography variant="h4" component="h4" gutterBottom>
            Cross Tab
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

          {groupFields && (
            <>
              <Typography className={classes.heading} color="textSecondary" gutterBottom>
                Group Fields
              </Typography>
              <Grid className={classes.gridContainer} container spacing={3}>
                {groupFields.map((group, i) => (
                  <Grid item xs={6} sm={3} key={group + i}>
                    <List>{createListItem(group, 'Field')}</List>
                  </Grid>
                ))}
              </Grid>
            </>
          )}

          <Typography className={classes.heading} color="textSecondary" gutterBottom>
            Options
          </Typography>
          <Grid className={classes.gridContainer} container spacing={3}>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.HeaderField, 'Header Field')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.DataField, 'Data Field')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.Separator, 'Separator')}</List>
            </Grid>
            <Grid item xs={6} sm={3}>
              <List>{createListItem(props.tool?.Properties?.Configuration?.FieldSize, 'Field Size')}</List>
            </Grid>
          </Grid>

          {methods && (
            <>
              <Typography className={classes.heading} color="textSecondary" gutterBottom>
                Methods
              </Typography>
              <Grid className={classes.gridContainer} container spacing={3}>
                {methods.map((method, i) => (
                  <Grid item xs={6} sm={3} key={method + i}>
                    <List>{createListItem(method, 'Method')}</List>
                  </Grid>
                ))}
              </Grid>
            </>
          )}

          {recordInfo && (
            <>
              <Typography className={classes.heading} color="textSecondary" gutterBottom>
                Record Info
              </Typography>
              <Grid className={classes.gridContainer} container spacing={3}>
                {recordInfo.map((record, i) => (
                  <React.Fragment key={i}>
                    <Grid item xs={6} sm={3} key={i + 'field'}>
                      <List>{createListItem(record.name, 'Name')}</List>
                    </Grid>
                    <Grid item xs={6} sm={3} key={i + 'source'}>
                      <List>{createListItem(record.source, 'Source')}</List>
                    </Grid>
                    <Grid item xs={6} sm={3} key={i + 'size'}>
                      <List>{createListItem(record.size, 'Size')}</List>
                    </Grid>
                    <Grid item xs={6} sm={3} key={i + 'type'}>
                      <List>{createListItem(record.type, 'Type')}</List>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </>
          )}

          {sortInfo && (
            <>
              <Typography className={classes.heading} color="textSecondary" gutterBottom>
                Sort Info
              </Typography>
              {sortInfo.map((sort, i) => (
                <Grid className={classes.gridContainer} container spacing={3} key={i}>
                  <Grid item xs={6} sm={3}>
                    <List>{createListItem(sort.field, 'Field')}</List>
                  </Grid>
                  <Grid item xs={6} sm={3}>
                    <List>{createListItem(sort.order, 'Order')}</List>
                  </Grid>
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

export default CrossTab;
