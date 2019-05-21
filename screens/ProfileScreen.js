import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  View,
  ImageBackground,
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

var user = firebase.auth().currentUser;

if (user != null) {
  uid = user.uid;
}

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      firstName: "",
      lastName: "",
      age: "",
      height: "",
      weight: "",
      sex: "",
      userInfo: []
    });
  }

  static navigationOptions = {
    title: 'Profile Screen',
  };

  _showLogin = () => {
    this.props.navigation.navigate('Main');
  };


componentDidMount() {
  var user = firebase.auth().currentUser;
  const userPath = firebase.database().ref('/Info/'+user.uid);
  userPath.on("value", snapshot => {

    let userInfo = snapshot.val();
    let newState = [];

    newState.age = userInfo.age;
    newState.firstName = userInfo.firstName;
    newState.height= userInfo.height;
    newState.lastName = userInfo.lastName;
    newState.sex = userInfo.sex;
    newState.weight = userInfo.weight;

    console.log(userInfo);

    this.setState({
        userInfo: newState
    });
  });

}

_showUserFormScreen = () => {
  this.props.navigation.navigate('UserForm');
};

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
      var scores = data.val();
      var keys = Object.keys(scores);
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

    static navigationOptions = {
        header: null,
      };

      render() {
        var userID = firebase.auth().currentUser.uid;
        var user = firebase.auth().currentUser;

        const { userInfo } = this.state;
        console.log(userInfo);

        return (
          <ImageBackground source={require('../assets/images/background.jpg')} style={styles.backgroundImage}>
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
          <ScrollView style={styles.container}>>
            
            <View>
                <StatusBar barStyle="light-content"/>

              <View style={styles.Container}>
                <Text style={styles.title}>User Profile</Text>
              </View>

              <Text style={styles.barUI}>
                __________________________
              </Text>

              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>First Name: {userInfo.firstName}</Text>
              </View>

              <Text style={styles.barUI}>
                __________________________
              </Text>

              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Last Name: {userInfo.lastName}</Text>
              </View>

              <Text style={styles.barUI}>
                __________________________
              </Text>

              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Weight: {userInfo.weight}lbs</Text>
              </View>

              <Text style={styles.barUI}>
                __________________________
              </Text>

              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Gender: {userInfo.sex}</Text>
              </View>

              <Text style={styles.barUI}>
                __________________________
              </Text>

              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Age: {userInfo.age}</Text>
              </View>

              <Text style={styles.barUI}>
                __________________________
              </Text>

              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Height: {userInfo.height}</Text>
              </View>

              <Text style={styles.barUI}>
                __________________________
              </Text>

              <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Email: {user.email}</Text>
              </View>

              <View style={styles.totalButtonContainer}>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={() => this._showUserFormScreen()}
                >
                  <View>
                    <Text style={styles.buttonText}>UPDATE INFORMATION</Text>
                  </View>
                </TouchableOpacity>
              </View>
              
            </View>
  
          </ScrollView>

          </KeyboardAvoidingView>
          </ImageBackground>
        );
      }
    }


    const styles = StyleSheet.create({
      container: {
        flex: 1,
        paddingTop: 25,
        backgroundColor: 'rgba(84, 153, 199, .01)',
      },
      signupContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(84, 153, 199, .01)',
      },
      infoContainer: {
        alignItems: 'stretch',
        flexGrow: 1,
        backgroundColor: 'rgba(84, 153, 199, .01)',
      },
      infoText: {
        color: '#FFF',
        marginBottom: 1,
        textAlign: 'left',
        paddingHorizontal: 10,
        fontFamily: 'DevanagariSangamMN',
        paddingVertical: 10,
        fontSize: 20,
      },
      title: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'AvenirNext-BoldItalic',
        fontSize: 40,
      },
      textInput: {
        height: 40,
        borderRadius: 4,
        borderWidth: 2,
        fontFamily: 'Verdana-Italic',
        borderColor: 'rgba(255,255,255,0.3)',
        marginBottom: 10,
        color: "#FFF",
        paddingHorizontal: 10,
        fontSize: 15,
      },
      totalButtonContainer: {
        marginBottom: 40,
        backgroundColor: 'rgba(84, 153, 199, .01)',
      },
      barUI: {
        marginTop: -10,
        marginBottom: 10,
        color: '#5DADE2',
        fontSize: 20,
        fontFamily: 'Georgia-Bold',
        lineHeight: 30,
        textAlign: 'center',
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
    });
