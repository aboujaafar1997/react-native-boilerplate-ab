import { check, PERMISSIONS, request, RESULTS } from 'react-native-permissions';
import { Platform } from 'react-native';

/**
 * Log permission status
 * @param permission
 * @param status
 */
const logPermissionStatus = (permission, status) => {
  switch (status) {
    case RESULTS.UNAVAILABLE:
      console.log(`${permission}: This feature is not available (on this device / in this context)`);
      break;
    case RESULTS.DENIED:
      console.log(`${permission}: The permission has not been requested / is denied but requestable`);
      break;
    case RESULTS.LIMITED:
      console.log(`${permission}: The permission is limited: some actions are possible`);
      break;
    case RESULTS.GRANTED:
      console.log(`${permission}: The permission is granted`);
      break;
    case RESULTS.BLOCKED:
      console.log(`${permission}: The permission is denied and not requestable anymore`);
      break;
    default:
      console.error(`${permission}: Unknown status: ${status}`); // should never happen
  }
};

/**
 * Request permission
 * @param permission
 * @param result
 * @param callback
 * @returns {Promise<*>}
 */
async function requestPermission(permission, result, callback) {
  const response = await request(permission);
  if (response === RESULTS.GRANTED || response === RESULTS.LIMITED) {
    logPermissionStatus(permission, result);
    return callback(null, true);
  }
  return callback(null, false);
}

/**
 * Check if permission is granted, if not request it*
 * [
 * @param callback
 * @param permission
 * See {@link https://github.com/zoontek/react-native-permissions#api} for possible values
 * @returns {Promise<error, boolean>} true if permission is granted, false otherwise,
 * null with error if something went wrong
 */
async function requestPermissionIfNotGranted(callback, permission) {
  try {
    const result = await check(permission);
    logPermissionStatus(permission, result);
    if (result === RESULTS.GRANTED) {
      return callback(null, true);
    }
    if (result === RESULTS.DENIED) {
      return await requestPermission(permission, result, callback);
    }
    return callback(null, false); // permission denied, blocked or unavailable
  } catch (err) {
    console.error(`${permission}: ${err}`);
    return callback(err, null);
  }

}


/**
 * Request camera permission
 * @param callback
 * @returns {Promise<error, boolean>} true if permission is granted, false otherwise,
 * null with error if something went wrong
 */
export async function requestCameraPermission(callback) {
  const permission = Platform.OS === 'ios' ? PERMISSIONS.IOS.CAMERA : PERMISSIONS.ANDROID.CAMERA;
  return requestPermissionIfNotGranted(callback, permission);
}


/**
 * Request geolocation permission
 * @param callback
 * @returns {Promise<error, boolean>} true if permission is granted, false otherwise,
 * null with error if something went wrong
 */
export async function requestGeolocationPermission(callback) {
  const permission = Platform.OS === 'ios' ? PERMISSIONS.IOS.LOCATION_ALWAYS : PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION;
  return requestPermissionIfNotGranted(callback, permission);
}

