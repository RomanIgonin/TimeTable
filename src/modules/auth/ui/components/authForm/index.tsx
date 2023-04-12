import React from 'react';
import FormInput from '@src/modules/ud-ui/input';
import * as S from '@src/modules/auth/ui/components/authForm/styles';
import FormButton from '@src/modules/ud-ui/button';
import { FieldValues, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface Props {
  textInButton: string;
  onPressButton: (email: string, password: string) => void;
}

// Не могу понять как передать свои errors в FormInput
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
    // Через нее передать свои errors в FormInput?
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
      <FormInput
        name="email"
        control={control}
        keyboardType={'email-address'}
      />
      <FormInput name="password" control={control} secureTextEntry={true} />
      <S.FormButtonWrapper>
        <FormButton label={textInButton} onPress={handleSubmit(onPressAuth)} />
      </S.FormButtonWrapper>
    </S.Main>
  );
};
