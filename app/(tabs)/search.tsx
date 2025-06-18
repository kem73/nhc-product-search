import {
    View,
    StyleSheet,
    FlatList,
    KeyboardAvoidingView,
    ActivityIndicator,
    Platform,
    ListRenderItem,
  } from 'react-native';
  import React, {
    useEffect,
    useState,
    useCallback,
    useMemo,
    useRef,
    memo,
  } from 'react';
  
  import ScreenContainer from '../../components/screens/Container';
  import Text from '../../components/ui/Text';
  import Colors from '../../types/colors';
  import TextInput from '../../components/ui/TextInput';
  import { getListings } from '../../lib/Api/api';
  import ProductCard from '../../components/screens/Products/ProductCard';
  import Button from '../../components/ui/Button';
  import NoResults from '../../components/screens/Products/NoResults';
  import { Product } from '../../types/product';
  import searchIcon from '@/assets/images/search_icon.png';
  
  const ProductsSearch = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
  
    const abortControllerRef = useRef<AbortController | null>(null);
    const debounceTimeoutRef = useRef<number | null>(null);
  
    const fetchProducts = useCallback(async (searchText: string) => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      const controller = new AbortController();
      abortControllerRef.current = controller;
      try {
        setLoading(true);
        setError(false);
        const response = await getListings(controller.signal, searchText);
        setProducts(response.products);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }, []);
  
    const handleSearchChange = useCallback((text: string) => {
      if (debounceTimeoutRef.current) {
        clearTimeout(debounceTimeoutRef.current);
      }
  
      debounceTimeoutRef.current = setTimeout(() => {
        fetchProducts(text.trim());
      }, 400);
    }, [fetchProducts]);
  
    useEffect(() => {
      fetchProducts('');
  
      return () => {
        abortControllerRef.current?.abort();
        if (debounceTimeoutRef.current) {
          clearTimeout(debounceTimeoutRef.current);
        }
      };
    }, [fetchProducts]);
  
    const renderItem: ListRenderItem<Product> = useCallback(({ item }) => (
      <ProductCard key={item.id} {...item} price={`${item.price} $`} />
    ), []);
  
    const memoizedProducts = useMemo(() => products, [products]);
  
    return (
      <ScreenContainer style={styles.ScreenContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >
          <View style={styles.seachInputContainer}>
            <Text style={styles.title}>Search products by keywords</Text>
            <TextInput
              icon={searchIcon}
              placeholder="Enter Search Keywords"
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={handleSearchChange}
              start={false}
            />
          </View>
  
          {error && !products.length && (
            <>
              <Text style={styles.error}>Could not retrieve the products</Text>
              <View style={styles.btnContainer}>
                <Button title="Retry" onPress={() => fetchProducts('')} />
              </View>
            </>
          )}
  
          {loading && (
            <ActivityIndicator color={Colors.primary} size="large" animating />
          )}
  
          <FlatList
            showsVerticalScrollIndicator={false}
            data={memoizedProducts}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={{ paddingBottom: 30 }}
          />
  
  {       !products.length && !loading && !error ? <NoResults /> : null}
  
          <View style={styles.totalResultsContainer}>
            <Text style={styles.totalResultsText}>Total results count: </Text>
            <Text style={styles.totalResultsNumber}>{products.length}</Text>
          </View>
        </KeyboardAvoidingView>
      </ScreenContainer>
    );
  };
  
  const styles = StyleSheet.create({
    ScreenContainer: {
      paddingTop: 20,
    },
    title: {
      color: Colors.primary,
      fontSize: 18,
      marginVertical: 10,
    },
    seachInputContainer: {
      marginHorizontal: 20,
    },
    error: {
      width: '100%',
      paddingVertical: 20,
      textAlign: 'center',
    },
    btnContainer: {
      paddingHorizontal: 20,
    },
    totalResultsContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
    },
    totalResultsText: {
      color: Colors.darkText,
      fontSize: 18,
    },
    totalResultsNumber: {
      color: Colors.primary,
      fontSize: 18,
    },
  });
  
  export default memo(ProductsSearch);
  