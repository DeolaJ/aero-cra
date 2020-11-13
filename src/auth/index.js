import { loginUser, logout, signUpUser } from './actions';
import { AuthProvider, useAuthDispatch, useAuthState } from './auth-context';

export {
  AuthProvider,
  useAuthState,
  useAuthDispatch,
  loginUser,
  signUpUser,
  logout,
};
