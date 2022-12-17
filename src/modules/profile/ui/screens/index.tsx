import {Pressable, Text, View} from 'react-native';
import {useAppSelector} from '@src/hooks';
import {currentUserSelector} from '@src/users/store/selectors';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {ProfileStyle} from '@src/modules/profile/ui/screens/styles';

// import {CameraRoll} from '@react-native-camera-roll/camera-roll';

export default function Profile() {
  const currentUser = useAppSelector(currentUserSelector);
  const navigation = useNavigation();

  const onPressSignOut = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('Пользователь вышел' + '\n');
        navigation.navigate('Login');
      });
  };

  const name =
    currentUser?.firstName && currentUser?.lastName
      ? currentUser?.firstName + ' ' + currentUser?.lastName
      : currentUser?.email;

  const Image = () => {
    if (currentUser?.profileImage) {
      // return <Image source={require('src/assets/icons/settings.png')}
    }
    return (
      <View style={ProfileStyle.DownloadImageField}>
        <Text style={ProfileStyle.DownloadImageText}>Download</Text>
        <Text style={ProfileStyle.DownloadImageText}>image</Text>
      </View>
    );
  };

  return (
    <View style={ProfileStyle.main}>
      <View style={ProfileStyle.mainTop}>
        <Text style={ProfileStyle.TitleText}>Profile</Text>
      </View>

      <View style={ProfileStyle.mainMiddle}>
        <View style={ProfileStyle.ImageField}>
          <View style={ProfileStyle.Image}>
            <Pressable>
              <Image />
            </Pressable>
          </View>
          <View style={ProfileStyle.NameField}>
            <Text style={ProfileStyle.NameText}>{name}</Text>
          </View>
        </View>
        <View style={ProfileStyle.InfoField}></View>
      </View>

      <View style={ProfileStyle.mainBottom}>
        <Pressable onPress={onPressSignOut} style={ProfileStyle.SignOut}>
          <Text>Sign out</Text>
        </Pressable>
      </View>
    </View>
  );
}
