import { combineReducers } from 'redux';
import tourReducer from './toursReducer';
import userReducer from './userReducer';

export default combineReducers({
  userReducer,
  tourReducer
});
