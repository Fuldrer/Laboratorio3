import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Switch from './SControl'
import Grid from './Grid'
import Dialogs from './Dialogs'
import Cards from './Cards'

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="Selection Control" />
            <Tab label="Grid List" />
            <Tab label="Dialogs" />
            <Tab label="Button" />
            <Tab label="Cards" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><Switch></Switch></TabContainer>}
        {value === 1 && <TabContainer><Grid></Grid></TabContainer>}
        {value === 2 && <TabContainer><Dialogs></Dialogs></TabContainer>}
        {value === 3 && <TabContainer>Button</TabContainer>}
        {value === 4 && <TabContainer><Cards></Cards></TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
