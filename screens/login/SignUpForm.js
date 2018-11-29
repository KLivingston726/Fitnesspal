import React, {Component} from 'react';
import {Image, StyleSheet,View, TextInput, TouchableOpacity, Text, StatusBar } from 'react-native';
import * as FireBaseAPI from '../../modules/firebaseAPI';

export default class SignUpForm extends React.Component {

  state = {
    email: "",
    password: ""
  };

  submit() {
    //Validate email text before sending to Firebase
    FireBaseAPI.createUser(this.state.email, this.state.password)
  }

      render(){
        return(
            <View style={styles.container}>
              <StatusBar barStyle="light-content" />

              <TextInput
                placeholder="Email"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                onSubmitEditing={() => this.emailInput.focus()}
                autoCorrect={false}
                style={styles.input}
                onTextChange={(text) => this.setState({email: text})}
                value={this.state.email}
              />
              <TextInput
                placeholder="Password"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                secureTextEntry
                //onSubmitEditing={() => this.usernameInput.focus()}
                autoCorrect={false}
                style={styles.input}
                ref={(input) => this.emailInput = input}
                onTextChange={(text) => this.setState({password: text})}
                value={this.state.password}
              />

              <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.submit()}>
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
