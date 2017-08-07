// Dependencies
import React, { Component } from 'react';

// Dependencies Material
import { BrowserRouter, Route } from 'react-router-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles';
import fusTheme from './fusTheme';

// Components
import SideNav from './SideNav';
/* Import Views */
import Home from './views/Home'
import LogosPosters from './views/LogosPosters'
import Logos from './views/Logos'
import Posters from './views/Posters'
import Letterhead from './views/Letterhead'
import Story from './views/Story'
import PlanningGuide from './views/PlanningGuide'
import Services from './views/Services'
import Glossary from './views/Glossary'
import ServiceRequest from './views/ServiceRequest'
import Tutorial from './views/Tutorial'
import NotFound from './views/NotFound'

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

            <Route exact path="/" component={Home} />
            <Route exact path="/logos-poster" component={LogosPosters} />
            <Route exact path="/logos" component={Logos} />
            <Route exact path="/posters" component={Posters}/>
            <Route exact path="/letterhead" component={Letterhead} />
            <Route exact path="/share-a-story" component={Story} />
            <Route exact path="/planning-guide" component={PlanningGuide} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/glossary" component={Glossary} />
            <Route exact path="/service-request-form" component={ServiceRequest} />
            <Route exact path="/tutorial" component={Tutorial} />
            <Route component={NotFound} />

          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
