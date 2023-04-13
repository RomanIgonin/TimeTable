import { FlatList, Alert } from 'react-native';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@src/hooks';
import { currentUserSelector } from '@src/modules/users/store/selectors';
import { datesSelector } from '@src/modules/lessons/store/selectors';
import {
  deleteDateAndLesson,
  deleteLesson,
  getDates,
} from '@src/modules/lessons/store/action';
import { Lessons } from '@src/store/globalInterface';
import * as S from '@src/modules/lessons/ui/components/lessonsList/styles';

interface Props {
  date: string;
}

export const LessonsList: React.FC<Props> = ({ date }) => {
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

  const keyExtractor = (item: Lessons) => item.id;
  const renderItem = ({ item }: any) => {
    return (
      <S.ContainerItem onLongPress={() => onLongPress(item.id)}>
        <S.ItemText>{item.time}</S.ItemText>
        <S.ItemText isLanguage={true}>{item.language}</S.ItemText>
        <S.ItemText>{item.price}</S.ItemText>
      </S.ContainerItem>
    );
  };

  return (
    <S.Container>
      {currentDate ? (
        <FlatList
          data={currentDateLessons}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          scrollEnabled={false}
        />
      ) : (
        <S.ContainerItem>
          <S.ItemText isNoLessons={true}>Lessons not scheduled</S.ItemText>
        </S.ContainerItem>
      )}
    </S.Container>
  );
};
