import {FlatList, Image, Pressable, Text, View} from 'react-native';
import {useAppSelector} from '@src/hooks';
import {currentUserSelector} from '@src/users/store/selectors';
import {useNavigation} from '@react-navigation/native';
import {ProfileStyle} from '@src/modules/profile/screens/profile/styles';

export default function Profile() {
  const currentUser = useAppSelector(currentUserSelector);
  const navigation = useNavigation();

  const name =
    currentUser?.firstName && currentUser?.lastName
      ? currentUser?.firstName + ' ' + currentUser?.lastName
      : 'No name';

  const onPressEdit = () => {
    navigation.navigate('EditProfile');
  };
  const imageResponse = currentUser?.profileImage;
  const uri = imageResponse.assets && imageResponse.assets[0].uri;

  const ProfileImage = () => {
    return imageResponse ? (
      <Image style={ProfileStyle.imageProfile} source={{uri}} />
    ) : (
      <Image
        style={ProfileStyle.noImageProfile}
        source={require('@src/assets/icons/profileImageUndefined.png')}
      />
    );
  };

  const profileInfo = [
    {title: 'Phone number:', body: currentUser?.phoneNumber, key: '1'},
    {title: 'Gender:', body: currentUser?.gender, key: '2'},
  ];

  const keyExtractor = (item: any) => item.key;
  const renderItem = ({item}: any) => {
    return (
      <View style={ProfileStyle.infoElement}>
        <View style={ProfileStyle.infoElementTitle}>
          <Text style={ProfileStyle.infoElementTitleText}>{item.title}</Text>
        </View>
        <View style={ProfileStyle.infoElementTextRight}>
          <Text>{item.body}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={ProfileStyle.main}>
      <View style={ProfileStyle.upTop}>
        <Text style={ProfileStyle.upTopText}>PROFILE</Text>
      </View>

      <View style={ProfileStyle.mainTop}>
        <View style={ProfileStyle.leftIndent}></View>
        <View style={ProfileStyle.photoAndName}>
          <View style={ProfileStyle.ImageProfile}>
            <ProfileImage />
          </View>
          <View style={ProfileStyle.NameField}>
            <Text style={ProfileStyle.NameText}>{name}</Text>
            <Text style={ProfileStyle.emailText}>{currentUser?.email}</Text>
          </View>
        </View>
        <Pressable onPress={onPressEdit} style={ProfileStyle.edit}>
          <Image
            style={ProfileStyle.editImage}
            source={require('@src/assets/icons/edit.png')}
          />
        </Pressable>
      </View>

      <View style={ProfileStyle.mainMiddle}>
        <FlatList
          data={profileInfo}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </View>

      {/*<View style={ProfileStyle.mainBottom}>*/}
      {/*  <Pressable onPress={onPressSignOut} style={ProfileStyle.bottomSignOut}>*/}
      {/*    <Text style={ProfileStyle.bottomSignOutText}>Sign out</Text>*/}
      {/*  </Pressable>*/}
      {/*</View>*/}
    </View>
  );
}
