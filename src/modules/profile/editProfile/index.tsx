import {
  Pressable,
  View,
  Text,
  TextInput,
  Alert,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import { EditProfileStyle } from '@src/modules/profile/editProfile/styles';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '@src/hooks';
import { currentUserSelector } from '@src/modules/users/store/selectors';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { patchUser } from '@src/modules/users/store/action';
import { EditProfileType } from '@src/modules/navigation/types';

export default function EditProfile({ navigation }: EditProfileType) {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(currentUserSelector);
  const [firstName, setFirstName] = useState(currentUser.firstName);
  const [lastName, setLastName] = useState(currentUser.lastName);
  const [gender, setGender] = useState(currentUser.gender);
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber);
  const [imageResponse, setImageResponse] = useState<any>(
    currentUser.profileImage,
  );

  const onPressDownloadImage = () => {
    Alert.alert('How to upload a photo?', '', [
      {
        text: 'Open camera',
        onPress: async () => {
          await launchCamera(
            {
              saveToPhotos: true,
              mediaType: 'photo',
              includeBase64: false,
            },
            setImageResponse,
          );
        },
      },
      {
        text: 'From device',
        onPress: async () => {
          await launchImageLibrary(
            {
              selectionLimit: 1,
              mediaType: 'photo',
              includeBase64: false,
            },
            setImageResponse,
          );
        },
      },
      {
        text: 'Delete image',
        onPress: () => {
          setImageResponse(undefined);
        },
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  const uri = imageResponse?.assets && imageResponse.assets[0].uri;

  const onPressSaveChanges = () => {
    if (currentUser) {
      currentUser.firstName = firstName;
      currentUser.lastName = lastName;
      currentUser.gender = gender;
      currentUser.phoneNumber = phoneNumber;
      imageResponse
        ? (currentUser.profileImage = imageResponse)
        : (currentUser.profileImage = '');
      dispatch(patchUser(currentUser));
    }
    navigation.goBack();
  };

  const ProfileImage = () => {
    return imageResponse ? (
      <ImageBackground
        style={{ width: 110, height: 110 }}
        imageStyle={EditProfileStyle.imageBackground}
        source={{ uri }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image
            style={EditProfileStyle.photoDownload}
            source={require('@src/assets/icons/photoDownloadWhite.png')}
          />
        </View>
      </ImageBackground>
    ) : (
      <ImageBackground
        style={{ width: 110, height: 110 }}
        imageStyle={EditProfileStyle.imageBackground}
        source={require('@src/assets/icons/profileImageUndefined.png')}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Image
            style={EditProfileStyle.photoDownload}
            source={require('@src/assets/icons/photoDownloadWhite.png')}
          />
        </View>
      </ImageBackground>
    );
  };

  const profileEditInfo = [
    {
      title: 'First Name:',
      body: currentUser?.firstName,
      state: setFirstName,
      value: firstName,
      key: '1',
    },
    {
      title: 'Last Name:',
      body: currentUser?.lastName,
      state: setLastName,
      value: lastName,
      key: '2',
    },
    {
      title: 'Gender:',
      body: currentUser?.gender,
      state: setGender,
      value: gender,
      key: '3',
    },
    {
      title: 'Phone number:',
      body: currentUser?.phoneNumber,
      state: setPhoneNumber,
      value: phoneNumber,
      key: '4',
    },
  ];

  const RadioElement = () => {
    const genderArray = [
      { gender: 'Male', key: '11' },
      { gender: 'Female', key: '22' },
    ];
    return (
      <View
        style={{
          flex: 6,
          flexDirection: 'row',
          justifyContent: 'flex-start',
        }}>
        {genderArray.map(item => {
          return (
            <View key={item.key} style={{ paddingRight: 15 }}>
              <Pressable
                style={
                  gender === item.gender
                    ? EditProfileStyle.selected
                    : EditProfileStyle.unselected
                }
                onPress={() => setGender(item.gender)}>
                <Text
                  style={
                    gender === item.gender
                      ? EditProfileStyle.genderTextSelect
                      : EditProfileStyle.genderTextUnselect
                  }>
                  {item.gender}
                </Text>
              </Pressable>
            </View>
          );
        })}
      </View>
    );
  };

  const keyExtractor = (item: any) => item.key;
  const renderItem = ({ item }: any) => {
    return (
      <View style={EditProfileStyle.midTitleField}>
        <View style={EditProfileStyle.midTitleTextField}>
          <Text style={EditProfileStyle.midTitleText}>{item.title}</Text>
        </View>
        {item.title !== 'Gender:' ? (
          <TextInput
            style={EditProfileStyle.textInput}
            value={item.value}
            onChangeText={item.state}
            clearButtonMode={'while-editing'}
          />
        ) : (
          <RadioElement />
        )}
      </View>
    );
  };

  return (
    <View style={EditProfileStyle.main}>
      <View style={EditProfileStyle.topTextView}>
        <Text style={EditProfileStyle.topText}>EDIT PROFILE</Text>
      </View>
      <View style={EditProfileStyle.main2}>
        <View style={EditProfileStyle.top}>
          <Pressable
            style={EditProfileStyle.topImage}
            onPress={onPressDownloadImage}>
            <ProfileImage />
          </Pressable>
        </View>
        <View style={EditProfileStyle.mid}>
          <FlatList
            data={profileEditInfo}
            keyExtractor={keyExtractor}
            renderItem={renderItem}
            scrollEnabled={false}
          />
        </View>
      </View>
      <View style={EditProfileStyle.bottom}>
        <View style={EditProfileStyle.bottomPaddingTop}></View>
        <Pressable
          style={EditProfileStyle.bottomSaveChanges}
          onPress={onPressSaveChanges}>
          <Text style={EditProfileStyle.bottomSaveChangesText}>
            Save changes
          </Text>
        </Pressable>
        <View style={EditProfileStyle.bottomPaddingBottom}></View>
      </View>
    </View>
  );
}
