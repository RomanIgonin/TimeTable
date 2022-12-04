import {StyleSheet} from 'react-native';

export const LogInStyle = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    margin: 30,
    backgroundColor: 'silver',
  },
  topPadding: {
    flex: 2,
  },
  email: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: '10%',
    backgroundColor: 'grey',
  },
  inputEmail: {
    flex: 1,
    paddingLeft: '7%',
    borderWidth: 2,
    borderRadius: 15,
  },
  password: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: '10%',
    backgroundColor: 'grey',
  },
  inputPassword: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 2,
    paddingLeft: '7%',
    borderRadius: 15,
  },
  logInButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginVertical: 10,
    borderRadius: 10,
  },
  signUpButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginHorizontal: '35%',
  },
  bottomPadding: {
    flex: 2,
  },
});
