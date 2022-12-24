import {TextInput, View, Text, Pressable} from 'react-native';
import {AddLessonsStyle} from '@src/modules/lessons/ui/components/addLessons/styles';
import React, {useState} from 'react';
import {nanoid} from '@reduxjs/toolkit';
import {useAppDispatch, useAppSelector} from '@src/hooks';
import {datesSelector} from '@src/users/store/selectors';
import {currentUserSelector} from '@src/users/store/selectors';
import {postDateAndLesson, postLesson} from '@src/users/store/action';
import {LessonsType} from '@src/core/store/globalTypes';

interface Props {
  date: string;
}
export const AddLessons: React.FC<Props> = ({date}) => {
  const [time, setTime] = useState('');
  const [language, setLanguage] = useState('');
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
      setLanguage('');
      setPrice('');
    }
  };

  return (
    <View style={AddLessonsStyle.main}>
      <View style={AddLessonsStyle.mainInputs}>
        <View style={AddLessonsStyle.timeField}>
          <View style={AddLessonsStyle.timeText}>
            <Text>time</Text>
          </View>
          <View style={AddLessonsStyle.timeInput}>
            <TextInput
              value={time}
              onChangeText={setTime}
              style={AddLessonsStyle.timeInputText}
              keyboardType={'numbers-and-punctuation'}
              // clearButtonMode={'while-editing'}
              // cursorColor={'black'}
            />
          </View>
        </View>
        <View style={AddLessonsStyle.nameLessonField}>
          <View style={AddLessonsStyle.nameLessonsText}>
            <Text>lesson</Text>
          </View>
          <View style={AddLessonsStyle.nameLessonInput}>
            <TextInput
              value={language}
              onChangeText={setLanguage}
              style={AddLessonsStyle.nameLessonInputText}
              clearButtonMode={'while-editing'}
              // cursorColor={'black'}
            />
          </View>
        </View>
        <View style={AddLessonsStyle.priceField}>
          <View style={AddLessonsStyle.priceText}>
            <Text>price</Text>
          </View>
          <View style={AddLessonsStyle.priceInput}>
            <TextInput
              value={price}
              onChangeText={setPrice}
              style={AddLessonsStyle.priceInputText}
              // clearButtonMode={'while-editing'}
              keyboardType={'phone-pad'}
              // cursorColor={'black'}
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
