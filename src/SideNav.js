import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {Drawer, MenuItem, AppBar} from 'material-ui';

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
  		<div>
  			<AppBar
          title="Title"
          onLeftIconButtonTouchTap={this.handleToggle}
          />

        <Drawer docked={false} open={this.state.open} onRequestChange={(open) => this.setState({open})}>
        	{
        		links.map((link, i) => <SideBarItem link={link.linkTo} text={link.text} isExact={link.isExact} key={i} />)
        	}
        </Drawer>
  		</div>
  	)
  }
}

export default SideNav;