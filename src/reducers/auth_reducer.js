import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from '../actions/types';

const initialState = {
  loggedIn: false,
  user: null,
  error: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case LOGIN_SUCCESS:
      return { loggedIn: true, user: action.payload };
    case LOGIN_FAIL:
      return { loggedIn: false, error: action.payload };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
}
