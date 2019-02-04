//this is the login page 

import React, {Component} from 'react';
import { Keyboard, Button, Animated, Easing, TextInput, AppRegistry, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import {createStackNavigator, createAppContainer, createAppNavigator} from 'react-navigation';
import {styles, FadeInView, ImageStyles, MakeTextInputBox} from './App';


export default class Login extends React.Component{

  static navigationOptions = {
    title: 'Login'
  };
    render() {
      
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>I really hope this works</Text>
          </View>
        );
      }
}