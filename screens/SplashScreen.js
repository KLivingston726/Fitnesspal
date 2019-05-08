import React from 'react';
import {
  View,
  Image,
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
      header: null
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
          <Text style={styles.title}>Welcome to WorkoutMate</Text>
          <Text style={styles.infoText}>
            Log-In or Create New User Below
          </Text>
          <View style={styles.welcomeContainer}>
            <Text style={styles.getStartedText}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/brad.jpg')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
            </Text>
          </View>
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
    backgroundColor: '#3498DB',
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 300,
  },
  infoText: {
    marginTop: 30,
    fontSize: 20,
    color: '#17202A',
    fontFamily: 'Georgia-Bold',
  },
  welcomeImage: {
    width: 375,
    height: 250,
    resizeMode: 'contain',
    marginTop: 0,
    marginLeft: 0,
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 50,
    fontFamily: 'Georgia-Bold',
    borderRadius: 300,
  },
  totalButtonContainer: {
    marginBottom: 30,
  },

});
