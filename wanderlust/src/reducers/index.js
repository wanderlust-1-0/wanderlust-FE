import { combineReducers } from 'redux';
import signUp_In_Reducer from './signUp_In_Reducer';

export default combineReducers({
  signUp_In: signUp_In_Reducer,
});
