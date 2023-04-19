import { FlatList } from 'react-native';
import { useAppSelector } from '@src/hooks';
import { currentUserSelector } from '@src/modules/users/store/selectors';
import { useNavigation } from '@react-navigation/native';
import * as S from '@src/modules/profile/styles';
import { EDIT, NO_PROFILE_IMAGE } from '@src/constants/imagePaths';
import profileService from '@src/modules/profile/domain/services/profileService';

export default function Profile() {
  const navigation = useNavigation<any>();
  const currentUser = useAppSelector(currentUserSelector);

  const name = profileService.getName(currentUser);
  const profileInfoList = profileService.createProfileInfoList(currentUser);
  const imageResponse = currentUser?.profileImage;
  const uri = imageResponse ? imageResponse.assets[0].uri : null;

  const onPressEdit = () => {
    navigation.navigate('EditProfile');
  };

  const ProfileImage = () => {
    return imageResponse ? (
      <S.PhotoProfile source={{ uri }} />
    ) : (
      <S.PhotoProfile source={NO_PROFILE_IMAGE} />
    );
  };

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
          data={profileInfoList}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      </S.BottomInfoContainer>
    </S.Container>
  );
}
