import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  ListView,
  TouchableOpacity,
  View,
  InteractionManager,
  ImageBackground,
  KeyboardAvoidingView
} from 'react-native';
import { WebBrowser } from 'expo';
import WorkoutSheet from '../components/WorkoutSheet'
import { MonoText } from '../components/StyledText';
import Swipeout from 'react-native-swipeout';

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
            sheet: [],
            refreshing: false,

        });
    }

    static navigationOptions = {
        header: null,
    };

    _showWOcreate = () => {
        this.props.navigation.navigate('WOcreate');
    }
    
    componentDidMount() {
        var userId = firebase.auth().currentUser.uid;
        database = firebase.database();
        var ref = database.ref('Workouts/' + userId);

        ref.on('value', (childSnapshot) => {
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

    


      render(){
        var userID = firebase.auth().currentUser.uid;
        const swipeSettings = {
            autoClose: true,
            onClose: (secID, rowID, direction) => {

            },
            onOpen: (secID, rowID, direction) => {

            },
            right: [
                {
                    onPress: () => {
                        firebase.database().ref('/Workouts/'+ userID).remove();
                        this.state.refreshing
                    },
                    text: 'Delete', type: 'delete'
                 }
            ],
            rowID: this.props.index,
            sectionID: 1
        };
        console.log(this.state.sheet)
    
          return(
            <ImageBackground source={require('../assets/images/background.jpg')} style={styles.backgroundImage}>
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <ScrollView style={styles.container}>
              <View style={styles.Container}>
                <Text style={styles.title}>Workout Sheet</Text>

                <View style={styles.Container}>
                    <Text style={styles.infoText}>Here is your personal workout sheet. Add workouts as you go below to track your daily workout.
                     When you have finished an excercise, click it to mark it as completed.</Text>
                </View>

                <Text style={styles.barUI}>
                    __________________________
                </Text>

                <View style={styles.Container}>
                    <Text style={styles.infoText}>If you want to start a new workout swipe left on the workouts and press delete. This will delete all current workouts!!</Text>
                </View>

                <Text style={styles.barUI}>
                    __________________________
                </Text>

                <View style={styles.Container}>
                    <Text style={styles.infoText}>(Refrese the page to remove old workout)</Text>
                </View>

              </View>
              <Swipeout {...swipeSettings} style ={styles.workoutContainer}>
                <FlatList style ={styles.workoutContainer}
                    data={this.state.sheet}
                    renderItem={({ item, index }) => {
                        return (
                            <WorkoutSheet Exercise = {item.Exercise} Weight = {item.Weight} Reps = {item.Reps} Sets = {item.Sets}/>);
                    }}
                    >
                    
                </FlatList>
              </Swipeout>
              

                
                <View style = {styles.buttonContainer}>
                        <TouchableOpacity onPress={() => this._showWOcreate()}>
                            <Text style = {styles.createButton}>⨁</Text>
                        </TouchableOpacity>
                    </View>

                <Text style={styles.buttonText}>
                    Add Workout
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
        paddingTop: 20,
    },
    workoutContainer: {
        backgroundColor: 'rgba(84, 153, 199, .01)',
        paddingHorizontal: 10,
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
    infoText: {
        fontSize: 20,
        paddingBottom: 10,
        paddingHorizontal: 5,
        textAlign: 'center',
        color: '#FFF',
    },
    buttonContainer: {
        alignItems: 'center',
        backgroundColor: 'rgba(84, 153, 199, .01)',
    },
    button: {
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 100,
        height: 100,
        backgroundColor: 'rgba(84, 153, 199, .01)',
        borderRadius: 100,
        borderColor: '#fff',
        color: '#fff',
    },
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        paddingBottom: 40,
        color: '#fff',
    },
    scrollContainer: {
        flexGrow: 1,
        backgroundColor: 'rgba(84, 153, 199, .01)',
    },
    createButton: {
        fontSize: 36,
        color: '#fff',
        backgroundColor: 'rgba(84, 153, 199, .01)',
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
    backgroundImage: {
        flex: 1,
    },
});
