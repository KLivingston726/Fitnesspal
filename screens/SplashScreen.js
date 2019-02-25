import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
 } from 'react-native';

export default class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: "",
      password: ""
    });
  }

  static navigationOptions = {
    title: 'Splash',
  };

  _showLogin = () => {
    this.props.navigation.navigate('Login');
  };

  _showSignin = () => {
    this.props.navigation.navigate('Signin');
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.signupContainer}>
          <Text style={styles.title}>Splash Screen</Text>
        </View>

        <View>
            <StatusBar barStyle="light-content" />

          <View style={styles.totalButtonContainer}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this._showLogin}
            >
              <View>
                <Text style={styles.buttonText}>Log In Existing</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this._showSignin}
            >
              <View>
                <Text style={styles.buttonText}>Create New User</Text>
              </View>
            </TouchableOpacity>
          </View>
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
    marginBottom: 10,
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
