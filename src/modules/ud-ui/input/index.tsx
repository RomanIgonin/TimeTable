import React from 'react';
import * as S from '@src/modules/ud-ui/input/styles';
import { Controller } from 'react-hook-form';
import { KeyboardTypeOptions } from 'react-native';

interface Props {
  name: string;
  control: any;
  value?: string;
  // rules: object; // Использовал до применения yup
  keyboardType?: KeyboardTypeOptions | undefined;
  secureTextEntry?: boolean | undefined;
}

export default function UDInput(props: Props) {
  const { name, control, value, ...otherProps } = props;

  return (
    <Controller
      control={control}
      name={name}
      // rules={rules} // Использовал до применения yup
      render={({
        field: { value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <>
          <S.TextWrapper>
            <S.TextStyled>{name}</S.TextStyled>
            {error && <S.TextError>{error.message}</S.TextError>}
          </S.TextWrapper>
          <S.TextInputStyled
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
