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
        const buttonColor = toggle? 'rgba(40, 116, 166, .5)':'rgba(45, 255, 179, .7)';
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
    Exercise: PropTypes.string,
    Weight: PropTypes.string,
    Sets: PropTypes.string,
    Reps: PropTypes.string,
  };


const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(40, 116, 166, .5)",
        borderWidth: 2,
        width: '100%',
        padding: 30,
        margin: 5,
        justifyContent: 'flex-start',
    },
    contentContainer: {
        width: '95%',
        backgroundColor: 'rgba(84, 153, 199, .01)',
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