import { Text, View } from 'react-native';
import { AddLessons } from '@src/modules/lessons/ui/components/addLessons';
import { LessonsStyle } from '@src/modules/lessons/ui/screens/styles';
import { LessonsList } from '@src/modules/lessons/ui/components/lessonsList';
import { MONTHS } from '@src/modules/core/constants';
import { useAppSelector } from '@src/hooks';
import { viewedMonthSelector } from '@src/modules/lessons/store/selectors';

export default function Lessons({ route }: any) {
  const viewedMonth = useAppSelector(viewedMonthSelector);
  const selectDay = route.params.selectDay;
  const addZero = selectDay.month < 10 ? '0' : '';
  const date = String(
    selectDay.day + '.' + addZero + selectDay.month + '.' + selectDay.year,
  );
  const month = MONTHS[parseInt(viewedMonth)];

  return (
    <View style={LessonsStyle.main}>
      <View style={LessonsStyle.top}>
        <Text style={LessonsStyle.topText}>{selectDay.day + ' ' + month}</Text>
      </View>
      <View style={LessonsStyle.addLessons}>
        <AddLessons date={date} />
      </View>
      <View style={LessonsStyle.lessonsList}>
        <LessonsList date={date} />
      </View>
    </View>
  );
}
