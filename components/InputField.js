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


export default class InputField extends Component {
  render() {
    const { labelText, labelTextSize, labelColor, labelPlaceholderColor, inputType, customStyle, onChangeText } = this.props;
    const fontSize = labelTextSize || 15;
    const color = labelColor || "#FFF";
    const placeholderColor = labelPlaceholderColor || "rgba(255,255,255,0.7)";
    return (
      <View style={[customStyle, styles.wrapper]}>
        <TextInput
          style={[{color, fontSize }, styles.inputField]}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="next"
          placeholder={labelText}
          placeholderTextColor={labelPlaceholderColor}
          secureTextEntry={inputType === 'password' ? true : false}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
}

InputField.propTypes = {
  labelText: PropTypes.string.isRequired,
  labelTextSize: PropTypes.number,
  labelColor: PropTypes.string,
  labelPlaceholderColor: PropTypes.string,
  inputType: PropTypes.string.isRequired,
  customStyle: PropTypes.object,
  onChangeText: PropTypes.func
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
  },
  label: {
    paddingHorizontal: 10,
  },
  inputField: {
    height: 40,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
    marginBottom: 10,
    paddingHorizontal: 10,
  }
});
