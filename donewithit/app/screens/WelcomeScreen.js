import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';

import Colors from '../config/Colors';

function WelcomeScreen(props) {
  return (
    <ImageBackground
    style={styles.background}
    source={require('../assets/background.jpg')}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />  
        <Text>Sell What You Don't Need</Text>
      </View>
      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  background:{
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
   
  },
  loginButton:{
    width:'100%',
    height: 70,
    backgroundColor: Colors.primary, 
  },
  registerButton:{
    width:'100%',
    height: 70,
    backgroundColor: Colors.secondary, 
  },
  logo:{
    width:100,
    height:100,
  },
  logoContainer:{
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  }
})
export default WelcomeScreen;