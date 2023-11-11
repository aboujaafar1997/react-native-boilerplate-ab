import {
  AUTHENTIFICATION,
  AUTHENTIFICATION_ERROR,
  AUTHENTIFICATION_SUCCESS,
  LOGOUT,
  TOGGLE_NETWORK_STATE,
} from './types';

export const authentification = (data) => ({
  type: AUTHENTIFICATION,
  payload: data,
});

export const authentificationSuccess = (data) => ({
  type: AUTHENTIFICATION_SUCCESS,
  payload: data,
});

export const authentificationError = (data) => ({
  type: AUTHENTIFICATION_ERROR,
  payload: data,
});

export const logout = (idToken) => ({
  type: LOGOUT,
  payload: idToken,
});

export const toggleNetworkState = (state) => ({
  type: TOGGLE_NETWORK_STATE,
  payload: state,
});
