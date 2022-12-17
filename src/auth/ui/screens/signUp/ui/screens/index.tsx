import {Pressable, View, Text} from 'react-native';
import {AuthForm} from '@src/auth/ui/components/authForm';
import auth from '@react-native-firebase/auth';
import React from 'react';
import {LoginAndSignUpStyle} from '@src/auth/styles/style';
import {SignUpType} from '@src/navigation/stackNavigator/types';
import {useAppDispatch} from '@src/hooks';
import {UserType} from '@src/core/store/globalTypes';
import {postUser} from '@src/users/store/action';
import authServices from '@src/auth/services/authServices';

export default function SignUp({navigation}: SignUpType) {
  const dispatch = useAppDispatch();

  const onPressLogin = () => navigation.navigate('Login');

  const onPressSignUp = async (email: string, password: string) => {
    await authServices.signUpAuthService(email, password);
    const authUser = await auth().currentUser;
    if (authUser) {
      console.log('signUp user: ' + authUser?.email);
      const newUser: UserType = {
        id: await auth().currentUser?.uid,
        email: email,
        password: password,
        firstName: '',
        lastName: '',
      };
      dispatch(postUser(newUser));
      navigation.navigate('HomeTabs');
    }
  };
  // const onPressSignUp = async (email: string, password: string) => {
  //   await authServices
  //     .signUpAuthService(email, password)
  //     .then(async () => {
  //       const newUser: UserType = {
  //         id: await auth().currentUser?.getIdToken(),
  //         email: email,
  //         password: password,
  //         firstName: '',
  //         lastName: '',
  //         lessons: [],
  //       };
  //       dispatch(postUserOnServer(newUser));
  //       dispatch(postCurrentUserOnServer(newUser));
  //       navigation.navigate('HomeTabs');
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };

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
