import {Image, Text, View} from 'react-native';
import {HomeType} from '@src/navigation/stackNavigator/types';
import HomeCalendar from '@src/modules/home/components/calendar';
import MonthSalary from '@src/modules/profile/components/monthSalary';
import {MONTHS} from '@src/core/constants';
import {ProfileStyle} from '@src/modules/profile/screens/profile/styles';

export default function Home({navigation}: HomeType) {
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 22}}>
        <HomeCalendar />
      </View>
      <View style={{flex: 2}}>
        <MonthSalary />
      </View>
      <View style={{flex: 1}}></View>
    </View>
  );
}
