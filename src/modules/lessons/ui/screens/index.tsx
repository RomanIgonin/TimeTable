import {Text, View} from 'react-native';
import {LessonsType} from '@src/navigation/stackNavigator/types';
import AddLessons from '@src/modules/lessons/ui/components/addLessons';
import {LessonsStyle} from '@src/modules/lessons/ui/screens/styles';

export default function Lessons({route}: LessonsType) {
  const selectDay = route.params.selectDay;
  return (
    <View style={LessonsStyle.main}>
      <View style={LessonsStyle.day}>
        <Text style={LessonsStyle.dayText}>{selectDay}</Text>
      </View>
      <View style={LessonsStyle.addLessons}>
        <AddLessons />
      </View>
      <View style={LessonsStyle.lessonsList}></View>
    </View>
  );
}
