import Axios from 'axios';

export const SIGNIN_FETCHING = 'SIGNIN_FETCHING';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export const signin = accountData => dispatch => {
  dispatch({ type: SIGNIN_FETCHING });
  return Axios.post(
    'https://wunderlust-ac056.firebaseio.com/users.json',
    accountData,
  )
    .then(response => {
      localStorage.setItem('authentication_token', 'token');
      dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: SIGNIN_FAILURE, payload: 'Signin failed.' });
    });
};
