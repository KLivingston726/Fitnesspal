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
            sheet: [],

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

        console.log(this.state.sheet)
    
          return(
              <View style = {styles.container}>
                <FlatList
                    data={this.state.sheet}
                    renderItem={({ item, index }) => {
                        return (
                            <WorkoutSheet Exercise = {item.Exercise} Weight = {item.Weight} Reps = {item.Reps} Sets = {item.Sets}/>);
                    }}
                    >
                </FlatList>

                
                <View style = {styles.buttonContainer}>
                        <TouchableOpacity onPress={() => this._showWOcreate()}>
                            <Text style = {styles.createButton}>⨁</Text>
                        </TouchableOpacity>
                    </View>

                <Text style={styles.buttonText}>
                    Add Workout
                </Text>

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
