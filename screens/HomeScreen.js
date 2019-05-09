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
    const userPath = firebase.database().ref('/Info/'+user.uid);
    userPath.on("value", snapshot => {

      var userInfo = snapshot.val();
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



          <View style={styles.getStartedContainer}>
            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>Welcome to WorkoutMate: Your Personal Fitness Tracker</MonoText>
            </View>
          </View>

          <View style={styles.welcomeContainer}>
            <Text style={styles.getStartedText}>
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
            <View style={[styles.weatherHighlightContainer, styles.homeScreenFilename]}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <MonoText style={styles.weatherHighlightContainer}>Click here to check the Weather</MonoText>
            </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.announcmentTitle}>
            This Weeks Announcments:
          </Text>



            <View>
              <Text>Name: {userInfo.lastName}</Text>
            </View>


            {this.announcmentContainer()}
            {this.linkContainer()}

            <Text style={styles.barUI}>
            __________________________
            </Text>

          <Text style={styles.announcmentTitle}>
            Todays Workout:
          </Text>

          <Text style={styles.barUI}>
            __________________________
          </Text>

          <Text style={styles.announcmentTitle}>
            Motivation for the week:
          </Text>

          <Text style={styles.barUI}>
            __________________________
          </Text>

          <Text style={styles.announcmentTitle}>
            Pro Tips:
          </Text>

          <Text style={styles.bottomBarUI}>
            __________________________
          </Text>
          </ScrollView>


        <View style={styles.tabBarInfoContainer}>
          <TouchableOpacity onPress={() => {this.logout(this.props.navigation)}}>
            <Text style={styles.tabBarInfoText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  announcmentContainer() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      <Text style={styles.barUI}>
            __________________________
      </Text>

      return (
        <Text style={styles.developmentModeText}>
          For information on this weeks events and trainer availibility hit the {learnMoreButton} button!
        </Text>
      );
    }
  }

  linkContainer() {
    if (__DEV__) {
      const infoLink = (
        <Text onPress={this.linkButtonPress} style={styles.helpLinkText}>
          Article
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          For the lates tips and tricks on how to balance your workout and diet, check out the article from our friends over at 8fir.com! {infoLink}
        </Text>
      );
    } else {
    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  linkButtonPress = () => {
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
    marginHorizontal: 20,
    color: '#FFF',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'left',
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
  getStartedText: {
    fontSize: 25,
    fontFamily: 'Georgia-Bold',
    color: '#FFF',
    backgroundColor: '#85929E',
    borderRadius: 300,
    lineHeight: 1.8,
    marginTop: 0,
    lineHeight: 24,
    textAlign: 'center',
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    fontSize: 20,
    borderRadius: 300,
    textAlign: 'center',
    color: '#FFF',
  },
  codeHighlightContainer: {
    
    borderRadius: 300,
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 20,
    color: '#FFF',
  },
  weatherHighlightContainer: {
    backgroundColor: '#73C6B6',
    borderRadius: 300,
    alignItems: 'center',
    paddingHorizontal: 20,
    color: '#FFF',
  },
  infoHighlightContainer: {
    backgroundColor: '#B7950B',
    borderRadius: 300,
    alignItems: 'center',
    paddingHorizontal: 20,
    color: '#FFF',
  },
  welcomeContainer: {
    alignItems: 'center',
  },
  welcomeImage: {
    width: 375,
    height: 250,
    resizeMode: 'contain',
    marginTop: 0,
    marginLeft: 0,
  },
  barUI: {
    marginTop: -10,
    marginBottom: 10,
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Georgia-Bold',
    lineHeight: 30,
    textAlign: 'center',
  },
  bottomBarUI: {
    marginTop: -10,
    marginBottom: 100,
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Georgia-Bold',
    lineHeight: 30,
    textAlign: 'center',
  },
  announcmentTitle: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'Georgia-Bold',
    lineHeight: 30,
    textAlign: 'left',
    textDecorationLine: 'underline',
    paddingHorizontal: 5,
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
    alignItems: 'stretch',
    borderRadius: 300,
  },
  helpLink: {
    paddingVertical: 5,
  },
  //Text link color
  helpLinkText: {
    fontSize: 16,
    color: '#17202A',
  },
});
