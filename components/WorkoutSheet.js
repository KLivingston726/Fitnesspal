import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

class WorkoutSheet extends Component {
    constructor(props) {
        super(props)
 
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.ExerciseInfo}>Exercise: </Text>
                <Text style={styles.ExerciseInfo}>Weight: </Text>
                <Text style={styles.ExerciseInfo}>Sets: </Text>
                <Text style={styles.ExerciseInfo}>Reps: </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2874A6',
        width: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    ExerciseInfo: {
        fontSize: 16,
    }
})


export default WorkoutSheet;