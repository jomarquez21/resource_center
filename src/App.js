// Dependencies
import React, { Component } from 'react';

// Dependencies Material
import { BrowserRouter, Route, Link } from 'react-router-dom';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

import injectTapEventPlugin from 'react-tap-event-plugin';
import {MuiThemeProvider} from 'material-ui/styles/';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import fusTheme from './fusTheme';

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
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
          <div>
            <AppBar
              title="Title"
              onLeftIconButtonTouchTap={this.handleToggle}
              />
            <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
              <Link to="/" >
                <MenuItem onTouchTap={this.handleClose}>
                  Home
                </MenuItem>
              </Link>
              <Link to="/logos" >
                <MenuItem onTouchTap={this.handleClose}>
                  Logos
                </MenuItem>
              </Link>
              <Link to="/posters" >
                <MenuItem onTouchTap={this.handleClose}>
                  Posters
                </MenuItem>
              </Link>
              <Link to="/letterhead" >
                <MenuItem onTouchTap={this.handleClose}>
                  Letterhead
                </MenuItem>
              </Link>
              <Link to="/share-a-story" >
                <MenuItem onTouchTap={this.handleClose}>
                  Share a Story
                </MenuItem>
              </Link>
              <Link to="/service-request-form" >
                <MenuItem onTouchTap={this.handleClose}>
                  Service Request Form
                </MenuItem>
              </Link>
              <Link to="/tutorial" >
                <MenuItem onTouchTap={this.handleClose}>
                  Tutorial
                </MenuItem>
              </Link>
            </Drawer>

            <Route exact path="/" render={() => <h1>Home view</h1>} />
            <Route exact path="/logos" render={() => <h1>logos view</h1>} />
            <Route exact path="/posters" render={() => <h1>posters view</h1>} />
            <Route exact path="/letterhead" render={() => <h1>letterhead view</h1>} />
            <Route exact path="/share-a-story" render={() => <h1>Share a Story view</h1>} />
            <Route exact path="/service-request-form" render={() => <h1>Service Request view</h1>} />
            <Route exact path="/tutorial" render={() => <h1>Tutorial view</h1>} />

          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
