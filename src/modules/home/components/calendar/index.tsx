import {Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {useNavigation} from '@react-navigation/native';
import {BLUE, BORDER_RADIUS_BTN, FONT_SIZE_MIN} from '@src/core/constants';

export default function HomeCalendar() {
  const navigation = useNavigation();

  const onDayPress = selectDay => {
    navigation.navigate('Lessons', {selectDay: selectDay});
  };

  return (
    <View style={{flex: 1}}>
      <Calendar
        style={{
          margin: 10,
          borderRadius: BORDER_RADIUS_BTN,
        }}
        disableMonthChange={true}
        enableSwipeMonths={true}
        minDate={'2022-01-01'}
        onDayPress={onDayPress}
        firstDay={1}
        theme={{
          selectedDayBackgroundColor: BLUE,
          todayTextColor: BLUE,
          arrowColor: BLUE,
          disabledArrowColor: '#d9e1e8',
          monthTextColor: '#000000',
          indicatorColor: BLUE,
          textDayFontWeight: 'bold',
          textMonthFontWeight: 'bold',
          textDayFontSize: FONT_SIZE_MIN,
          textMonthFontSize: 16,
          textDayHeaderFontSize: FONT_SIZE_MIN,
        }}
      />
    </View>
  );
}
