import React, { useMemo } from 'react';
import { View, Image, StyleSheet } from 'react-native';

import start from '@/assets/images/start.png';
import greyStart from '@/assets/images/greyStart.png';

interface Props {
  data: { rating: number }[];
}

const Rating = ({ data }: Props) => {
  const starsArray = useMemo(() => {
    if (data.length === 0) return Array(5).fill(0);

    const total = data.reduce((sum, item) => sum + Number(item.rating), 0);
    const average = Math.round(total / data.length);

    return Array.from({ length: 5 }, (_, i) => (i < average ? 1 : 0));
  }, [data]);

  return (
    <View style={styles.container}>
      {starsArray.map((filled, index) => (
        <Image
          key={index}
          source={filled ? start : greyStart}
          style={styles.star}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  star: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
});

export default Rating;
