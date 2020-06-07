import axios from "axios";
import { loadProgressBar } from "axios-progress-bar";

// Sign Up Action Creator
export const SIGNUP_FETCHING = "SIGNUP_FETCHING";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const signUp = (accountData) => {
  return async (dispatch, getState, { getFirebase }) => {
    dispatch({ type: SIGNUP_FETCHING });
    loadProgressBar();
    const firebase = getFirebase();

    try {
      const { email, password } = accountData;
      await firebase.auth().createUserWithEmailAndPassword(email, password);
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

      dispatch({ type: SIGNUP_SUCCESS, payload: user });
    } catch (error) {
      dispatch({ type: SIGNUP_FAILURE, payload: error });
    }
  };
};

// Sign In Action Creator
export const SIGNIN_FETCHING = "SIGNIN_FETCHING";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_FAILURE = "SIGNIN_FAILURE";

// export const signin = (user) => (dispatch) => {
//   console.log("User Signin: ", user);
//   let header = {
//     headers: {
//       Authorization: `Basic ${btoa("client:secret")}`,
//       "Content-Type": "application/x-www-form-urlencoded",
//     },
//   };
//   console.log("This is the header: ");
//   dispatch({ type: SIGNIN_FETCHING });
//   loadProgressBar();
//   return axios
//     .post(
//       "https://roger-wanderlust.herokuapp.com/oauth/token",
//       `grant_type=password&username=${user.username}&password=${user.password}`,
//       header
//     )
//     .then((res) => {
//       console.log("token response: ", res);
//       localStorage.setItem("auth-token", res.data.access_token);
//       localStorage.setItem("username", user.username);
//       localStorage.setItem(
//         "user",
//         JSON.stringify({
//           touristid: 4,
//           email: "visitor@gmail.com",
//           firstname: "sascha",
//           lastname: "majewsky",
//           phonenumber: "49015776251",
//           istourguide: false,
//           tours: [],
//         })
//       );
//       localStorage.setItem(
//         "extra",
//         JSON.stringify({
//           guideid: 2,
//           email: "guide@gmail.com",
//           firstname: "jeff",
//           lastname: "oliver",
//           phonenumber: "555557843548",
//           istourguide: true,
//           tours: [],
//         })
//       );
//       dispatch({ type: SIGNIN_SUCCESS, payload: res.data });
//     })
//     .catch((err) => {
//       console.log("token err: ", err);
//       dispatch({ type: SIGNIN_FAILURE, payload: err });
//     });
// };

export const signIn = (credentials) => {
  console.log("working");
  return async (dispatch, getState, { getFirebase }) => {
    dispatch({ type: SIGNIN_FETCHING });
    loadProgressBar();
    const firebase = getFirebase();
    try {
      const { email, password } = credentials;
      await firebase.auth().signInWithEmailAndPassword(email, password);
      const idToken = await firebase.auth().currentUser.getIdToken(true);

      localStorage.setItem("firebase_jwt", idToken);

      await axios.post(
        "http://localhost:4000/api/auth/login",
        {},
        {
          headers: {
            Authorization: idToken,
          },
        }
      );

      dispatch({ type: SIGNIN_SUCCESS });
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

// Get a guide by id action creator
export const GET_SINGLE_GUIDE_FETCHING = "GET_SINGLE_GUIDE_FETCHING";
export const GET_SINGLE_GUIDE_SUCCESS = "GET_SINGLE_GUIDE_SUCCESS";
export const GET_SINGLE_GUIDE_FAILURE = "GET_SINGLE_GUIDE_FAILURE";

export const getSingleGuideById = (id) => (dispatch) => {
  dispatch({ type: GET_SINGLE_GUIDE_FETCHING });
  loadProgressBar();
  axios
    .get(`https://roger-wanderlust.herokuapp.com/guides/guide/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    })
    .then((res) => {
      console.log("Get single guide: ", res.data);
      dispatch({ type: GET_SINGLE_GUIDE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("Get single guide err: ", err.response);
      dispatch({ type: GET_SINGLE_GUIDE_FAILURE, payload: err.response });
    });
};

// Add a new guide
export const ADD_NEW_GUIDE_FETCHING = "ADD_NEW_GUIDE_FETCHING";
export const ADD_NEW_GUIDE_SUCCESS = "ADD_NEW_GUIDE_SUCCESS";
export const ADD_NEW_GUIDE_FAILURE = "ADD_NEW_GUIDE_FAILURE";

export const addNewGuide = (guide) => (dispatch) => {
  dispatch({ type: ADD_NEW_GUIDE_FETCHING });
  loadProgressBar();
  axios
    .post("https://roger-wanderlust.herokuapp.com/guides/guide/add", guide, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    })
    .then((res) => {
      console.log("add new guide: ", res.data);
      dispatch({ type: ADD_NEW_GUIDE_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("add new guide err", err.response);
      dispatch({ type: ADD_NEW_GUIDE_FAILURE, payload: err.response });
    });
};

// Add a new guide
// export const ADD_NEW_GUIDE_STORE_FETCHING = 'ADD_NEW_GUIDE_FETCHING';
export const ADD_NEW_GUIDE_STORE_SUCCESS = "ADD_NEW_GUIDE_SUCCESS";
// export const ADD_NEW_GUIDE_STORE_FAILURE = 'ADD_NEW_GUIDE_FAILURE';

export const addNewGuideToStore = (guide) => {
  return {
    type: ADD_NEW_GUIDE_STORE_SUCCESS,
    payload: guide,
  };
};

// Update Guide Info by id Action Creator
export const UPDATE_GUIDE_INFO_FETCHING = "UPDATE_GUIDE_INFO_FETCHING";
export const UPDATE_GUIDE_INFO_SUCCESS = "UPDATE_GUIDE_INFO_SUCCESS";
export const UPDATE_GUIDE_INFO_FAILURE = "UPDATE_GUIDE_INFO_FAILURE";

export const updateGuideById = (guide, id) => (dispatch) => {
  console.table(guide);
  dispatch({ type: UPDATE_GUIDE_INFO_FETCHING });
  loadProgressBar();
  axios
    .put(`https://roger-wanderlust.herokuapp.com/guides/guide/${id}`, guide, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    })
    .then((res) => {
      console.log("Update Guide Info Response: ", res);
      dispatch({ type: UPDATE_GUIDE_INFO_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("Update Guide Info Err: ", err.response);
      dispatch({
        type: UPDATE_GUIDE_INFO_FAILURE,
        payload: err.response,
      });
    });
};

// Tourists

// Get all Tourists
export const FETCHING_TOURISTS_START = "FETCHING_TOURISTS_START";
export const FETCHING_TOURISTS_SUCCESS = "FETCHING_TOURISTS_SUCCESS";
export const FETCHING_TOURISTS_FAILURE = "FETCHING_TOURISTS_FAILURE";

export const getAllTourists = () => (dispatch) => {
  dispatch({ type: FETCHING_TOURISTS_START });
  loadProgressBar();
  axios
    .get("https://roger-wanderlust.herokuapp.com/tourists/tourists", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    })
    .then((res) => {
      console.log("Get all TOURISTS: ", res.data);
      dispatch({ type: FETCHING_TOURISTS_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("Get all TOURISTS err: ", err);
      dispatch({ type: FETCHING_TOURISTS_FAILURE, payload: err });
    });
};

// Add a new tourist to redux store
export const ADD_NEW_TOURIST_STORE_SUCCESS = "ADD_NEW_TOURIST_STORE_SUCCESS";

export const addNewTouristToStore = (tourist) => {
  return {
    type: ADD_NEW_TOURIST_STORE_SUCCESS,
    payload: tourist,
  };
};

// Add a new tourist
export const ADD_NEW_TOURIST_FETCHING = "ADD_NEW_TOURIST_FETCHING";
export const ADD_NEW_TOURIST_SUCCESS = "ADD_NEW_TOURIST_SUCCESS";
export const ADD_NEW_TOURIST_FAILURE = "ADD_NEW_TOURIST_FAILURE";

export const addNewTourist = (tourist) => (dispatch) => {
  dispatch({ type: ADD_NEW_TOURIST_FETCHING });
  loadProgressBar();
  axios
    .post(
      "https://roger-wanderlust.herokuapp.com/tourists/tourist/add",
      tourist,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
        },
      }
    )
    .then((res) => {
      console.log("add new tourist: ", res.data);
      dispatch({ type: ADD_NEW_TOURIST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("add new tourist err", err.response);
      dispatch({ type: ADD_NEW_TOURIST_FAILURE, payload: err.response });
    });
};

// Get single tourist by id
export const FETCHING_SINGLE_TOURIST_START = "FETCHING_SINGLE_TOURIST_START";
export const FETCHING_SINGLE_TOURIST_SUCCESS =
  "FETCHING_SINGLE_TOURIST_SUCCESS";
export const FETCHING_SINGLE_TOURIST_FAILURE =
  "FETCHING_SINGLE_TOURIST_FAILURE";

export const getSingleTouristById = (id) => (dispatch) => {
  dispatch({ type: FETCHING_SINGLE_TOURIST_START });
  loadProgressBar();
  axios
    .get(`https://roger-wanderlust.herokuapp.com/tourists/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    })
    .then((res) => {
      console.log("get single tourist: ", res.data);
      dispatch({ type: FETCHING_SINGLE_TOURIST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("get single tourist err: ", err.response);
      dispatch({ type: FETCHING_SINGLE_TOURIST_FAILURE });
    });
};

// Update a tourist profile
export const UPDATING_SINGLE_TOURIST_START = "UPDATING_SINGLE_TOURIST_START";
export const UPDATING_SINGLE_TOURIST_SUCCESS =
  "UPDATING_SINGLE_TOURIST_SUCCESS";
export const UPDATING_SINGLE_TOURIST_FAILURE =
  "UPDATING_SINGLE_TOURIST_FAILURE";

export const updateTouristById = (tourist, id) => (dispatch) => {
  dispatch({ type: UPDATING_SINGLE_TOURIST_START });
  loadProgressBar();
  axios
    .put(
      `https://roger-wanderlust.herokuapp.com/tourists/tourist/${id}`,
      tourist,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
        },
      }
    )
    .then((res) => {
      console.log("updated tourist: ", res.data);
      dispatch({ type: UPDATING_SINGLE_TOURIST_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("updated tourist err: ", err.response);
      dispatch({ type: UPDATING_SINGLE_TOURIST_FAILURE });
    });
};

// Tours

// Get all tours
export const FETCHING_TOURS_START = "FETCH_TOURS_START";
export const FETCHING_TOURS_SUCCESS = "FETCHING_TOURS_SUCCESS";
export const FETCHING_TOURS_FAILURE = "FETCHING_TOURS_FAILURE";

export const getAllTours = () => (dispatch) => {
  dispatch({ type: FETCHING_TOURS_START });
  loadProgressBar();
  axios
    .get("https://roger-wanderlust.herokuapp.com/tours/tours", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
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

// Get single tours by id
export const FETCHING_SINGLETOUR_START = "FETCH_SINGLETOUR_START";
export const FETCHING_SINGLETOUR_SUCCESS = "FETCHING_SINGLETOUR_SUCCESS";
export const FETCHING_SINGLETOUR_FAILURE = "FETCHING_SINGLETOUR_FAILURE";

export const getTourById = (id) => (dispatch) => {
  dispatch({ type: FETCHING_SINGLETOUR_START });
  loadProgressBar();
  axios
    .get(`https://roger-wanderlust.herokuapp.com/tours/tour/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    })
    .then((res) => {
      console.log("Get Single Tour: ", res.data);
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
  axios
    .post("https://roger-wanderlust.herokuapp.com/tours/data/tours/add", tour, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
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

export const updateTour = (id) => (dispatch) => {
  dispatch({ type: UPDATE_TOUR_START });
  loadProgressBar();
  axios
    .put(`https://roger-wanderlust.herokuapp.comtours/data/tours/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    })
    .then((res) => {
      console.log("Update a tour: ", res.config.data);
      dispatch({ type: UPDATE_TOUR_SUCCESS, payload: res.config.data });
    })
    .then((err) => {
      console.log("Update a tour err: ", err.response);
      dispatch({ type: UPDATE_TOUR_FAILURE, payload: err.response });
    });
};

// Delete a tour by id
export const DELETE_TOUR_START = "DELETE_TOUR_START";
export const DELETE_TOUR_SUCCESS = "DELETE_TOUR_SUCCESS";
export const DELETE_TOUR_FAILURE = "DELETE_TOUR_FAILURE";

export const deleteTour = (id) => (dispatch) => {
  dispatch({ type: DELETE_TOUR_START });
  loadProgressBar();
  axios
    .delete(`https://roger-wanderlust.herokuapp.com/tours/data/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("auth-token")}`,
      },
    })
    .then((res) => {
      console.log("Delete a tour: ", res.config.data);
      dispatch({ type: DELETE_TOUR_SUCCESS, payload: res.config.data });
    })
    .then((err) => {
      console.log("Delete a tour err: ", err.response);
      dispatch({ type: DELETE_TOUR_FAILURE, payload: err.response });
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
