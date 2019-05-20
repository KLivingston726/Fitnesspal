import React from 'react';
import {
  View,
  Image,
  Text,
  ImageBackground,
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
      password: "",
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
      <ImageBackground source={require('../assets/images/brad.jpg')} style={styles.backgroundImage}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.signupContainer}>
          <Text style={styles.title}>Welcome to PocketGym</Text>
        </View>

        <View>
            <StatusBar barStyle="light-content" />
          <View style={styles.totalButtonContainer}>
            <RectangleButton
              text="Log In Existing"
              color="#FFF"
              backgroundColor="rgba(40, 116, 166, .8)"
              handleOnPress={this._showLogin}
            />
            <RectangleButton
              text="Create New User"
              color="#FFF"
              backgroundColor="rgba(40, 116, 166, .8)"
              handleOnPress={this._showSignin}
            />
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
    flexGrow: 1,
    justifyContent: 'center',

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
    zIndex: 100
  },
  backgroundImage: {
    flex: 1,
  },

});
