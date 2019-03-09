//this is the login page 

import React, {Component} from 'react';
import { Keyboard, Button, Animated, Easing, TextInput, AppRegistry, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';
import {styles, FadeInView, ImageStyles, MakeTextInputBox} from '../additionalFunctions';


export default class LoginPage extends React.Component{

  static navigationOptions = {
    title: 'Login'
  };
    render() {
      console.log("I'm trying to render the loginPage")
        return (
          
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>I really hope this works</Text>
          </View>
        );
      }
}