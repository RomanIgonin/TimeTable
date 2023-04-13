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

// Не могу понять как передать свои errors в UDInput
yup.setLocale({
  mixed: {
    default: 'is required field',
  },
  string: {
    min: 'min ${min} symbols',
    max: 'max ${min} symbols',
  },
});

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).max(32).required(),
});

export const AuthForm = (props: Props) => {
  const {
    handleSubmit, // получит данные формы, если проверка прошла успешно
    control, // содержит методы для регистрации компонентов
    // Через нее передать свои errors в UDInput?
    // formState: { errors }, // содержит информацию обо всем состоянии формы
    reset,
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });
  const { textInButton, onPressButton } = props;

  const onPressAuth = (data: FieldValues) => {
    onPressButton(data.email, data.password);
    reset();
  };

  return (
    <S.Main>
      <UDInput name="email" control={control} keyboardType={'email-address'} />
      <UDInput name="password" control={control} secureTextEntry={true} />
      <S.UDButtonWrapper>
        <UDButton label={textInButton} onPress={handleSubmit(onPressAuth)} />
      </S.UDButtonWrapper>
    </S.Main>
  );
};
