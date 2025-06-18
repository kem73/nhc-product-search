import React from 'react';
import {Text, TextProps, StyleSheet, TextStyle} from 'react-native';
import Colors from '../../types/colors';


interface Props extends TextProps {
  style?: TextStyle;
}

const AppText = ({style, children, ...otherProps}: Props) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};


const styles = StyleSheet.create({
  text: {
    color: Colors.darkText,
    fontSize: 16,
  } as TextStyle,
});

export default AppText;