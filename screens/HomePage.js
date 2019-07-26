
//this is the homepage 
import React, {Component} from 'react';
import { Keyboard, Button, Animated, Easing, TextInput, Image, ImageBackground, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux'; 
// import styles  from '../additionalFunctions';
// import FadeInView  from '../additionalFunctions'; 
// import ImageStyles  from '../additionalFunctions';
// import MakeTextInputBox from '../additionalFunctions';
import {styles , FadeInView, ImageStyles, MakeTextInputBox} from '../additionalFunctions';

export default class HomePage extends React.Component {
    state = {
      text: ''
    };

    static navigationOptions = {
        title: 'Home'
    };
    renderConsolelog(line){
      console.log('line-'+line);
    }
    render() {
      console.log("I'm trying to render the homepage")
      return (
          //Fade in Homescreen on mount (on loading basically)
        
        //ImageBackground sets the gradient background for the app. note: background color overides this
        <ImageBackground source={require("../assets/gradientBack.png")} style={{width: '100%', height: '100%'}}>
          {/* .container just sets spacing for each component in the main container */}
       
          <View style={{flex: 1, justifyContent: "center", alignItems: 'center' }}>
            
            {/* text */}
            <View style={{fontSize: 20}}>
            <Text style={styles.textRegister}>───── Welcome  ─────</Text>
            </View>
            {this.renderConsolelog(72)}
            {/* more spacing */}
            <View style={{fontSize: 0}}>
              <Text></Text>
              <Text></Text>
            </View>
  
  
            {/* newline for spacing */}
            <View style={{fontSize: 0}}>
              <Text></Text>
            </View>
  
            {/* Login Button */}
            <View style={styles.button}>
              <Button onPress={() => Actions.login()} color="rgb(35, 35, 35)" title="View Map"/>
            </View>
  
            {/* more spacing */}
            <View style={{fontSize: 0}}>
              <Text></Text>
              <Text></Text>
            </View>
  
          </View>

          </ImageBackground>
      );
    }
  }
  

  