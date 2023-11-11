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
      break;
    case AUTHENTIFICATION_SUCCESS:
      draftState.token = action.payload.access_token;
      draftState.refreshToken = action.payload.refresh_token;
      draftState.idToken = action.payload.id_token;
      break;
    case AUTHENTIFICATION_ERROR:
      draftState.loading = false;
      draftState.error = action.payload.error;
      break;
    case TOGGLE_NETWORK_STATE:
      draftState.online = action.payload;
      break;
    case LOGOUT:
      draftState.token = null;
      draftState.refreshToken = null;
      draftState.user = null;
      draftState.idToken = null;
      break;
    default:
      break;
  }
}, initialState);
