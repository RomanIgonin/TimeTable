import {Image, Pressable, Text, View} from 'react-native';
import {useAppDispatch, useAppSelector} from '@src/hooks';
import {currentUserSelector, datesSelector} from '@src/users/store/selectors';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {ProfileStyle} from '@src/modules/profile/screens/profile/styles';
import ImageView from '@src/modules/profile/components/imageView';
import {MONTHS} from '@src/core/constants';
import MonthSalary from '@src/modules/profile/components/monthSalary';
import {EditProfileStyle} from '@src/modules/profile/screens/editProfile/styles';
import {useState} from 'react';

export default function Profile() {
  const currentUser = useAppSelector(currentUserSelector);
  const navigation = useNavigation();
  // const month = new Date().toISOString().slice(5, 7);
  // const currentMonth = MONTHS[parseInt(month)];
  // const monthSalary = MonthSalary();
  // const salaryMoney = monthSalary[0];
  // const allSalaryMoney = monthSalary[1];

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
      : 'No name';

  const onPressEdit = () => {
    navigation.navigate('EditProfile');
  };
  const imageResponse = currentUser.profileImage;
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
        {/*<View style={ProfileStyle.infoElement}>*/}
        {/*  <View style={ProfileStyle.infoElementTitle}>*/}
        {/*    <Text style={ProfileStyle.infoElementTitleText}>Email: </Text>*/}
        {/*  </View>*/}
        {/*  <View style={ProfileStyle.infoElementTextRight}>*/}
        {/*    <Text>{currentUser?.email}</Text>*/}
        {/*  </View>*/}
        {/*</View>*/}
        <View style={ProfileStyle.infoElement}>
          <View style={ProfileStyle.infoElementTitle}>
            <Text style={ProfileStyle.infoElementTitleText}>Phone number:</Text>
          </View>
          <View style={ProfileStyle.infoElementTextRight}>
            <Text>{currentUser?.phoneNumber}</Text>
          </View>
        </View>
        {/*<View*/}
        {/*  style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>*/}
        {/*  <MonthSalary />*/}
        {/*</View>*/}
        {/*<View style={ProfileStyle.infoElement}>*/}
        {/*  <View style={ProfileStyle.infoElementTitle}>*/}
        {/*    <Text style={ProfileStyle.infoElementTitleText}>*/}
        {/*      {currentMonth} salary:*/}
        {/*    </Text>*/}
        {/*  </View>*/}
        {/*  <View style={ProfileStyle.infoElementTextRight}>*/}
        {/*    <Text>{salaryMoney} rubles</Text>*/}
        {/*  </View>*/}
        {/*</View>*/}
        {/*<View style={ProfileStyle.infoElement}>*/}
        {/*  <View style={ProfileStyle.infoElementTitle}>*/}
        {/*    <Text style={ProfileStyle.infoElementTitleText}>*/}
        {/*      All salary for {currentMonth} :*/}
        {/*    </Text>*/}
        {/*  </View>*/}
        {/*  <View style={ProfileStyle.infoElementTextRight}>*/}
        {/*    <Text>{allSalaryMoney} rubles</Text>*/}
        {/*  </View>*/}
        {/*</View>*/}
        <View style={ProfileStyle.infoBottom}></View>
      </View>

      <View style={ProfileStyle.mainBottom}>
        <Pressable onPress={onPressSignOut} style={ProfileStyle.bottomSignOut}>
          <Text style={ProfileStyle.bottomSignOutText}>Sign out</Text>
        </Pressable>
      </View>
    </View>
  );
}
