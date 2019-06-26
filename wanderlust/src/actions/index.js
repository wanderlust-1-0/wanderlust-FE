import axios from 'axios';

// Sign Up Action Creator
export const SIGNUP_FETCHING = 'SIGNUP_FETCHING';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE';

export const signUp = accountData => dispatch => {
  dispatch({ type: SIGNUP_FETCHING });
  let api_path;
  accountData.isTourGuide
    ? (api_path = 'https://roger-wanderlust.herokuapp.com/createnewguide')
    : (api_path = 'https://roger-wanderlust.herokuapp.com/createnewtourist');
  return axios
    .post(api_path, accountData)
    .then(response => {
      console.log('RESPONSE', response.data);
      // localStorage.setItem('authentication_token', 'loggedIn');
      // /* dispatch({ type: SIGNUP_SUCCESS, payload: response.data }); */
      dispatch({ type: SIGNUP_SUCCESS, payload: response });
    })
    .catch(error => {
      dispatch({ type: SIGNUP_FAILURE, payload: 'Signin failed.' });
    });
};

// Sign In Action Creator
export const SIGNIN_FETCHING = 'SIGNIN_FETCHING';
export const SIGNIN_SUCCESS = 'SIGNIN_SUCCESS';
export const SIGNIN_FAILURE = 'SIGNIN_FAILURE';

export const signin = user => dispatch => {
  console.log('User Signin: ', user);
  let header = {
    headers: {
      "Authorization": `Basic ${btoa('client:secret')}`, 'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  console.log('This is the header: ');
  dispatch({ type: SIGNIN_FETCHING });
  return (
    axios
      .post('https://roger-wanderlust.herokuapp.com/oauth/token', `grant_type=password&username=${user.username}&password=${user.password}`, header
      )

      .then(res => {
        console.log('token response: ', res);
        localStorage.setItem('auth-token', res.data.access_token);
        dispatch({ type: SIGNIN_SUCCESS, payload: res.data });
      })
      .catch(err => {
        console.log('token err: ', err);
        dispatch({ type: SIGNIN_FAILURE, payload: err });
      })
  );
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
    .get('https://roger-wanderlust.herokuapp.com/tours/tours',
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('auth-token')}`
        }
      }
    )
    .then(res => {
      console.log('Get all tours: ', res.data);
      dispatch({ type: FETCHING_TOURS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('Get all tours err: ', 'get all tours err');
      dispatch({ type: FETCHING_TOURS_FAILURE, payload: 'get all tours err' });
    });
};


// Get single tours by id
export const FETCHING_SINGLETOUR_START = 'FETCH_SINGLETOUR_START';
export const FETCHING_SINGLETOUR_SUCCESS = 'FETCHING_SINGLETOUR_SUCCESS';
export const FETCHING_SINGLETOUR_FAILURE = 'FETCHING_SINGLETOUR_FAILURE';

export const getTourById = (id) => dispatch => {
  dispatch({ type: FETCHING_SINGLETOUR_START })
  axios
    .get(`https://roger-wanderlust.herokuapp.com/tours/tour/${id}`,
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('auth-token')}`
        }
      }
    )
    .then(res => {
      console.log('Get Single Tour: ', res.data)
      dispatch({ type: FETCHING_SINGLETOUR_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log('Get single tour err: ', err.response)
      dispatch({ type: FETCHING_SINGLETOUR_FAILURE, payload: err.response })
    })
}

// Add a tour
export const ADD_TOUR_START = 'ADD_TOUR_START';
export const ADD_TOUR_SUCCESS = 'ADD_TOUR_SUCCESS';
export const ADD_TOUR_FAILURE = 'ADD_TOUR_FAILURE';

export const addTour = tour => dispatch => {
  dispatch({ type: ADD_TOUR_START });
  axios
    .post('https://roger-wanderlust.herokuapp.com/tours/data/tours/add', {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('auth-token')}`
      }
    }, tour)
    .then(res => {
      console.log('add a tour: ', res.config.data);
      dispatch({ type: ADD_TOUR_SUCCESS, payload: res.config.data });
    })
    .then(err => {
      console.log('add a tour err: ', err.response);
      dispatch({ ADD_TOUR_FAILURE, payload: err.response });
    });
};

// Update a tour by id
export const UPDATE_TOUR_START = 'UPDATE_TOUR_START';
export const UPDATE_TOUR_SUCCESS = 'UPDATE_TOUR_SUCCESS';
export const UPDATE_TOUR_FAILURE = 'UPDATE_TOUR_FAILURE';

export const updateTour = id => dispatch => {
  dispatch({ type: UPDATE_TOUR_START });
  axios
    .put(`https://roger-wanderlust.herokuapp.comtours/data/tours/${id}`,
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('auth-token')}`
        }
      }
    )
    .then(res => {
      console.log('Update a tour: ', res.config.data);
      dispatch({ type: UPDATE_TOUR_SUCCESS, payload: res.config.data });
    })
    .then(err => {
      console.log('Update a tour err: ', err.response);
      dispatch({ UPDATE_TOUR_FAILURE, payload: err.response });
    });
};

// Delete a tour by id
export const DELETE_TOUR_START = 'DELETE_TOUR_START';
export const DELETE_TOUR_SUCCESS = 'DELETE_TOUR_SUCCESS';
export const DELETE_TOUR_FAILURE = 'DELETE_TOUR_FAILURE';

export const deleteTour = id => dispatch => {
  dispatch({ type: DELETE_TOUR_START });
  axios
    .delete(`https://roger-wanderlust.herokuapp.com/tours/data/${id}`,
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('auth-token')}`
        }
      }
    )
    .then(res => {
      console.log('Delete a tour: ', res.config.data);
      dispatch({ type: DELETE_TOUR_SUCCESS, payload: res.config.data });
    })
    .then(err => {
      console.log('Delete a tour err: ', err.response);
      dispatch({ DELETE_TOUR_FAILURE, payload: err.response });
    });
};
