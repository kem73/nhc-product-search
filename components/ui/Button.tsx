import {
    TouchableOpacity,
    StyleSheet,
    ViewStyle,
    TouchableOpacityProps,
  } from 'react-native';
  import React from 'react';
  import Colors from '../../types/colors';
  import AppTextRoboto from '../ui/TextRoboto';
  
  interface Props extends TouchableOpacityProps {
    title: string;
    style?: ViewStyle;
    onPress: () => void;
  }
  
  const Button = ({ title, style, onPress, ...otherProps }: Props) => {
    return (
      <TouchableOpacity
        style={[styles.button, style]}
        onPress={onPress}
        activeOpacity={1} 
        {...otherProps}
      >
        <AppTextRoboto style={styles.label}>{title}</AppTextRoboto>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    button: {
      width: '100%',
      height: 52,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.primary,
      borderRadius: 7,
    },
    label: {
      textTransform: 'uppercase',
      color: Colors.white,
    },
  });
  
  export default Button;
  