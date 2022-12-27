import {StyleSheet} from 'react-native';
import {
  BLUE,
  BORDER_RADIUS_BTN,
  FONT_SIZE_MID,
  FONT_SIZE_MIN,
  GRAY,
} from '@src/core/constants';

export const LessonsListStyle = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: 'white',
    // alignItems: 'center',
    marginHorizontal: 15,
    marginBottom: 25,
    // padding: 15,
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
    // paddingHorizontal: 40,
    // borderRadius: BORDER_RADIUS_BTN,
    // backgroundColor: BLUE,
  },
  time: {
    flex: 3,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
  language: {
    flex: 4,
    alignItems: 'center',
    // backgroundColor: 'green',
  },
  price: {
    flex: 3,
    alignItems: 'center',
  },
  lessonTextTime: {
    fontSize: FONT_SIZE_MIN,
    // color: 'white',
  },
  lessonTextLanguage: {
    fontSize: FONT_SIZE_MIN,
    fontWeight: 'bold',
    // color: 'white',
  },
  lessonTextPrice: {
    fontSize: FONT_SIZE_MIN,
    // color: 'white',
  },
});
