import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
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
        
        const { Exercise, Weight, Sets, Reps } = this.props;
        const {toggle} = this.state;
        const buttonColor = toggle?'#2874A6':'#2DFFB3';
        const fontColor = toggle?'#FFF':'#3498DB'
        
        return (

                <TouchableOpacity 
                onPress={()=>this._complete()}
                style = {{backgroundColor:buttonColor, width:'100%', padding: 30, justifyContent:'flex-start', margin:5}}>
                    <View style = {styles.contentContainer}>
                        <Text style={{fontSize: 16, height: 35, borderRadius: 4, padding: 5, 
                              borderWidth: 2,  borderColor: '#3498DB',margin: 4, color: fontColor}}>Exercise: {Exercise} </Text>
                        <Text style={{fontSize: 16, height: 35, borderRadius: 4, padding: 5, 
                              borderWidth: 2,  borderColor: '#3498DB',margin: 4, color: fontColor}}>Weight: {Weight}</Text>
                        <Text style={{fontSize: 16, height: 35, borderRadius: 4, padding: 5, 
                              borderWidth: 2,  borderColor: '#3498DB',margin: 4, color: fontColor}}>Sets: {Sets}</Text>
                        <Text style={{fontSize: 16, height: 35, borderRadius: 4, padding: 5, 
                              borderWidth: 2,  borderColor: '#3498DB',margin: 4, color: fontColor}}>Reps: {Reps}</Text>
                    </View>
                </TouchableOpacity>
        );
    }
}


WorkoutSheet.propTypes = {
    Exercise: PropTypes.string.isRequired,
    Weight: PropTypes.string,
    Sets: PropTypes.string,
    Reps: PropTypes.string.isRequired,
  };


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2874A6',
        borderWidth: 2,
        width: '100%',
        padding: 30,
        margin: 5,
        justifyContent: 'flex-start',
    },
    contentContainer: {
        width: '95%'
    },
    ExerciseInfo: {
        fontSize: 16,
        height: 30,
        borderRadius: 4,
        padding: 5,
        borderWidth: 2,
        borderColor: '#3498DB',
        margin: 4,
    }
})


export default WorkoutSheet;