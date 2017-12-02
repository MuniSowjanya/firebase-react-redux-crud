import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Menu } from 'semantic-ui-react';

import SignOutButton from '../SignOut';

const Navigation = ({ authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

const NavigationAuth = () =>
  <Menu>
    <Menu.Item>
      <Link to="/home">Home</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/account">Account</Link>
    </Menu.Item>
    <Menu.Menu position='right'>
      <SignOutButton />
    </Menu.Menu>
  </Menu>

const NavigationNonAuth = () =>
  <ul>
    <li><Link to="/">Landing</Link></li>
    <li><Link to="/signin">Sign In</Link></li>
  </ul>

const mapStateToProps = (state) => ({
  authUser: state.sessionState.authUser,
});

export default connect(mapStateToProps)(Navigation);
