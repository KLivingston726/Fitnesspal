import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  ImageBackground
 } from 'react-native';
import firebase from 'firebase'
import * as FirebaseAPI from '../modules/firebaseAPI';
import InputField from '../components/InputField';
import RectangleButton from '../components/RectangleButton';

const database = firebase.database().ref();
const userRef = database.child('users');
const user = firebase.auth().currentUser;

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


  _showUserFormScreen = () => {
    this.props.navigation.navigate('UserForm');
  };


  //Add additional states for name age height weight ect.
  createUser(check) {
    if(check == true) {
      FirebaseAPI.createUser(this.state.email, this.state.password);
      this._showUserFormScreen();
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
      <ImageBackground source={require('../assets/images/brad.jpg')} style={styles.backgroundImage}>
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.signupContainer}>
          <Text style={styles.title}>Create User</Text>
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

          <RectangleButton
            text="Create"
            color="#FFF"
            backgroundColor="rgba(40, 116, 166, .8)"
            handleOnPress={() => this.createUser(this.handleConfirmPassword())}
          />
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
   },
   backgroundImage: {
     flex: 1,
   },
   pushUp: {
     marginBottom: 30,
   },
});
