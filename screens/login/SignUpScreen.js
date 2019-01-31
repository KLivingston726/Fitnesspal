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
import * as FirebaseAPI from '../../modules/firebaseAPI';

var config = {
  apiKey: "AIzaSyCRxDbi-2PcePKWn8IBccNFpoSDknlcmOc",
  authDomain: "myfitness425-426.firebaseapp.com",
  databaseURL: "https://myfitness425-426.firebaseio.com",
  projectId: "myfitness425-426",
  storageBucket: "myfitness425-426.appspot.com",
  messagingSenderId: "27583195048"
};

firebase.initializeApp(config);
// Get a reference to the database service

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



  createUser() {
    FirebaseAPI.createUser(this.state.email, this.state.password)
    userRef.push({
      email: this.state.email,
      password: this.state.password
    })
  }

  signIn() {
    FirebaseAPI.signinUser(this.state.email, this.state.password)
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <View style={styles.signupContainer}>
          <Text style={styles.title}>Login</Text>
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
          <TextInput
            placeholder= "Password"
            placeholderTextColor="rgba(255,255,255,0.7)"
            returnKeyType="next"
            autoCapitalize="none"
            secureTextEntry
            style={styles.textInput}
            ref={(input) => this.emailInput = input}
            onChangeText={(text) => this.setState({password: text})}
            value={this.state.password}
          />
          <View style={styles.totalButtonContainer}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.signIn()}
            >
              <View>
                <Text style={styles.buttonText}>Log In Existing</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={() => this.createUser()}
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