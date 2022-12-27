import {Text, View} from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {useNavigation} from '@react-navigation/native';
import {BLUE, BORDER_RADIUS_BTN, FONT_SIZE_MIN} from '@src/core/constants';
import {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@src/hooks';
import {usersActions} from '@src/users/store';
import {getDates} from '@src/users/store/action';
import {currentUserSelector} from '@src/users/store/selectors';

export default function HomeCalendar() {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const nowMonth = new Date().toISOString().slice(5, 7);

  const onDayPress = (selectDay: any) => {
    navigation.navigate('Lessons', {selectDay: selectDay});
  };

  useEffect(() => {
    dispatch(usersActions.setViewedMonth(nowMonth));
  }, []);

  return (
    <View style={{flex: 1}}>
      <Calendar
        style={{
          margin: 10,
          borderRadius: BORDER_RADIUS_BTN,
        }}
        onMonthChange={month => {
          dispatch(usersActions.setViewedMonth(month.month));
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
