import React from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';

const Button = ({onPress, title, containerStyle, textStyle}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.appButtonContainer, containerStyle]}>
      <Text style={[styles.appButtonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  appButtonContainer: {
    borderWidth: 2,
    borderColor: 'transparent',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Button;
