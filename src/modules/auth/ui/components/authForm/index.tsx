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

  const onPress = (email, password) => {
    onPressButton(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <View style={AuthFormStyle.main}>
      <View style={AuthFormStyle.email}>
        <Text style={AuthFormStyle.emailText}>Email:</Text>
      </View>

      <TextInput
        value={email}
        onChangeText={setEmail}
        style={AuthFormStyle.inputEmail}
        keyboardAppearance={'dark'}
        keyboardType={'email-address'}
        returnKeyType={'done'}
        clearButtonMode={'while-editing'}
      />

      <View style={AuthFormStyle.password}>
        <Text style={AuthFormStyle.passwordText}>Password:</Text>
      </View>

      <TextInput
        value={password}
        onChangeText={setPassword}
        style={AuthFormStyle.inputPassword}
        keyboardAppearance={'dark'}
        returnKeyType={'done'}
        secureTextEntry={true}
        clearButtonMode={'while-editing'}
      />

      <View style={AuthFormStyle.buttonField}>
        <Pressable
          style={AuthFormStyle.Button}
          onPress={() => onPress(email, password)}>
          <Text style={AuthFormStyle.ButtonText}>{textInButton}</Text>
        </Pressable>
      </View>
    </View>
  );
};
