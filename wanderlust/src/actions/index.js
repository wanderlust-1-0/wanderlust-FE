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
      dispatch({ type: SIGNUP_FAILURE, payload: error });
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
      'Authorization': `Basic ${btoa('client:secret')}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };
  console.log('This is the header: ');
  dispatch({ type: SIGNIN_FETCHING });
  return axios
    .post(
      'https://roger-wanderlust.herokuapp.com/oauth/token',
      `grant_type=password&username=${user.username}&password=${user.password}`,
      header,
    )

    .then(res => {
      console.log('token response: ', res);
      localStorage.setItem('auth-token', res.data.access_token);
      dispatch({ type: SIGNIN_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('token err: ', err);
      dispatch({ type: SIGNIN_FAILURE, payload: err });
    });
};

// Guides

// Get all GUIDES
export const FETCHING_GUIDES_START = 'FETCHING_GUIDES_START';
export const FETCHING_GUIDES_SUCCESS = 'FETCHING_GUIDES_SUCCESS';
export const FETCHING_GUIDES_FAILURE = 'FETCHING_GUIDES_FAILURE';

export const getAllGuides = () => dispatch => {
  dispatch({ type: FETCHING_GUIDES_START });
  axios
    .get('https://roger-wanderlust.herokuapp.com/guides/guides', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('auth-token')}`,
      },
    })
    .then(res => {
      console.log('Get all GUIDES: ', res.data);
      dispatch({ type: FETCHING_GUIDES_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('Get all GUIDES err: ', err);
      dispatch({ type: FETCHING_GUIDES_FAILURE, payload: err });
    });
};

// Get a guide by id action creator
export const GET_SINGLE_GUIDE_FETCHING = 'GET_SINGLE_GUIDE_FETCHING';
export const GET_SINGLE_GUIDE_SUCCESS = 'GET_SINGLE_GUIDE_SUCCESS';
export const GET_SINGLE_GUIDE_FAILURE = 'GET_SINGLE_GUIDE_FAILURE';

export const getSingleGuideById = (id) => dispatch => {
  dispatch({ type: GET_SINGLE_GUIDE_FETCHING })
  axios
    .get(`https://roger-wanderlust.herokuapp.com/guides/guide/${id}`,
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('auth-token')}`
        }
      }
    )
    .then(res => {
      console.log('Get single guide: ', res.data)
      dispatch({ type: GET_SINGLE_GUIDE_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log('Get single guide err: ', err.response)
      dispatch({ type: GET_SINGLE_GUIDE_FAILURE, payload: err.response })
    })
}

// Add a new guide
export const ADD_NEW_GUIDE_FETCHING = 'ADD_NEW_GUIDE_FETCHING';
export const ADD_NEW_GUIDE_SUCCESS = 'ADD_NEW_GUIDE_SUCCESS';
export const ADD_NEW_GUIDE_FAILURE = 'ADD_NEW_GUIDE_FAILURE';

export const addNewGuide = () => dispatch => {
  dispatch({ type: ADD_NEW_GUIDE_FETCHING })
  axios
    .post('https://roger-wanderlust.herokuapp.com/guides/guide/add',
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('auth-token')}`
        }
      }
    )
    .then(res => {
      console.log("add new guide: ", res.data)
      dispatch({ type: ADD_NEW_GUIDE_FETCHING, payload: res.data })
    })
    .catch(err => {
      console.log('add new guide err', err.response)
      dispatch({ type: ADD_NEW_GUIDE_FAILURE, payload: err.response })
    })
}

// Update Guide Info by id Action Creator
export const UPDATE_GUIDE_INFO_FETCHING = 'UPDATE_USER_INFO_FETCHING';
export const UPDATE_GUIDE_INFO_SUCCESS = 'UPDATE_USER_INFO_SUCCESS';
export const UPDATE_GUIDE_INFO_FAILURE = 'UPDATE_USER_INFO_FAILURE';

export const updateGuideInfo = id => dispatch => {
  dispatch({ type: UPDATE_GUIDE_INFO_FETCHING });
  axios
    .put(`https://roger-wanderlust.herokuapp.com/guides/guide/${id}`,
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('auth-token')}`
        }
      }
    )
    .then(res => {
      console.log('Update Guide Info Response: ', res.config.data);
      dispatch({ type: UPDATE_GUIDE_INFO_SUCCESS, payload: res.config.data });
    })
    .catch(err => {
      console.log('Update Guide Info Err: ', err.response);
      dispatch({
        type: UPDATE_GUIDE_INFO_FAILURE,
        payload: err.response
      });
    });
};


// Tourists

// Get all Tourists
export const FETCHING_TOURISTS_START = 'FETCHING_TOURISTS_START';
export const FETCHING_TOURISTS_SUCCESS = 'FETCHING_TOURISTS_SUCCESS';
export const FETCHING_TOURISTS_FAILURE = 'FETCHING_TOURISTS_FAILURE';

export const getAllTourists = () => dispatch => {
  dispatch({ type: FETCHING_TOURISTS_START });
  axios
    .get('https://roger-wanderlust.herokuapp.com/tourists/tourists',
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth-token')}`,
        },
      }
    )
    .then(res => {
      console.log('Get all TOURISTS: ', res.data);
      dispatch({ type: FETCHING_TOURISTS_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('Get all TOURISTS err: ', err);
      dispatch({ type: FETCHING_TOURISTS_FAILURE, payload: err });
    });
};

// Get single tourist by id
export const FETCHING_SINGLE_TOURIST_START = 'FETCHING_SINGLE_TOURIST_START';
export const FETCHING_SINGLE_TOURIST_SUCCESS = 'FETCHING_SINGLE_TOURIST_SUCCESS';
export const FETCHING_SINGLE_TOURIST_FAILURE = 'FETCHING_SINGLE_TOURIST_FAILURE';

export const getSingleTouristById = (id) => dispatch => {
  dispatch({ type: FETCHING_SINGLE_TOURIST_START })
  axios
    .get(`https://roger-wanderlust.herokuapp.com/tourists/${id}`,
      {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth-token')}`,
        },
      }
    )
    .then(res => {
      console.log('get single tourist: ', res.data)
      dispatch({ type: FETCHING_SINGLE_TOURIST_SUCCESS, payload: res.data })
    })
    .catch(err => {
      console.log('get single tourist err: ', err.response)
      dispatch({ type: FETCHING_SINGLE_TOURIST_FAILURE })
    })
}

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
      console.log('Get all tours err: ', err);
      dispatch({ type: FETCHING_TOURS_FAILURE, payload: err });
    });
};

// Get single tours by id
export const FETCHING_SINGLETOUR_START = 'FETCH_SINGLETOUR_START';
export const FETCHING_SINGLETOUR_SUCCESS = 'FETCHING_SINGLETOUR_SUCCESS';
export const FETCHING_SINGLETOUR_FAILURE = 'FETCHING_SINGLETOUR_FAILURE';

export const getTourById = id => dispatch => {
  dispatch({ type: FETCHING_SINGLETOUR_START });
  axios
    .get(`https://roger-wanderlust.herokuapp.com/tours/tour/${id}`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('auth-token')}`,
      },
    })
    .then(res => {
      console.log('Get Single Tour: ', res.data);
      dispatch({ type: FETCHING_SINGLETOUR_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log('Get single tour err: ', err.response);
      dispatch({ type: FETCHING_SINGLETOUR_FAILURE, payload: err.response });
    });
};

// Add a tour
export const ADD_TOUR_START = 'ADD_TOUR_START';
export const ADD_TOUR_SUCCESS = 'ADD_TOUR_SUCCESS';
export const ADD_TOUR_FAILURE = 'ADD_TOUR_FAILURE';

export const addTour = tour => dispatch => {
  dispatch({ type: ADD_TOUR_START });
  axios
    .post(
      'https://roger-wanderlust.herokuapp.com/tours/data/tours/add',
      {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem('auth-token')}`,
        },
      },
      tour,
    )
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
    .put(`https://roger-wanderlust.herokuapp.comtours/data/tours/${id}`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('auth-token')}`,
      },
    })
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
    .delete(`https://roger-wanderlust.herokuapp.com/tours/data/${id}`, {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem('auth-token')}`,
      },
    })
    .then(res => {
      console.log('Delete a tour: ', res.config.data);
      dispatch({ type: DELETE_TOUR_SUCCESS, payload: res.config.data });
    })
    .then(err => {
      console.log('Delete a tour err: ', err.response);
      dispatch({ DELETE_TOUR_FAILURE, payload: err.response });
    });
};
