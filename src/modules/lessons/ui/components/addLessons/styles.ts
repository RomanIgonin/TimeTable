import {StyleSheet} from 'react-native';
import {BLUE, GRAY} from '@src/core/constants';

export const AddLessonsStyle = StyleSheet.create({
  main: {
    flex: 1,
  },
  mainInputs: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: GRAY,
    borderRadius: 10,
    margin: 10,
    padding: 10,
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
  timeText: {
    flex: 2,
    justifyContent: 'center',
  },
  timeInput: {
    flex: 3,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  timeInputText: {
    marginLeft: 10,
    // alignSelf: 'center',
    fontSize: 20,
  },
  nameLessonField: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    // borderWidth: 1,
  },
  nameLessonsText: {
    flex: 2,
    justifyContent: 'center',
  },
  nameLessonInput: {
    flex: 3,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  nameLessonInputText: {
    marginLeft: 10,
    // alignSelf: 'center',
    fontSize: 20,
  },
  priceField: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // borderWidth: 1,
    marginLeft: 15,
  },
  priceText: {
    flex: 2,
    justifyContent: 'center',
  },
  priceInput: {
    flex: 3,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 10,
  },
  priceInputText: {
    marginLeft: 10,
    fontSize: 20,
    // alignSelf: 'center',
  },
});
