import {StyleSheet} from 'react-native';
import {BLUE} from '@src/core/constants';

export const LessonsListStyle = StyleSheet.create({
  main: {
    flex: 1,
  },
  lessonField: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    backgroundColor: BLUE,
  },
  time: {
    flex: 1,
    alignItems: 'center',
  },
  language: {
    flex: 2,
    alignItems: 'center',
  },
  price: {
    flex: 1,
    alignItems: 'center',
  },
  lessonTextTime: {
    fontSize: 20,
    color: 'white',
  },
  lessonTextLanguage: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  lessonTextPrice: {
    fontSize: 20,
    color: 'white',
  },
});
