// eslint-disable-next-line import/no-unresolved
import { API_URL } from '@env';
import axios from 'axios';
// eslint-disable-next-line import/no-cycle
import { store } from '../store';
import { authentificationSuccess, logout } from '../store/authentification/actions';
import { toggleToaster } from '../store/toaster/actions';

export const http = axios.create({
  baseURL: API_URL,
  headers: store.getState().auth.token
    ? {
        Accept: 'application/json',
        Authorization: `Bearer ${store.getState().auth.token}`,
      }
    : {
        Accept: 'application/json',
      },
});

export const multipart = axios.create({
  baseURL: API_URL,
  responseType: 'blob',
  headers: {
    Accept: 'application/json',
  },
});

const refreshToken = async (refreshTokenValue) => {
  try {
    const response = await http.post(API_URL, {
      grant_type: 'refresh_token',
      client_id: 'test',
      client_secret: 'test',
      scope: ' profile email',
      refresh_token: refreshTokenValue,
    });
    return response.data;
  } catch (error) {
    console.error('refreshToken error', error);
    return '';
  }
};

http.interceptors.response.use(
  (response) => response,
  async (error) => {
    const refreshTokenValue = store.getState().auth.refreshToken;
    const { idToken } = store.getState().auth;
    const originalRequest = error.config;
    if (!error.response) {
      store.dispatch(
        toggleToaster({
          text: 'Merci de vérifier ton VPN !',
          type: 'danger',
          visible: true,
        })
      );
      return null;
    }
    if (error.response?.status === 401 && !refreshTokenValue) {
      console.log('faild to refreshToken Logout...');
      store.dispatch(logout(idToken));
    } else if (error.response?.status === 401 && !originalRequest._retry && refreshTokenValue) {
      console.log('refreshToken...');
      try {
        originalRequest._retry = true;
        const token = await refreshToken(refreshTokenValue);
        http.defaults.headers.common.Authorization = `Bearer ${token.access_token}`;
        store.dispatch(authentificationSuccess({ ...token, refreshTokenValue }));
        originalRequest.headers.Authorization = `Bearer ${token.access_token}`;
        return http(originalRequest);
      } catch (er) {
        console.log(er);
        store.dispatch(logout(idToken));
      }
    } else if (error.response?.status === 401 && originalRequest._retry) {
      console.log('faild to refreshToken Logout...');
      store.dispatch(logout(idToken));
    }
    return Promise.reject(error);
  }
);
