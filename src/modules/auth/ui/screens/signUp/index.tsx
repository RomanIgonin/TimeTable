import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { AuthForm } from '@src/modules/auth/ui/components/authForm';
import auth from '@react-native-firebase/auth';
import authServices from '@src/modules/auth/services/authServices';
import * as Style from '@src/modules/auth/styles/style';
import { SignUp } from '@src/modules/navigation/types';
import { useAppDispatch } from '@src/hooks';
import { User } from '@src/store/globalInterface';
import { postUser } from '@src/modules/users/store/action';
import { useForm } from 'react-hook-form';

const DismissKeyboard = ({ children }: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function SignUp({ navigation }: SignUp) {
  const dispatch = useAppDispatch();
  const { reset } = useForm();
  const onPressLogin = () => {
    navigation.navigate('Login');
    reset();
  };

  const onPressSignUp = async (email: string, password: string) => {
    await authServices.signUpAuthService(email, password);
    const authUser = auth().currentUser;
    if (authUser) {
      console.log('signUp user: ' + authUser?.email);
      const newUser: User = {
        id: auth().currentUser?.uid,
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
      <Style.Main>
        <AuthForm
          textInButton={'Sign Up'}
          onPressButton={onPressSignUp}
          authType={'SignUp'}
        />

        <Style.QuestionWrapper>
          <Style.Question>Already have an account?</Style.Question>
        </Style.QuestionWrapper>

        <Style.LinkWrapper onPress={onPressLogin}>
          <Style.Link>Login</Style.Link>
        </Style.LinkWrapper>
      </Style.Main>
    </DismissKeyboard>
  );
}
