import {View} from 'react-native';
import HomeCalendar from '@src/modules/home/components/calendar';
import MonthSalary from '@src/modules/home/components/monthSalary';
import {HomeStyle} from '@src/modules/home/screens/styles';

export default function Home() {
  return (
    <View style={HomeStyle.main}>
      <View style={HomeStyle.field}>
        <View style={HomeStyle.homeCalendar}>
          <HomeCalendar />
        </View>
        <View style={HomeStyle.monthSalary}>
          <MonthSalary />
        </View>
      </View>
    </View>
  );
}
