import {Pressable, Text, View} from 'react-native';
// import {LoginType} from '../../../../../../navigation/types';
import {AuthForm} from '../../../../components/authForm';
// import {useAppDispatch} from '../../../../../../hooks';
// import {postUser} from '../../../../../../users/store/action';
import auth from '@react-native-firebase/auth';
import {LoginType} from '../../../../../../navigation/types';
import {
  AuthScreenStyle,
  LoginAndSignUpStyle,
} from '../../../../../styles/style';

export default function Login({navigation}: LoginType) {
  const onPressSignUp = () => navigation.navigate('SignUp');

  const authLogin = (email, password) => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log(email + ': sign in!');
        navigation.navigate('Home');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.error('That email address is already in use!');
        }
        if (error.code === 'auth/invalid-email') {
          console.error('That email address is invalid!');
        }
        console.error(error);
      });
  };

  return (
    <View style={LoginAndSignUpStyle.main}>
      <View style={LoginAndSignUpStyle.topPadding}></View>

      <View style={LoginAndSignUpStyle.authForm}>
        <AuthForm textInButton={'Login'} onPressButton={authLogin} />
      </View>

      <View style={LoginAndSignUpStyle.bottomPadding}>
        <View style={LoginAndSignUpStyle.question}>
          <Text>Not registered yet?</Text>
        </View>
        <Pressable
          style={LoginAndSignUpStyle.signUpLink}
          onPress={onPressSignUp}>
          <Text style={LoginAndSignUpStyle.signUpText}>Sign up</Text>
        </Pressable>
        <View style={LoginAndSignUpStyle.bottom}></View>
      </View>
    </View>
  );
}
