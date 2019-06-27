import { SIGNUP_FETCHING, SIGNUP_SUCCESS, SIGNUP_FAILURE } from '../actions';
import { SIGNIN_FETCHING, SIGNIN_SUCCESS, SIGNIN_FAILURE } from '../actions';

import {
  FETCHING_GUIDES_START,
  FETCHING_GUIDES_SUCCESS,
  FETCHING_GUIDES_FAILURE,
} from '../actions';

import {
  ADD_NEW_GUIDE_FETCHING,
  ADD_NEW_GUIDE_SUCCESS,
  ADD_NEW_GUIDE_FAILURE
} from '../actions';

import {
  FETCHING_TOURISTS_START,
  FETCHING_TOURISTS_SUCCESS,
  FETCHING_TOURISTS_FAILURE,
} from '../actions';

import {
  UPDATE_GUIDE_INFO_FETCHING,
  UPDATE_GUIDE_INFO_SUCCESS,
  UPDATE_GUIDE_INFO_FAILURE,
} from '../actions';

import {
  ADD_NEW_GUIDE_STORE_SUCCESS,
  ADD_NEW_TOURIST_STORE_SUCCESS
} from '../actions';

import {
  ADD_NEW_TOURIST_FETCHING,
  ADD_NEW_TOURIST_SUCCESS,
  ADD_NEW_TOURIST_FAILURE
} from '../actions';

import {
  UPDATING_SINGLE_TOURIST_START,
  UPDATING_SINGLE_TOURIST_SUCCESS, UPDATING_SINGLE_TOURIST_FAILURE
} from '../actions';

const initialState = {
  guides: [],
  tourists: [],
  guide: {
    username: '',
    password: '',
    isTourGuide: false,
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  },
  tourist: {
    username: '',
    password: '',
    isTourGuide: false,
    firstname: '',
    lastname: '',
    email: '',
    phone: ''
  },
  signingUp: false,
  signingIn: false,
  updatingUser: false,
  updatingTourist: false,
  updatingTouristErr: '',
  fetchingAllGuides: false,
  signUpErr: '',
  signInErr: '',
  fetchAllGuidesErr: '',
  updatingUserErr: '',
  addingNewGuide: '',
  addingNewGuideErr: '',
  addingNewTourist: false,
  addingNewTouristErr: ''
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
        user: action.payload,
      };
    case SIGNIN_FAILURE:
      return {
        ...state,
        signingIn: false,
        signUpErr: action.payload,
      };

    // Add new guide
    case ADD_NEW_GUIDE_FETCHING:
      return {
        ...state,
        addingNewGuide: true,
        addingNewGuideErr: ''
      }
    case ADD_NEW_GUIDE_SUCCESS:
      console.log('add new user success: ', action.payload.username)
      return {
        ...state,
        guide: action.payload,
        addingNewGuide: false,
        addingNewGuideErr: ''
      }
    case ADD_NEW_GUIDE_FAILURE:
      return {
        ...state,
        addingNewGuide: false,
        addingNewGuideErr: ''
      }
    // Add new guide to the redux store
    case ADD_NEW_GUIDE_STORE_SUCCESS:
      return {
        ...state,
        guide: action.payload
      }
    // Add new tourist
    case ADD_NEW_TOURIST_FETCHING:
      return {
        ...state,
        addingNewTourist: true,
        addingNewTouristErr: ''
      }
    case ADD_NEW_TOURIST_SUCCESS:
      return {
        ...state,
        addingNewTourist: false,
        tourist: action.payload,
        addingNewTouristErr: ''
      }
    case ADD_NEW_TOURIST_FAILURE:
      return {
        ...state,
        addingNewTourist: false,
        addingNewTouristErr: action.payload
      }

    // Add new tourist to redux store
    case ADD_NEW_TOURIST_STORE_SUCCESS:
      return {
        ...state,
        tourist: action.payload
      }

    // Update guide info
    case UPDATE_GUIDE_INFO_FETCHING:
      return {
        ...state,
        updatingUser: true,
        error: '',
      };
    case UPDATE_GUIDE_INFO_SUCCESS:
      return {
        ...state,
        guide: action.payload,
        updatingUser: false,
        error: '',
      };
    case UPDATE_GUIDE_INFO_FAILURE:
      return {
        ...state,
        updatingUser: false,
        error: action.payload,
      };

    // Update tourist info
    case UPDATING_SINGLE_TOURIST_START:
      return {
        ...state,
        updatingTourist: true,
        updatingTouristErr: '',
      }
    case UPDATING_SINGLE_TOURIST_SUCCESS:
      return {
        ...state,
        updatingTourist: false,
        tourist: action.payload,
        updatingTouristErr: '',
      }
    case UPDATING_SINGLE_TOURIST_FAILURE:
      return {
        ...state,
        updatingTourist: false,
        updatingTouristErr: action.payload
      };
    case FETCHING_GUIDES_START:
      return {
        ...state,
        fetchingAllGuides: true,
      };
    case FETCHING_GUIDES_SUCCESS:
      console.log('Reducing of GUIDES: ', action.payload);
      return {
        ...state,
        fetchingAllGuides: false,
        guides: action.payload,
      };
    case FETCHING_GUIDES_FAILURE:
      console.log('GET GUIDES ERR: ', action.payload);
      return {
        ...state,
        fetchingAllGuides: false,
        error: action.payload,
      };
    case FETCHING_TOURISTS_START:
      return {
        ...state,
        fetchingAllGuides: true,
      };
    case FETCHING_TOURISTS_SUCCESS:
      console.log('Reducing of TOURISTS: ', action.payload);
      return {
        ...state,
        fetchingAllGuides: false,
        tourist: [...action.payload],
      };
    case FETCHING_TOURISTS_FAILURE:
      console.log('GET TOURISTS ERR: ', action.payload);
      return {
        ...state,
        fetchingAllGuides: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
