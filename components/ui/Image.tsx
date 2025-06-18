import React, {useState} from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';
import Colors from '../../types/colors';


interface Props {
  source: {uri: string} | number;
  style?: StyleProp<ImageStyle>;
}

const AppImage = ({source, style}: Props) => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <Image
        source={source}
        style={[
          {backgroundColor: loading ? Colors.lightText : 'transparent'},
          style,
        ]}
        onLoad={() => setLoading(false)}
      />
    </>
  );
};

export default AppImage;