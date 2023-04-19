import { Alert, FlatList } from 'react-native';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@src/hooks';
import { currentUserSelector } from '@src/modules/users/store/selectors';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { patchUser } from '@src/modules/users/store/action';
import { useNavigation } from '@react-navigation/native';
import * as S from '@src/modules/profile/editProfile/styles';
import { GRAY } from '@src/constants';
import { NO_PROFILE_IMAGE, PHOTO_DOWNLOAD } from '@src/constants/imagePaths';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import UDInput from '@src/modules/ud-ui/input';
import UDButton from '@src/modules/ud-ui/button';

export default function EditProfile() {
  const EditValidator = yup.object({
    firstName: yup.string(),
    lastName: yup.string(),
    phoneNumber: yup.string(),
  });

  const { handleSubmit, control, setValue } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(EditValidator),
  });

  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const currentUser = useAppSelector(currentUserSelector);
  const [gender, setGender] = useState(currentUser.gender);
  const [imageResponse, setImageResponse] = useState<any>(
    currentUser?.profileImage,
  );

  useEffect(() => {
    setValue('firstName', currentUser?.firstName);
    setValue('lastName', currentUser?.lastName);
    setValue('phoneNumber', currentUser?.phoneNumber);
  }, []);

  // TODO убрать в другое место
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

  const ProfileImage = () => {
    const havePhotoProfile = !!uri;
    return (
      <S.ImagePhotoWrapper
        imageStyle={{ borderRadius: 60, borderWidth: 5, borderColor: GRAY }}
        source={havePhotoProfile ? { uri } : NO_PROFILE_IMAGE}>
        <S.ImagePhotoDownload source={PHOTO_DOWNLOAD} />
      </S.ImagePhotoWrapper>
    );
  };

  // TODO: вынести в константы
  const profileEditInfo = [
    {
      title: 'First Name:',
      name: 'firstName',
      key: '1',
    },
    {
      title: 'Last Name:',
      name: 'lastName',
      key: '2',
    },
    {
      title: 'Gender:',
      name: 'gender',
      key: '3',
    },
    {
      title: 'Phone number:',
      name: 'phoneNumber',
      key: '4',
    },
  ];

  // TODO локику в сервисы убрать
  const onPressSaveChanges = (values: any) => {
    if (currentUser) {
      currentUser.firstName = values.firstName;
      currentUser.lastName = values.lastName;
      currentUser.gender = gender;
      currentUser.phoneNumber = values.phoneNumber;
      currentUser.profileImage = values.imageResponse
        ? values.imageResponse
        : '';
      dispatch(patchUser(currentUser));
    }
    navigation.goBack();
  };

  const RadioElement = () => {
    return (
      <S.RadioContainer>
        <S.GenderWrapper
          isSelectGender={gender == 'Male'}
          onPress={() => setGender('Male')}>
          <S.GenderText isSelectGender={gender == 'Male'}>Male</S.GenderText>
        </S.GenderWrapper>
        <S.GenderWrapper
          isSelectGender={gender == 'Female'}
          onPress={() => setGender('Female')}>
          <S.GenderText isSelectGender={gender == 'Female'}>
            Female
          </S.GenderText>
        </S.GenderWrapper>
      </S.RadioContainer>
    );
  };

  const keyExtractor = (item: any) => item.key;
  const renderItem = ({ item }: any) => {
    return (
      <S.ItemListWrapper>
        <S.ItemListTitle>{item.title}</S.ItemListTitle>
        <S.ItemListValue>
          {item.name == 'gender' ? (
            <RadioElement />
          ) : item.name == 'phoneNumber' ? (
            <UDInput
              name={item.name}
              control={control}
              value={item.value}
              mask={'+7 [000] [000] [00] [00]'}
            />
          ) : (
            <UDInput name={item.name} control={control} value={item.value} />
          )}
        </S.ItemListValue>
      </S.ItemListWrapper>
    );
  };

  return (
    <S.Container>
      <S.Header>EDIT PROFILE</S.Header>
      <S.BodyContainer>
        <S.PhotoWrapper onPress={onPressDownloadImage}>
          <ProfileImage />
        </S.PhotoWrapper>
        <FlatList
          data={profileEditInfo}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </S.BodyContainer>
      <S.ButtonWrapper>
        <UDButton label={'Save'} onPress={handleSubmit(onPressSaveChanges)} />
      </S.ButtonWrapper>
    </S.Container>
  );
}
