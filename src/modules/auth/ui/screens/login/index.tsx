import React, { useEffect } from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { AuthForm } from '@src/modules/auth/ui/components/authForm';
import auth from '@react-native-firebase/auth';
import authServices from '@src/modules/auth/services/authServices';
import { useAppDispatch } from '@src/hooks';
import { useForm } from 'react-hook-form';
import { getUser } from '@src/modules/auth/store/action';
import { getDates } from '@src/modules/lessons/store/action';
import * as Style from '@src/modules/auth/ui/screens/styles/style';
import { useNavigation } from '@react-navigation/native';

const DismissKeyboard = ({ children }: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function Login() {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const { reset } = useForm();

  const onPressSignUp = () => {
    navigation.navigate('SignUp');
    reset();
  };

  const onPressLogin = async (email: string, password: string) => {
    await authServices.loginAuthService(email, password);
    const authUserId = auth().currentUser?.uid;
    if (authUserId) {
      dispatch(getUser(authUserId));
      dispatch(getDates(authUserId));
    }
  };

  return (
    <DismissKeyboard>
      <Style.Main>
        <AuthForm
          textInButton={'Login'}
          onPressButton={onPressLogin}
          authType={'Login'}
        />

        <Style.QuestionWrapper>
          <Style.Question>Not registered yet?</Style.Question>
        </Style.QuestionWrapper>

        <Style.LinkWrapper onPress={onPressSignUp}>
          <Style.Link>Sign up</Style.Link>
        </Style.LinkWrapper>
      </Style.Main>
    </DismissKeyboard>
  );
}
