import {StyleSheet} from 'react-native';
import {
  BORDER_RADIUS_BTN,
  FONT_SIZE_MIN,
  GRAY,
} from '@src/modules/core/constants';

export const LessonsListStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 25,
    borderRadius: BORDER_RADIUS_BTN,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 7,
    shadowOpacity: 0.2,
  },
  lessonField: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 0.5,
    borderColor: GRAY,
  },
  time: {
    flex: 3,
    alignItems: 'center',
  },
  language: {
    flex: 4,
    alignItems: 'center',
  },
  price: {
    flex: 3,
    alignItems: 'center',
  },
  lessonTextTime: {
    fontSize: FONT_SIZE_MIN,
  },
  lessonTextLanguage: {
    fontSize: FONT_SIZE_MIN,
    fontWeight: 'bold',
  },
  lessonTextPrice: {
    fontSize: FONT_SIZE_MIN,
  },
});
