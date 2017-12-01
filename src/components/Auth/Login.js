import React from 'react';
import { Redirect } from 'react-router-dom';
import {
  Card,
  Divider,
  Form,
  Button
} from 'semantic-ui-react';
import { auth } from '../../fire';
import { user } from '../../api';

class Login extends React.Component {

  onSubmit = (event) => {
    event.preventDefault();
    const email = this.email.value;
    const password = this.password.value;
    user.login(email, password);
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/admin' } };
    if (this.props.loggedIn) {
      return <Redirect to={from} />
    }
    return (
      <section>
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
      </section>
    );
  }
}

export default Login;
