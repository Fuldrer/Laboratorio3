import React from 'react';
import Switch from '@material-ui/core/Switch';
import purple from '@material-ui/core/colors/purple';




const styles = theme => ({
    colorSwitchBase: {
      color: purple[300],
      '&$colorChecked': {
        color: purple[500],
        '& + $colorBar': {
          backgroundColor: purple[500],
        },
      },
    }
});
class Switches extends React.Component {
    state = {
      checkedA: true,
      checkedB: false,
    };
  
    handleChange = name => event => {
      this.setState({ [name]: event.target.checked });
    };
  
    render() {
      return (
        <div>
          <Switch
            checked={this.state.checkedA}
            onChange={this.handleChange('checkedA')}
            value="checkedA"
            color = "secondary"
          />
          <Switch
            checked={this.state.checkedB}
            onChange={this.handleChange('checkedB')}
            value="checkedB"
            color="primary"
          />
          <Switch value="checkedC" color = "secondary"/>
          <Switch value="checkedD" color="primary" />
          <Switch checked value="checkedE" color = "secondary" />
          <Switch defaultChecked value="checkedF" color="default" />
        </div>
      );
    }
  }
  
  export default Switches;