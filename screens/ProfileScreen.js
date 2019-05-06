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

var config = {
  apiKey: "AIzaSyCRxDbi-2PcePKWn8IBccNFpoSDknlcmOc",
  authDomain: "myfitness425-426.firebaseapp.com",
  databaseURL: "https://myfitness425-426.firebaseio.com",
  projectId: "myfitness425-426",
  storageBucket: "myfitness425-426.appspot.com",
  messagingSenderId: "27583195048",
  persistance: true,
};

//firebase.initializeApp(config);
// Get a reference to the database service

const database = firebase.database().ref();
const userRef = database.child('users');

export default class ProfileScreen extends React.Component {
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
componentWillMount() {
    var user = firebase.auth().currentUser;
    const{uid} = firebase.auth().currentUser.uid;
      let userRef = firebase.database().ref('/users/'+ uid);
      userRef.once('value').then(snapshot => {this.setState({ items: snapshot.val});
  });
}

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

  readUserData() {
    database1 = firebase.database();
    const ref = database1.ref('Info');
    ref.on('value', GotData);
    
    function GotData(data) {
      //console.log(data.val());
      var scores = data.val();
      var keys = Object.keys(scores);
      //console.log(keys);
      for (var i = 0; i < keys.length; i++) {
        const k = keys[i];
        const age = scores[k].age;
        const firstName = scores[k].firstName;
        const LastName = scores[k].lastName;
        const weight = scores[k].weight;
        const sex = scores[k].sex;
        const height = scores[k].height;
        console.log(age, height, firstName, LastName, weight, sex);
      }
      }
    }

  /*
  readUserData() {
    var user = firebase.auth().currentUser.uid;
      var ref = firebase.database().ref('users/'+user);
      ref.once("value").then(function(snapshot) {
        var key = snapshot.key;
        var childkey = snapshot.child(user.age).key;
        console.log(snapshot.val());
        console.log(childkey);
      });
    }

    */

  /*
  readUserData() {
    var user = firebase.auth().currentUser;
    firebase.database().ref('users/'+user.uid).once('value').then(function(snapshot) {
        var firstName = snapshot.child().val();
        console.log(snapshot.val())
        console.log(firstName)
    });
}
*/

    static navigationOptions = {
        header: null,
      };

      render() {
        var userID = firebase.auth().currentUser.uid;
        var user = firebase.auth().currentUser;
        return (
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.signupContainer}>
              <Text style={styles.title}>Profile Information</Text>
            </View>
            <View>
                <StatusBar barStyle="light-content" />
    
              <TextInput
                placeholder= {userID.firstName}
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                autoCapitalize="none"
                style={styles.textInput}
                ref={(input) => this.emailInput = input}
                onChangeText={(text) => this.setState({sex: text})}
                value={this.state.sex}
              />

              <TextInput
                placeholder= {'Info/'+userID.age}
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                autoCapitalize="none"
                style={styles.textInput}
                value={this.state.sex}
              />

              <View style={styles.totalButtonContainer}>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => this.readUserData()}
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