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
  FlatList,
  ImageBackground,
  KeyboardAvoidingView,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
import * as FirebaseAPI from '../modules/firebaseAPI';
import firebase from 'firebase';
import WorkoutSheet from '../components/WorkoutSheet'

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

  componentDidMount() {
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

        this.setState({
            userInfo: newState
        });

    });

    var ref1 = firebase.database().ref('/Workouts/' + user.uid);

        ref1.on('value', (childSnapshot) => {
            const sheet = [];
            childSnapshot.forEach((doc) => {
                console.log(doc.toJSON().Exercise);
                sheet.push({
                    key: doc.key,
                    Exercise: doc.toJSON().Exercise,
                    Weight: doc.toJSON().Weight,
                    Sets: doc.toJSON().Sets,
                    Reps: doc.toJSON().Reps
                });
                this.setState({
                    sheet: sheet,
                })
            });
        });
    }

  render() {

    const { userInfo } = this.state;
    console.log(userInfo);

    return (
        <ImageBackground source={require('../assets/images/background.jpg')} style={styles.backgroundImage}>
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

            <View style={[styles.logOutContainer]}>
              <TouchableOpacity onPress={() => {this.logout(this.props.navigation)}}>
                <Text style={styles.logoutText}>Sign Out</Text>
              </TouchableOpacity>
            </View>

            
            <View style={styles.welcomePictureContainer}>
            <Image
              source={
                __DEV__
                  ? require('../assets/images/TitlePic.png')
                  : require('../assets/images/TitlePic.png')
                }
                style={styles.welcomeImage}
              />
            </View>
          
            <View style={styles.titleContainer}>
              <Text
                style={styles.titleText}>Welcome Back {userInfo.firstName}!
              </Text>
            </View>

            <Text style={styles.barUI}>
              __________________________
            </Text>

            <View style={styles.getStartedContainer}>
              <View style={[styles.weatherHighlightContainer, styles.homeScreenFilename,]}>
                <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
                  <MonoText style={styles.weatherHighlightContainer}>Click here to check the Weather</MonoText>
                </TouchableOpacity>
              </View>
            </View>

            <Text style={styles.announcmentTitle}>
              Current Workout:
            </Text>

            <Text style={styles.infoText}>
              Click on workouts to mark them as complete. Goto the Workouts Tab to add or delete workouts.
            </Text>

            <FlatList style ={styles.workoutContainer}
                    data={this.state.sheet}
                    renderItem={({ item, index }) => {
                        return (
                            <WorkoutSheet Exercise = {item.Exercise} Weight = {item.Weight} Reps = {item.Reps} Sets = {item.Sets}/>);
                    }}
                  >
            </FlatList>

            <Text style={styles.barUI}>
              __________________________
            </Text>

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

            <Text style={styles.barUI}>
              __________________________
            </Text>
          </ScrollView>
      
        </KeyboardAvoidingView>
        </ImageBackground>
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
          Your body can stand almost anything. It’s your mind that you have to convince.
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
    backgroundColor: 'rgba(84, 153, 199, .01)',
  },
  welcomePictureContainer: {
    alignItems: 'center',
    backgroundColor: 'rgba(84, 153, 199, .01)',
  },
  welcomeImage: {
    width: 375,
    height: 131,
    resizeMode: 'contain',
    backgroundColor: 'rgba(84, 153, 199, .01)',
    paddingTop: 20,
    marginLeft: 0,
  },
  titleText: {
    fontSize: 35,
    textAlign: 'center',
    fontFamily: 'Thonburi-Bold',
    color: '#FFF',
  },
  titleContainer: {
    backgroundColor: 'rgba(0, 0, 0, 100)',
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
    backgroundColor: 'rgba(84, 153, 199, .01)',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginTop: 0,
    marginHorizontal: 10,
    backgroundColor: 'rgba(84, 153, 199, .01)',
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
    backgroundColor: '#5DADE2',
    borderRadius: 300,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logOutContainer: {
    backgroundColor: 'rgba(84, 153, 199, .01)',
    borderRadius: 100,
    paddingRight: 30,
    paddingTop: 20,
    paddingBottom: 10,
  },
  logoutText: {
    fontSize: 17,
    color: '#FFF',
    textAlign: 'right',
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
    backgroundColor: 'rgba(84, 153, 199, .01)',
  },
  infoImage: {
    width: 375,
    height: 250,
    resizeMode: 'contain',
    backgroundColor: 'rgba(84, 153, 199, .01)',
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
    backgroundColor: '#2874A6',
    paddingVertical: 10,
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    alignItems: 'stretch',
    backgroundColor: 'rgba(84, 153, 199, .01)',
    borderRadius: 300,
  },
  helpLink: {
    paddingVertical: 5,
  },
  helpLinkText: {
    fontSize: 16,
    color: '#17202A',
  },
  workoutContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(84, 153, 199, .01)',
  },
  backgroundImage: {
    flex: 1,
  },
});
