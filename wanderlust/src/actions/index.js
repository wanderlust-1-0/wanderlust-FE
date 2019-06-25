import axios from 'axios';

// Sign Up Action Creator
export const SIGNUP_FETCHING = 'SIGNUP_FETCHING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signUp = accountData => dispatch => {
  dispatch({ type: SIGNUP_FETCHING });
  let api_path;
  accountData.isTourGuide
    ? (api_path = 'https://wunderlust-ac056.firebaseio.com/guides.json')
    : (api_path = 'https://wunderlust-ac056.firebaseio.com/tourists.json');
  return axios
    .post(api_path, accountData)
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

// Sign In Action Creator
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

// Update User Info Action Creator
export const UPDATE_USER_INFO_FETCHING = 'UPDATE_USER_INFO_FETCHING';
export const UPDATE_USER_INFO_SUCCESS = 'UPDATE_USER_INFO_SUCCESS';
export const UPDATE_USER_INFO_FAILURE = 'UPDATE_USER_INFO_FAILURE';

export const updateUserInfo = user => dispatch => {
  dispatch({ UPDATE_USER_INFO_FETCHING });
  axios
    .put('https://wunderlust-ac056.firebaseio.com/guides.json', user)
    .then(res => {
      console.log('Update User Info Response: ', res.config.data);
      dispatch({ type: UPDATE_USER_INFO_SUCCESS, payload: res.config.data });
    })
    .catch(err => {
      console.log('Update User Info Err: ', 'Could not update User');
      dispatch({
        type: UPDATE_USER_INFO_FAILURE,
        payload: 'Could not update User',
      });
    });
};
