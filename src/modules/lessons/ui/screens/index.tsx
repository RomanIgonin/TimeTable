import {Text, View} from 'react-native';
import {LessonsType} from '@src/navigation/stackNavigator/types';
import {AddLessons} from '@src/modules/lessons/ui/components/addLessons';
import {LessonsStyle} from '@src/modules/lessons/ui/screens/styles';
import {LessonsList} from '@src/modules/lessons/ui/components/lessonsList';

export default function Lessons({route}: LessonsType) {
  const selectDay = route.params.selectDay;
  const date = String(
    selectDay.day + '.' + selectDay.month + '.' + selectDay.year,
  );

  return (
    <View style={LessonsStyle.main}>
      <View style={LessonsStyle.addLessons}>
        <AddLessons date={date} />
      </View>
      <View style={LessonsStyle.date}>
        <Text style={LessonsStyle.dateText}>{date}</Text>
      </View>
      <View style={LessonsStyle.lessonsList}>
        <LessonsList date={date} />
      </View>
    </View>
  );
}
