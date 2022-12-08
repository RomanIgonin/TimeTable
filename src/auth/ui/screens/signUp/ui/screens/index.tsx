import {Pressable, View, Text} from 'react-native';
import {AuthForm} from '@src/auth/ui/components/authForm';
import auth, {firebase} from '@react-native-firebase/auth';
import React from 'react';
import {LoginAndSignUpStyle} from '@src/auth/styles/style';
import {SignUpType} from '@src/navigation/types';
import {useAppDispatch} from '@src/hooks';
import {usersActions, UserType} from '@src/users/store';
import {
  postCurrentUserOnServer,
  postUserOnServer,
} from '@src/users/store/action';
import authServices from '@src/auth/services/authServices';

export default function SignUp({navigation}: SignUpType) {
  const dispatch = useAppDispatch();

  const onPressLogin = () => navigation.navigate('Login');

  const onPressSignUp = async (email: string, password: string) => {
    await authServices.signUpAuthService(email, password);
    const user = auth().currentUser;
    const idToken = await user?.getIdToken();
    const newUser: UserType = {
      id: idToken,
      email: user?.email,
      password: password,
      firstName: '',
      lastName: '',
    };
    dispatch(postUserOnServer(newUser));
    dispatch(usersActions.setNewUser(newUser));
    dispatch(postCurrentUserOnServer(newUser));
    navigation.navigate('Home');
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
