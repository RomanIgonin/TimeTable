import {View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {BLUE, FONT_SIZE_MIN} from '@src/core/constants';
import {useEffect} from 'react';
import {useAppDispatch} from '@src/hooks';
import {LessonsType} from '@src/navigation/stackNavigator/types';
import {lessonsActions} from '@src/modules/lessons/store';
import {HomeCalendarStyle} from '@src/modules/home/components/calendar/styles';
import {useNavigation} from '@react-navigation/native';

export default function HomeCalendar() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const nowMonth = new Date().toISOString().slice(5, 7);

  const onDayPress = (selectDay: any) => {
    navigation.navigate('Lessons', {selectDay: selectDay});
  };

  useEffect(() => {
    dispatch(lessonsActions.setViewedMonth(nowMonth));
  }, []);

  return (
    <View style={HomeCalendarStyle.main}>
      <Calendar
        style={HomeCalendarStyle.calendar}
        onMonthChange={month => {
          dispatch(lessonsActions.setViewedMonth(month.month));
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
