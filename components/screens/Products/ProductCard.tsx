import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import AppText from '../../../components/ui/Text';
import AppImage from '../../../components/ui/Image';
import Colors from '../../../types/colors';
import { Product } from '../../../types/product';
import { useRouter } from 'expo-router';

const ProductCard = ({
  id,
  title,
  description,
  thumbnail,
  price,
}: Product) => {
  const router = useRouter();

  const handlePress = () => {
    router.push({
      pathname: '/product/[id]',
      params: {
        id: String(id), 
        from: 'search',
      },
    });
  };
  return (
    <TouchableOpacity style={styles.cardContainer} onPress={handlePress}>
      <AppImage source={{ uri: thumbnail }} style={styles.thumnail} />
      <View style={styles.informationContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.discription} numberOfLines={2} ellipsizeMode="tail">
          {description}
        </AppText>
        <View style={styles.priceContainer}>
          <AppText style={styles.price}>{price}</AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    width: width - 40,
    padding: 15,
    borderRadius: 10,
    backgroundColor: Colors.white,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 10,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  informationContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flex: 1,
  },
  title: {
    color: Colors.primary,
    fontSize: 18,
  },
  discription: {
    color: Colors.lightText,
    fontSize: 16,
  },
  thumnail: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginRight: 10,
    borderRadius: 10,
  },
  priceContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
    marginTop: 15,
  },
  price: {
    color: Colors.primary,
    fontSize: 16,
  },
});

export default ProductCard;
