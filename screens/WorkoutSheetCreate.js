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
  ImageBackground,
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
          const day = new Date().getDay;

          firebase.database().ref('/Workouts/' + user.uid).push({
              Exercise: this.state.Exercise,
              Sets: this.state.Sets,
              Weight: this.state.Weight,
              Reps: this.state.Reps,
          });


          this.watchAuthState(this.props.navigation);
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
      
    render(){
      const now = new Date();
      console.log(now);
        return(
            <ImageBackground source={require('../assets/images/background.jpg')} style={styles.backgroundImage}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <ScrollView style={styles.container}>>

                <View style = {styles.header}>
                    <Text style={styles.title}>Create New Workout</Text>
                </View>

                <View>
                    <Text style={styles.titleText}>Add a new workout below! When you are done hit either button
                     at the bottom to be moved back to the Home Screen!  </Text>
                </View>
                <View>
                    <Text style={styles.alertText}>Please dont leave any sections blank!</Text>
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
                    <Text style={styles.barUI}>
                       _______________________
                    </Text>
             </ScrollView>

             </KeyboardAvoidingView>
             </ImageBackground>

        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(84, 153, 199, .01)',
    },
    contentContainer: {
        flex: 1,
        padding: 20,
        backgroundColor: 'rgba(84, 153, 199, .01)',
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
      },
    title: {
        color: '#FFF',
        textAlign: 'center',
        fontFamily: 'AvenirNext-BoldItalic',
        textDecorationLine: 'underline',
        paddingTop: 10,
        paddingBottom: 10,
        fontSize: 35,
      },
    titleText: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 20,
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
      alertText: {
        color: '#FFF',
        textAlign: 'center', 
        textDecorationLine: 'underline',      
        fontSize: 20,
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
      },
       barUI: {
        marginTop: -10,
        marginBottom: 10,
        paddingBottom: 50,
        color: 'rgba(84, 153, 199, .01)',
        fontSize: 20,
        fontFamily: 'Georgia-Bold',
        lineHeight: 30,
        textAlign: 'center',
      },
      backgroundImage: {
        flex: 1,
      }
});
