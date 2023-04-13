import { StyleSheet } from 'react-native';
import { BORDER_RADIUS_BTN, FONT_SIZE_MID } from '@src/constants/index';

export const SettingsStyle = StyleSheet.create({
  main: { flex: 1 },
  textField: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: FONT_SIZE_MID,
    fontWeight: 'bold',
  },
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
