import * as React from 'react';
import { Animated, Easing, TextInput, AppRegistry, Image, StyleSheet, Text, View } from 'react-native';


export default class App extends React.Component {
  state = {
    text: ''
  };

  render() {
    return (
        //Fade in Homescreen on mount (on loading basically)
      <View style={styles.container}>
        <View style={styles.container}>
          <FadeInView style={{width: 250, height: 250, backgroundColor: 'blue'}}>
            <Image style={ImageStyles.stretch} source={require('/Users/Bhav/allPrograms/RoomateApp/assets/logo.png')}/>
          </FadeInView>
        </View>
        <View style={styles.container}>
          <TextInput
          style={{width: 250, height: 40, borderRadius: 10, backgroundColor: "transparent", borderColor: "black", borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} autoFocus={true} defaultValue = {"Email"}
          editable={true} enablesReturnKeyAutomatically={true} keyboardAppearence={true}
          placeholder={" EmailAdress"} returnKeyType='next' selectTextOnFocus={true} spellCheck={true} 
          textContentType="emailAddress" color="rgb(8,8,8)"
          fontSize = {styles.homeScreenText.fontSize} includeFontPadding={true} textDecorationColor={"rgb(8,8,8)"}
          placeholderText = {'rbg(255,255,255'} 
        />
        </View>

        <View style={styles.container}>
        <TextInput
          style={{width: 250, height: 40, borderRadius: 10, backgroundColor: "transparent", borderColor: 'black', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text} autoFocus={true} defaultValue = {"Email"}
          editable={true} enablesReturnKeyAutomatically={true} keyboardAppearence={true}
          placeholder={"Password"} returnKeyType='next' selectTextOnFocus={true} spellCheck={true} 
          textContentType="password"  color="rgb(8,8,8)"
          fontSize = {styles.homeScreenText.fontSize} includeFontPadding={true} textDecorationColor={"rgb(8,8,8)"}
          placeholderText = {'rbg(255,255,255'} blurOnSubmit = 'true'
        />
        </View>
      </View>
    );
  }
}


class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),  // Initial value for opacity: 0
  }

  componentDidMount() {
    Animated.timing(                  // Animate over time
      this.state.fadeAnim,            // The animated value to drive
      {
        toValue: 1,                   // Animate to opacity: 1 (opaque)
        duration: 2500,              // Make it take 2.5 seconds to fade in 
      }
    ).start();                        // Starts the animation
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View                 // Special animatable View
        style={{
          ...this.props.style,
          opacity: fadeAnim,         // Bind opacity to animated value
        }}
      >
        {this.props.children}
      </Animated.View>
    );
  }
}






const ImageStyles = StyleSheet.create({
  stretch:{
    width: 250,
    height: 250,
    borderRadius: 0,
    position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
  },
});


const styles = StyleSheet.create({

  container: {
    flexDirection: 'column',
    flex: 3,
    //the teal color value is rgb(102,255,204)
    backgroundColor: "#00dfb0",
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'Times New Roman',
  },
  cursiveText: {

  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
  },

  homeScreenText: {
    fontSize: 16,
    fontWeight: 'bold'
  }

});
