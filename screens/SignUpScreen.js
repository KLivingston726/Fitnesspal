import React from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Icon, Button, Card, FormInput, FormLabel, FormValidationMessage } from 'react-native-elements';


export default class SignUpScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };

      render(){
        return(
          <View style={styles.formContainer}>
            <FormLabel>Name</FormLabel> 
            <FormInput onChangeText = {(text) => this.setState({text})}/>
            <FormLabel>Username</FormLabel>
            <FormInput onChangeText = {(text) => this.setState({text})}/>
            <FormLabel>Password</FormLabel>
            <FormInput onChangeText = {(text) => this.setState({text})}/>
          
            <View style = {styles.fButtonContainer}>
              <Button
                raised
                backgroundColor = 'rgba(170, 10, 10, 1)'
                buttonStyle={{ marginTop: 20 }}
                title = 'Submit!'
                fontSize = {36}

                />
            </View>
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
    backgroundColor: '#AA000C',    
  },
  formContainer: {
    flex: 1,
    padding: 30,
    backgroundColor: '#303030',
  },
  fButtonContainer: {
    backgroundColor: '#303030',
  }

})