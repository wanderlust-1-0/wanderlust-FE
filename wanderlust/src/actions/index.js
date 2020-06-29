import axios from "axios";
import { loadProgressBar } from "axios-progress-bar";

// Sign Up Action Creator
export const SIGNUP_FETCHING = "SIGNUP_FETCHING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signUp = (method, accountData) => {
  return async (dispatch, getState, { getFirebase }) => {
    loadProgressBar();
    dispatch({ type: SIGNUP_FETCHING });
    const firebase = getFirebase();
    let provider;

    try {
      // Sign up with email and password
      if (method === "email") {
        const { email, password } = accountData;
        await firebase.auth().createUserWithEmailAndPassword(email, password);
      } else if (method === "facebook") {
        // Sign up with Facebook
        provider = await new firebase.auth.FacebookAuthProvider();

        const result = await firebase.auth().signInWithPopup(provider);

        // const accessToken = result.credential.accessToken;
      } else {
        // Sign up with Google
        provider = await new firebase.auth.GoogleAuthProvider();

        const result = await firebase.auth().signInWithPopup(provider);
      }

      const idToken = await firebase.auth().currentUser.getIdToken(true);

      localStorage.setItem("firebase_jwt", idToken);

      const user = await axios.post(
        "http://localhost:4000/api/auth/register",
        {},
        {
          headers: {
            Authorization: idToken,
          },
        }
      );

      dispatch({ type: SIGNUP_SUCCESS, payload: user.data.newUser });
    } catch (error) {
      dispatch({ type: SIGNUP_FAILURE, payload: error });
    }
  };
};

// Sign In Action Creator
export const SIGNIN_FETCHING = "SIGNIN_FETCHING";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAILURE = "SIGNIN_FAILURE";

export const signIn = (method, credentials) => {
  return async (dispatch, getState, { getFirebase }) => {
    loadProgressBar();
    dispatch({ type: SIGNIN_FETCHING });
    const firebase = getFirebase();
    let provider;

    try {
      // Sign in with Email
      if (method === "email") {
        const { email, password } = credentials;
        await firebase.auth().signInWithEmailAndPassword(email, password);
      } else if (method === "facebook") {
        // Sign in with Facebook
        provider = await new firebase.auth.FacebookAuthProvider();

        const result = await firebase.auth().signInWithPopup(provider);
      } else {
        // Sign up with Google
        provider = await new firebase.auth.GoogleAuthProvider();

        const result = await firebase.auth().signInWithPopup(provider);
      }
      const idToken = await firebase.auth().currentUser.getIdToken(true);

      localStorage.setItem("firebase_jwt", idToken);

      const user = await axios.post(
        "http://localhost:4000/api/auth/login",
        {},
        {
          headers: {
            Authorization: idToken,
          },
        }
      );

      dispatch({ type: SIGNIN_SUCCESS, payload: user.data });
    } catch (error) {
      dispatch({ type: SIGNIN_FAILURE, payload: error });
    }
  };
};

// Guides

// Get all GUIDES
export const FETCHING_GUIDES_START = "FETCHING_GUIDES_START";
export const FETCHING_GUIDES_SUCCESS = "FETCHING_GUIDES_SUCCESS";
export const FETCHING_GUIDES_FAILURE = "FETCHING_GUIDES_FAILURE";

export const getAllGuides = () => (dispatch) => {
  dispatch({ type: FETCHING_GUIDES_START });
  loadProgressBar();
  axios
    .get("https://roger-wanderlust.herokuapp.com/guides/guides", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    })
    .then((res) => {
      console.log("Get all GUIDES: ", res.data);
      dispatch({ type: FETCHING_GUIDES_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("Get all GUIDES err: ", err);
      dispatch({ type: FETCHING_GUIDES_FAILURE, payload: err });
    });
};

// Get a user by id action creator
export const GET_SINGLE_USER_FETCHING = "GET_SINGLE_USER_FETCHING";
export const GET_SINGLE_USER_SUCCESS = "GET_SINGLE_USER_SUCCESS";
export const GET_SINGLE_USER_FAILURE = "GET_SINGLE_USER_FAILURE";

export const getSingleUserById = () => {
  return async (dispatch, getState, { getFirebase }) => {
    loadProgressBar();
    dispatch({ type: GET_SINGLE_USER_FETCHING });
    const idToken = localStorage.getItem("firebase_jwt");
    try {
      const user = await axios.get("http://localhost:4000/api/users/userId", {
        headers: {
          Authorization: idToken,
        },
      });

      dispatch({ type: GET_SINGLE_USER_SUCCESS, payload: user.data });
      console.log("Get single guide: ", user.data);
    } catch (error) {
      console.log("Get single guide err: ", error.response);
      dispatch({ type: GET_SINGLE_USER_FAILURE, payload: error.response });
    }
  };
};

// Update Guide Info by id Action Creator
export const UPDATE_USER_INFO_FETCHING = "UPDATE_USER_INFO_FETCHING";
export const UPDATE_USER_INFO_SUCCESS = "UPDATE_USER_INFO_SUCCESS";
export const UPDATE_USER_INFO_FAILURE = "UPDATE_USER_INFO_FAILURE";

export const updateUserById = (userData) => {
  return async (dispatch, getState, { getFirebase }) => {
    dispatch({ type: UPDATE_USER_INFO_FETCHING });
    loadProgressBar();

    try {
      const idToken = localStorage.getItem("firebase_jwt");

      const updatedUser = await axios.put(
        "http://localhost:4000/api/users/update/user",
        userData,
        {
          headers: {
            Authorization: idToken,
          },
        }
      );

      dispatch({ type: UPDATE_USER_INFO_SUCCESS, payload: updatedUser });
      console.log("updatedUser in actions>>>", updatedUser);
    } catch (error) {
      dispatch({ type: UPDATE_USER_INFO_FAILURE, payload: error });
    }
  };
};

// Tours

// Get all tours
export const FETCHING_TOURS_START = "FETCH_TOURS_START";
export const FETCHING_TOURS_SUCCESS = "FETCHING_TOURS_SUCCESS";
export const FETCHING_TOURS_FAILURE = "FETCHING_TOURS_FAILURE";

export const getAllTours = () => (dispatch) => {
  dispatch({ type: FETCHING_TOURS_START });
  loadProgressBar();

  const idToken = localStorage.getItem("firebase_jwt");

  axios
    .get("http://localhost:4000/api/tours", {
      headers: {
        Authorization: idToken,
      },
    })
    .then((res) => {
      console.log("Get all tours: ", res.data);
      dispatch({ type: FETCHING_TOURS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("Get all tours err: ", err);
      dispatch({ type: FETCHING_TOURS_FAILURE, payload: err });
    });
};

// Get all of a single guides offered tours
// Get all tours
export const FETCHING_OFFERED_TOURS_START = "FETCH_OFFERED_TOURS_START";
export const FETCHING_OFFERED_TOURS_SUCCESS = "FETCHING_OFFERED_TOURS_SUCCESS";
export const FETCHING_OFFERED_TOURS_FAILURE = "FETCHING_OFFERED_TOURS_FAILURE";

export const getSingleGuidesTours = () => {
  return async (dispatch) => {
    dispatch({ type: FETCHING_OFFERED_TOURS_START });
    loadProgressBar();

    const idToken = localStorage.getItem("firebase_jwt");
    try {
      const tours = await axios.get(
        "http://localhost:4000/api/users/offered-tours",
        {
          headers: {
            Authorization: idToken,
          },
        }
      );

      dispatch({ type: FETCHING_OFFERED_TOURS_SUCCESS, payload: tours.data });
    } catch (error) {
      dispatch({ type: FETCHING_OFFERED_TOURS_FAILURE, payload: error });
    }
  };
};

// Get single tours by id
export const FETCHING_SINGLETOUR_START = "FETCH_SINGLETOUR_START";
export const FETCHING_SINGLETOUR_SUCCESS = "FETCHING_SINGLETOUR_SUCCESS";
export const FETCHING_SINGLETOUR_FAILURE = "FETCHING_SINGLETOUR_FAILURE";

export const getTourById = (id) => (dispatch) => {
  dispatch({ type: FETCHING_SINGLETOUR_START });
  loadProgressBar();

  const idToken = localStorage.getItem("firebase_token");
  console.log("id: >>>>>", id);

  axios
    .get(`http://localhost:4000/api/tours/${id}`, {
      headers: {
        Authorization: idToken,
      },
    })
    .then((res) => {
      console.log("Get Single Tour: ", res);
      dispatch({ type: FETCHING_SINGLETOUR_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("Get single tour err: ", err.response);
      dispatch({ type: FETCHING_SINGLETOUR_FAILURE, payload: err.response });
    });
};

// Add a tour
export const ADD_TOUR_START = "ADD_TOUR_START";
export const ADD_TOUR_SUCCESS = "ADD_TOUR_SUCCESS";
export const ADD_TOUR_FAILURE = "ADD_TOUR_FAILURE";

export const addTour = (tour) => (dispatch) => {
  console.log("THIS IS THE TOUR GETTING ADDED", tour);
  dispatch({ type: ADD_TOUR_START });
  loadProgressBar();

  const idToken = localStorage.getItem("firebase_jwt");

  axios
    .post("http://localhost:4000/api/tours", tour, {
      headers: {
        Authorization: idToken,
      },
    })
    .then((res) => {
      console.log("add a tour SUCCESSFULL: ", res);
      dispatch({ type: ADD_TOUR_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("add a tour err: ", err);
      dispatch({ type: ADD_TOUR_FAILURE, payload: err });
    });
};

// Update a tour by id
export const UPDATE_TOUR_START = "UPDATE_TOUR_START";
export const UPDATE_TOUR_SUCCESS = "UPDATE_TOUR_SUCCESS";
export const UPDATE_TOUR_FAILURE = "UPDATE_TOUR_FAILURE";

export const updateTour = (id, changes) => (dispatch) => {
  dispatch({ type: UPDATE_TOUR_START });
  loadProgressBar();

  const idToken = localStorage.getItem("firebase_jwt");
  console.log("update tour id", id);
  console.log("update tour id token", idToken);

  axios
    .put(`http://localhost:4000/api/tours/${id}`, changes, {
      headers: {
        Authorization: idToken,
      },
    })
    .then((res) => {
      console.log("Update a tour: ", res.data);
      dispatch({ type: UPDATE_TOUR_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("Update a tour err: ", err);
      dispatch({ type: UPDATE_TOUR_FAILURE, payload: err });
    });
};

// Delete a tour by id
export const DELETE_TOUR_START = "DELETE_TOUR_START";
export const DELETE_TOUR_SUCCESS = "DELETE_TOUR_SUCCESS";
export const DELETE_TOUR_FAILURE = "DELETE_TOUR_FAILURE";

export const deleteTour = (id) => (dispatch) => {
  dispatch({ type: DELETE_TOUR_START });
  loadProgressBar();

  const idToken = localStorage.getItem("firebase_jwt");

  axios
    .delete(`http://localhost:4000/api/tours/${id}`, {
      headers: {
        Authorization: idToken,
      },
    })
    .then((res) => {
      console.log("Delete a tour: ", res.data);
      dispatch({ type: DELETE_TOUR_SUCCESS, payload: res.data });
    })
    .catch((error) => {
      console.log("Delete a tour err: ", error);
      dispatch({ type: DELETE_TOUR_FAILURE, payload: error });
    });
};

// Add a tourist to a Tour By ID
export const ADD_TOURIST_TO_TOUR_START = "ADD_TOURIST_TO_TOUR_START";
export const ADD_TOURIST_TO_TOUR_SUCCESS = "ADD_TOURIST_TO_TOUR_SUCCESS";
export const ADD_TOURIST_TO_TOUR_FAILURE = "ADD_TOURIST_TO_TOUR_FAILURE";

export const addTouristToTour = (touristid, tourid) => (dispatch) => {
  dispatch({ type: ADD_TOURIST_TO_TOUR_START });
  loadProgressBar();
  axios
    .put(
      `https://roger-wanderlust.herokuapp.com/tourists/tourist/assignTourist/${touristid}/${tourid}`,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      console.log("ADD TOURIST TO TOUR SUCESS: ", res);
      dispatch({ type: ADD_TOURIST_TO_TOUR_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("ADD TOURIST TO TOUR ERROR: ", err);
      dispatch({ type: ADD_TOURIST_TO_TOUR_FAILURE, payload: err });
    });
};
