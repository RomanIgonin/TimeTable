import { Alert, FlatList, Switch } from 'react-native';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import { useAppDispatch } from '@src/hooks';
import { deleteUser } from '@src/modules/users/store/action';
import { usersActions } from '@src/modules/users/store';
import { lessonsActions } from '@src/modules/lessons/store';
import * as S from '@src/modules/settings/ui/styles';
import { BLUE } from '@src/constants';

export default function Settings() {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  // TODO объединить и сократить код
  const onPressSetting = (item: any) => {
    if (item.title === 'Sign out') {
      Alert.alert('Sign out?', '', [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            auth()
              .signOut()
              .then(() => {
                dispatch(usersActions.userSignOut(undefined));
                dispatch(lessonsActions.removeDates([]));
              });
          },
        },
      ]);
    } else if (item.title === 'Delete account') {
      Alert.alert('Delete account?', '', [
        {
          text: 'Cancel',
          onPress: () => {},
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            const currentUser = auth().currentUser;
            currentUser?.delete().then(() => {
              dispatch(deleteUser(currentUser.uid));
              // Даты принадлежащие данному юзеру удаляются сами, как?
              // dispatch(deleteAllDatesForUserId(currentUser.uid));
              dispatch(usersActions.userSignOut(undefined));
            });
          },
        },
      ]);
    }
  };

  const settingsItems = [
    { title: 'Dark index', key: '1' },
    { title: 'Sign out', key: '2' },
    { title: 'Delete account', key: '3' },
  ];

  const keyExtractor = (item: any) => item.key;
  const renderItem = ({ item }: any) => {
    return (
      <S.ItemWrapper onPress={() => onPressSetting(item)}>
        <S.ItemTitle>{item.title}</S.ItemTitle>
        {item.title === 'Dark index' && (
          <S.DarkModeSwitcher>
            <Switch
              trackColor={{ false: '#767577', true: BLUE }}
              thumbColor={isEnabled ? 'rgb(252,252,252)' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setIsEnabled(!isEnabled)}
              value={isEnabled}
            />
          </S.DarkModeSwitcher>
        )}
      </S.ItemWrapper>
    );
  };

  return (
    <S.Container>
      <S.Header>SETTINGS</S.Header>
      <S.ListWrapper>
        <FlatList
          data={settingsItems}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </S.ListWrapper>
    </S.Container>
  );
}
