//this is the login page 

import React, {Component} from 'react';
import { Platform, Alert, YellowBox,Keyboard, Button, Animated, Easing, TextInput, AppRegistry, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Divider, Overlay} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';
import {styles, FadeInView, ImageStyles, MakeTextInputBox} from '../additionalFunctions';
import { MapView } from "expo";
import { Menu, MenuProvider, MenuOptions, MenuOption, MenuTrigger} from "react-native-popup-menu";

export default class LoginPage extends React.Component{

  static navigationOptions = {
    title: 'Map'
  }; 


  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      markers: [{
        coordinate: {
          latitude: 45.524548,
          longitude: -122.6749817,
        },
        title: "Best Place",
        description: "This is the best place in Portland",
      },
      {
        coordinate: {
          latitude: 45.524698,
          longitude: -122.6655507,
        },
        title: "Second Best Place",
        description: "This is the second best place in Portland",
      },
      {
        coordinate: {
          latitude: 45.5230786,
          longitude: -122.6701034,
        },
        title: "Third Best Place",
        description: "This is the third best place in Portland",
      },
      {
        coordinate: {
          latitude: 45.521016,
          longitude: -122.6561917,
        },
        title: "Fourth Best Place",
        description: "This is the fourth best place in Portland",
      },
    ],
    initalFlightPin:{
      latitude: 34.0522,
      longitude: -118.2437,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    };
  }
    render() {
      console.log("I'm going to render the map now")
        return (
            <MapView
              style={{
                flex: 1
              }}
              provider="google"
              initialRegion={this.state.initalFlightPin}
              >
              <MapView.Marker
              coordinate={{latitude: this.state.initalFlightPin.latitude, longitude: this.state.initalFlightPin.longitude}}
              title={"Pin #1"}
              description={"Initial Flight Pin"}
              />

              <MapView.Callout>
                <View style={{flex: 1, flexDirection: 'column', justifyContent: "center", alignItems: 'center' }}>
                  <View style={styles.callout}>
                    <Button title='Configure Waypoints' onPress={() => console.log('Changing')} />
                  </View>
                </View>
              </MapView.Callout>

          </MapView>
          
            );
          }
        }