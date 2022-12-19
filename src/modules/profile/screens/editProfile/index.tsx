import {
  Pressable,
  View,
  Text,
  TextComponent,
  TextInput,
  Alert,
} from 'react-native';
import {EditProfileStyle} from '@src/modules/profile/screens/editProfile/styles';
import ImageView from '@src/modules/profile/components/imageView';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '@src/hooks';
import {currentUserSelector} from '@src/users/store/selectors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {patchUser, postProfileImage} from '@src/users/store/action';
import {EditProfileType} from '@src/navigation/stackNavigator/types';

export default function EditProfile({navigation}: EditProfileType) {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(currentUserSelector);
  const [firstName, setFirstName] = useState(currentUser.firstName);
  const [lastName, setLastName] = useState(currentUser.lastName);
  const [phoneNumber, setPhoneNumber] = useState(currentUser.phoneNumber);

  const onPressSaveChanges = () => {
    if (currentUser) {
      currentUser.firstName = firstName;
      currentUser.lastName = lastName;
      currentUser.phoneNumber = phoneNumber;
      // currentUser.profileImage = profileImage;
      dispatch(patchUser(currentUser));
    }
    navigation.goBack();
  };

  const onPressDownloadImage = () => {
    Alert.alert('How to upload a photo?', '', [
      {
        text: 'Camera',
        onPress: async () => {
          const res = launchCamera({
            saveToPhotos: true,
            mediaType: 'photo',
            includeBase64: false,
          });
          console.log(res);
        },
      },
      {
        text: 'Device',
        onPress: async () => {
          const res = await launchImageLibrary({
            selectionLimit: 1,
            mediaType: 'photo',
            includeBase64: false,
          });
          currentUser.profileImage = res.assets[0].uri;
          // dispatch(patchUser(currentUser));
        },
      },
      {
        text: 'Cancel',
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={EditProfileStyle.main}>
      <View style={EditProfileStyle.top}>
        <View style={EditProfileStyle.topImage}>
          <Pressable onPress={onPressDownloadImage}>
            <ImageView />
          </Pressable>
        </View>
        <View>
          <View></View>
        </View>
      </View>

      <View style={EditProfileStyle.mid}>
        <View style={EditProfileStyle.midFirstNameField}>
          <Text style={EditProfileStyle.midFirstNameText}>First Name:</Text>
          <TextInput
            style={EditProfileStyle.textInput}
            value={firstName}
            onChangeText={setFirstName}
          />
        </View>
        <View style={EditProfileStyle.midLastNameField}>
          <Text style={EditProfileStyle.midLastNameText}>Last Name:</Text>
          <TextInput
            style={EditProfileStyle.textInput}
            value={lastName}
            onChangeText={setLastName}
          />
        </View>
        <View style={EditProfileStyle.midPhoneField}>
          <Text style={EditProfileStyle.midPhoneText}>Phone number:</Text>
          <TextInput
            style={EditProfileStyle.textInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
        </View>
        <View style={EditProfileStyle.midBottom}></View>
      </View>

      <View style={EditProfileStyle.bottom}>
        <Pressable
          style={EditProfileStyle.bottomSaveChanges}
          onPress={onPressSaveChanges}>
          <Text style={EditProfileStyle.bottomSaveChangesText}>
            Save changes
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
