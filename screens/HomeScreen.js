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
            <View style={[styles.titleContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.titleText}>Welcome Back {userInfo.firstName}!</MonoText>
              <View style={styles.welcomePictureContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/chad.jpg')
                  : require('../assets/images/Workout1.jpg')
              }
              style={styles.welcomeImage}
            />
          </View>
            </View>
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

            {this.announcmentContainer()}
            {this.linkContainer()}

            <Text style={styles.barUI}>
            __________________________
            </Text>

          <Text style={styles.announcmentTitle}>
            Todays Workout:
          </Text>

          <View style={styles.infoPictureContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/Workout1.jpg')
                  : require('../assets/images/Workout1.jpg')
              }
              style={styles.infoImage}
            />
          </View>

          <Text style={styles.barUI}>
            __________________________
          </Text>

          <Text style={styles.announcmentTitle}>
            Motivation For The Week:
          </Text>

          {this.motivationContainer()}

          <Text style={styles.barUI}>
            __________________________
          </Text>

          <Text style={styles.announcmentTitle}>
            Pro Tips:
          </Text>

          {this.tipsContainer()}

          <Text style={styles.barUI}>
            __________________________
          </Text>

          <Text style={styles.announcmentTitle}>
            Our Goal:
          </Text>

          {this.aboutUsContainer()}

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
        <Text style={styles.infoText}>
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
        <Text style={styles.infoText}>
          For the lates tips and tricks on how to balance your workout and diet, check out the article from our friends over at 8fir.com! {infoLink}
        </Text>
      );
    } else {
    }
  }

  motivationContainer() {
      return (
        <Text style={styles.infoText}>
          For the lates tips and tricks on how to balance your workout and diet, check out the article from our friends over at 8fir.com!
        </Text>
      );
    }

  tipsContainer() {
     return (
      <Text style={styles.infoText}>
        For the lates tips and tricks on how to balance your workout and diet, check out the article from our friends over at 8fir.com!
       </Text>
       );
     }

  aboutUsContainer() {
    return (
        <Text style={styles.infoText}>
          We are 3 students from Salisbury University who wanted to create a fitness app that was run by the user.........
        </Text>
       );
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
    backgroundColor: '#3498DB',
  },
  welcomePictureContainer: {
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: '#2874A6',
  },
  welcomeImage: {
    width: 375,
    height: 250,
    resizeMode: 'contain',
    backgroundColor: '#2874A6',
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 0,
  },
  titleText: {
    fontSize: 35,
    paddingTop: 20,
    textAlign: 'center',
    color: '#FFF',
  },
  titleContainer: {
    //borderRadius: 200,
    alignItems: 'center',
    backgroundColor: '#2874A6',
    marginTop: 10,
    paddingHorizontal: 30,
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
    backgroundColor: '#3498DB',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginHorizontal: 10,
    backgroundColor: '#3498DB',
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
  weatherHighlightContainer: {
    backgroundColor: '#73C6B6',
    borderRadius: 300,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  infoHighlightContainer: {
    backgroundColor: '#B7950B',
    borderRadius: 300,
    alignItems: 'center',
    paddingHorizontal: 20,
    color: '#FFF',
  },
  infoPictureContainer: {
    alignItems: 'center',
    marginTop: 5,
    backgroundColor: '#3498DB',
  },
  infoImage: {
    width: 375,
    height: 250,
    resizeMode: 'contain',
    backgroundColor: '#3498DB',
    paddingTop: 20,
    paddingBottom: 20,
    marginLeft: 0,
  },
  infoText: {
    marginBottom: 20,
    marginTop: 5,
    marginRight: 2,
    marginLeft: 40,
    fontFamily: 'AvenirNext-BoldItalic',
    color: '#FFF',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'left',
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
  bottomBarUI: {
    marginTop: -10,
    marginBottom: 100,
    color: '#5DADE2',
    fontSize: 20,
    fontFamily: 'Georgia-Bold',
    lineHeight: 30,
    textAlign: 'center',
  },
  announcmentTitle: {
    color: '#FFF',
    fontSize: 20,
    fontFamily: 'AvenirNext-BoldItalic',
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
    backgroundColor: '#2874A6',
    paddingVertical: 10,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: '#FFF',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    alignItems: 'stretch',
    backgroundColor: '#3498DB',
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
