import {TextInput, View, Text} from 'react-native';
import {AddLessonsStyle} from '@src/modules/lessons/ui/components/addLessons/styles';
import React, {useState} from 'react';
import {ButtonAddLesson} from '@src/modules/lessons/ui/components/buttonAddLesson';
import {LessonSwitch} from '@src/modules/lessons/ui/components/lessonSwitch';

interface Props {
  date: string;
}
export const AddLessons: React.FC<Props> = ({date}) => {
  const [time, setTime] = useState('');
  const [language, setLanguage] = useState('Turkish');
  const [price, setPrice] = useState('');

  const getLanguage = (value: string) => {
    setLanguage(value);
  };

  return (
    <View style={AddLessonsStyle.main}>
      <View style={AddLessonsStyle.mainInputs}>
        <View style={AddLessonsStyle.timeField}>
          <View style={AddLessonsStyle.timeTextField}>
            <Text style={AddLessonsStyle.timeText}>time</Text>
          </View>
          <View style={AddLessonsStyle.timeInput}>
            <TextInput
              value={time}
              onChangeText={setTime}
              style={AddLessonsStyle.timeInputText}
              keyboardType={'numbers-and-punctuation'}
            />
          </View>
        </View>
        <View style={AddLessonsStyle.nameLessonField}>
          <View style={AddLessonsStyle.nameLessonsTextField}>
            <Text style={AddLessonsStyle.nameLessonsText}>lesson</Text>
          </View>
          <View style={AddLessonsStyle.nameLessonInput}>
            <LessonSwitch language={language} getLanguage={getLanguage} />
          </View>
        </View>
        <View style={AddLessonsStyle.priceField}>
          <View style={AddLessonsStyle.priceTextField}>
            <Text style={AddLessonsStyle.priceText}>price</Text>
          </View>
          <View style={AddLessonsStyle.priceInput}>
            <TextInput
              value={price}
              onChangeText={setPrice}
              style={AddLessonsStyle.priceInputText}
              keyboardType={'phone-pad'}
            />
          </View>
        </View>
      </View>
      <View style={AddLessonsStyle.AddLessonButton}>
        <ButtonAddLesson
          date={date}
          time={time}
          language={language}
          price={price}
        />
      </View>
    </View>
  );
};
