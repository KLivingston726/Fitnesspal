import React, {Component} from 'react';
import {Image, StyleSheet,View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';

export default class SignUpForm extends React.Component {
      render(){
        return(
            <View style={styles.container}>
              <StatusBar barStyle="light-content" />

              <TextInput
                placeholder="First Name"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.lastnameInput.focus()}
                autoCorrect={false}
                style={styles.input}
              />
              <TextInput
                placeholder="Last Name"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.usernameInput.focus()}
                autoCorrect={false}
                style={styles.input}
                ref={(input) => this.lastnameInput = input}
              />
              <TextInput
                placeholder="Username"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.emailInput.focus()}
                autoCorrect={false}
                style={styles.input}
                ref={(input) => this.usernameInput = input}
              />
              <TextInput
                placeholder="Email"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.passwordInput.focus()}
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.input}
                ref={(input) => this.emailInput = input}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                secureTextEntry
                returnKeyType="next"
                onSubmitEditing={() => this.confirmPasswordInput.focus()}
                style={styles.input}
                ref={(input) => this.passwordInput = input}
              />
              <TextInput
                placeholder=" Confirm Password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                secureTextEntry
                returnKeyType="go"
                style={styles.input}
                ref={(input) => this.confirmPasswordInput = input}
              />

              <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>

            </View>

        );
      }
}


const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.3)',
    marginBottom: 10,
    color: "#FFF",
    paddingHorizontal: 10,
    fontSize: 15,
  },
  buttonContainer: {
    marginTop: 30,
    backgroundColor: '#2874A6',
    paddingVertical: 12,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '500',
  }

});
