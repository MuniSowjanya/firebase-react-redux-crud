import { login, logout } from './actions/auth_actions';

export const user = {
  login: (email, password) => login({
    email, password
  }),

  logout: () => logout()
};
