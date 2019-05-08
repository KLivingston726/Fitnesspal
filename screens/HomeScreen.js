import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  InteractionManager,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import * as FirebaseAPI from '../modules/firebaseAPI';
import firebase from 'firebase';

//const database = firebase.database().ref();
//const userRef = database.child('users/' + firebase.auth().currentUser.uid);
var user = firebase.auth().currentUser;

if (user != null) {
  uid = user.uid;
}

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      userInfo: [],
    });
  }

  static navigationOptions = {
    header: null,
  };


  logout(navigation) {
    console.log('logout() called');
    FirebaseAPI.logoutUser();

    InteractionManager.runAfterInteractions(() => {
      navigation.navigate('Auth')
    })
  }

  getUserInfo() {
    // var user = firebase.auth().currentUser;
    // firebase.database().ref('users/'+user.uid).once('value', function (snapshot) {
    //   console.log(snapshot.val());
    //   let userInfo = {
    //     lastName: snapshot.val().lastname,
    //   }
    //   return userInfo;
    // });
  }

  componentDidMount() {
    //this.watchAuthState(this.props.navigation);
    var user = firebase.auth().currentUser;
    const userPath = firebase.database().ref('/users/'+user.uid);
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

      this.setState({
          userInfo: newState
      });
    });

  }



  watchAuthState(navigation) {
    // firebase.auth().onAuthStateChanged(function(user) {
    //   console.log('onAuthStatheChanged: ', user);
    //   console.log('userID 101: ', user.uid);
    //   var user = firebase.auth().currentUser;
    //   var lastname;
    //   firebase.database().ref('users/'+user.uid).once('value').then(function (snapshot) {
    //     if (!snapshot) {
    //      console.log('An error occured');
    //     } else {
    //
    //     }
    //        console.log(snapshot.val());
    //        console.log(snapshot.val().lastName);
    //
    //   });
    // });
  }



  render() {

    const { userInfo } = this.state;
    console.log(userInfo);

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.getStartedText}>
            Welcome
            <Image
              source={
                __DEV__
                  ? require('../assets/images/chad.jpg')
                  : require('../assets/images/robot-prod.png')
              }
              style={styles.welcomeImage}
            />
            </Text>
          </View>


          <View style={styles.getStartedContainer}>

            <Text style={styles.getStartedText}>Welcome to WorkoutMate</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>Proffesional Trainer</MonoText>
            </View>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <MonoText style={styles.codeHighlightContainer}>Click here to check the Weather</MonoText>
            </TouchableOpacity>



            <View>
              <Text>Name: {userInfo.lastName}</Text>
            </View>


            {this._maybeRenderDevelopmentModeWarning()}
            {this._RobbieInfoPage()}

            <Text style={styles.RobbieName}>
            _____________________________________________________________
            </Text>
          </View>
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <TouchableOpacity onPress={() => {this.logout(this.props.navigation)}}>
            <Text style={styles.tabBarInfoText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          _____________________________________________________________
          For information on this weeks events and trainer availibility hit the learn more
          button. {learnMoreButton} _____________________________________________________________
        </Text>
      );
    }
  }

  _RobbieInfoPage() {
    if (__DEV__) {
      const learnMoreRobbie = (
        <Text onPress={this._handleRobbieInfoPress} style={styles.helpLinkText}>
          Article
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          For the lates tips and tricks on how to balance your workout and diet, check out the article from our friends over at 8fir.com! {learnMoreRobbie}
        </Text>
      );
    } else {
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleRobbieInfoPress = () => {
    WebBrowser.openBrowserAsync('https://8fit.com/fitness/meal-plan-muscle-gain-much-protein-really-need/');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://weather.com/?cm_ven=PS_GGL_Channel_9102015_1&par=MK_GGL&gclid=Cj0KCQiA6JjgBRDbARIsANfu58H-tIlwB141oX587VX4ic04MThavIgcG-7dIUYs7rlNmUO06Vct98YaAvXMEALw_wcB'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5499C7',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(200,200,200,200.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  button: {
    color: '#FFF',
    backgroundColor: 'rgba(200,200,200,200.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
    padding: 10,
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginHorizontal: 10,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(100,100,100,100.4)',
  },
  codeHighlightContainer: {
    backgroundColor: '#7F8C8D',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 375,
    height: 250,
    resizeMode: 'contain',
    marginTop: 0,
    marginLeft: 0,
  },
  getStartedText: {
    fontSize: 25,
    fontFamily: 'Times New Roman',
    textDecorationLine: 'underline',
    color: '#000',
    backgroundColor: '#FFF',
    lineHeight: 1.8,
    marginTop: 0,
    lineHeight: 24,
    textAlign: 'center',
  },
  RobbieName: {
    marginBottom: 10,
    color: 'rgba(200,200,200,200.4)',
    fontSize: 14,
    lineHeight: 30,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#5DADE2',
    paddingVertical: 10,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(100,100,100, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 115,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  //Text link color
  helpLinkText: {
    marginTop: 50,
    fontSize: 14,
    color: '#641E16',
  },
});
