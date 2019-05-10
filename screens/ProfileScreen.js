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
componentWillMount() {
    var user = firebase.auth().currentUser;
    const{uid} = firebase.auth().currentUser.uid;
      let userRef = firebase.database().ref('/users/'+ uid);
      userRef.once('value').then(snapshot => {this.setState({ items: snapshot.val});
  });
}

componentDidMount() {
  //this.watchAuthState(this.props.navigation);
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

    // for(let info in userInfo){
    //   newState.push({
    //     id: info,
    //     age: userInfo[info].age,
    //     firstName: userInfo[info].firstName,
    //     height: userInfo[info].height,
    //     lastName: userInfo[info].lastName,
    //     sex: userInfo[info].sex,
    //     weight: userInfo[info].weight,
    //   });
    //
    //   // as each iteration goes by 'info' value changes to each attribute
    //
    //   console.log(info);
    // }

    console.log(userInfo);

    this.setState({
        userInfo: newState
    });
  });

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

        const { userInfo } = this.state;
        console.log(userInfo);

        return (
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            
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
                  onPress={() => this.userInfo()}
                >
                  <View>
                    <Text style={styles.buttonText}>UPDATE PROFILE</Text>
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
        paddingVertical: 70,
        backgroundColor: '#3498DB',
      },
      signupContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
      },
      infoContainer: {
        alignItems: 'stretch',
        flexGrow: 1,
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
        fontFamily: 'Verdana-Italic',
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
       }
    });