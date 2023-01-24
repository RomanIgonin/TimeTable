import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { AuthForm } from '@src/modules/auth/ui/components/authForm';
import { LoginType } from '@src/modules/navigation/types';
import auth from '@react-native-firebase/auth';
import authServices from '@src/modules/auth/services/authServices';
import { useAppDispatch } from '@src/hooks';
import { getUser } from '@src/modules/users/store/action';
import { getDates } from '@src/modules/lessons/store/action';
import React, { useEffect } from 'react';
import * as Style from '@src/modules/auth/styles/style';
import { useForm } from 'react-hook-form';

const DismissKeyboard = ({ children }: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function Login({ navigation }: LoginType) {
  const dispatch = useAppDispatch();
  const { reset } = useForm();
  const onPressSignUp = () => {
    navigation.navigate('SignUp');
    reset();
  };

  const userIsVerified = (currentUserId: string) => {
    dispatch(getUser(currentUserId));
    dispatch(getDates(currentUserId));
    navigation.navigate('HomeTabs');
  };

  const currentUserId = auth().currentUser?.uid;
  // Проверку авторизации и переход на HomeTabs проводим после рендера
  useEffect(() => {
    if (currentUserId) {
      userIsVerified(currentUserId);
    }
  }, []);

  const onPressLogin = async (email: string, password: string) => {
    await authServices.loginAuthService(email, password);
    const authUser = auth().currentUser?.uid;
    if (authUser) {
      userIsVerified(authUser);
    }
  };

  if (!currentUserId) {
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
}
