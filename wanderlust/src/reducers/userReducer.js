import { SIGNUP_FETCHING, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../actions";
import { SIGNIN_FETCHING, SIGNIN_SUCCESS, SIGNIN_FAILURE } from "../actions";

import {
  GET_SINGLE_USER_FETCHING,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAILURE,
} from "../actions";

import {
  UPDATE_USER_INFO_FETCHING,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAILURE,
} from "../actions";

import {
  FETCHING_OFFERED_TOURS_START,
  FETCHING_OFFERED_TOURS_SUCCESS,
  FETCHING_OFFERED_TOURS_FAILURE,
} from "../actions";

const initialState = {
  currentUser: {},
  // users: [],
  signingUp: false,
  signingIn: false,
  signUpErr: "",
  signInErr: "",
  fetchingUser: false,
  fetchingUserError: "",
  fetchingOfferedTours: false,
  fetchingOfferedToursError: "",
  updatingUser: false,
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
    // Fetching a single user by uid
    case GET_SINGLE_USER_FETCHING:
      return {
        ...state,
        fetchingUser: true,
      };
    case GET_SINGLE_USER_SUCCESS:
      return {
        ...state,
        fetchingUser: false,
        currentUser: action.payload,
        fetchingUserError: "",
      };
    case GET_SINGLE_USER_FAILURE:
      return {
        ...state,
        fetchingUser: false,
        fetchingUserError: action.payload,
      };
    // Fetching a single guides tours
    case FETCHING_OFFERED_TOURS_START:
      return {
        ...state,
        fetchingOfferedTours: true,
      };
    case FETCHING_OFFERED_TOURS_SUCCESS:
      return {
        ...state,
        fetchingOfferedTours: false,
        currentUser: {
          ...state.currentUser,
          offeredTours: action.payload,
        },
        fetchingOfferedToursError: "",
      };
    case FETCHING_OFFERED_TOURS_FAILURE:
      return {
        ...state,
        fetchingOfferedToursError: action.payload,
      };
    // Updating User Info
    case UPDATE_USER_INFO_FETCHING:
      return {
        ...state,
        updatingUser: true,
      };
    case UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        updatingUser: false,
        currentUser: action.payload,
        updatingUserErr: "",
      };
    case UPDATE_USER_INFO_FAILURE:
      return {
        ...state,
        updatingUser: false,
        updatingUserErr: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
