import produce from 'immer';
import {
  AUTHENTIFICATION,
  AUTHENTIFICATION_ERROR,
  AUTHENTIFICATION_SUCCESS,
  LOGOUT,
  TOGGLE_NETWORK_STATE,
} from './types';

const initialState = {
  loading: false,
  error: '',
  token: null,
  refreshToken: null,
  idToken: null,
  user: null,
};

export const authentificationReducer = produce((draftState, action) => {
  switch (action.type) {
    case AUTHENTIFICATION:
      draftState.loading = true;
      draftState.user = action.payload;
      break;
    case AUTHENTIFICATION_SUCCESS:
      draftState.loading = false;
      draftState.token = action.payload.accessToken;
      break;
    case AUTHENTIFICATION_ERROR:
      draftState.loading = false;
      draftState.error = action.payload.error;
      break;
    case TOGGLE_NETWORK_STATE:
      draftState.online = action.payload;
      break;
    case LOGOUT:
      console.log('ooo')
      draftState.token = null;
      draftState.user = null;
      break;
    default:
      break;
  }
}, initialState);
