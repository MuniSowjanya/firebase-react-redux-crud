import React, { Component } from 'react';
import { Button, Menu } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import { auth } from '../../fire';

export default class AdminMenu extends Component {
  state = { redirect: false };

  handleItemClick = () => {
    auth.signOut().then((user) => {
      this.setState({ redirect: true })
    });
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />
    }

    return (
      <Menu pointing secondary>
        <Menu.Item name='Dashboard' active />
        <Menu.Menu position='right'>
          <Button onClick={() => this.handleItemClick()} >
            Logout
          </Button>
        </Menu.Menu>
      </Menu>
    );
  }
}
