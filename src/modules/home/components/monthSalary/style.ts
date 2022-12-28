import {FONT_SIZE_MIN} from '@src/core/constants';
import {StyleSheet} from 'react-native';

export const MonthSalaryStyle = StyleSheet.create({
  main: {
    flex: 1,
    marginHorizontal: 25,
  },
  infoElement: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoElementTitle: {
    flex: 14,
  },
  infoElementTitleText: {
    fontSize: FONT_SIZE_MIN,
    fontWeight: 'bold',
  },
  infoElementTextRight: {
    flex: 8,
    alignItems: 'center',
  },
});
