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
      password: "",
      confirmPassword: ""
    });
  }

  static navigationOptions = {
    title: 'Sign Up',
  };


  componentDidMount() {
    this.watchAuthState(this.props.navigation)
  }

  watchAuthState(navigation) {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log('onAuthStatheChanged: ', user);
      //console.log('userID: ', user.uid);

      //???? Do we need this????
      if (user) {
        navigation.navigate('Main');
      }
    });
  }


  //Add additional states for name age height weight ect.
  createUser(check) {
    if(check == true) {
      FirebaseAPI.createUser(this.state.email, this.state.password);
    }
    else {
      console.log("Thats a no chief");
    }
      // userRef.push({
      //   email: this.state.email,
      //   password: this.state.password
      // })
    //this._showUserInfo
  }


  handleConfirmPassword() {
    if(this.state.password == this.state.confirmPassword) {
      return true;
    }
    else {
      return false;
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.signupContainer}>
          <Text style={styles.title}>Create User</Text>
        </View>

        <View>
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

          <InputField
            labelText="Confirm Password"
            labelTextSize={15}
            labelColor="#FFF"
            labelPlaceholderColor="rgba(255,255,255,0.7)"
            inputType="password"
            ref={(input) => this.password = input}
            onChangeText={(text) => this.setState({confirmPassword: text})}
            value={this.state.confirmPassword}
          />


          <View style={styles.totalButtonContainer}>
            <RectangleButton
              text="Create"
              color="#FFF"
              backgroundColor="#2874A6"
              handleOnPress={() => this.createUser(this.handleConfirmPassword())}
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
