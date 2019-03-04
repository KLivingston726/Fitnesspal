import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar
 } from 'react-native';

export default class ForgotPasswordScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      email: ""
    });
  }

  static navigationOptions = {
    title: 'ForgotPassword',
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>


        <View style={styles.signupContainer}>
          <Image
            source={'../images/lock.png'}
            style={styles.image}
          />


          <Text style={styles.title}>Forgot Password?</Text>
          <Text style={styles.text}>Just type the email linked to the account and we will send you password reset</Text>
        </View>

        <View>
            <StatusBar barStyle="light-content" />
          <View style={styles.totalButtonContainer}>
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={this._showLogin}
            >
              <View>
                <Text style={styles.buttonText}>Reset Password</Text>
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
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 40,
  },
  text: {
    marginTop: 20,
    width: 280,
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: 90,
    height: 90,
    alignItems: 'center',
  },
  textInput: {
    height: 40,
    //backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
    marginBottom: 10,
    color: "#FFF",
    paddingHorizontal: 10,
    fontSize: 15,
  },
  totalButtonContainer: {
    marginBottom: 10,
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
