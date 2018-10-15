import React, {Component} from 'react';
import {Image, StyleSheet,View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import SignUpForm from './SignUpForm';


export default class SignUpScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };

      render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
              <View style={styles.signupContainer}>

                <Text style={styles.title}>Sign Up</Text>
              </View>

                <View style={styles.formContainer}>
                  <SignUpForm />
                </View>
            </KeyboardAvoidingView>

        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#3498DB',
    },
    signupContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
    },
    title: {
      color: '#FFF',
      textAlign: 'center',
      fontSize: 40,
    },

})
