import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Card, FormInput } from 'react-native-elements';


export default class SignUpScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };

      render(){
        return(
          <View style={styles.stubContainer}>
            <Text style={styles.stub}>WHAT THE HECK</Text>
          </View>

        );
      }

}


const styles = StyleSheet.create({
  stub: {
    fontSize: 50,
    color: 'rgb(0, 0, 0)',
  },
  stubContainer: {
    backgroundColor: 'rgb(255, 255, 255)',    
  }








})