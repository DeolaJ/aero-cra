/* eslint-disable no-undef */
const user = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user'))
  : '';

const token = localStorage.getItem('user')
  ? JSON.parse(localStorage.getItem('user')).token
  : '';

export const defaultState = {
  user: '' || user,
  token: '' || token,
  loading: false,
  errorMessage: null,
};

export const AuthReducer = (initialState = defaultState, action) => {
  switch (action.type) {
    case 'REQUEST_SIGNUP': {
      return {
        ...initialState,
        loading: true,
      };
    }

    case 'REQUEST_LOGIN': {
      return {
        ...initialState,
        loading: true,
      };
    }

    case 'SIGNUP_SUCCESS': {
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.user.token,
        loading: false,
      };
    }

    case 'LOGIN_SUCCESS': {
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.user.token,
        loading: false,
      };
    }

    case 'LOGOUT': {
      return {
        ...initialState,
        user: '',
        token: '',
      };
    }

    case 'SIGNUP_ERROR': {
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    }

    case 'LOGIN_ERROR': {
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error,
      };
    }

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};
