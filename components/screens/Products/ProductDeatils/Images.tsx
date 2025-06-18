import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Text from '../../../ui/Text';
import Colors from '../../../../types/colors';
import AppImage from '../../../ui/Image';

interface Props {
  images: string[];
}

const ProductImages = ({images}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>Product Images</Text>
      <FlatList
        data={images}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <AppImage key={index} source={{uri: item}} style={styles.image} />
        )}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    marginLeft: 0,
    marginBottom: 40,
    marginTop: 20
  },
  image: {
    width: 130,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
    resizeMode: 'contain',
    marginTop: 5
  },
  subTitle: {
    color: Colors.darkText,
    fontSize: 18,
    marginTop: 15,
    paddingBottom: 10,
    fontWeight: '600'

  },
});

export default ProductImages;