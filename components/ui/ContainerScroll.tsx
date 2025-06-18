
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    View,
    ViewStyle,
    ScrollView,
  } from 'react-native';
  import React, {ReactNode} from 'react';
  import Colors from '../../types/colors';
  

  interface Props {
    children: ReactNode;
    style?: ViewStyle;
  }
  

  const ScreenContainerScroll: React.FC<Props> = ({children, style}) => {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[styles.screen, style]}>{children}</View>
        </ScrollView>
      </SafeAreaView>
    );
  };
  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
    },
    screen: {
      flex: 1,
    },
  });
  
  export default ScreenContainerScroll;