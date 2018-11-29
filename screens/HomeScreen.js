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

export default class HomeScreen extends React.Component {
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

  render() {
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

            <Text style={styles.getStartedText}>Welcome to FitnessPal</Text>

            <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
              <MonoText style={styles.codeHighlightText}>Date: 10/11/2018</MonoText>
            </View>

            <Text style={styles.getStartedText}>
              Change this text and your app will automatically reload.
            </Text>
          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={this._handleHelpPress} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>Help, it didn’t automatically reload!</Text>
            </TouchableOpacity>

            {this._maybeRenderDevelopmentModeWarning()}
            {this._RobbieInfoPage()}

            <Text style={styles.RobbieName}>
              FitnessPal
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
          Development mode is enabled, your app will be slower but you can use useful development
          tools. {learnMoreButton}
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _RobbieInfoPage() {
    if (__DEV__) {
      const learnMoreRobbie = (
        <Text onPress={this._handleRobbieInfoPress} style={styles.helpLinkText}>
          Here
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          For more info on Robbie click {learnMoreRobbie}
        </Text>
      );
    } else {

    }
  }

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/guides/development-mode');
  };

  _handleRobbieInfoPress = () => {
    WebBrowser.openBrowserAsync('https://htmlcolorcodes.com/color-chart/');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://docs.expo.io/versions/latest/guides/up-and-running.html#can-t-see-your-changes'
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#922B21',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(200,200,200,200.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 20,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(100,100,100,100.4)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(200,200,200,200.4)',
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
    color: 'rgba(00,10,20,40)',
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
    backgroundColor: '#fbfbfb',
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
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    marginTop: 50,
    fontSize: 14,
    color: '#2e78b7',
  },
});
