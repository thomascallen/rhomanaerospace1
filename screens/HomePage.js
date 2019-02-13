
//this is the homepage 
import React, {Component} from 'react';
import { Keyboard, Button, Animated, Easing, TextInput, AppRegistry, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';
import {createStackNavigator} from 'react-navigation';
import styles  from '../App';
import FadeInView  from '../App'; 
import ImageStyles  from '../App';
import MakeTextInputBox from '../App';

class HomePage extends React.Component {
    state = {
      text: ''
    };

    static navigationOptions = {
        title: 'Home'
    };
    
    render() {
      const {navigate} = this.props.navigation;
      return (
          //Fade in Homescreen on mount (on loading basically)
        
        //ImageBackground sets the gradient background for the app. note: background color overides this
        <ImageBackground source={require("../assets/gradientBack.png")} style={{width: '100%', height: '100%'}}>
          {/* .container just sets spacing for each component in the main container */}

          <View style={{flex: 1, backgroundColor: "rgb(8,8,8)", justifyContent: "center", alignItems: 'center' }}>
            {/* logo */}
            <FadeInView style={{width: 250, height: 250, backgroundColor: 'transparent'}}>
              <Image style={ImageStyles.stretch} source={require('../assets/logoNoBack.png')}/> 
            </FadeInView>
            
            {/* Email textBox */}
            <View style={styles.textBox}>
              <MakeTextInputBox placeholder={" Email"} autoComplete={"email"} keyboardType={"email-address"} />
            </View>
  
            {/* newline for spacing */}
            <View style={{fontSize: 0}}>
              <Text></Text>
            </View>
  
            {/* Password textBox */}
            <View style={styles.textBox}>
              <MakeTextInputBox textContentType={"password"} placeholder={" Password"} secureTextEntry={true}/>
            </View>
  
            {/* newline for spacing */}
            <View style={{fontSize: 0}}>
              <Text></Text>
            </View>
  
            {/* Login Button */}
            <View style={styles.button}>
              <Button onPress={()=>navigate('Login')} color="rgb(35, 35, 35)" title="Log In"/>
            </View>
  
            {/* more spacing */}
            <View style={{fontSize: 0}}>
              <Text></Text>
              <Text></Text>
            </View>
  
            {/* text */}
            <View style={{fontSize: 20}}>
            <Text style={styles.textRegister}>───── Or Create An Account  ─────</Text>
            </View>
  
            {/* more spacing */}
            <View style={{fontSize: 0}}>
              <Text></Text>
              <Text></Text>
            </View>
          
            {/* createAccount button */}
            <View style={styles.button}>
              <Button onPress={()=>console.log("signing in")} color="rgb(35, 35, 35)" title="Sign Up"/>
            </View>
          </View>

          </ImageBackground>
      );
    }
  }
  

  