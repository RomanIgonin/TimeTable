import {View, Text, FlatList, Pressable, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '@src/hooks';
import {currentUserSelector, datesSelector} from '@src/users/store/selectors';
import {
  deleteDateAndLesson,
  deleteLesson,
  getDates,
} from '@src/users/store/action';
import {LessonsType} from '@src/core/store/globalTypes';
import {LessonsListStyle} from '@src/modules/lessons/ui/components/lessonsList/styles';

interface Props {
  date: string;
}

export const LessonsList: React.FC<Props> = ({date}) => {
  const dispatch = useAppDispatch();
  const dates = useAppSelector(datesSelector);
  const currentUser = useAppSelector(currentUserSelector);

  const patchDate = dates?.find(item => item.date === date);

  const onPressDelete = (itemId: string) => {
    if (patchDate) {
      if (patchDate.lessons[1]) {
        patchDate.lessons = patchDate.lessons.filter(
          item => item.id !== itemId,
        );
        dispatch(deleteLesson(patchDate));
      } else {
        dispatch(deleteDateAndLesson(patchDate));
        dispatch(getDates(currentUser?.id));
      }
    }
  };

  const onLongPress = (itemId: string) => {
    Alert.alert('Delete this lesson?', '', [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'OK',
        onPress: () => {
          onPressDelete(itemId);
        },
      },
    ]);
  };

  // сделать что бы срабатывала после удаления всей даты
  useEffect(() => {
    dispatch(getDates(currentUser?.id));
  }, []);

  const keyExtractor = (item: LessonsType) => item.id;

  // не дает прописать тип LessonsType
  const renderItem = ({item}) => {
    return (
      <Pressable onLongPress={() => onLongPress(item.id)}>
        <View style={LessonsListStyle.lessonField}>
          <View style={LessonsListStyle.time}>
            <Text style={LessonsListStyle.lessonTextTime}>{item.time}</Text>
          </View>
          <View style={LessonsListStyle.language}>
            <Text style={LessonsListStyle.lessonTextLanguage}>
              {item.language}
            </Text>
          </View>
          <View style={LessonsListStyle.price}>
            <Text style={LessonsListStyle.lessonTextPrice}>{item.price}</Text>
          </View>
        </View>
      </Pressable>
    );
  };

  return (
    <View style={LessonsListStyle.main}>
      <FlatList
        data={patchDate?.lessons}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};
