import {StyleSheet} from 'react-native';
import {BORDER_RADIUS_BTN} from '@src/core/constants';

export const SettingsStyle = StyleSheet.create({
  mainMiddle: {
    flex: 14,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 15,
    borderRadius: BORDER_RADIUS_BTN,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 7,
    shadowOpacity: 0.2,
  },
});
