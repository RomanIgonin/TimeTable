import {StyleSheet} from 'react-native';
import {BLUE} from '@src/core/constants';

export const ButtonAddLessonStyle = StyleSheet.create({
  AddLessonButtonField: {
    backgroundColor: BLUE,
    width: 145,
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
});
