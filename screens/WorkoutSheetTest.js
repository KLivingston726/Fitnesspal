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

import { MonoText } from '../components/StyledText';

export default class WorkoutSheetTest extends React.Component {
    static navigationOptions = {
        header: null,
      };

      createWorkout(){
        
      }

      render(){
          return(
            <View style = {styles.container}>
                <TouchableOpacity 
                    style = {styles.button}
                    onPress={() => this.createWorkout()}
                >
                    
                    <Text>Add new Workout</Text>
                </TouchableOpacity>
            </View>

          );

      }


}

//Blank screen for Test purposes
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#3498DB',
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