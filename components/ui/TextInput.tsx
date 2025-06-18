import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  TextInputProps,
  ImageSourcePropType,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import Colors from '../../types/colors';

interface Props extends TextInputProps {
  icon?: ImageSourcePropType;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  start?: boolean;
}

const AppTextInput = ({
  icon,
  containerStyle,
  style,
  start = true,
  ...otherProps
}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {icon && start && <Image source={icon} style={styles.icon} />}
      <TextInput
        style={[styles.textInput, style]}
        placeholderTextColor={Colors.placeholder}
        {...otherProps}
      />
      {icon && !start && <Image source={icon} style={styles.icon} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginVertical: 10,
    paddingHorizontal: 5,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: Colors.borderColor,
    backgroundColor: Colors.grey,
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    marginRight: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    color: Colors.darkText,
  },
});

export default AppTextInput;
