import { FlatList } from 'react-native';
import { useAppSelector } from '@src/hooks';
import { currentUserSelector } from '@src/modules/users/store/selectors';
import { useNavigation } from '@react-navigation/native';
import * as S from '@src/modules/profile/styles';
import { EDIT, NO_PROFILE_IMAGE } from '@src/constants/imagePaths';

export default function Profile() {
  const navigation = useNavigation<any>();
  const currentUser = useAppSelector(currentUserSelector);

  const name =
    currentUser?.firstName && currentUser?.lastName
      ? currentUser?.firstName + ' ' + currentUser?.lastName
      : 'No name';

  const onPressEdit = () => {
    navigation.navigate('EditProfile');
  };
  const imageResponse = currentUser?.profileImage;
  const uri = imageResponse ? imageResponse.assets[0].uri : null;

  const ProfileImage = () => {
    return imageResponse ? (
      <S.PhotoProfile source={{ uri }} />
    ) : (
      <S.PhotoProfile source={NO_PROFILE_IMAGE} />
    );
  };

  const profileInfo = [
    { title: 'Phone number:', body: currentUser?.phoneNumber, key: '1' },
    { title: 'Gender:', body: currentUser?.gender, key: '2' },
  ];

  const keyExtractor = (item: any) => item.key;
  const renderItem = ({ item }: any) => {
    return (
      <S.BottomInfoWrapper>
        <S.BottomInfoTitleText>{item.title}</S.BottomInfoTitleText>
        <S.BottomInfoText>{item.body}</S.BottomInfoText>
      </S.BottomInfoWrapper>
    );
  };

  return (
    <S.Container>
      <S.Header>PROFILE</S.Header>

      <S.TopInfoContainer>
        <S.PhotoWrapper>
          <S.EmptyField></S.EmptyField>
          <S.PhotoProfileWrapper>
            <ProfileImage />
          </S.PhotoProfileWrapper>
          <S.EditImageWrapper onPress={onPressEdit}>
            <S.EditImage source={EDIT} />
          </S.EditImageWrapper>
        </S.PhotoWrapper>
        <S.NameText>{name}</S.NameText>
        <S.EmailText>{currentUser?.email}</S.EmailText>
      </S.TopInfoContainer>

      <S.BottomInfoContainer>
        <FlatList
          data={profileInfo}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </S.BottomInfoContainer>
    </S.Container>
  );
}
