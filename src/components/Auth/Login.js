import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  Card,
  Divider,
  Form,
  Button
} from 'semantic-ui-react';
import { auth } from '../../fire';

class Login extends React.Component {

  state = {
    redirectToReferrer: false
  };

  onSubmit = (event) => {
    event.preventDefault();
    const email = this.email.value;
    const password = this.password.value;

    auth.signInWithEmailAndPassword(email, password).then((user) => {
      if (user && user.email) {
        this.props.setCurrentUser(user);
        this.setState({ redirectToReferrer: true });
      }
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/admin' } };
    if (this.state.redirectToReferrer) {
      return <Redirect to={from} />
    }
    return (
       <div className='welcomeContainer'>

        <div className='container mainContainer'>
          <div className='authForm'>
            <Card centered className='vCard'>
              <h1>Sign In</h1>
              <Divider />
              <Form
                onSubmit={(event) => this.onSubmit(event)}
                ref={form => this.form = form}
              >
                <div className='form-group'>
                  <input
                    label='Email'
                    placeholder='john@doe.com'
                    name='email'
                    ref={email => this.email = email}
                    type='email'
                  />
                </div>
                <div className='form-group'>
                  <input
                    label='Password'
                    placeholder='*********'
                    name='password'
                    ref={pass => this.password = pass}
                    type='password'
                  />
                </div>

                <Button
                  className='btnCommon btnPrimary'
                  type='submit'>Submit</Button>
              </Form>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
