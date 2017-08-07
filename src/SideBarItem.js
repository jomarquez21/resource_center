// Dependencies
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {MenuItem} from 'material-ui';

class SideBarItem extends Component {
  render() {
    return (
      <NavLink
        activeClassName='active'
        to={this.props.linkTo}
        >
        <MenuItem
          primaryText={this.props.primaryText}
          onTouchTap={this.props.handleClose}
          />
      </NavLink>
    );
  }
}

export default SideBarItem;