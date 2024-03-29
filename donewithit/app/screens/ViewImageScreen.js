import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import Colors from '../config/Colors';

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}></View>
      <View style={styles.deleteIcon}></View>
    <Image resizeMode='contain' style={styles.image} 
    source={require('../assets/chair.jpg')}/>
    </View>
  );
}
const styles = StyleSheet.create({
  deleteIcon:{
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    right: 30,
    backgroundColor: Colors.secondary,
  },
  closeIcon:{
      
    width: 50,
    height: 50,
    position: 'absolute',
    top: 40,
    left: 30,
    backgroundColor: Colors.primary,
  },
  container:{
    backgroundColor: Colors.black,
    flex: 1,
  },
  image:{
    width: '100%',
    height: '100%',
  }
})
export default ViewImageScreen;