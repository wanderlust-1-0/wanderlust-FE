import { SIGNUP_FETCHING, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../actions";
import { SIGNIN_FETCHING, SIGNIN_SUCCESS, SIGNIN_FAILURE } from "../actions";

import {
  SIGNIN_GOOGLE_FETCHING,
  SIGNIN_GOOGLE_SUCCESS,
  SIGNIN_GOOGLE_FAILURE,
} from "../actions";

// import {
//   FETCHING_GUIDES_START,
//   FETCHING_GUIDES_SUCCESS,
//   FETCHING_GUIDES_FAILURE,
// } from "../actions";

// import {
//   ADD_NEW_GUIDE_FETCHING,
//   ADD_NEW_GUIDE_SUCCESS,
//   ADD_NEW_GUIDE_FAILURE,
// } from "../actions";

// import {
//   FETCHING_TOURISTS_START,
//   FETCHING_TOURISTS_SUCCESS,
//   FETCHING_TOURISTS_FAILURE,
// } from "../actions";

// import {
//   UPDATE_GUIDE_INFO_FETCHING,
//   UPDATE_GUIDE_INFO_SUCCESS,
//   UPDATE_GUIDE_INFO_FAILURE,
// } from "../actions";

// import {
//   ADD_NEW_GUIDE_STORE_SUCCESS,
//   ADD_NEW_TOURIST_STORE_SUCCESS,
// } from "../actions";

// import {
//   ADD_NEW_TOURIST_FETCHING,
//   ADD_NEW_TOURIST_SUCCESS,
//   ADD_NEW_TOURIST_FAILURE,
// } from "../actions";

// import {
//   UPDATING_SINGLE_TOURIST_START,
//   UPDATING_SINGLE_TOURIST_SUCCESS,
//   UPDATING_SINGLE_TOURIST_FAILURE,
// } from "../actions";

const initialState = {
  currentUser: {},
  // users: [],
  signingUp: false,
  signingIn: false,
  updatingUser: false,
  signUpErr: "",
  signInErr: "",
  updatingUserErr: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    // Sign up
    case SIGNUP_FETCHING:
      return {
        ...state,
        signingUp: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        signUpErr: "",
        currentUser: action.payload,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signingUp: false,
        signUpErr: action.payload,
      };

    // Sign up with google
    case SIGNIN_GOOGLE_FETCHING:
      return {
        ...state,
        signingUp: true,
      };
    case SIGNIN_GOOGLE_SUCCESS:
      return {
        ...state,
        signingUp: false,
        signUpErr: "",
        user: action.payload,
      };
    case SIGNIN_GOOGLE_FAILURE:
      return {
        ...state,
        signingUp: false,
        signUpErr: action.payload,
      };

    // Sign in
    case SIGNIN_FETCHING:
      return {
        ...state,
        signingIn: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        signingIn: false,
        currentUser: action.payload,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        signingIn: false,
        signUpErr: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
