import {View, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import Text from '../../../ui/Text';
import Colors from '../../../../types/colors';


interface Props {
  subTitle: string;
  content: string | ReactNode;
}

const DetailsSegemnt = ({subTitle, content}: Props) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.subTitle}>{subTitle}: </Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 15,
  },
  subTitle: {
    color: Colors.darkText,
    fontSize: 18,
  },
  content: {
    color: Colors.primary,
    fontSize: 18,
  },
});

export default DetailsSegemnt;