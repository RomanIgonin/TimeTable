import auth, {firebase} from '@react-native-firebase/auth';
import {usersActions, UserType} from '@src/users/store';
import {postUser} from '@src/users/store/action';
import {useAppDispatch} from '@src/hooks';
import {Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';

class AuthServices {
  public async loginAuthService(email, password) {
    return await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // console.log(email + ': sign in!');
        // console.log(response.user);
        // return 'OK';
      })
      .catch(error => {
        console.log('Error login: ' + error);
        Alert.alert('Invalid login or password');
        // return 'ERROR';
      });
  }
  public async signUpAuthService(email, password) {
    return await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        // console.log(email + ' sign up');
      })
      .catch(error => {
        console.log('Error signUp: ' + error);
        Alert.alert('Invalid login or password');
      });
  }
}

const authServices = new AuthServices();
export default authServices;
