import React, {Component} from 'react';
import { Divider } from 'react-native-elements';
import { Router, Scene } from 'react-native-router-flux';
import HomePage from './screens/HomePage';
import LoginPage from './screens/LoginPage';


const App = () => {
  console.log("Im in App!");
  return (
    <Router>
      <Scene key="root">
        <Scene key="home"
          component={HomePage}
          title="Home"
          initial
        />
        <Scene
          key="login"
          component={LoginPage}
          title="Login"
        />
      </Scene>
    </Router>
  );
}

export default App;






