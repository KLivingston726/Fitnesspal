import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class WorkoutSheet extends Component {
    constructor(props) {
        super(props)
 
    }

    complete() {
        
    }

    render() {
        return (
            <TouchableOpacity style = {styles.touch}>
                <View style={styles.container}>
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