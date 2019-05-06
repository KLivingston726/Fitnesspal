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
import firebase from 'firebase'
import * as FirebaseAPI from '../modules/firebaseAPI';
import InputField from '../components/InputField';
import RectangleButton from '../components/RectangleButton';

const database = firebase.database().ref();
const userRef = database.child('users');

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: "",
      password: ""
    });
  }

  static navigationOptions = {
    title: 'Login',
  };


  componentDidMount() {
    this.watchAuthState(this.props.navigation)
  }

  watchAuthState(navigation) {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log('onAuthStatheChanged: ', user);
      //console.log('userID: ', user.uid);

      if (user) {
        navigation.navigate('Main');
      }
    });
  }


  signIn() {
    FirebaseAPI.signinUser(this.state.email, this.state.password)
  }

  _showForgotPassword = () => {
    this.props.navigation.navigate('ForgotPassword');
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.signupContainer}>
          <Text style={styles.title}>Login</Text>
        </View>

        <View style={styles.pushUp}>
          <StatusBar barStyle="light-content" />
          <InputField
            labelText="Email"
            labelTextSize={15}
            labelColor="#FFF"
            labelPlaceholderColor="rgba(255,255,255,0.7)"
            inputType="email"
            onSubmitEditing={() => this.emailInput.focus()}
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
          />

          <InputField
            labelText="Password"
            labelTextSize={15}
            labelColor="#FFF"
            labelPlaceholderColor="rgba(255,255,255,0.7)"
            inputType="password"
            ref={(input) => this.emailInput = input}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
          />

          <RectangleButton
            text="Log In Existing"
            color="#FFF"
            backgroundColor="#2874A6"
            onPress={() => this.signIn()}
          />

          <RectangleButton
            text="Forgot Password"
            color="#FFF"
            onPress={this._showForgotPassword}
          />
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
  pushUp: {
    marginBottom: 15,
  },

});
