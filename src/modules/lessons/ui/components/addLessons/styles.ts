import {StyleSheet} from 'react-native';
import {
  BLUE,
  BORDER_RADIUS_BTN,
  FONT_SIZE_MID,
  FONT_SIZE_MIN,
  GRAY,
} from '@src/core/constants';

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
    // backgroundColor: 'grey',
  },
  AddLessonButtonField: {
    backgroundColor: BLUE,
    width: 150,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
  },
  AddLessonButtonText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  timeField: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // borderWidth: 1,
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
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
  timeInputText: {
    marginLeft: 10,
    // alignSelf: 'center',
    fontSize: FONT_SIZE_MIN,
  },
  nameLessonField: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    // borderWidth: 1,
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
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
  nameLessonInputText: {
    marginLeft: 10,
    // alignSelf: 'center',
    fontSize: FONT_SIZE_MIN,
  },
  priceField: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // borderWidth: 1,
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
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
  },
  priceInputText: {
    marginLeft: 10,
    fontSize: FONT_SIZE_MIN,
    // alignSelf: 'center',
  },
});
