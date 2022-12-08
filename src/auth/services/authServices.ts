import auth, {firebase} from '@react-native-firebase/auth';
import {usersActions, UserType} from '@src/users/store';
import {postUser} from '@src/users/store/action';
import {useAppDispatch} from '@src/hooks';

class AuthServices {
  public async loginAuthService(email, password) {
    return await auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log(email + ': sign in!');
      })
      .catch(error => {
        console.error(error);
      });
  }
  public async signUpAuthService(email, password) {
    return await auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log(email + ' sign up');
      })
      .catch(error => {
        console.error(error);
      });
  }
}

const authServices = new AuthServices();
export default authServices;
