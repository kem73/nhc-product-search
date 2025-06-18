import React from 'react';
import { Image, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/screens/Container';
import Button from '../../components/ui/Button';
import AboutImage from '@/assets/images/logo.png';
import { useRouter } from 'expo-router';

const Home: React.FC = () => {
  const navigation = useRouter(); 

  return (
    <ScreenContainer style={styles.container}>
      <Image source={AboutImage} style={styles.logo} />
      <Button
        style={styles.btn}
        title="start"
        onPress={() => navigation.push('/search')}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  logo: {
    width: 170,
    height: 176,
    resizeMode: 'contain',
    marginTop: 100,
  },
  btn: {
    marginVertical: 60,
  },
});

export default Home;
