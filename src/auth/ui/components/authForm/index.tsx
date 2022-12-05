import React, {useState} from 'react';
import {AuthFormStyle} from './styles';
import {Pressable, Text, TextInput, View} from 'react-native';

interface Props {
  textInButton: string;
  onPressButton: (email: string, password: string) => void;
}

export const AuthForm: React.FC<Props> = ({textInButton, onPressButton}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={AuthFormStyle.main}>
      <View style={AuthFormStyle.email}>
        <Text>Email</Text>
      </View>

      <TextInput
        value={email}
        onChangeText={setEmail}
        style={AuthFormStyle.inputEmail}
        keyboardAppearance={'dark'}
        selectionColor={'silver'}
        cursorColor={'black'}
        returnKeyType={'done'}
      />

      <View style={AuthFormStyle.password}>
        <Text>Password</Text>
      </View>

      <TextInput
        value={password}
        onChangeText={setPassword}
        style={AuthFormStyle.inputPassword}
        keyboardAppearance={'dark'}
        selectionColor={'silver'}
        returnKeyType={'done'}
      />

      <Pressable
        style={AuthFormStyle.Button}
        onPress={() => onPressButton(email, password)}>
        <Text>{textInButton}</Text>
      </Pressable>
    </View>
  );
};
