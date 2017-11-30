import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';
import { auth } from '../../fire';

class Logout extends Component {
  state = {
    redirect: false
  }

  componentWillMount() {
    auth.signOut().then((user) => {
      this.setState({ redirect: true })
    })
  }

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />
    }

    return (
      <div style={{ textAlign: "center", position: "absolute", top: "25%", left: "50%" }}>
        <h3>Logging Out</h3>
        <Loader size='medium' />
      </div>
    )
  }
}

export default Logout
