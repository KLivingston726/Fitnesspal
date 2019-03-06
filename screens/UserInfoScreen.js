import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  TextInput,
  View,
  InteractionManager,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class UserInfoScreen extends React.Component {
    static navigationOptions = {
        header: null,
      };

      render() {
        return (
          <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <View style={styles.signupContainer}>
              <Text style={styles.title}>Profile Information</Text>
            </View>
    
            <View>
                <StatusBar barStyle="light-content" />
    
              <TextInput
                style={styles.textInput}
                placeholder= "First Name"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                autoCapitalize="none"
                
    
              />
              <TextInput
                placeholder= "Last Name"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                autoCapitalize="none"
                style={styles.textInput}
                
              />
              <TextInput
                placeholder= "Age"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                autoCapitalize="none"
                style={styles.textInput}
                
              />
              <TextInput
                placeholder= "Height (Ex: 6ft 1in)"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                autoCapitalize="none"
                style={styles.textInput}
                
              />
              <TextInput
                placeholder= "Weight (lbs)"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                autoCapitalize="none"
                style={styles.textInput}
                
              />
              <TextInput
                placeholder= "Sex"
                placeholderTextColor="rgba(255,255,255,0.7)"
                returnKeyType="next"
                autoCapitalize="none"
                style={styles.textInput}
                
              />
              <View style={styles.totalButtonContainer}>
                <TouchableOpacity
                  style={styles.buttonContainer}
                  onPress={this._showLogin}
                >
                  <View>
                    <Text style={styles.buttonText}>SAVE SETTINGS</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
    
          </KeyboardAvoidingView>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#3498DB',
      },
      signupContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
      },
      title: {
        color: '#FFF',
        textAlign: 'center',
        fontSize: 40,
      },
      textInput: {
        height: 40,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: 'rgba(255,255,255,0.3)',
        marginBottom: 10,
        color: "#FFF",
        paddingHorizontal: 10,
        fontSize: 15,
      },
      totalButtonContainer: {
        marginBottom: 40,
      },
      buttonContainer: {
        marginVertical: 5,
        backgroundColor: '#2874A6',
        paddingVertical: 12,
       },
       buttonText: {
         textAlign: 'center',
         color: '#FFF',
         fontWeight: '500',
       }
    });