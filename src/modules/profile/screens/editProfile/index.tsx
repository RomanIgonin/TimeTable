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
      imageResponse
        ? (currentUser.profileImage = imageResponse)
        : (currentUser.profileImage = '');
      dispatch(patchUser(currentUser));
    }
    navigation.goBack();
  };

  const ProfileImage = () => {
    // console.log('imageResponse: ' + JSON.stringify(imageResponse));
    return imageResponse ? (
      <ImageBackground
        style={{width: 100, height: 100}}
        imageStyle={EditProfileStyle.imageBackground}
        source={{uri}}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            style={EditProfileStyle.photoDownload}
            source={require('@src/assets/icons/photoDownloadWhite.png')}
          />
        </View>
      </ImageBackground>
    ) : (
      <ImageBackground
        style={{width: 100, height: 100}}
        imageStyle={EditProfileStyle.imageBackground}
        source={require('@src/assets/icons/profileImageUndefined.png')}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Image
            style={EditProfileStyle.photoDownload}
            source={require('@src/assets/icons/photoDownloadWhite.png')}
          />
        </View>
      </ImageBackground>
    );
  };

  return (
    <View style={EditProfileStyle.main}>
      <View style={EditProfileStyle.top}>
        <View style={EditProfileStyle.topTextView}>
          <Text style={EditProfileStyle.topText}>EDIT PROFILE</Text>
        </View>
        <Pressable
          style={EditProfileStyle.topImage}
          onPress={onPressDownloadImage}>
          <ProfileImage />
        </Pressable>
      </View>

      <View style={EditProfileStyle.mid}>
        <View style={EditProfileStyle.midTitleField}>
          <View style={EditProfileStyle.midTitleTextField}>
            <Text style={EditProfileStyle.midTitleText}>First Name:</Text>
          </View>

          <TextInput
            style={EditProfileStyle.textInput}
            value={firstName}
            onChangeText={setFirstName}
            clearButtonMode={'while-editing'}
          />
        </View>
        <View style={EditProfileStyle.midTitleField}>
          <View style={EditProfileStyle.midTitleTextField}>
            <Text style={EditProfileStyle.midTitleText}>Last Name:</Text>
          </View>
          <TextInput
            style={EditProfileStyle.textInput}
            value={lastName}
            onChangeText={setLastName}
            clearButtonMode={'while-editing'}
          />
        </View>
        <View style={EditProfileStyle.midTitleField}>
          <View style={EditProfileStyle.midTitleTextField}>
            <Text style={EditProfileStyle.midTitleText}>Phone number:</Text>
          </View>
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
