import React from 'react';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { AuthForm } from '@src/modules/auth/ui/components/authForm';
import auth from '@react-native-firebase/auth';
import authServices from '@src/modules/auth/services/authServices';
import * as Style from '@src/modules/auth/ui/screens/styles/style';
import { useAppDispatch } from '@src/hooks';
import { User } from '@src/store/globalInterface';
import { postUser } from '@src/modules/users/store/action';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';

// Проверить работает ли без нее скрытие клавиатуры
const DismissKeyboard = ({ children }: any) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function SignUp() {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const { reset } = useForm();
  const onPressLogin = () => {
    navigation.navigate('Login');
    reset(); // Не очищает инпуты в Login screen
  };

  const onPressSignUp = async (email: string, password: string) => {
    await authServices.signUpAuthService(email, password);
    const authUser = auth().currentUser;
    if (authUser) {
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
    }
  };

  return (
    <DismissKeyboard>
      <Style.Main>
        <AuthForm textInButton={'Sign Up'} onPressButton={onPressSignUp} />

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
