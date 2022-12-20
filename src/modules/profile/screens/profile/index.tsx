import {
  Alert,
  Image,
  Pressable,
  Text,
  View,
  VirtualizedList,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '@src/hooks';
import {currentUserSelector, datesSelector} from '@src/users/store/selectors';
import auth from '@react-native-firebase/auth';
import {useNavigation} from '@react-navigation/native';
import {ProfileStyle} from '@src/modules/profile/screens/profile/styles';
import ImageView from '@src/modules/profile/components/imageView';
import {useEffect, useState} from 'react';
import MonthSalary from '@src/modules/profile/components/monthSalary';
import {MonthSalaryStyle} from '@src/modules/profile/components/monthSalary/style';
import {MONTHS} from '@src/core/constants';
import {getDates} from '@src/users/store/action';

export default function Profile() {
  const currentUser = useAppSelector(currentUserSelector);
  const dates = useAppSelector(datesSelector);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const day = new Date().toISOString().slice(8, 10);
  const month = new Date().toISOString().slice(5, 7);
  const currentMonth = MONTHS[parseInt(month)];

  useEffect(() => {
    dispatch(getDates(currentUser?.id));
  }, []);

  let salaryMoney = 0;
  let AllSalaryMoney = 0;
  dates.forEach(item => {
    const arrayMonth = item.date.split('.');
    console.log('day: ' + arrayMonth[0] + '.' + arrayMonth[1]);
    item.lessons.forEach(lesson => {
      let buff = Number(lesson.price);
      if (month === arrayMonth[1]) {
        AllSalaryMoney += buff;
        if (parseInt(day) >= parseInt(arrayMonth[0])) {
          salaryMoney += buff;
        }
      }
    });
  });

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

  return (
    <View style={ProfileStyle.main}>
      <View style={ProfileStyle.mainTop}>
        <View style={ProfileStyle.Title}>
          <Text style={ProfileStyle.TitleText}>Profile</Text>
        </View>
        <Pressable onPress={onPressEdit} style={ProfileStyle.edit}>
          <Image
            style={ProfileStyle.editImage}
            source={require('@src/assets/icons/edit.png')}
          />
        </Pressable>
      </View>

      <View style={ProfileStyle.mainMiddle}>
        <View style={ProfileStyle.ImageField}>
          <View style={ProfileStyle.ImageProfile}>
            <ImageView />
          </View>
          <View style={ProfileStyle.NameField}>
            <Text style={ProfileStyle.NameText}>{name}</Text>
          </View>
        </View>

        <View style={ProfileStyle.InfoField}>
          <View style={ProfileStyle.infoElement}>
            <View style={ProfileStyle.infoElementTitle}>
              <Text style={ProfileStyle.infoElementTitleText}>Email: </Text>
            </View>
            <View style={ProfileStyle.infoElementTextRight}>
              <Text>{currentUser.email}</Text>
            </View>
          </View>
          <View style={ProfileStyle.infoElement}>
            <View style={ProfileStyle.infoElementTitle}>
              <Text style={ProfileStyle.infoElementTitleText}>
                Phone number:
              </Text>
            </View>
            <View style={ProfileStyle.infoElementTextRight}>
              <Text>{currentUser.phoneNumber}</Text>
            </View>
          </View>
          <View style={ProfileStyle.infoElement}>
            <View style={ProfileStyle.infoElementTitle}>
              <Text style={ProfileStyle.infoElementTitleText}>
                {currentMonth} salary:
              </Text>
            </View>
            <View style={ProfileStyle.infoElementTextRight}>
              <Text>{salaryMoney} rubles</Text>
            </View>
          </View>
          <View style={ProfileStyle.infoElement}>
            <View style={ProfileStyle.infoElementTitle}>
              <Text style={ProfileStyle.infoElementTitleText}>
                All salary for {currentMonth} :
              </Text>
            </View>
            <View style={ProfileStyle.infoElementTextRight}>
              <Text>{AllSalaryMoney} rubles</Text>
            </View>
          </View>
          <View style={ProfileStyle.infoBottom}></View>
        </View>
      </View>

      {/*<View style={{backgroundColor: '#c44f4f'}}>*/}
      {/*  <Image style={{width: 200, height: 200}} source={require('')} />*/}
      {/*</View>*/}

      <View style={ProfileStyle.mainBottom}>
        <Pressable onPress={onPressSignOut} style={ProfileStyle.bottomSignOut}>
          <Text style={ProfileStyle.bottomSignOutText}>Sign out</Text>
        </Pressable>
      </View>
    </View>
  );
}
