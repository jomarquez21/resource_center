// Dependencies
import React, { Component } from 'react';

// Dependencies Material
import { BrowserRouter, Route, NavLink } from 'react-router-dom';

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

  SideBarItem = ({ link, text, isExact }) => {
    return (
      <NavLink activeClassName="active" exact={isExact} to={link} >
        <MenuItem onTouchTap={this.handleClose} primaryText={text} />
      </NavLink>
    );
  }

  render() {
    const SideBarItem = this.SideBarItem;
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
          <div>
            <AppBar
              title="Title"
              onLeftIconButtonTouchTap={this.handleToggle}
              />

            <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
              <SideBarItem link="/" text="Home" isExact />
              <SideBarItem link="/logos" text="Logos" />
              <SideBarItem link="/posters" text="Posters" />
              <SideBarItem link="/letterhead" text="Letterhead" />
              <SideBarItem link="/share-a-story" text="Share a Story" />
              <SideBarItem link="/service-request-form" text="Service Request Form" />
              <SideBarItem link="/tutorial" text="Tutorial" />
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
