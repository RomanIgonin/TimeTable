import {StyleSheet} from 'react-native';
import {height} from '../../core/constants';

export const LoginAndSignUpStyle = StyleSheet.create({
  main: {
    flex: 1,
  },
  topPadding: {
    flex: 1,
  },
  authForm: {
    flex: 1,
  },
  bottomPadding: {
    flex: 1,
    alignItems: 'center',
  },
  question: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 5,
  },
  signUpLink: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    // backgroundColor: 'silver',
  },
  signUpText: {
    fontSize: 16,
    // fontWeight: 'bold',
    color: 'blue',
    textDecorationLine: 'underline',
  },
  bottom: {
    flex: 6,
  },
});
