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

export default function Profile() {
  const currentUser = useAppSelector(currentUserSelector);
  const dates = useAppSelector(datesSelector);
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const [salary, setSalary] = useState<number | undefined>(undefined);

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

  useEffect(() => {
    setSalary(monthSalary());
  });
  const monthSalary = () => {
    let res = 0;
    dates.map(date => {
      date.lessons.forEach(lesson => {
        console.log('3');

        let buff = Number(lesson.price);
        console.log('buff: ' + buff);
        res += buff;
        console.log('res: ' + res);
      });
    });
    console.log('res after: ' + res);
    return res;
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
          <View style={ProfileStyle.Image}>
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
                Month salary:
              </Text>
            </View>
            <View style={ProfileStyle.infoElementTextRight}>
              <Text>{salary}</Text>
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
