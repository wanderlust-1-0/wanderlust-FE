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

// Tours

// Get all tours
export const FETCHING_TOURS_START = 'FETCH_TOURS_START';
export const FETCHING_TOURS_SUCCESS = 'FETCHING_TOURS_SUCCESS';
export const FETCHING_TOURS_FAILURE = 'FETCHING_TOURS_FAILURE';

export const getAllTours = () => dispatch => {
  dispatch({ type: FETCHING_TOURS_START });
  axios
    .get('')
    .then(res => {
      console.log('Get all tours: ', res.config.data);
      dispatch({ type: FETCHING_TOURS_SUCCESS, payload: res.config.data });
    })
    .then(err => {
      console.log('Get all tours err: ', 'get all tours err');
      dispatch({ FETCHING_TOURS_FAILURE, payload: 'get all tours err' });
    });
};

// Add a tour
export const ADD_TOUR_START = 'ADD_TOUR_START';
export const ADD_TOUR_SUCCESS = 'ADD_TOUR_SUCCESS';
export const ADD_TOUR_FAILURE = 'ADD_TOUR_FAILURE';

export const addTour = tour => dispatch => {
  dispatch({ type: ADD_TOUR_START });
  axios
    .post('', tour)
    .then(res => {
      console.log('add a tour: ', res.config.data);
      dispatch({ type: ADD_TOUR_SUCCESS, payload: res.config.data });
    })
    .then(err => {
      console.log('add a tour err: ', 'add a tour err');
      dispatch({ ADD_TOUR_FAILURE, payload: 'add a tour err' });
    });
};

// Update a tour
export const UPDATE_TOUR_START = 'UPDATE_TOUR_START';
export const UPDATE_TOUR_SUCCESS = 'UPDATE_TOUR_SUCCESS';
export const UPDATE_TOUR_FAILURE = 'UPDATE_TOUR_FAILURE';

export const updateTour = tour => dispatch => {
  dispatch({ type: UPDATE_TOUR_START });
  axios
    .put('', tour)
    .then(res => {
      console.log('Update a tour: ', res.config.data);
      dispatch({ type: UPDATE_TOUR_SUCCESS, payload: res.config.data });
    })
    .then(err => {
      console.log('Update a tour err: ', 'Update a tour err');
      dispatch({ UPDATE_TOUR_FAILURE, payload: 'Update a tour err' });
    });
};

// Delete a tour
export const DELETE_TOUR_START = 'DELETE_TOUR_START';
export const DELETE_TOUR_SUCCESS = 'DELETE_TOUR_SUCCESS';
export const DELETE_TOUR_FAILURE = 'DELETE_TOUR_FAILURE';

export const deleteTour = tour => dispatch => {
  dispatch({ type: DELETE_TOUR_START });
  axios
    .delete('', tour)
    .then(res => {
      console.log('Delete a tour: ', res.config.data);
      dispatch({ type: DELETE_TOUR_SUCCESS, payload: res.config.data });
    })
    .then(err => {
      console.log('Delete a tour err: ', 'Delete a tour err');
      dispatch({ DELETE_TOUR_FAILURE, payload: 'Delete a tour err' });
    });
};
