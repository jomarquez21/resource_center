// Dependencies
import React, { Component } from 'react';

// Dependencies Material
import { BrowserRouter, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles';
import fusTheme from './fusTheme';

// Components
import SideNav from './SideNav';

// Styles
import './App.css';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
          <div>
            
            <SideNav />

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
