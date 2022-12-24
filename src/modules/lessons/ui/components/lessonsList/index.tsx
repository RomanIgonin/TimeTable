import {View, Text, FlatList, Pressable, Alert} from 'react-native';
import React, {useEffect} from 'react';
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
  const currentUser = useAppSelector(currentUserSelector);
  const currentDate = useAppSelector(datesSelector).find(
    item => item.date === date,
  );

  const onPressDelete = (itemId: string) => {
    if (currentDate) {
      if (currentDate.lessons[1]) {
        currentDate.lessons = currentDate.lessons.filter(
          item => item.id !== itemId,
        );
        dispatch(deleteLesson(currentDate));
      } else {
        dispatch(deleteDateAndLesson(currentDate));
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
        data={currentDate?.lessons}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </View>
  );
};
