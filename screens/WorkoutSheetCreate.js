import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  InteractionManager,
} from 'react-native';
import { WebBrowser } from 'expo';
import WorkoutSheet from '../components/WorkoutSheet'
import { MonoText } from '../components/StyledText';

import firebase from 'firebase'
import * as FirebaseAPI from '../modules/firebaseAPI';
import InputField from '../components/InputField';

//firebase.initializeApp(config);
// Get a reference to the database service
const database = firebase.database().ref();
const userRef = database.child('users/WOsheet');

var user = firebase.auth().currentUser;

if (user != null) {
    uid = user.uid;
  }

export default class WorkoutSheetCreate extends React.Component {
    constructor(props){
        super(props);
        this.state = ({

        });
    }

    /* JERRY RIG
    sheetCreate = () => {
      FirebaseAPI.sheetCreate(this.state.Exercise, this.state.Sets, this.state.Weight, this.state.Reps)
      var user = firebase.auth().currentUser;

      firebase.database().ref('/Workouts/'+user.uid+'/workout1/').set({
          Exercise: this.state.Exercise,
          Sets: this.state.Sets,
          Weight: this.state.Weight,
          Reps: this.state.Reps,
      });
      */

      sheetCreate = () => {
          FirebaseAPI.sheetCreate(this.state.Exercise, this.state.Sets, this.state.Weight, this.state.Reps)
          var user = firebase.auth().currentUser;

          firebase.database().ref('/Workouts/'+user.uid).push({
              Exercise: this.state.Exercise,
              Sets: this.state.Sets,
              Weight: this.state.Weight,
              Reps: this.state.Reps,
          });

          this.props.navigation.navigate('showWorkouts');
      }

      _back = ()  => {
        this.props.navigation.navigate('showWorkouts');
      }
      

      validateInputs(text, type) {
        let numreg = /^[0-9]+$/;
          if (type == 'age') {
            if (numreg.test(text)) {
              this.setState({age: text})
            } else {
    
            }
          }
      }

    render(){
        return(

            <KeyboardAvoidingView behavior="padding" style={styles.container}>

                <View style = {styles.header}>
                    <Text style={styles.title}>Create New Workout</Text>
                </View>


                <View style = {styles.contentContainer}>
                    <TextInput
                        placeholder= "Exercise"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        autoCapitalize="none"
                        style={styles.textInput}
                        onSubmitEditing={() => this.emailInput.focus()}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({Exercise: text})}
                        value={this.state.Exercise}
                        />
                        <TextInput
                        placeholder= "Weight"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        autoCapitalize="none"
                        style={styles.textInput}
                        onSubmitEditing={() => this.emailInput.focus()}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({Weight: text})}
                        value={this.state.Weight}
                        />
                        <TextInput
                        placeholder= "Sets"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        autoCapitalize="none"
                        style={styles.textInput}
                        onSubmitEditing={() => this.emailInput.focus()}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({Sets: text})}
                        value={this.state.Sets}
                        />
                        <TextInput
                        placeholder= "Reps"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        autoCapitalize="none"
                        style={styles.textInput}
                        onSubmitEditing={() => this.emailInput.focus()}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({Reps: text})}
                        value={this.state.Reps}
                        />

                        <View style={styles.totalButtonContainer}>
                            <TouchableOpacity
                                style={styles.buttonContainer}
                                onPress={() => this.sheetCreate()}
                            >
                                    <Text style={styles.buttonText}>Add Exercise</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style = {styles.buttonContainer}
                                onPress={() => this._back()}
                            >
                                <Text style = {styles.buttonText}>Back</Text>
                            </TouchableOpacity>

                        </View>

                    </View>
             </KeyboardAvoidingView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#3498DB',
    },
    contentContainer: {
        flex: 1,
        padding: 20,

    },
    header: {
        alignItems: 'center',
        padding: 40,
        justifyContent: 'center',
      },
    title: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 24,
      },
    textInput: {
        height: 40,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.3)',
        marginBottom: 10,
        color: "#FFF",
        paddingHorizontal: 10,
        fontSize: 15,
      },
      totalButtonContainer: {
        marginBottom: 40,
      },
      buttonContainer: {
        marginVertical: 5,
        backgroundColor: '#2874A6',
        paddingVertical: 12,
       },
       buttonText: {
         textAlign: 'center',
         color: '#FFF',
         fontWeight: '500',
       }
});