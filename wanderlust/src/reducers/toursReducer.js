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
};

export const tourReducer = (state = initialState, action) => dispatch => {
  switch (action.type) {
    case FETCHING_TOURS_START:
      return {
        ...state,
        fetchingTours: true,
        fetchingToursErr: '',
      };
    case FETCHING_TOURS_SUCCESS:
      return {
        ...state,
        tours: action.payload,
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
    default:
      return state;
  }
};
