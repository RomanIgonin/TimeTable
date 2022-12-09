import {StyleSheet} from 'react-native';

export const AddLessonsStyle = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },
  timeField: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    marginRight: 10,
  },
  timeText: {
    flex: 1,
  },
  timeInput: {
    flex: 2,
    alignSelf: 'stretch',
    borderWidth: 2,
    margin: 5,
  },
  nameLessonField: {
    flex: 2,
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    marginRight: 10,
  },
  nameLessonsText: {
    flex: 1,
  },
  nameLessonInput: {
    flex: 2,
    alignSelf: 'stretch',
    borderWidth: 2,
    margin: 5,
  },
  priceField: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 1,
    marginRight: 10,
  },
  priceText: {
    flex: 1,
  },
  priceInput: {
    flex: 2,
    alignSelf: 'stretch',
    borderWidth: 2,
    margin: 5,
  },
});
