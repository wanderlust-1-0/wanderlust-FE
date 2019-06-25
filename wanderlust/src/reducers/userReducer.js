import { SIGNUP_FETCHING, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions';
import { SIGNIN_FETCHING, SIGNIN_SUCCESS, SIGNIN_FAILURE } from '../actions';
import {
  UPDATE_USER_INFO_FETCHING,
  UPDATE_USER_INFO_SUCCESS,
  UPDATE_USER_INFO_FAILURE,
} from '../actions';

const initialState = {
  user: {},
  signingUp: false,
  signingIn: false,
  updatingUser: false,
  signUpErr: '',
  signInErr: '',
  updatingUserErr: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_FETCHING:
      return {
        ...state,
        signingUp: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signingUp: false,
        user: {
          ...action.payload,
        },
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signingUp: false,
        signUpErr: action.payload,
      };
    case SIGNIN_FETCHING:
      return {
        ...state,
        signingIn: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        signingIn: false,
        user: action.payload,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        signingIn: false,
        signUpErr: action.payload,
      };
    case UPDATE_USER_INFO_FETCHING:
      return {
        ...state,
        updatingUser: true,
        error: '',
      };
    case UPDATE_USER_INFO_SUCCESS:
      return {
        ...state,
        user: {
          ...action.payload,
        },
        updatingUser: false,
        error: '',
      };
    case UPDATE_USER_INFO_FAILURE:
      return {
        ...state,
        updatingUser: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
