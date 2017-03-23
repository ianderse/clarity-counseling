import React, { Component } from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import ActionHome from 'material-ui/svg-icons/action/home';
import ActionAccountCircle from 'material-ui/svg-icons/action/account-circle';
import CommMailOutline from 'material-ui/svg-icons/communication/mail-outline';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

  toggleDrawer = () => this.setState({ open: !this.state.open });

  render() {
    return (
      <div>
        <AppBar
          title={this.props.title}
          iconElementRight={<FlatButton label="303.720.6221" />}
          onLeftIconButtonTouchTap={this.toggleDrawer}
        />
        <Drawer
          open={this.state.open}
          docked={false}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem
            containerElement={<Link to="/" />}
            primaryText="Home"
            leftIcon={<ActionHome />}
            onTouchTap={this.toggleDrawer}
          />
          <MenuItem
            containerElement={<Link to="/about" />}
            primaryText="About"
            leftIcon={<ActionAccountCircle />}
            onTouchTap={this.toggleDrawer}
          />
          <a href="mailto:ian@ianandersen.net?subject=Therapy">
            <MenuItem
              primaryText="E-Mail"
              leftIcon={<CommMailOutline />}
              onTouchTap={this.toggleDrawer}
            />
          </a>
        </Drawer>
      </div>
    );
  }
}
