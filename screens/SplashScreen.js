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
 import RectangleButton from '../components/RectangleButton';

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
    console.log("create");
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
            <RectangleButton
              text="Log In Existing"
              color="#FFF"
              backgroundColor="#2874A6"
              handleOnPress={this._showLogin}
            />
            <RectangleButton
              text="Create New User"
              color="#FFF"
              backgroundColor="#2874A6"
              handleOnPress={this._showSignin}
            />
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
  totalButtonContainer: {
    marginBottom: 30,
  },

});
