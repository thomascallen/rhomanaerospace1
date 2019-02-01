import React, {Component} from 'react';
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
          <FadeInView style={{width: 250, height: 250, backgroundColor: 'transparent'}}>
            <Image style={ImageStyles.stretch} source={require('./assets/logo.png')}/>
          </FadeInView>
        </View>
        <View style={styles.container}>
          <MakeTextInputBox defaultValue={"null"} placeholder={" Email"} textContentType="emailAddress" />
        </View>

        <View style={styles.container}>
          <MakeTextInputBox defaultValue={"null"} placeholder={" Password"} textContentType="password" />
        </View>
      </View>
    );
  }
}


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
    this.style={width: 250, 
      height: 40, 
      borderRadius: 10, 
      backgroundColor: "transparent", 
      borderColor: 'black', 
      borderWidth: 2
    };

    //need to set defaultValue, textContentType, placeholder

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
    this.color="rgb(8,8,8)"
    this.fontSize = 18;
    this.includeFontPadding=true;
    this.textDecorationColor="rgb(8,8,8)";
    this.placeholderText = "rbg(255,255,255";
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
