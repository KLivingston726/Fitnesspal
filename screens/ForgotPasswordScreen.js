import React from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  Platform,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
 } from 'react-native';
 import firebase from 'firebase'
 import * as FirebaseAPI from '../modules/firebaseAPI';

export default class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: ""
    });
  }

  static navigationOptions = {
    title: 'Forgot Password',
  };


  forgotPassword() {
    FirebaseAPI.forgotPassword(this.state.email)
  }

  render() {
    return (
      <ImageBackground source={require('../assets/images/brad.jpg')} style={styles.container}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>


        <View style={styles.signupContainer}>
          <Image
            source={require('../assets/images/lock.png')}
            style={styles.image}
          />


          <Text style={styles.title}>Forgot Password?</Text>
          <Text style={styles.text}>Just type the email linked to the account and we will send you password reset</Text>
        </View>

        <View>
            <StatusBar barStyle="light-content" />

            <TextInput
            style={styles.textInput}
              placeholder= "Email"
              placeholderTextColor="rgba(255,255,255,0.7)"
              returnKeyType="next"
              autoCapitalize="none"
              onSubmitEditing={() => this.emailInput.focus()}
              autoCorrect={false}

              onChangeText={(text) => this.setState({email: text})}
              value={this.state.email}

            />
          <View style={styles.totalButtonContainer}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.forgotPassword()}
            >
              <View>
                <Text style={styles.buttonText}>Reset Password</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>

      </KeyboardAvoidingView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(84, 153, 199, .3)',
  },
  signupContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 40,
    marginVertical: 10,
  },
  text: {
    width: 280,
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: 90,
    height: 90,
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    //backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
    marginBottom: 10,
    color: "#FFF",
    paddingHorizontal: 10,
    fontSize: 15,
  },
  totalButtonContainer: {
    marginBottom: 20,
  },
  buttonContainer: {
    marginVertical: 5,
    backgroundColor: '#2874A6',
    paddingVertical: 12,
   },
   buttonText: {
     textAlign: 'center',
     color: '#FFF',
     fontWeight: '500',
   }
});
