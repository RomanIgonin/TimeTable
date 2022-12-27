import {StyleSheet} from 'react-native';
import {FONT_SIZE_MID, FONT_SIZE_MIN} from '@src/core/constants';

export const LessonsStyle = StyleSheet.create({
  main: {
    flex: 1,
  },
  top: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    fontSize: FONT_SIZE_MID,
    fontWeight: 'bold',
  },
  addLessons: {
    flex: 6,
    paddingBottom: 15,
    // backgroundColor: 'rgba(0,72,255,0.25)',
  },
  lessonsList: {
    flex: 20,
  },
});
