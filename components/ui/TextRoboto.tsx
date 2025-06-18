import {Text, StyleSheet, TextStyle} from 'react-native';
import React, {ReactNode} from 'react';
interface Props {
  children: ReactNode;
  style?: TextStyle;
}

const AppTextRoboto = ({children, style}: Props) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};
const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    fontFamily: 'Roboto-Bold',
  },
});

export default AppTextRoboto;