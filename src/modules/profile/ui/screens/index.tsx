import {Text, View} from 'react-native';
import {useAppSelector} from '@src/hooks';
import {currentUserSelector} from '@src/users/store/selectors';

export default function Profile() {
  const user = useAppSelector(currentUserSelector);

  if (user)
    return (
      <View>
        <Text>Profile</Text>
        <Text>{user.email}</Text>
      </View>
    );
}
