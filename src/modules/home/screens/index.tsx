import {View} from 'react-native';
import {HomeType} from '@src/navigation/stackNavigator/types';
import HomeCalendar from '@src/modules/home/components/calendar';
import MonthSalary from '@src/modules/profile/components/monthSalary';
import {BORDER_RADIUS_BTN} from '@src/core/constants';

export default function Home({navigation}: HomeType) {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 22,
          backgroundColor: 'white',
          margin: 15,
          borderRadius: BORDER_RADIUS_BTN,
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowRadius: 7,
          shadowOpacity: 0.2,
        }}>
        <View style={{flex: 10}}>
          <HomeCalendar />
        </View>
        <View style={{flex: 1}}>
          <MonthSalary />
        </View>
      </View>
    </View>
  );
}
