// Dependencies
import React, { Component } from 'react';

// Dependencies Material
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import injectTapEventPlugin from 'react-tap-event-plugin';

import logo from './logo.svg';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  state = {
    open: false
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div className="App">
        <AppBar
          title="Title"
          onLeftIconButtonTouchTap={this.handleToggle}
          />
        <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
          <MenuItem>Menu Item</MenuItem>
          <MenuItem>Menu Item 2</MenuItem>
        </Drawer>

      </div>
    );
  }
}

export default App;
