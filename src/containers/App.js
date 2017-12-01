import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Loader } from 'semantic-ui-react';
import { Route, Redirect } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import Login from '../components/Auth/Login';

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

  render()  {
    return (
      <div>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' render={(props) => {
          return <Login loggedIn={this.props.loggedIn} {...props} />
        }} />
        <ProtectedRoute
          exact
          path='/admin'
          authed={this.props.loggedIn}
          component={Dashboard}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: state.auth.loggedIn
  };
}

export default connect(mapStateToProps)(App);
