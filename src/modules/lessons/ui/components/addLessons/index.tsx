import {TextInput, View, Text, Pressable} from 'react-native';
import {AddLessonsStyle} from '@src/modules/lessons/ui/components/addLessons/styles';
import React, {useState} from 'react';
import {nanoid} from '@reduxjs/toolkit';
import {useAppDispatch, useAppSelector} from '@src/hooks';
import {datesSelector} from '@src/modules/lessons/store/selectors';
import {currentUserSelector} from '@src/users/store/selectors';
import {postDateAndLesson, postLesson} from '@src/modules/lessons/store/action';
import {LessonsType} from '@src/core/store/globalTypes';

interface Props {
  date: string;
}
export const AddLessons: React.FC<Props> = ({date}) => {
  const [time, setTime] = useState('');
  const [language, setLanguage] = useState('Turkish');
  const [price, setPrice] = useState('');

  const dispatch = useAppDispatch();

  const currentUser = useAppSelector(currentUserSelector);
  const currentDate = useAppSelector(datesSelector).find(
    item => item.date === date,
  );

  const onPressAddLessonButton = () => {
    if (currentUser) {
      if (currentDate) {
        const newLesson: LessonsType = {
          id: nanoid(),
          time: time,
          language: language,
          price: price,
        };
        currentDate.lessons = [...currentDate.lessons, newLesson];
        dispatch(postLesson(currentDate));
      } else if (!currentDate) {
        const newDateAndLesson = {
          id: nanoid(),
          userId: currentUser.id,
          date: date,
          lessons: [
            {
              id: nanoid(),
              time: time,
              language: language,
              price: price,
            },
          ],
        };
        dispatch(postDateAndLesson(newDateAndLesson));
      }
      setTime('');
      setLanguage('Turkish');
      setPrice('');
    }
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
            <TextInput
              value={language}
              onChangeText={setLanguage}
              style={AddLessonsStyle.nameLessonInputText}
              clearButtonMode={'while-editing'}
            />
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
        <Pressable
          style={AddLessonsStyle.AddLessonButtonField}
          onPress={onPressAddLessonButton}>
          <Text style={AddLessonsStyle.AddLessonButtonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
};
