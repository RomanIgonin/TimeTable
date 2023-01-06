import { Animated, Pressable, Text } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import { PriceSwitchStyle } from '@src/modules/lessons/ui/components/addLessons/priceSwitch/style';
import { PRICES } from '@src/modules/core/constants';

interface Props {
  price: string;
  getPrice: (value: string) => void;
}
export const PriceSwitch: React.FC<Props> = ({ price, getPrice }) => {
  const animatedScale = useRef(new Animated.Value(0)).current;
  const [count, setCount] = useState(0);
  useEffect(() => {
    animatedScale.setValue(1);
  }, []);

  if (count > PRICES.length - 1) {
    setCount(0);
  }

  const onPressPrice = () => {
    setCount(count + 1);
    getPrice(PRICES[count]);
    animatedScale.setValue(0.95);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 24,
      speed: 50,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable style={PriceSwitchStyle.main} onPress={onPressPrice}>
      <Animated.View style={{ transform: [{ scale: animatedScale }] }}>
        <Text style={PriceSwitchStyle.priceInputText}>{price}</Text>
      </Animated.View>
    </Pressable>
  );
};
