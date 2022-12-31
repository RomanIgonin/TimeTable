import {StyleSheet} from 'react-native';
import {FONT_SIZE_MIN} from '@src/core/constants';

export const PriceSwitchStyle = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  priceInputText: {
    fontSize: FONT_SIZE_MIN,
  },
});
