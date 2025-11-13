/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-cycle */
import { all, call, put, takeEvery } from 'redux-saga/effects';
import { persistor } from '..';

import { http } from '../../util/http';
import { toggleToaster } from '../toaster/actions';
import { authentificationError, authentificationSuccess } from './actions';
import { AUTHENTIFICATION, LOGOUT } from './types';

const authentificationRequest = async ({ username, password }) => {
  console?.log( {
    username,
    password,
  })
  const result = await http.post('/auth/login', {
    username,
    password,
  });
  return { status: result?.status, data: result?.data };
};

// Logout  
const logoutRequest = async (idToken) => {
  const result = await http.get(
    `$/logout?id_token_hint=${idToken}&state=${Math.random().toString(36).substring(2, 12)}`
  );
  return { status: result?.status, data: result?.data };
};

// inject access_token to header pour les APIs 
const addTokenTohttp = async (token) => {
  if (token) http.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Générateur SAGA pour authantification
export function* authentification({ payload }) {
  try {
    const response = yield call(authentificationRequest, payload);
    console.log(response)
    if (response?.status !== 200 || response?.status !== 201) {
      yield put(authentificationSuccess(response.data));
      yield call(addTokenTohttp, response.data.access_token);
    } else {
      yield put(
        toggleToaster({
          text: 'Votre authentification a échoué. Mauvais identifiant / mot de passe.',
          type: 'danger',
          visible: true,
        })
      );
    }
  } catch (error) {
    console.log('authentification', error);
    yield put(authentificationError(error));
    yield put(
      toggleToaster({
        text: 'Votre authentification a échoué. Mauvais identifiant / mot de passe.',
        type: 'danger',
        visible: true,
      })
    );
  }
}

export function* logout(idToken) {
  try {
    yield call(logoutRequest, idToken.payload);
  } catch (error) {
    console.log('logout', error);
  } finally {
    console.log('purge store ...');
    persistor.purge();
    persistor.flush();
  }
}

export function* watchGetauthentification() {
  yield takeEvery(AUTHENTIFICATION, authentification);
}

// export function* watchGetlogout() {
//   yield takeEvery(LOGOUT, logout);
// }

export default function* authentificationSaga() {
  yield all([watchGetauthentification()]);
}
