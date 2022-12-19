import {Image, View} from 'react-native';
import {HomeType} from '@src/navigation/stackNavigator/types';
import HomeCalendar from '@src/modules/home/components/calendar/ui/screens';

export default function Home({navigation}: HomeType) {
  return (
    <View>
      <HomeCalendar />
    </View>
  );
}
