import { auth } from '../fire';
import store from '../store';

import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';

export const login = (values) => {
  const { email, password } = values;
  auth.signInWithEmailAndPassword(email, password).then((user) => {
    if (user && user.email) {
      store.dispatch({ type: LOGIN_SUCCESS, payload: user });
    }
  }).catch((error) => {
    store.dispatch({ type: LOGIN_FAIL, payload: error});
  });
};

export const logout = () => {
  auth.signOut();
  store.dispatch({ type: LOGOUT });
}
