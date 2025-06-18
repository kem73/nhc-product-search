import React, { useEffect, useState, useCallback, useLayoutEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { useLocalSearchParams , useNavigation} from 'expo-router';

import AppText from '../../../components/ui/Text';
import AppImage from '../../../components/ui/Image';
import ScreenContainerScroll from '../../../components/ui/ContainerScroll';
import Details from '../../../components/screens/Products/ProductDeatils/Deatils';
import Rating from '../../../components/screens/Products/ProductDeatils/Rating';
import ProductImages from '../../../components/screens/Products/ProductDeatils/Images';

import { getProductById } from '@/lib/Api/api';
import Colors from '../../../types/colors';
import { Product } from '@/types/product';


const ProductDetails = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ tabBarStyle: { display: 'none' } });
  }, [navigation]);

  const fetchProduct = useCallback(async (productId: string, signal: AbortSignal) => {
    try {
      const result = await getProductById(productId, signal);
      setProduct(result);
    } catch (err) {
      console.error('Failed to load product:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    if (id) {
      fetchProduct(id, controller.signal);
    } else {
      setLoading(false);
    }
    return () => controller.abort();
  }, [id, fetchProduct]);

  if (loading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.centered}>
        <AppText>Product not found.</AppText>
      </View>
    );
  }

  return (
    <ScreenContainerScroll> 
      <View style={styles.container}>
        <AppText style={styles.title}>{product.title}</AppText>
        <AppImage
          source={{ uri: product.thumbnail }}
          style={styles.thumbnail}
        />
        <View style={styles.stockContainer}>
          <Details subTitle="Stock" content={product.stock} />
          <Details subTitle="Price" content={`${product.price} $`} />
        </View>
        <Details subTitle="Rating" content={<Rating data={product.reviews} />} />
        <Details subTitle="Brand" content={product.brand} />
        <Details subTitle="Discount" content={`${product.discountPercentage}%`} />
        <Details subTitle="Category" content={product.category} />

        <AppText style={styles.subTitle}>Product Description</AppText>
        <AppText style={styles.content}>{product.description}</AppText>
        {product.images?.length > 0 && <ProductImages images={product.images} />}
      </View>
    </ScreenContainerScroll>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 30,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: Colors.primary,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 10,
  },
  thumbnail: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginVertical: 10,
    borderRadius: 15,
  },
  stockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  subTitle: {
    color: Colors.darkText,
    fontSize: 18,
    marginTop: 40,
    fontWeight: '600',
  },
  content: {
    color: Colors.darkText,
    fontSize: 16,
    marginTop: 5,
    lineHeight: 22,
  },

});

export default ProductDetails;
