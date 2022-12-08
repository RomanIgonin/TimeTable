import {Pressable, Text, View} from 'react-native';
// import {LoginType} from 'navigation/types';
import {AuthForm} from '@src/auth/ui/components/authForm';
// import {useAppDispatch} from '../../../../../../hooks';
// import {postUser} from '../../../../../../users/store/action';
import {LoginType} from '@src/navigation/types';
import {LoginAndSignUpStyle} from '@src/auth/styles/style';
import authServices from '@src/auth/services/authServices';
import {usersActions, UserType} from '@src/users/store';
import {useAppDispatch} from '@src/hooks';
import auth, {firebase} from '@react-native-firebase/auth';
import {postCurrentUserOnServer} from '@src/users/store/action';

export default function Login({navigation}: LoginType) {
  const dispatch = useAppDispatch();
  const onPressSignUp = () => navigation.navigate('SignUp');

  const onPressLogin = async (email, password) => {
    await authServices.loginAuthService(email, password);
    const user = auth().currentUser;
    const idToken = await user?.getIdToken();
    const currentUser: UserType = {
      id: idToken,
      email: user?.email,
      password: password,
      firstName: '',
      lastName: '',
    };
    // console.log('CurrentUser: ' + currentUser.token);
    dispatch(postCurrentUserOnServer(currentUser));
    navigation.navigate('Home');
  };

  return (
    <View style={LoginAndSignUpStyle.main}>
      <View style={LoginAndSignUpStyle.topPadding}></View>

      <View style={LoginAndSignUpStyle.authForm}>
        <AuthForm textInButton={'Login'} onPressButton={onPressLogin} />
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
