import {
  FETCHING_TOURS_START,
  FETCHING_TOURS_SUCCESS,
  FETCHING_TOURS_FAILURE,
} from '../actions';

import { ADD_TOUR_START, ADD_TOUR_SUCCESS, ADD_TOUR_FAILURE } from '../actions';

import {
  UPDATE_TOUR_START,
  UPDATE_TOUR_SUCCESS,
  UPDATE_TOUR_FAILURE,
} from '../actions';

import {
  DELETE_TOUR_START,
  DELETE_TOUR_SUCCESS,
  DELETE_TOUR_FAILURE,
} from '../actions';

import {
  FETCHING_SINGLETOUR_START,
  FETCHING_SINGLETOUR_SUCCESS,
  FETCHING_SINGLETOUR_FAILURE,
} from '../actions';

import {
  ADD_TOURIST_TO_TOUR_START,
  ADD_TOURIST_TO_TOUR_SUCCESS,
  ADD_TOURIST_TO_TOUR_FAILURE,
} from '../actions';

const initialState = {
  tours: [],
  fetchingTours: false,
  fetchingToursErr: '',
  tour: {},
  addingTour: false,
  addingTourErr: '',
  updatingTour: false,
  updatingTourErr: '',
  deletingTour: false,
  deletingTourErr: '',
  fetchingSingleTour: false,
  fetchSingleTourErr: '',
  addingTouristToTour: false,
  addingTouristToTourError: '',
  addingTour: false,
  addingTourError: '',
};

const tourReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_TOURS_START:
      return {
        ...state,
        fetchingTours: true,
        fetchingToursErr: '',
      };
    case FETCHING_TOURS_SUCCESS:
      console.log('Reducing of TOURS: ', action.payload);
      return {
        ...state,
        tours: [...action.payload],
        fetchingTours: false,
        fetchingToursErr: '',
      };
    case FETCHING_TOURS_FAILURE:
      return {
        ...state,
        fetchingTours: false,
        fetchingToursErr: action.payload,
      };
    case ADD_TOUR_START:
      return {
        ...state,
        addingTour: true,
        addingTourErr: '',
      };
    case ADD_TOUR_SUCCESS:
      return {
        ...state,
        tours: action.payload,
        addingTour: false,
        addingTourErr: '',
      };
    case ADD_TOUR_FAILURE:
      return {
        ...state,
        addingTour: false,
        addingTourErr: action.payload,
      };
    case UPDATE_TOUR_START:
      return {
        ...state,
        updatingTour: true,
        updatingTourErr: '',
      };
    case UPDATE_TOUR_SUCCESS:
      return {
        ...state,
        tours: action.payload,
        updatingTour: false,
        updatingTourErr: '',
      };
    case UPDATE_TOUR_FAILURE:
      return {
        ...state,
        updatingTour: false,
        updatingTourErr: action.payload,
      };
    case DELETE_TOUR_START:
      return {
        ...state,
        deletingTour: true,
        deletingTourErr: '',
      };
    case DELETE_TOUR_SUCCESS:
      return {
        ...state,
        tours: action.payload,
        deletingTour: false,
        deletingTourErr: '',
      };
    case DELETE_TOUR_FAILURE:
      return {
        ...state,
        deletingTour: false,
        deletingTourErr: action.payload,
      };
    case FETCHING_SINGLETOUR_START:
      return {
        ...state,
        fetchingSingleTour: true,
      };
    case FETCHING_SINGLETOUR_SUCCESS:
      console.log('Reducing of Single Tour: ', action.payload);
      return {
        ...state,
        fetchingSingleTour: false,
        tour: {
          ...action.payload,
        },
      };
    case FETCHING_SINGLETOUR_FAILURE:
      console.log('GET Single Tour ERR: ', action.payload);
      return {
        ...state,
        fetchingSingleTour: false,
        fetchSingleTourErr: action.payload,
      };
    case ADD_TOURIST_TO_TOUR_START:
      return {
        ...state,
        addingTouristToTour: true,
      };
    case ADD_TOURIST_TO_TOUR_SUCCESS:
      console.log('Reducing of Single Tour: ', action.payload);
      return {
        ...state,
        addingTouristToTour: false,
        tour: {
          ...action.payload,
        },
      };
    case ADD_TOURIST_TO_TOUR_FAILURE:
      console.log('GET Single Tour ERR: ', action.payload);
      return {
        ...state,
        addingTouristToTour: false,
        addingTouristToTourError: action.payload,
      };
    case ADD_TOUR_START:
      return {
        ...state,
        addingTour: true,
      };
    case ADD_TOUR_SUCCESS:
      console.log('Reducing of Single Tour: ', action.payload);
      return {
        ...state,
        addingTour: false,
        tour: {
          ...action.payload,
        },
      };
    case ADD_TOUR_FAILURE:
      console.log('GET Single Tour ERR: ', action.payload);
      return {
        ...state,
        addingTour: false,
        addingTourError: action.payload,
      };
    default:
      return state;
  }
};

export default tourReducer;
