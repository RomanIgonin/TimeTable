import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

class AuthServices {
  public async loginAuthService(email: string, password: string) {
    return await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log(email + ': sign in!');
      })
      .catch(error => {
        console.log('Error login: ' + error);
        Alert.alert('Invalid login or password');
      });
  }
  public async signUpAuthService(email: string, password: string) {
    return await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log(email + ' sign up');
      })
      .catch(error => {
        console.log('Error signUp: ' + error);
        Alert.alert('Invalid login or password');
      });
  }
}

const authServices = new AuthServices();
export default authServices;
