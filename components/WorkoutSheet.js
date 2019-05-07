import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class WorkoutSheet extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            toggle: true,
        };
    }

    _complete() {
        const newState = !this.state.toggle;
        this.setState({toggle:newState})
    }

    render() {
        
        const {toggle} = this.state;
        const buttonColor = toggle?'#2874A6':'#3BFFC6';

        return (

                <TouchableOpacity 
                onPress={()=>this._complete()}
                style = {{backgroundColor:buttonColor, width:'100%', padding: 30, justifyContent:'flex-start', margin:5}}>
                    <View>
                        <Text style={styles.ExerciseInfo}>Exercise: </Text>
                        <Text style={styles.ExerciseInfo}>Weight: </Text>
                        <Text style={styles.ExerciseInfo}>Sets: </Text>
                        <Text style={styles.ExerciseInfo}>Reps: </Text>
                    </View>
                </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2874A6',
        width: '100%',
        padding: 30,
        margin: 5,
        justifyContent: 'flex-start',
    },
    ExerciseInfo: {
        fontSize: 16,
        padding: 5,
    }
})


export default WorkoutSheet;