import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
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






  render() {


     const { exerciseInfo } = this.state;

    return (
        <View style={styles.container}>
          <Text style={styles.title}>{exerciseInfo.Title}</Text>
          <Text style={styles.text}>{exerciseInfo.Description}</Text>
        </View>

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
    backgroundColor: '#3498DB',
  },
  buttonText: {
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 5,
    paddingVertical: 12,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    color: "#fff",
  },
  text: {
    fontSize: 16,
    color: "#fff"
  },

});
