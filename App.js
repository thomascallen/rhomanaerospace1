import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
        //Dude this is freaking sick
      <View style={styles.container}>
        <Text style={styles.titleText}>This is our roomate app, developed by Bhav & Yami</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //the teal color value is rgb(102,255,204)
    backgroundColor: "#00dfb0",
    alignItems: 'center',
    justifyContent: 'center',
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
