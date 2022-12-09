import {Pressable, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import {HomeType} from '@src/navigation/stackNavigator/types';
import auth, {FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useAppDispatch, useAppSelector} from '@src/hooks';
import {currentUserSelector} from '@src/users/store/selectors';
import {deleteCurrentUserOnServer} from '@src/users/store/action';
import HomeCalendar from '@src/modules/home/ui/components/calendar/ui/screens';

export default function Home({navigation}: HomeType) {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(currentUserSelector);

  useEffect(() => {
    return auth().onAuthStateChanged(userState => {
      setUser(userState);
      if (loading) setLoading(false);
    });
  }, []);

  const onPressSignOut = () => {
    dispatch(deleteCurrentUserOnServer(currentUser));
    auth()
      .signOut()
      .then(() => console.log('Пользоатель вышел'));
    navigation.navigate('Login');
  };

  if (loading) {
    return <Text>Loading user</Text>;
  } else if (user) {
    return (
      <View>
        <View>
          <HomeCalendar />
        </View>
        <Pressable onPress={onPressSignOut}>
          <Text>Sign out</Text>
        </Pressable>
      </View>
    );
  }
}
