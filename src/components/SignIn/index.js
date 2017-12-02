import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {
  Card,
  Divider,
  Form,
  Header,
  Icon,
  Button,
  Input
} from 'semantic-ui-react';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const SignInPage = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <SignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <Card centered className='vCard'>
        <Card.Content>
          <Header as='h2' icon textAlign='center'>
            <Icon name='user' circular />
            <Header.Content>
              Sign In
            </Header.Content>
          </Header>
          <Divider section />
          <Form onSubmit={this.onSubmit}>
            <Form.Field>
              <label>Email:</label>
              <Input
                value={email}
                onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
                type="text"
                placeholder="Email Address"
              />
            </Form.Field>
            <Form.Field>
              <label>Email:</label>
              <Input
                value={password}
                onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
                type="password"
                placeholder="Password"
              />
            </Form.Field>
            <Button
              disabled={isInvalid}
              fluid
              primary
              type='submit'
            >
              Submit
            </Button>
            { error && <p>{error.message}</p> }
          </Form>
        </Card.Content>
      </Card>
    );
  }
}

export default withRouter(SignInPage);

export {
  SignInForm,
};
