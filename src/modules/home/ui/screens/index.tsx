import {Pressable, Text, View} from 'react-native';
import {useEffect, useState} from 'react';
import {HomeType} from '@src/navigation/types';

import auth, {firebase, FirebaseAuthTypes} from '@react-native-firebase/auth';
import {useAppDispatch, useAppSelector} from '@src/hooks';
import {currentUserSelector} from '@src/users/store/selectors';
import {deleteCurrentUserOnServer} from '@src/users/store/action';

export default function Home({navigation}: HomeType) {
  // Установите состояние инициализации, пока Firebase подключается
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  // const isAuth = useAppSelector(currentUserSelector);
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(currentUserSelector);
  if (currentUser !== undefined) {
    const idCurrentUser = currentUser.id;
  }

  function onAuthStateChanged(userState) {
    setUser(userState);
    if (loading) setLoading(false);
    console.log('state changed in UseEffect in Home');
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (loading) return null;

  const onPressSignOut = () => {
    console.log('Нажали выйти');
    dispatch(deleteCurrentUserOnServer(currentUser));
    auth()
      .signOut()
      .then(() => console.log('Пользоатель вышел'));
  };

  return user ? (
    <View>
      <Text>Home</Text>
      <Pressable onPress={onPressSignOut}>
        <Text>Sign out</Text>
      </Pressable>
    </View>
  ) : (
    navigation.navigate('Login')
  );
}
