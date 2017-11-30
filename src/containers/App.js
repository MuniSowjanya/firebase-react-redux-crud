import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react';
import {
  BrowserRouter, Route, Redirect
} from 'react-router-dom';

import { auth } from '../fire';
import './App.css';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from '../components/Auth/Login';
import Logout from '../components/Auth/Logout';

const ProtectedRoute = ({ component: Component, authed, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => authed
      ? <Component {...props} {...rest} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location }}} />}
    />
  );
}

class App extends Component {
  state = {
    isAuthenticated: false,
    currentUser: null,
    loading: true
  }

  setCurrentUser = (user) => {
    if (user) {
      this.setState({
        currentUser: user,
        authenticated: true
      })
    } else {
      this.setState({
        currentUser: null,
        authenticated: false
      })
    }
  }

  componentDidMount = () => {
    this.removeAuthListener = auth.onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          isAuthenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          isAuthenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  componentWillUnmount() {
    this.removeAuthListener();
  }

  render()  {
    if (this.state.loading) {
      return (
        <Loader size='medium' />
      );
    }
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Home} />
            <Route exact path='/logout' component={Logout} />
            <Route exact path='/login' render={(props) => {
              return <Login setCurrentUser={this.setCurrentUser} {...props} />
            }} />
            <ProtectedRoute
              exact
              path='/admin'
              authed={this.state.authenticated}
              requiredAuth={true}
              component={Dashboard}
            />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
