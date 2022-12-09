import {Pressable, Text, View} from 'react-native';
// import {LoginType} from 'navigation/types';
import {AuthForm} from '@src/auth/ui/components/authForm';
// import {useAppDispatch} from '../../../../../../hooks';
// import {postUser} from '../../../../../../users/store/action';
import {LoginType} from '@src/navigation/stackNavigator/types';
import {LoginAndSignUpStyle} from '@src/auth/styles/style';
import authServices from '@src/auth/services/authServices';
import {usersActions, UserType} from '@src/users/store';
import {useAppDispatch, useAppSelector} from '@src/hooks';
import auth, {firebase} from '@react-native-firebase/auth';
import {
  deleteCurrentUserOnServer,
  postCurrentUserOnServer,
} from '@src/users/store/action';
import {useNavigation} from '@react-navigation/native';
import {
  currentUserLessonsSelector,
  currentUserSelector,
  usersSelector,
} from '@src/users/store/selectors';

export default function Login({navigation}: LoginType) {
  const isAuth = auth().currentUser ? true : false;
  const dispatch = useAppDispatch();

  const goHomeTabs = () => navigation.navigate('HomeTabs');

  if (isAuth) goHomeTabs();

  const onPressSignUp = () => {
    navigation.navigate('SignUp');
  };

  const users = useAppSelector(usersSelector);

  const onPressLogin = async (email, password) => {
    await authServices
      .loginAuthService(email, password)
      .then(async () => {
        const user = users.find(item => item.email === email);
        const idToken = await auth().currentUser?.getIdToken();
        const currentUser: UserType = {
          id: idToken,
          email: email,
          password: password,
          firstName: '',
          lastName: '',
          lessons: user?.lessons,
        };
        dispatch(postCurrentUserOnServer(currentUser));
        goHomeTabs();
      })
      .catch(error => {
        console.log(error);
      });
  };

  if (!isAuth)
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
