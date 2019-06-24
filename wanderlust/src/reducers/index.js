import { SIGNIN_FETCHING, SIGNIN_SUCCESS, SIGNIN_FAILURE } from '../actions';

const initialState = {
  user: {
    name: '',
    password: '',
    email: '',
    phone: '',
    isTourGuide: false,
  },
  password: null,
  loggingIn: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNIN_FETCHING:
      return {
        ...state,
        loggingIn: true,
      };
    case SIGNIN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
