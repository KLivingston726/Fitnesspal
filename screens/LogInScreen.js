import React, {Component} from 'react';
import {Image, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-elements';

export default class LogInScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };

      render(){
        return(
            <View style={styles.container}>
                <View style={styles.buttonContainer}>
                    <Button
                        title='Log In'
                        backgroundColor='rgb(0,255,0)'
                        onPress={() => this.props.navigation.navigate("Home")}
                    />
                    <Button
                        title='Sign Up!'
                        onPress={() => this.props.navigation.navigate("SignUp") }
                    />
                        
                </View>
            </View>

        );
      }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#373738',
    },
    buttonContainer: {
        padding: 60,
    },




})