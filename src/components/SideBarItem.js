// Dependencies
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
// import {MenuItem} from 'material-ui';
import {ListItem} from 'material-ui';

class SideBarItem extends Component {
  render() {
    return (
      <NavLink
        activeClassName='active'
        to={this.props.linkTo}
        exact={this.props.isExact}
        >
        <ListItem
          primaryText={this.props.primaryText}
          onTouchTap={this.props.handleClose}
          hoverColor="#eee"
          />
      </NavLink>
    );
  }
}

export default SideBarItem;