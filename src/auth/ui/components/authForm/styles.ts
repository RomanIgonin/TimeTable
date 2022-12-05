import {StyleSheet} from 'react-native';

export const AuthFormStyle = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    marginHorizontal: 30,
    backgroundColor: 'silver',
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
  Button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    marginVertical: 10,
    borderRadius: 10,
  },
});
