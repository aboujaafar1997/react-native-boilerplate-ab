/**
 * @format
 */

import NetInfo from '@react-native-community/netinfo';
import { AppRegistry } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { name as appName } from './app.json';
import App from './app/App';
import './app/lang/i18n';

NetInfo.configure({
  reachabilityMethod: 'GET',
  reachabilityUrl: 'http://ghh.ckk',
  reachabilityTest: async (response) => false,
  reachabilityLongTimeout: 1, // 60s
  reachabilityShortTimeout: 1, // 5s
  reachabilityRequestTimeout: 1, // 15s
  reachabilityShouldRun: () => true,
  shouldFetchWiFiSSID: true, // met iOS requirements to get SSID. Will leak memory if set to true without meeting requirements.
  useNativeReachability: false,
});

enableScreens();

AppRegistry.registerComponent(appName, () => App);
