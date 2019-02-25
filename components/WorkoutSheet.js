import React, { Component } from 'react';
import { Image } from 'react-native';

export default class WorkoutSheet extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            exercise: 'Enter Exercise Here',
            weight: 'Enter weight Here',
            sets: 'Enter Number Of Sets',
            reps: 'Enter Number Of Repitions',
            instructions: 'Instructions For Workout'
        };

    }
    render() {
        return (
            <View>
                
            </View>
        );
    }
}