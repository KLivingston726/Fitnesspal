import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  InteractionManager,
} from 'react-native';
import { WebBrowser } from 'expo';
import WorkoutSheet from '../components/WorkoutSheet'
import { MonoText } from '../components/StyledText';

export default class WorkoutSheetCreate extends React.Component {
    constructor(props){
        super(props);
        this.state = ({
            Exercise: "",
            Sets: "",
            Weight: "",
            Reps: "",
        });
    }

    render(){
        return(


            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style = {styles.contentContainer}>
                    <TextInput
                        placeholder= "Exercise"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        autoCapitalize="none"
                        style={styles.textInput}
                        onSubmitEditing={() => this.emailInput.focus()}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({Exercise: text})}
                        value={this.state.Exercise}
                        />
                        <TextInput
                        placeholder= "Weight"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        autoCapitalize="none"
                        style={styles.textInput}
                        onSubmitEditing={() => this.emailInput.focus()}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({Weight: text})}
                        value={this.state.Weight}
                        />
                        <TextInput
                        placeholder= "Sets"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        autoCapitalize="none"
                        style={styles.textInput}
                        onSubmitEditing={() => this.emailInput.focus()}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({Sets: text})}
                        value={this.state.Sets}
                        />
                        <TextInput
                        placeholder= "Reps"
                        placeholderTextColor="rgba(255,255,255,0.7)"
                        returnKeyType="next"
                        autoCapitalize="none"
                        style={styles.textInput}
                        onSubmitEditing={() => this.emailInput.focus()}
                        autoCorrect={false}
                        onChangeText={(text) => this.setState({Reps: text})}
                        value={this.state.Reps}
                        />
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
    contentContainer: {
        flex: 1,
        padding: 20,

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
});