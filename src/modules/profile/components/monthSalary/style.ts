import {FONT_SIZE_MIN} from '@src/core/constants';
import {StyleSheet} from 'react-native';

export const MonthSalaryStyle = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 15,
    // backgroundColor: 'pink',
  },
  infoElement: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  infoElementTitle: {
    flex: 20,
    // paddingRight: 10,
    // alignItems: 'flex-end',
  },
  infoElementTitleText: {
    fontSize: FONT_SIZE_MIN,
    fontWeight: 'bold',
  },
  infoElementTextRight: {
    flex: 22,
  },
});
