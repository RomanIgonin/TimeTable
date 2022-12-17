import {Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {useNavigation} from '@react-navigation/native';
import {SelectDayType} from '@src/navigation/stackNavigator/types';

export default function HomeCalendar() {
  const navigation = useNavigation();

  const onDayPress = selectDay => {
    navigation.navigate('Lessons', {selectDay: selectDay});
  };

  return (
    <View>
      <Calendar minDate={'2022-01-01'} onDayPress={onDayPress} />
    </View>
  );
}
