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

const database = firebase.database().ref();
const userRef = database.child('users');

var user = firebase.auth().currentUser;

if (user != null) {
    uid = user.uid;
  }


export default class WorkoutSheetTest extends React.Component {
    constructor(props) {
        super(props);
        this.state =({

        });
    }

  
    _showWOcreate = () => {
        this.props.navigation.navigate('WOcreate');
    }


    readUserData() {
        database = firebase.database();
        const ref = database.ref('Workouts');
        ref.on('value', GotData);
        
        function GotData(data) {
            //console.log(data.val());
            var workout = data.val();
            var keys = Object.keys(workout);
            for (var i = 0; i < keys.length; i++) {
                var k = keys[i];
                var exercise = workout[k].Exercise;
                var weight = workout[k].Weight;
                var sets = workout[k].Sets;
                var reps = workout[k].Reps;


                console.log(exercise, weight, sets );
            }
        }
    }    
    /*
    readUserData() {
        var ref = 
        firebase.database().ref('/Workouts/' + user).once('value', function(snapshot) {
            var exercise = snapshot.numChildren();
            console.log("NUM: " + exercise);
            console.log(snapshot.val());

        });
    }
    */

      render(){
          return(
            <View style = {styles.container}>
              <ScrollView contentContainerStyle = {styles.scrollContainer}>

                    <WorkoutSheet Exercise = "Bench Press" Weight = "135" Sets = "4" Reps = "12, 10, 8, 6"/>

                    <WorkoutSheet/>

                    <WorkoutSheet/>

                    <View style = {styles.buttonContainer}>
                        <TouchableOpacity onPress={() => this.readUserData()}>
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