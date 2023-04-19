import React from 'react';
import UDInput from '@src/modules/ud-ui/input';
import * as S from '@src/modules/auth/ui/components/authForm/styles';
import UDButton from '@src/modules/ud-ui/button';
import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
  textInButton: string;
  onPressButton: (email: string, password: string) => void;
}

yup.setLocale({
  mixed: {
    default: 'is required field',
  },
  string: {
    min: 'min ${min} symbols',
    max: 'max ${min} symbols',
  },
});

const AuthSchema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
});

export const AuthForm = (props: Props) => {
  const {
    handleSubmit,
    control,
    // TODO Через нее передать свои errors в UDInput?
    // formState: { errors }, // содержит информацию обо всем состоянии формы
    reset,
  } = useForm({
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
