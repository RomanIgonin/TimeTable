import {Alert, FlatList, Pressable, Switch, Text, View} from 'react-native';
import {ProfileStyle} from '@src/modules/profile/profile/styles';
import auth from '@react-native-firebase/auth';
import {SettingsType} from '@src/navigation/stackNavigator/types';
import {FONT_SIZE_MID} from '@src/core/constants';
import {useState} from 'react';
import {useAppDispatch} from '@src/hooks';
import {deleteUser} from '@src/users/store/action';
import {SettingsStyle} from '@src/modules/settings/ui/styles';

export default function Settings({navigation}: SettingsType) {
  const [isEnabled, setIsEnabled] = useState<boolean>(false);

  const dispatch = useAppDispatch();

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
                console.log('Пользователь вышел' + '\n');
                navigation.navigate('Login');
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
            const currentUser = await auth().currentUser;
            if (currentUser) {
              currentUser.delete().then(() => {
                console.log('Пользователь удален с файрбейса');
                console.log('user to delete: ' + JSON.stringify(currentUser));
                dispatch(deleteUser(currentUser.uid));
                navigation.navigate('Login');
              });
            }
          },
        },
      ]);
    }
  };

  const settingsItems = [
    {title: 'Dark theme', key: '1'},
    {title: 'Sign out', key: '2'},
    {title: 'Delete account', key: '3'},
  ];

  const keyExtractor = (item: any) => item.key;
  const renderItem = ({item}: any) => {
    return (
      <Pressable
        onPress={() => onPressSetting(item)}
        style={ProfileStyle.infoElement}>
        <View style={ProfileStyle.infoElementTitle}>
          <Text style={ProfileStyle.infoElementTitleText}>{item.title}</Text>
        </View>
        {item.title === 'Dark theme' ? (
          <View style={{justifyContent: 'center', height: 5, paddingTop: 9}}>
            <Switch
              trackColor={{false: '#767577', true: '#74f85f'}}
              thumbColor={isEnabled ? 'rgb(252,252,252)' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={() => setIsEnabled(!isEnabled)}
              value={isEnabled}
            />
          </View>
        ) : (
          <View></View>
        )}
      </Pressable>
    );
  };

  return (
    <View style={SettingsStyle.main}>
      <View style={SettingsStyle.textField}>
        <Text style={SettingsStyle.text}>SETTINGS</Text>
      </View>
      <View style={SettingsStyle.mainMiddle}>
        <FlatList
          data={settingsItems}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </View>
    </View>
  );
}
