import React from 'react';
import FormInput from '@src/modules/form/formInput';
import * as Style from '@src/modules/auth/ui/components/authForm/styles';
import FormButton from '@src/modules/form/formButton';
import { FieldValues, useForm } from 'react-hook-form';
import { EMAIL_REGEX } from '@src/modules/core/constants';

interface Props {
  textInButton: string;
  onPressButton: (email: string, password: string) => void;
  authType: string;
}

export const AuthForm = (props: Props) => {
  const { handleSubmit, control, reset } = useForm();
  const { textInButton, onPressButton, authType } = props;

  const onPressAuth = (data: FieldValues) => {
    onPressButton(data.email, data.password);
    reset();
  };

  return (
    <Style.Main>
      <FormInput
        name="email"
        control={control}
        rules={{
          required: 'required',
          pattern: { value: EMAIL_REGEX, message: 'email is invalid' },
        }}
        keyboardType={'email-address'}
      />
      <FormInput
        name="password"
        control={control}
        rules={{
          required: 'required',
          minLength: {
            value: authType == 'SignUp' ? 5 : 0,
            message: 'minimum 5 characters',
          },
        }}
        secureTextEntry={true}
      />
      <Style.FormButtonWrapper>
        <FormButton label={textInButton} onPress={handleSubmit(onPressAuth)} />
      </Style.FormButtonWrapper>
    </Style.Main>
  );
};

// const { textInButton, onPressButton } = props;
// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
//
// const onPressAuth = () => {
//   onPressButton(email, password);
//   setEmail('');
//   setPassword('');
// };
//
// return (
//   <Style.Main>
//     <Style.Text>Email:</Style.Text>
//     <FormInput
//       value={email}
//       onChangeText={setEmail}
//       keyboardType={'email-address'}
//     />
//     <Style.Text>Password:</Style.Text>
//     <FormInput
//       value={password}
//       onChangeText={setPassword}
//       secureTextEntry={true}
//     />
//     <Style.FormButtonWrapper>
//       <FormButton label={textInButton} onPress={onPressAuth} />
//     </Style.FormButtonWrapper>
//   </Style.Main>
// );
// };
