import { StyleSheet } from 'react-native';
import {
  BLUE,
  BORDER_RADIUS_BTN,
  FONT_SIZE_MAX,
} from '@src/modules/core/constants';

export const ButtonAddLessonStyle = StyleSheet.create({
  AddLessonButtonField: {
    flex: 1,
    backgroundColor: BLUE,
    width: 120,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: BORDER_RADIUS_BTN,
  },
  AddLessonButtonText: {
    fontSize: FONT_SIZE_MAX,
    fontWeight: 'bold',
    color: 'white',
  },
});
