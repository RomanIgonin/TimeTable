import {
  Pressable,
  View,
  Text,
  TextComponent,
  TextInput,
  Alert,
  Image,
  ImageBackground,
} from 'react-native';
import {EditProfileStyle} from '@src/modules/profile/screens/editProfile/styles';
import ImageView from '@src/modules/profile/components/imageView';
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '@src/hooks';
import {currentUserSelector} from '@src/users/store/selectors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {patchUser, postProfileImage} from '@src/users/store/action';
import {EditProfileType} from '@src/navigation/stackNavigator/types';
import {ProfileStyle} from '@src/modules/profile/screens/profile/styles';

export default function EditProfile({navigation}: EditProfileType) {
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(currentUserSelector);
  const [firstName, setFirstName] = useState(currentUser.firstName);
  const [lastName, setLastName] = useState(currentUser.lastName);
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
      currentUser.phoneNumber = phoneNumber;
      currentUser.profileImage = imageResponse;
      dispatch(patchUser(currentUser));
    }
    navigation.goBack();
  };

  // const PhotoView = () => {
  //   return imageResponse ? (
  //     <View style={EditProfileStyle.imageBackground}>
  //       <ImageBackground style={EditProfileStyle.photoProfile} source={{uri}}>
  //         <Image
  //           style={EditProfileStyle.photoDownload}
  //           source={require('@src/assets/icons/photoDownloadWhite.png')}
  //         />
  //       </ImageBackground>
  //     </View>
  //   ) : (
  //     <Image
  //       style={EditProfileStyle.photoDownload}
  //       source={require('@src/assets/icons/photoDownload.png')}
  //     />
  //   );
  // };
  const ProfileImage = () => {
    return imageResponse ? (
      <ImageBackground
        style={{width: 100, height: 100}}
        imageStyle={EditProfileStyle.imageBackground}
        source={{uri}}>
        <Image
          style={EditProfileStyle.photoDownload}
          imageStyle={EditProfileStyle.photoDownloadWhite}
          source={require('@src/assets/icons/photoDownloadWhite.png')}
        />
      </ImageBackground>
    ) : (
      <Image
        style={EditProfileStyle.photoDownload}
        source={require('@src/assets/icons/photoDownload.png')}
      />
    );
  };

  return (
    <View style={EditProfileStyle.main}>
      <View style={EditProfileStyle.top}>
        <Pressable
          style={EditProfileStyle.topImage}
          onPress={onPressDownloadImage}>
          <ProfileImage />
        </Pressable>
      </View>

      <View style={EditProfileStyle.mid}>
        <View style={EditProfileStyle.midFirstNameField}>
          <Text style={EditProfileStyle.midFirstNameText}>First Name:</Text>
          <TextInput
            style={EditProfileStyle.textInput}
            value={firstName}
            onChangeText={setFirstName}
            clearButtonMode={'while-editing'}
          />
        </View>
        <View style={EditProfileStyle.midLastNameField}>
          <Text style={EditProfileStyle.midLastNameText}>Last Name:</Text>
          <TextInput
            style={EditProfileStyle.textInput}
            value={lastName}
            onChangeText={setLastName}
            clearButtonMode={'while-editing'}
          />
        </View>
        <View style={EditProfileStyle.midPhoneField}>
          <Text style={EditProfileStyle.midPhoneText}>Phone number:</Text>
          <TextInput
            style={EditProfileStyle.textInput}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            keyboardType={'numbers-and-punctuation'}
            clearButtonMode={'while-editing'}
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
