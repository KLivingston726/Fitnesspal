import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  TextInput,
  View,
  InteractionManager,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import firebase from 'firebase'
import * as FirebaseAPI from '../modules/firebaseAPI';
import InputField from '../components/InputField';

//firebase.initializeApp(config);
// Get a reference to the database service

const database = firebase.database().ref();
const userRef = database.child('users');

var user = firebase.auth().currentUser;


export default class UserInfoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      firstName: "",
      lastName: "",
      age: "",
      height: "",
      weight: "",
      sex: ""
    });
  }

  static navigationOptions = {
    title: 'Profile Screen',
  };

  _showLogin = () => {
    this.props.navigation.navigate('Main');
  };

  componentDidMount() {
    this.watchAuthState(this.props.navigation)
  }

  watchAuthState(navigation) {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log('onAuthStatheChanged: ', user);
      console.log('userID 101: ', user.uid);

      if (user) {
        //navigation.navigate('Main');
      } else {

      }
    });
  }

  userInfo() {
    FirebaseAPI.userInfo(this.state.firstName, this.state.lastName, this.state.age, this.state.height, this.state.weight, this.state.sex)
    var user = firebase.auth().currentUser;
    firebase.database().ref('/Info/'+user.uid).set({
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      age: this.state.age,
      height: this.state.height,
      weight: this.state.weight,
      sex: this.state.sex
    });
  }

    static navigationOptions = {
        header: null,
      };

      render() {
        var user = firebase.auth().currentUser;
        return (
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.signupContainer}>
              <Text style={styles.title}>Profile Information</Text>
            </View>

            <View>
                <StatusBar barStyle="light-content" />

              <TextInput
                name="firstName"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                autoCapitalize="none"
                style={styles.textInput}
                onSubmitEditing={() => this.emailInput.focus()}
                autoCorrect={false}
                onChangeText={
                  (text) => this.validateInputs(text, 'username')
                }
                value={this.state.firstName}
                placeholder= "First Name"
                
    
              />
              <TextInput
                placeholder= "Last Name"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                autoCapitalize="none"
                style={styles.textInput}
                ref={(input) => this.emailInput = input}
                onChangeText={(text) => this.setState({lastName: text})}
                value={this.state.lastName}
              />
              <TextInput
                placeholder= "Age"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                autoCapitalize="none"
                style={styles.textInput}
                ref={(input) => this.emailInput = input}
                onChangeText={(text) => this.setState({age: text})}
                value={this.state.age}
              />
              <TextInput
                placeholder= "Height (Ex: 6ft 1in)"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                autoCapitalize="none"
                style={styles.textInput}
                ref={(input) => this.emailInput = input}
                onChangeText={(text) => this.setState({height: text})}
                value={this.state.height}
              />
              <TextInput
                placeholder= "Weight (lbs)"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                autoCapitalize="none"
                style={styles.textInput}
                ref={(input) => this.emailInput = input}
                onChangeText={(text) => this.setState({weight: text})}
                value={this.state.weight}
              />
              <TextInput
                placeholder= "Sex"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                autoCapitalize="none"
                style={styles.textInput}
                ref={(input) => this.emailInput = input}
                onChangeText={(text) => this.setState({sex: text})}
                value={this.state.sex}
              />
              <View style={styles.totalButtonContainer}>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => this.userInfo()}
                >
                  <View>
                    <Text style={styles.buttonText}>SAVE SETTINGS</Text>
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
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.3)',
        marginBottom: 10,
        color: "#FFF",
        paddingHorizontal: 10,
        fontSize: 15,
      },
      totalButtonContainer: {
        marginBottom: 40,
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
