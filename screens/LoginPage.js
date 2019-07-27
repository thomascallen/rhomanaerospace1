//this is the login page 

import React, {Component} from 'react';
import {Keyboard, Button, Animated, Easing, TextInput, AppRegistry, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Divider, Overlay} from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';
import {styles, FadeInView, ImageStyles, MakeTextInputBox} from '../additionalFunctions';
import { Dropdown } from 'react-native-material-dropdown';
import {MapView}from 'expo';
export default class LoginPage extends React.Component{

  static navigationOptions = {
    title: 'Map'
  }; 

  constructor(props) {
    super(props);
    this.map;
    this.state = {
      waypointCount: 4,
      isLoading: true,
      markers: [],
    initalFlightPin:{
      latitude: 34.0522,
      longitude: -118.2437,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421
    },
    initalFlightPinTwoVal:{
      latitude: 34.0522,
      longitude: -118.2437,
    },
    };
  }

  connectMarkers(){
      //connect the markers here//
      if(this.state.markers.length===this.state.waypointCount){
        //then it is full and now we need to connect them
        /************************TODO************************ */
        console.log("TARGET HIT!!!");
        var markersAltered = this.state.markers;
        markersAltered.push(this.state.initalFlightPinTwoVal);
        console.log(markersAltered);
        return(
        <MapView.Polyline
            coordinates={markersAltered.reversed()}
            strokeColor="#000"
            fillColor="blue"
            strokeWidth={4}/>
        )
  }
}

  removeMarkers(){
    //remove the markers here////
  }

  addToMapMarkers(myElement){
    console.log(myElement);
    console.log("Adding a new Marker!");
    //this.state.markers.push(myElement);
    let prevArray = this.state.markers;
    prevArray.push(myElement);
    console.log("markers array size--> "+prevArray.length);
    this.setState({ markers: prevArray});
  }

    render() {
      console.log("I'm going to render the map now", this.state);
      let data = [{
        value: '4 Waypoints',
      }, {
        value: '3 Waypoints',
      }, {
        value: '2 Waypoints',
      },
      {
        value: '1 Waypoints',
      },
      ];
        return (
            <MapView
              style={{
                flex: 1
              }}
              provider="google"
              initialRegion={this.state.initalFlightPin}
              onPress={ (event) => 
                this.addToMapMarkers(event.nativeEvent.coordinate)}
              >
              {this.state.markers.map((marker, index) =>{
                return(
                  <MapView.Marker
                  key={index}
                    coordinate={{latitude: marker.latitude, longitude: marker.longitude}}
                    title={`Marker ${index}`}
                    description={"Waypoint added by user"}
                  />
                )
              })}
             
              <MapView.Marker
              coordinate={{latitude: this.state.initalFlightPin.latitude, longitude: this.state.initalFlightPin.longitude}}
              title={"Pin #1"}
              description={"Initial Flight Pin"}
              />
              {this.connectMarkers()}
              <MapView.Callout>
                <View style={{ marginTop:"20%", }}>
                  <Dropdown
                  containerStyle={styles.callout}
                  label='Number of Waypoints'
                  data={data}
                  textColor="black"  
                  itemTextStyle={{marginLeft: "2%"}}
                  />
                </View>
              </MapView.Callout>
 

          </MapView>
          
            );
          }
        }