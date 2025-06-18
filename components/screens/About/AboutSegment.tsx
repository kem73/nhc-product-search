import {View, StyleSheet} from 'react-native';
import React from 'react';
import AppText from '../../ui/Text';
import Colors from '../../../types/colors';

// Define props 
interface Props {
  title: string;
  content: string;
}

const AboutSegment = ({title, content}: Props) => {
  return (
    <View style={styles.container}>
      <AppText style={styles.title}>{title}</AppText>
      <AppText style={styles.content}>{content}</AppText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
  title: {
    color: Colors.primary,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 500
  },
  content: {
    color: Colors.darkText,
    fontSize: 13,
    lineHeight: 24,
    marginTop: 4
  },
});

export default AboutSegment;