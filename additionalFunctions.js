//Definition of textInput component

import { Keyboard, Button, Animated, Easing, TextInput, AppRegistry, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, {Component} from 'react';
import { Divider } from 'react-native-elements';

class MakeTextInputBox extends Component{
    constructor(props){
      super(props);
      //you can pass in props 
      /*
      sets the current placeholder to a value called text
      which is based off of a function which decides what to 
      display dependnig on if the user defined a placeholder already
      */
      this.state={text: ""};
      //need to set defaultValue, textContentType, placeholder
      this.padding=5;
      this.onChangeText=(text) => this.setState({text});
      this.value=this.state.text; 
      this.autoFocus=true;
      // this.defaultValue = "Email";
      this.editable=true;
      this.enablesReturnKeyAutomatically=true;
      this.keyboardAppearence=true;
      // this.placeholder="null";
      this.returnKeyType='next';
      this.selectTextOnFocus=true;
      this.spellCheck=true;
      
      // this.textContentType="null";
      this.color="rgb(8,8,8)";
      this.fontSize = 18;
      this.includeFontPadding=true;
      this.textDecorationColor="rgb(8,8,8)";
      this.placeholderText = "rbg(255,255,255)";
      this.onSubmitEditing=Keyboard.dismiss;
      this.textAlignVertical= "center";
  
      this.blurOnSubmit = 'true';
    }
    ///constructor ends here, define default props up here ^^
    render(){
      return(
        <TextInput
          {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        />
       
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
          duration: 3500,              // Make it take 3.5 seconds to fade in 
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
  
  
  //Styles
  
  const ImageStyles = StyleSheet.create({
    stretch:{
      width: 250,
      height: 250,
      borderRadius: 0,
      justifyContent: "space-around",    
      resizeMode: "contain", 
    },
  });
  
  
  const styles = StyleSheet.create({
  
    defaultContainer: {
      //the teal color value is rgb(102,255,204)
      flex:1,
      backgroundColor: "rgb(8,8,8)",
      justifyContent: 'center',
    },
  
    container: {
      flexDirection: 'column',
      flex: 2,
      justifyContent: 'center',
      paddingBottom: 180,
    },

    containerSmaller: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      paddingBottom: 180,
    },

  
    baseText: {
      fontFamily: 'Times New Roman',
    },
  
    titleText: {
      fontSize: 50,
      fontWeight: 'bold',
    },
  
    homeScreenText: {
      fontSize: 16,
      fontWeight: 'bold'
    },
  
    textBox: {
      textAlign: 'center',
      justifyContent: 'center',
      width: 250, 
      height: 40, 
      borderRadius: 10, 
      backgroundColor: "rgba(255,255,255, .2)", 
      borderColor: "rgb(108, 253, 103)", 
      borderWidth: 3
    },
    button: {
      width: 250,
      height:40,
      fontSize:18,
      backgroundColor: "rgb(108, 253, 103)",
      borderRadius: 10,
      fontWeight: 'bold',
      
    },
    headerText: {
      fontSize: 20,
      margin: 10,
      fontWeight: "bold"
    },
    menuContent: {
      color: "#000",
      fontWeight: "bold",
      padding: 2,
      fontSize: 20
    },
    
    callout:{
      width: "50%",
      height:50,
      backgroundColor: 'white',
      borderRadius: 10, 
      position: "absolute",  
    
    },
    backgroundImage: {
      flex: 1,
      width: null,
      height: null,
      resizeMode: 'cover'
    }
  });

export { styles , FadeInView, ImageStyles, MakeTextInputBox };