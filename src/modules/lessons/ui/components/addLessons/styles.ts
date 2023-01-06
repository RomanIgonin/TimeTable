import { StyleSheet } from 'react-native';
import {
  BLUE,
  BORDER_RADIUS_BTN,
  FONT_SIZE_MIN,
} from '@src/modules/core/constants';

export const AddLessonsStyle = StyleSheet.create({
  main: {
    flex: 1,
  },

  mainInputs: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginBottom: 10,
    borderRadius: BORDER_RADIUS_BTN,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 7,
    shadowOpacity: 0.2,
  },
  AddLessonButton: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeField: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 15,
  },
  timeTextField: {
    flex: 2,
    justifyContent: 'center',
  },
  timeText: {
    fontWeight: 'bold',
  },
  timeInput: {
    flex: 3,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderRadius: BORDER_RADIUS_BTN,
  },
  nameLessonField: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
  },
  nameLessonsTextField: {
    flex: 2,
    justifyContent: 'center',
  },
  nameLessonsText: {
    fontWeight: 'bold',
  },
  nameLessonInput: {
    flex: 3,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: BORDER_RADIUS_BTN,
  },
  priceField: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginLeft: 15,
  },
  priceTextField: {
    flex: 2,
    justifyContent: 'center',
  },
  priceText: {
    fontWeight: 'bold',
  },
  priceInput: {
    flex: 3,
    alignSelf: 'stretch',
    // justifyContent: 'center',
    // backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: BORDER_RADIUS_BTN,
  },
  priceInputText: {
    marginLeft: 10,
    fontSize: FONT_SIZE_MIN,
  },
});
