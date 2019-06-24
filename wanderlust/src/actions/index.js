import axios from 'axios';

export const SIGNUP_FETCHING = 'SIGNUP_FETCHING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signUp = accountData => dispatch => {
  dispatch({ type: SIGNUP_FETCHING });
  return axios
    .post('https://wunderlust-ac056.firebaseio.com/users.json', accountData)
    .then(response => {
      console.log('RESPONSE', response.config.data);
      // localStorage.setItem('authentication_token', 'loggedIn');
      // /* dispatch({ type: SIGNUP_SUCCESS, payload: response.data }); */
      dispatch({ type: SIGNUP_SUCCESS, payload: response.config.data });
    })
    .catch(error => {
      dispatch({ type: SIGNUP_FAILURE, payload: 'Signin failed.' });
    });
};

export const SIGNIN_FETCHING = 'SIGNIN_FETCHING';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export const signin = () => dispatch => {
  dispatch({ type: SIGNIN_FETCHING });
  return axios
    .get('https://wunderlust-ac056.firebaseio.com/authentication_token.json')
    .then(res => {
      console.log('token response: ', res.data);
      localStorage.setItem('auth-token', res.data);
      dispatch({ type: SIGNIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('token err: ', 'token err');
      dispatch({ type: SIGNIN_FAILURE, payload: 'token err' });
    });
};
