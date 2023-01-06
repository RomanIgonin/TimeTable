import {StyleSheet} from 'react-native';
import {BORDER_RADIUS_BTN} from '@src/modules/core/constants';

export const HomeCalendarStyle = StyleSheet.create({
  main: {
    flex: 1,
  },
  calendar: {
    margin: 10,
    borderRadius: BORDER_RADIUS_BTN,
  },
});
