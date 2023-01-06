import {View, Text, FlatList, Pressable, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '@src/hooks';
import {currentUserSelector} from '@src/modules/users/store/selectors';
import {datesSelector} from '@src/modules/lessons/store/selectors';
import {
  deleteDateAndLesson,
  deleteLesson,
  getDates,
} from '@src/modules/lessons/store/action';
import {LessonsType} from '@src/store/globalTypes';
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

  const currentDateLessons = currentDate ? [...currentDate.lessons] : null;
  currentDateLessons?.sort((a, b) => {
    const first = a.time.split(':');
    const second = b.time.split(':');
    if (parseInt(first[0]) === parseInt(second[0])) {
      return parseInt(first[1]) - parseInt(second[1]);
    } else {
      return parseInt(first[0]) - parseInt(second[0]);
    }
  });

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

  useEffect(() => {
    dispatch(getDates(currentUser?.id));
  }, []);

  const keyExtractor = (item: LessonsType) => item.id;
  // не дает прописать тип LessonsType
  const renderItem = ({item}) => {
    return (
      <Pressable
        style={LessonsListStyle.lessonField}
        onLongPress={() => onLongPress(item.id)}>
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
      </Pressable>
    );
  };

  return (
    <View style={LessonsListStyle.main}>
      <FlatList
        data={currentDate ? currentDateLessons : []}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        scrollEnabled={false}
      />
    </View>
  );
};
