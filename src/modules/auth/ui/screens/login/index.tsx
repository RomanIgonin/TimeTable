import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { AuthForm } from '@src/modules/auth/ui/components/authForm';
import auth from '@react-native-firebase/auth';
import authServices from '@src/modules/auth/domain/services/authServices';
import { useAppDispatch } from '@src/hooks';
import { useForm } from 'react-hook-form';
import { getUser } from '@src/modules/users/store/action';
import { getDates } from '@src/modules/lessons/store/action';
import * as S from '@src/modules/auth/ui/screens/styles/style';
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

  // TODO Не очищает инпуты. При этом в SignUp такой же reset() работает.
  const onPressSignUp = () => {
    reset();
    navigation.navigate('SignUp');
  };

  const onPressLogin = async (email: string, password: string) => {
    await authServices.login(email, password);
    const authUserId = authServices.getCurrentUserUid();
    dispatch(getUser(authUserId));
    dispatch(getDates(authUserId));
  };

  return (
    <DismissKeyboard>
      <S.Main>
        <AuthForm textInButton={'Login'} onPressButton={onPressLogin} />

        <S.QuestionWrapper>
          <S.Question>Not registered yet?</S.Question>
        </S.QuestionWrapper>

        <S.LinkWrapper onPress={onPressSignUp}>
          <S.Link>Sign up</S.Link>
        </S.LinkWrapper>
      </S.Main>
    </DismissKeyboard>
  );
}
