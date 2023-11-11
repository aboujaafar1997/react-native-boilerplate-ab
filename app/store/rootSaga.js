import { all } from 'redux-saga/effects';
import authentificationSaga from './authentification/sagas';

// export default function* rootSaga() {
//   console.log('Waiting for rehydration');
//   yield take(REHYDRATE); // Wait for rehydrate to prevent sagas from running with empty store
//   console.log('Rehydrated');
//   yield all([fork(authSagas), fork(homeSagas)]);
// }

export default function* rootSaga() {
  yield all([authentificationSaga()]);
}
