import {
  Keyboard,
  Pressable,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {AuthForm} from '@src/modules/auth/ui/components/authForm';
import {LoginType} from '@src/modules/navigation/stackNavigator/types';
import {LoginAndSignUpStyle} from '@src/modules/auth/styles/style';
import authServices from '@src/modules/auth/services/authServices';
import {useAppDispatch} from '@src/hooks';
import auth from '@react-native-firebase/auth';
import {getUser} from '@src/modules/users/store/action';
import {getDates} from '@src/modules/lessons/store/action';
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
      dispatch(getDates(currentUserId));

      navigation.navigate('HomeTabs');
    }
  }, []);

  const onPressLogin = async (email: string, password: string) => {
    await authServices.loginAuthService(email, password);
    const authUser = await auth().currentUser;
    if (authUser?.uid) {
      // Достаем юзера с сервера и пихаем в редакс через экстра редусер
      dispatch(getUser(authUser.uid));
      dispatch(getDates(authUser.uid));
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
