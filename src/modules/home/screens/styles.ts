import {StyleSheet} from 'react-native';
import {BORDER_RADIUS_BTN} from '@src/modules/core/constants';

export const HomeStyle = StyleSheet.create({
  main: {
    flex: 1,
  },
  field: {
    flex: 22,
    backgroundColor: 'white',
    margin: 15,
    borderRadius: BORDER_RADIUS_BTN,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 7,
    shadowOpacity: 0.2,
  },
  homeCalendar: {flex: 10},
  monthSalary: {flex: 1},
});
