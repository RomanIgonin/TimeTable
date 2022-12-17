import {
  Keyboard,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {AuthForm} from '@src/auth/ui/components/authForm';
import {LoginType} from '@src/navigation/stackNavigator/types';
import {LoginAndSignUpStyle} from '@src/auth/styles/style';
import authServices from '@src/auth/services/authServices';
import {useAppDispatch} from '@src/hooks';
import auth from '@react-native-firebase/auth';
import {getUser} from '@src/users/store/action';
import {useEffect} from 'react';

const DismissKeyboard = ({children}: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function Login({navigation}: LoginType) {
  const dispatch = useAppDispatch();

  const onPressSignUp = () => {
    navigation.navigate('SignUp');
  };

  useEffect(() => {
    const currentUserId = auth().currentUser?.uid;
    if (currentUserId) {
      dispatch(getUser(currentUserId));
      navigation.navigate('HomeTabs');
    }
  }, []);

  const onPressLogin = async (email, password) => {
    // console.log(
    //   'authUser uid before login: ' + (await auth().currentUser?.uid),
    // );
    await authServices.loginAuthService(email, password);
    const authUser = await auth().currentUser;
    // console.log('authUser uid after login: ' + authUser?.uid);
    if (authUser?.uid) {
      // console.log('Login response OK');
      // Достаем юзера с сервера и пихаем в редакс через экстра редусер
      // console.log('login user id: ' + authUser.uid);
      dispatch(getUser(authUser.uid));
      navigation.navigate('HomeTabs');
    }
  };

  return (
    <DismissKeyboard>
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
    </DismissKeyboard>
  );
}
