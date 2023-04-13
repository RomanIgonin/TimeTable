import { Calendar } from 'react-native-calendars';
import { BLUE, FONT_SIZE_MIN } from '@src/constants';
import { useEffect } from 'react';
import { useAppDispatch } from '@src/hooks';
import { lessonsActions } from '@src/modules/lessons/store';
import { HomeCalendarStyle } from '@src/modules/home/components/calendar/styles';
import { useNavigation } from '@react-navigation/native';

export default function HomeCalendar() {
  const navigation = useNavigation<any>();
  const dispatch = useAppDispatch();
  const nowMonth = new Date().toISOString().slice(5, 7);
  const nowYear = new Date().toISOString().slice(0, 4);

  const onDayPress = (selectDay: object) => {
    navigation.navigate('Lessons', { selectDay });
  };

  useEffect(() => {
    dispatch(lessonsActions.setViewedMonth(nowMonth));
    dispatch(lessonsActions.setViewedYear(nowYear));
  }, []);

  return (
    <Calendar
      style={HomeCalendarStyle.calendar}
      onMonthChange={month => {
        const monthString =
          month.month < 10 ? '0' + month.month : String(month.month);
        dispatch(lessonsActions.setViewedMonth(monthString));
        dispatch(lessonsActions.setViewedYear(String(month.year)));
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
  );
}
