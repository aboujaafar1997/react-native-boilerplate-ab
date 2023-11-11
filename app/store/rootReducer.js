import { combineReducers } from 'redux';
import { authentificationReducer } from './authentification/reducer';
import { toaster } from './toaster/reducer';

export default combineReducers({
  auth: authentificationReducer,
  toaster,
});
