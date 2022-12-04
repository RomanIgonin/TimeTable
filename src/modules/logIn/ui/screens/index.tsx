import {Text, TextInput, View, Pressable} from 'react-native';
import {useState} from 'react';
import {LogInStyle} from './styles';
import {LoginType} from '../../../../navigation/types';

export default function Login({navigation}: LoginType) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onPressLogin = () => {
    navigation.navigate('Home');
  };
  const onPressSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={LogInStyle.main}>
      <View style={LogInStyle.topPadding}></View>

      <View style={LogInStyle.email}>
        <Text>Email</Text>
      </View>

      <TextInput
        value={email}
        onChangeText={setEmail}
        style={LogInStyle.inputEmail}
        keyboardAppearance={'dark'}
        selectionColor={'silver'}
        cursorColor={'black'}
        returnKeyType={'done'}
      />

      <View style={LogInStyle.password}>
        <Text>Password</Text>
      </View>

      <TextInput
        value={password}
        onChangeText={setPassword}
        style={LogInStyle.inputPassword}
        keyboardAppearance={'dark'}
        selectionColor={'silver'}
        returnKeyType={'done'}
      />

      <Pressable style={LogInStyle.logInButton} onPress={onPressLogin}>
        <Text>Login</Text>
      </Pressable>

      <Pressable style={LogInStyle.signUpButton} onPress={onPressSignUp}>
        <Text>Sign Up</Text>
      </Pressable>

      <View style={LogInStyle.bottomPadding}></View>
    </View>
  );
}
