/* eslint-disable no-console */
/* eslint-disable no-undef */
const BASE_URL = process.env.APP_BASE_URL;

export const signUpUser = async (dispatch, data) => {
  dispatch({
    type: 'REQUEST_SIGNUP',
  });
  return fetch(
    `${BASE_URL}/signup`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response));
        dispatch({
          type: 'SIGNUP_SUCCESS',
          payload: response,
        });
        return response;
      }
      return dispatch({
        type: 'SIGNUP_ERROR',
        error: response.errors[0],
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: 'SIGNUP_ERROR',
        error,
      });
    });
};

export const loginUser = async (dispatch, data) => {
  dispatch({
    type: 'REQUEST_LOGIN',
  });
  return fetch(
    `${BASE_URL}/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    },
  )
    .then((response) => response.json())
    .then((response) => {
      if (response.user) {
        localStorage.setItem('user', JSON.stringify(response));
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: response,
        });
        return response;
      }
      return dispatch({
        type: 'LOGIN_ERROR',
        error: response.errors[0],
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: 'LOGIN_ERROR',
        error,
      });
    });
};

export const logout = async (dispatch) => {
  dispatch({
    type: 'LOGOUT',
  });
  localStorage.removeItem('user');
};

export default {
  signUpUser,
  loginUser,
  logout,
};
