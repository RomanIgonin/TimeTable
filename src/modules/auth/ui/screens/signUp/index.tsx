import {
  Pressable,
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {AuthForm} from '@src/modules/auth/ui/components/authForm';
import auth from '@react-native-firebase/auth';
import React from 'react';
import {LoginAndSignUpStyle} from '@src/modules/auth/styles/style';
import {SignUpType} from '@src/modules/navigation/types';
import {useAppDispatch} from '@src/hooks';
import {UserType} from '@src/store/globalTypes';
import {postUser} from '@src/modules/users/store/action';
import authServices from '@src/modules/auth/services/authServices';

const DismissKeyboard = ({children}: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

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
        gender: '',
        phoneNumber: '-',
        profileImage: '',
      };
      dispatch(postUser(newUser));
      navigation.navigate('HomeTabs');
    }
  };

  return (
    <DismissKeyboard>
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
    </DismissKeyboard>
  );
}
