import { SIGNUP_FETCHING, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions';
import { SIGNIN_FETCHING, SIGNIN_SUCCESS, SIGNIN_FAILURE } from '../actions';

const initialState = {
  user: [],
  password: null,
  signingUp: false,
  signingIn: false,
  signUpErr: null,
  signInErr: null,
};

const rootReducer = (state = initialState, action) => {
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
        user: JSON.parse(action.payload),
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
    default:
      return state;
  }
};

export default rootReducer;
