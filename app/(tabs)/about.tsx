import {StyleSheet, Image} from 'react-native';
import React from 'react';
import ScreenContainerScroll from '../../components/ui/ContainerScroll';
import AboutSegment from '../../components/screens/About/AboutSegment';
import AboutImage from "@/assets/images/logo.png"
const About = () => {
  return (
    <ScreenContainerScroll style={styles.ScreenContainer}>
      <Image source={AboutImage} style={styles.logo} />
      <AboutSegment
        title="About NHC National Housing Company"
        content="NHC was established in 2016 under Royal Decree No. 7262, on 8/2/1437 AH
        to be the investment arm of the initiatives and programs of the Ministry
        of Municipal and Rural Affairs and Housing in the real estate,
        residential and commercial sectors. Then the Company came under state
        ownership."
      />

      <AboutSegment
        title="National Housing Strategy"
        content="The NHC Strategy aims for the Company to be an enabler of the real
        estate supply system by empowering the private sector to develop the
        real estate market and improve the professionalism of the services
        provided in it."
      />
    </ScreenContainerScroll>
  );
};

const styles = StyleSheet.create({
  ScreenContainer: {
    padding: 20,
    marginTop: 20
  },
  logo: {
    width: 182,
    height: 188,
    resizeMode: 'contain',
    marginVertical: 10,
    alignSelf: 'center',
    marginTop: 10
  },
});

export default About;