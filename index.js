/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';


import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import {
//     GOOGLE_WEB_CLIENT_ID,
//     GOOGLE_ANDROID_CLIENT_ID,
//     GOOGLE_IOS_CLIENT_ID,
// } from '@env';

GoogleSignin.configure({
    webClientId : "857520856039-vgvguj10t3k8lpko86bnis54ut899mof.apps.googleusercontent.com",
    androidClientId : "857520856039-vgvguj10t3k8lpko86bnis54ut899mof.apps.googleusercontent.com",
    scopes: ['profile', 'email'],
});

AppRegistry.registerComponent(appName, () => App);

