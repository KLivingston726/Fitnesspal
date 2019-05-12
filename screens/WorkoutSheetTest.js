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
import WorkoutSheet from '../components/WorkoutSheet'
import { MonoText } from '../components/StyledText';

import firebase from 'firebase'
import * as FirebaseAPI from '../modules/firebaseAPI';

var user = firebase.auth().currentUser;

if (user != null) {
    uid = user.uid;
  }


export default class WorkoutSheetTest extends React.Component {
    constructor(props) {
        super(props);

        this.state =({
            workouts: [],
        });
    }

    static navigationOptions = {
        header: null,
    };

    _showWOcreate = () => {
        this.props.navigation.navigate('WOcreate');
    }
    
    readUserData = () => {
        var userId = firebase.auth().currentUser.uid;
        database = firebase.database();
        var ref = database.ref('Workouts/' + userId);
        ref.on('value', gotData);

        function gotData(data){
            var workouts = data.val();
            var keys = Object.keys(workouts);
            console.log(keys);

            for (var i = 0; i < keys.length; i++) { 
                var k = keys[i];
                var exercise = workouts[k].Exercise;
                var weights = workouts[k].Weight;
                var reps = workouts[k].Reps;
                var sets = workouts[k].Sets;
                //this.createWorkout(exercise, weights, reps, sets);  //Need to be able to call create workout from inside this function
                //console.log(exercise, weights, reps, sets);
            }
        }

    }
    
    createWorkout(exercise, weights, reps, sets){
        
        return (
            <WorkoutSheet Exercise = {exercise} Weight = {weights} Reps = {reps} Sets = {sets}/>
        );
    }




      render(){
        let workouts = this.createWorkout(
            "100",
            "100",
            "100",
            "100",
        );
        console.log("here: " + workouts);

          return(
            <View style = {styles.container}>
                <ScrollView contentContainerStyle = {styles.scrollContainer}>

                <Text style={styles.title}>
                    Workout Sheet
                </Text>

                <Text style={styles.titleText}>
                    Click on a workout to mark it as completed or add a new workout with the ⨁ at the bottom!
                </Text>

                    {workouts}

                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity onPress={() => this._showWOcreate()}>
                            <Text style = {styles.createButton}>⨁</Text>
                        </TouchableOpacity>
                    </View>

                <Text style={styles.buttonText}>
                    Add Workout
                </Text>

                </ScrollView>
            </View>
          );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498DB',
        paddingTop: 50,
        padding: 20,
    },
    title: {
        fontSize: 35,
        paddingTop: 20,
        textAlign: 'center',
        fontFamily: 'AvenirNext-BoldItalic',
        textDecorationLine: 'underline',
        color: '#FFF',
    },
    titleText: {
        fontSize: 20,
        paddingBottom: 10,
        paddingLeft: 10,
        textAlign: 'left',
        color: '#FFF',
    },
    buttonContainer: {
        alignItems: 'center',
    },
    button: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: '#3498DB',
        borderRadius: 100,
        borderColor: '#fff',
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
    },
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#3498DB',
    },
    createButton: {
        fontSize: 36,
    }
});
