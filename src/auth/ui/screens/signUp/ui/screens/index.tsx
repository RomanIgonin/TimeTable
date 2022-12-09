import {Pressable, View, Text} from 'react-native';
import {AuthForm} from '@src/auth/ui/components/authForm';
import auth, {firebase} from '@react-native-firebase/auth';
import React from 'react';
import {LoginAndSignUpStyle} from '@src/auth/styles/style';
import {SignUpType} from '@src/navigation/stackNavigator/types';
import {useAppDispatch} from '@src/hooks';
import {usersActions, UserType} from '@src/users/store';
import {
  deleteCurrentUserOnServer,
  postCurrentUserOnServer,
  postUserOnServer,
} from '@src/users/store/action';
import authServices from '@src/auth/services/authServices';

export default function SignUp({navigation}: SignUpType) {
  const dispatch = useAppDispatch();

  const onPressLogin = () => navigation.navigate('Login');

  const onPressSignUp = async (email: string, password: string) => {
    await authServices
      .signUpAuthService(email, password)
      .then(async () => {
        const newUser: UserType = {
          id: await auth().currentUser?.getIdToken(),
          email: email,
          password: password,
          firstName: '',
          lastName: '',
          lessons: undefined,
        };
        dispatch(postUserOnServer(newUser));
        dispatch(postCurrentUserOnServer(newUser));
        navigation.navigate('HomeTabs');
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <View style={LoginAndSignUpStyle.main}>
      <View style={LoginAndSignUpStyle.topPadding}></View>

      <View style={LoginAndSignUpStyle.authForm}>
        <AuthForm textInButton={'Sign Up'} onPressButton={onPressSignUp} />
      </View>

      <View style={LoginAndSignUpStyle.bottomPadding}>
        <View style={LoginAndSignUpStyle.question}>
          <Text>Already have an account?</Text>
        </View>
        <Pressable
          style={LoginAndSignUpStyle.signUpLink}
          onPress={onPressLogin}>
          <Text style={LoginAndSignUpStyle.signUpText}>Login</Text>
        </Pressable>
        <View style={LoginAndSignUpStyle.bottom}></View>
      </View>
    </View>
  );
}
