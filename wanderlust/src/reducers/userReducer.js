import { SIGNUP_FETCHING, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "../actions";
import { SIGNIN_FETCHING, SIGNIN_SUCCESS, SIGNIN_FAILURE } from "../actions";

// import {
//   SIGNIN_GOOGLE_FETCHING,
//   SIGNIN_GOOGLE_SUCCESS,
//   SIGNIN_GOOGLE_FAILURE,
// } from "../actions";

// import {
//   SIGNIN_FACEBOOK_FETCHING,
//   SIGNIN_FACEBOOK_SUCCESS,
//   SIGNIN_FACEBOOK_FAILURE,
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

    // // Sign up with google
    // case SIGNIN_GOOGLE_FETCHING:
    //   return {
    //     ...state,
    //     signingUp: true,
    //   };
    // case SIGNIN_GOOGLE_SUCCESS:
    //   return {
    //     ...state,
    //     signingUp: false,
    //     signUpErr: "",
    //     user: action.payload,
    //   };
    // case SIGNIN_GOOGLE_FAILURE:
    //   return {
    //     ...state,
    //     signingUp: false,
    //     signUpErr: action.payload,
    //   };

    // // Sign in with facebook
    // case SIGNIN_FACEBOOK_FETCHING:
    //   return {
    //     ...state,
    //     signingUp: true,
    //   };
    // case SIGNIN_FACEBOOK_SUCCESS:
    //   return {
    //     ...state,
    //     signingUp: false,
    //     signUpErr: "",
    //     currentUser: action.payload,
    //   };

    // case SIGNIN_FACEBOOK_FAILURE:
    //   return {
    //     ...state,
    //     signingUp: false,
    //     signUpErr: action.payload,
    //   };

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
