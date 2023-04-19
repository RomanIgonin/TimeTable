import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';
import { User } from '@src/modules/users/domain/interfaces/User';

class AuthServices {
  public async login(email: string, password: string) {
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

  public async signUp(email: string, password: string) {
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

  public async createNewUser(email: string, password: string) {
    const authUser = auth().currentUser;
    const newUser: User = {
      id: authUser?.uid,
      email: email,
      password: password,
      firstName: '',
      lastName: '',
      gender: '',
      phoneNumber: '-',
      profileImage: '',
    };
    return newUser;
  }

  public getCurrentUserUid() {
    return auth().currentUser?.uid;
  }
}

const authServices = new AuthServices();
export default authServices;
