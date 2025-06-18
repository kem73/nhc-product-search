import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform, TouchableOpacity, Image } from 'react-native';
import BackIcon from '@/assets/images/back.png';

export default function ProductLayout() {
  const navigation = useNavigation();
  const router = useRouter();

  useEffect(() => {
    navigation.getParent()?.setOptions({
      tabBarStyle: { display: 'none' },
    });

    return () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: { display: 'flex' },
      });
    };
  }, [navigation]);

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerTitle: 'Product Details',
        headerTitleAlign: 'center',
        animation: Platform.OS === 'ios' ? 'default' : 'fade',
        headerLeft: () => (
          <TouchableOpacity
            style={{ paddingLeft: 15 }}
            onPress={() => router.push('/search')} 
          >
            <Image
              source={BackIcon}
              style={{ width: 24, height: 24, resizeMode: 'contain' }}
            />
          </TouchableOpacity>
        ),
      }}
    />
  );
}
