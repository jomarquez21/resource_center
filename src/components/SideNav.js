// Dependencies
import React, { Component } from 'react';
import {Drawer, AppBar} from 'material-ui';

// Components
import SideBarItem from './SideBarItem';

const links = [
  {isExact: true, linkTo: '/', text: 'Home'},
  {isExact: true, linkTo: '/logos', text: 'Logos'},
  {isExact: true, linkTo: '/posters', text: 'Posters'},
  {isExact: true, linkTo: '/letterhead', text: 'Letterhead'},
  {isExact: true, linkTo: '/share-a-story', text: 'Share a Story'},
  {isExact: true, linkTo: '/service-request-form', text: 'Service Request Form'},
  {isExact: true, linkTo: '/tutorial', text: 'Tutorial'},
]

class SideNav extends Component {
  state = {
    open: false
  }

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
      <div>
        <AppBar
          title="Resource Center"
          onLeftIconButtonTouchTap={this.handleToggle}
          />

        <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
          {
            links.map((link, i) => {
              return (
                <SideBarItem 
                  linkTo={link.linkTo} 
                  handleClose={this.handleClose} 
                  primaryText={link.text} 
                  isExact={link.isExact} 
                  key={i} 
                />
              )
            })
          }
        </Drawer>
      </div>
    )
  }
}

export default SideNav;