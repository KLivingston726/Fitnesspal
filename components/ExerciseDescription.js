import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import * as FirebaseAPI from '../modules/firebaseAPI';
import firebase from 'firebase';


export default class ExerciseDescription extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      exerciseInfo: [],
      imagePath: "",
    });
  }


  componentDidMount() {
    const { navigation } = this.props;
    const name = navigation.getParam('info', 'no info');

    const exercisePath = firebase.database().ref('/Exercises/'+name);
    exercisePath.on("value", snapshot => {

      var exerciseInfo = snapshot.val();
      let newState = [];

        newState.Title = exerciseInfo.Title;
        newState.Description = exerciseInfo.Description;

        this.setState({
            exerciseInfo: newState

        });

    });

  }

  watchAuthState(navigation) {
    firebase.auth().onAuthStateChanged(function(user) {
      console.log('onAuthStatheChanged: ', user);
      //console.log('userID: ', user.uid);

      //???? Do we need this????
      if (user) {
        navigation.navigate('Main');
      }
    });
  }

  _back = ()  => {
    this.watchAuthState(this.props.navigation);
  }





  render() {

     const { exerciseInfo } = this.state;

    return (
      <ImageBackground source={require('../assets/images/background.jpg')} style={styles.container}>
        <View style={styles.container}>
          <Text style={styles.title}>{exerciseInfo.Title}</Text>
          <Text style={styles.text}>{exerciseInfo.Description}</Text>

          <TouchableOpacity
              style = {styles.buttonContainer}
              onPress={() => this._back()}
          >
              <Text style = {styles.buttonText}>Back</Text>
          </TouchableOpacity>

        </View>
      </ImageBackground>

    );
  }
}


ExerciseDescription.propTypes = {
  picture: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 40,
    paddingHorizontal: 20,

  },
  titleText: {
      color: '#FFF',
      textAlign: 'center',
      fontSize: 20,
    },
  buttonContainer: {
    marginVertical: 5,
    backgroundColor: '#2874A6',
    paddingVertical: 12,
    marginTop: 50,
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '500',
 },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: "#fff",
    paddingBottom: 30,
  },
  text: {
    fontSize: 16,
    color: "#fff"
  },

});
