import {StyleSheet} from 'react-native';
import {height} from '../../core/constants';

export const LoginAndSignUpStyle = StyleSheet.create({
  main: {
    flex: 1,
  },
  topPadding: {
    flex: 8,
  },
  authForm: {
    flex: 10,
  },
  bottomPadding: {
    flex: 8,
    alignItems: 'center',
  },
  question: {
    flex: 1,
    backgroundColor: 'silver',
    justifyContent: 'center',
  },
  signUpLink: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    backgroundColor: 'silver',
  },
  signUpText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  bottom: {
    flex: 6,
  },
});
