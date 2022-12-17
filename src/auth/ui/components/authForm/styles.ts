import {StyleSheet} from 'react-native';
import {
  BLUE,
  BORDER_RADIUS_BTN,
  FONT_SIZE_MID,
  FONT_SIZE_MIN,
} from '@src/core/constants';

export const AuthFormStyle = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  email: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingBottom: '2%',
    paddingLeft: '7%',
  },
  emailText: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE_MID,
  },
  inputEmail: {
    flex: 3,
    paddingLeft: '7%',
    paddingRight: '2%',
    borderWidth: 1,
    borderRadius: BORDER_RADIUS_BTN,
    fontSize: FONT_SIZE_MIN,
  },
  password: {
    flex: 2,
    justifyContent: 'flex-end',
    paddingBottom: '2%',
    paddingLeft: '7%',
  },
  passwordText: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE_MID,
  },
  inputPassword: {
    flex: 3,
    justifyContent: 'center',
    borderWidth: 1,
    paddingLeft: '7%',
    borderRadius: BORDER_RADIUS_BTN,
    fontSize: FONT_SIZE_MIN,
  },
  buttonField: {
    flex: 5,
    alignItems: 'center',
  },
  Button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '50%',
    backgroundColor: BLUE,
    marginTop: 15,
    borderRadius: BORDER_RADIUS_BTN,
  },
  ButtonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: FONT_SIZE_MID,
  },
});
