import React from 'react';
import * as Style from '@src/modules/form/formInput/styles';
import { Controller } from 'react-hook-form';
import { KeyboardTypeOptions } from 'react-native';

interface Props {
  name: string;
  control: any;
  value?: string;
  rules: object;
  keyboardType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean | undefined;
}

export default function FormInput(props: Props) {
  const { name, control, rules = {}, value, ...otherProps } = props;
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <Style.TextWrapper>
            <Style.Text>{name}: </Style.Text>
            {error && <Style.TextError>{error.message}</Style.TextError>}
          </Style.TextWrapper>
          <Style.TextInput
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
            keyboardAppearance={'dark'}
            returnKeyType={'done'}
            clearButtonMode={'while-editing'}
            {...otherProps}
          />
        </>
      )}
    />
  );
}
