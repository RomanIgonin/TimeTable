import {TextInput, View, Text} from 'react-native';
import {AddLessonsStyle} from '@src/modules/lessons/ui/components/addLessons/styles';

export default function AddLessons() {
  return (
    <View style={AddLessonsStyle.main}>
      <View style={AddLessonsStyle.timeField}>
        <Text style={AddLessonsStyle.timeText}>time</Text>
        <TextInput style={AddLessonsStyle.timeInput} keyboardType={'numeric'} />
      </View>
      <View style={AddLessonsStyle.nameLessonField}>
        <Text style={AddLessonsStyle.timeText}>lesson</Text>
        <TextInput
          style={AddLessonsStyle.nameLessonInput}
          clearButtonMode={'while-editing'}
        />
      </View>
      <View style={AddLessonsStyle.priceField}>
        <Text style={AddLessonsStyle.timeText}>price</Text>
        <TextInput
          style={AddLessonsStyle.priceInput}
          keyboardType={'number-pad'}
        />
      </View>
    </View>
  );
}
