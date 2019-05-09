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

      /*
    componentDidMount() {
        var userId = firebase.auth().currentUser.uid;
        database = firebase.database();
        var ref = database.ref('Workouts/' + userId);
        ref.on('value', gotData);

        function gotData(data) {
            var workouts = data.val();
            var keys = Object.keys(workouts);
            console.log(keys);

            for (var i = 0; i < keys.length; i++) { 
                var k = keys[i];
                var exercise = workouts[k].Exercise;
                var weights = workouts[k].Weight;
                var reps = workouts[k].Reps;
                var sets = workouts[k].Sets;
                this.createWorkout(exercise, weights, reps, sets);
                console.log(exercise, weights, reps, sets);
            }
        }
    }
 */
    
    readUserData(){
        var userId = firebase.auth().currentUser.uid;
        database = firebase.database();
        var ref = database.ref('Workouts/' + userId);
        ref.on('value', gotData);

        function gotData(data) {
            var workouts = data.val();
            var keys = Object.keys(workouts);
            console.log(keys);

            for (var i = 0; i < keys.length; i++) { 
                var k = keys[i];
                var exercise = workouts[k].Exercise;
                var weights = workouts[k].Weight;
                var reps = workouts[k].Reps;
                var sets = workouts[k].Sets;
                createWorkout(exercise, weights, reps, sets);
                console.log(exercise, weights, reps, sets);
            }
        }

    }
    

    createWorkout(exercise, weights, reps, sets){
        return (
            <WorkoutSheet Exercise = {exercise} Wieght = {weights} Reps = {reps} Sets = {sets}/>
        );

    }

    _showWOcreate = () => {
        this.props.navigation.navigate('WOcreate');
    }

    getWorkouts(workouts) {
        let length = workouts.length;
        console.log( "!!!!!!!!!!!HERE!!!!!!!!!!!!!!!!!!" + length );
    }


      render(){

        const { workouts } = this.state;
        console.log( workouts );

        //workoutSheet = this.getWorkouts( workouts );

          return(
            <View style = {styles.container}>
                <ScrollView contentContainerStyle = {styles.scrollContainer}>

                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity onPress={() => this._showWOcreate()}>
                            <Text style = {styles.createButton}>+</Text>
                        </TouchableOpacity>
                    </View>
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
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: '#3498DB',
    },
    createButton: {
        fontSize: 36,
    }
});
