//this is the login page 

import React, {Component} from 'react';
import { Keyboard, Button, Animated, Easing, TextInput, AppRegistry, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import {createStackNavigator, createAppContainer, createAppNavigator} from 'react-navigation';


export default class LoginScreen extends React.Component{
    render() {
        return (
          <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Details Screen</Text>
          </View>
        );
      }
}