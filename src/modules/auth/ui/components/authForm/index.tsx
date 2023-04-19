import React from 'react';
import UDInput from '@src/modules/ud-ui/input';
import * as S from '@src/modules/auth/ui/components/authForm/styles';
import UDButton from '@src/modules/ud-ui/button';
import { FieldValues, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AuthSchema } from '@src/modules/auth/ui/components/authForm/authScheme';

interface Props {
  textInButton: string;
  onPressButton: (email: string, password: string) => void;
}

export const AuthForm = (props: Props) => {
  const { handleSubmit, control, reset } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(AuthSchema),
  });
  const { textInButton, onPressButton } = props;

  const onPressAuth = (data: FieldValues) => {
    onPressButton(data.email, data.password);
    reset();
  };

  return (
    <S.Main>
      <UDInput
        name="email"
        control={control}
        keyboardType={'email-address'}
        isAuth={true}
      />
      <UDInput
        name="password"
        control={control}
        secureTextEntry={true}
        isAuth={true}
      />
      <S.UDButtonWrapper>
        <UDButton label={textInButton} onPress={handleSubmit(onPressAuth)} />
      </S.UDButtonWrapper>
    </S.Main>
  );
};
