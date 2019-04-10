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

export default class WorkoutSheetTest extends React.Component {
    constructor(props) {
        super(props);
        this.state =({
            exercise: "",
            weight: "",
            sets: "",
            reps: "",
            instructions: "",
        });
    }

      render(){
          return(
            <View style = {styles.container}>
                <WorkoutSheet />
            </View>
          );
      }
}

//Blank screen for Test purposes
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: '#3498DB',
        padding: 20,
        alignItems: 'center'
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
    }
});