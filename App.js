import React from 'react';
import { Animated, Easing, AppRegistry, Image, StyleSheet, Text, View } from 'react-native';
import FadeIn from 'react-native-fade-in-image';

export default class App extends React.Component {
  render() {
    return (
        //Dude this is freaking sick
      <View style={styles.container}>

        <Image style={ImageStyles.stretch} source={require('/Users/Bhav/allPrograms/RoomateApp/assets/logo.png')}/>
        <Text style={styles.titleText}>Den</Text>
      </View>
    );
  }
}
/*
class FadeInView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0), // init opacity 0
    };
  }
  componentDidMount() {
    Animated.timing(
      // Uses easing functions
      this.state.fadeAnim, // The value to drive
      {toValue: 1}, // Configuration
    ).start(); // Don't forget start!
  }
  render() {
    return (
      <Animated.View // Special animatable View
        style={{opacity: this.state.fadeAnim}}>
        {' '}
        // Binds
        {this.props.children}
      </Animated.View>
    );
  }
}
*/ 




const ImageStyles = StyleSheet.create({
  stretch:{
    width: 250,
    height: 250,
    borderRadius: 70,
  },
});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //the teal color value is rgb(102,255,204)
    backgroundColor: "#00dfb0",
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'Times New Roman',
  },
  titleText: {
    fontSize: 50,
    fontWeight: 'bold',
  },
});
