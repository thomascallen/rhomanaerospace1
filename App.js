import React, {Component} from 'react';
import { Divider } from 'react-native-elements';
import { Router, Scene } from 'react-native-router-flux';
import HomePage from './screens/HomePage';
import LoginPage from './screens/LoginPage';
import SignUp from './screens/SignupPage';

import * as firebase from 'firebase';
// Initialize Firebase
const API_KEY = "AIzaSyAjsSti1md2e16LOalvXrpPdrUuvSDZteg";
const AUTH_DOMAIN = "bunkmates-b6d6b.firebaseapp.com";
const DATABASE_URL = "https://bunkmates-b6d6b.firebaseio.com";
const STORAGE_BUCKET = "bunkmates-b6d6b.appspot.com";

const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

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






