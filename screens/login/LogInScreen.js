import React, {Component} from 'react';
import {Image, StyleSheet,View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import LogInForm from './LogInForm';


export default class LogInScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };

      render(){
        return(
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                  <Image
                    style={styles.logo}
                    source={require('../../images/barbell.png')}
                  />
                  <Text style={styles.title}>This is our Fitness App</Text>
                </View>
                <View style={styles.formContainer}>
                  <LogInForm />
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
    logoContainer: {
      alignItems: 'center',
      flexGrow: 1,
      justifyContent: 'center',
    },
    logo: {
      width: 150,
      height: 150,
    },
    title: {
      color: '#FFF',
      marginTop: 10,
      width: 160,
      textAlign: 'center',
      opacity: 0.8,
    },

})
