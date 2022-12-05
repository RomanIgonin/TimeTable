import {Pressable, View, Text} from 'react-native';
import {AuthForm} from '../../../../components/authForm';
import auth from '@react-native-firebase/auth';
import React from 'react';
import {LoginAndSignUpStyle} from '../../../../../styles/style';
import {SignUpType} from '../../../../../../navigation/types';
import {useAppDispatch} from '../../../../../../hooks';
import {usersActions, UserType} from '../../../../../../users/store';
import {postUser} from '../../../../../../users/store/action';

export default function SignUp({navigation}: SignUpType) {
  const dispatch = useAppDispatch();

  const onPressLogin = () => navigation.navigate('Login');

  const authSignUp = (email: string, password: string) => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log(response);
        const newUser: UserType = {
          id: response.user.uid,
          email: response.user.email,
          password: password,
          firstName: undefined,
          lastName: undefined,
        };
        dispatch(usersActions.setCurrentUser(newUser));
        dispatch(postUser(newUser));
        console.log(email + ': login!');
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
        <AuthForm textInButton={'Sign Up'} onPressButton={authSignUp} />
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
