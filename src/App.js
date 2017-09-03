// Dependencies
import React, { Component } from 'react'

// Dependencies Material
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {MuiThemeProvider, getMuiTheme} from 'material-ui/styles'
import fusTheme from './components/fusTheme'

// Components
import SideNav from './components/SideNav'

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
import './styles/App.css';
import './styles/materialize-grid.css';
import './styles/responsive-text.css';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider muiTheme={getMuiTheme(fusTheme)}>
          <div>
            
            <SideNav />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/logos-poster" component={LogosPosters} />
              <Route path="/logos" component={Logos} />
              <Route path="/posters" component={Posters}/>
              <Route path="/letterhead" component={Letterhead} />
              <Route path="/share-a-story" component={Story} />
              <Route path="/planning-guide" component={PlanningGuide} />
              <Route path="/services" component={Services} />
              <Route path="/glossary" component={Glossary} />
              <Route path="/service-request-form" component={ServiceRequest} />
              <Route path="/tutorial" component={Tutorial} />
              <Route component={NotFound} />
            </Switch>

          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
