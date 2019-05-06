import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default class RectangleButton extends Component {
  render() {
    const { text, color, backgroundColor, handleOnPress } = this.props;
    return (
        <TouchableOpacity
          style={[{backgroundColor}, styles.buttonContainer]}
          onPress={handleOnPress}
        >
          <View>
            <Text style={[{color},styles.buttonText]}>{text}</Text>
          </View>
        </TouchableOpacity>


    );
  }
}


RectangleButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  background: PropTypes.string,
  handleOnPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  buttonText: {
    fontWeight: '500',
    textAlign: 'center',
  },
  buttonContainer: {
    marginVertical: 5,
    paddingVertical: 12,
  },

});
