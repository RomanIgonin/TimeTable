import {Text, TextInput, View} from 'react-native';
import {useState} from 'react';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View>
      <Text>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        keyboardAppearance={'dark'}
        selectionColor={'silver'}
        returnKeyType={'done'}
      />
      <Text>Password</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        keyboardAppearance={'dark'}
        selectionColor={'silver'}
        returnKeyType={'done'}
      />
    </View>
  );
}
