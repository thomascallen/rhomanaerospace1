import React, {Component} from 'react';
import { Divider } from 'react-native-elements';
import { Router, Scene } from 'react-native-router-flux';
import HomePage from './screens/HomePage';
import LoginPage from './screens/LoginPage';
import SignUp from './screens/SignupPage';
//import {API_KEY, AUTH_DOMAIN, DATABASE_URL, STORAGE_BUCKET} from 'security';
import * as firebase from 'firebase';

// Initialize Firebase
/*
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  storageBucket: STORAGE_BUCKET,
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
*/
const App = () => {
  console.log("Im in App!");
  return (
    <Router>
      <Scene key="root">
        <Scene key="home"
          component={HomePage}
          title="Home"
          initial
          hideNavBar
        />
        <Scene
          key="login"
          component={LoginPage}
          title="Login"
        />
        <Scene 
          key="signup"
          component = {SignUp}
          title="signup"
        />
      </Scene>
    </Router>
  );
}

export default App;






