import React, {useRef, useEffect} from 'react';
import {Animated, Pressable, Text} from 'react-native';
import {ButtonAddLessonStyle} from '@src/modules/lessons/ui/components/addLessons/buttonAddLesson/style';
import {LessonsType} from '@src/store/globalInterface';
import {nanoid} from '@reduxjs/toolkit';
import {postDateAndLesson, postLesson} from '@src/modules/lessons/store/action';
import {useAppDispatch, useAppSelector} from '@src/hooks';
import {currentUserSelector} from '@src/modules/users/store/selectors';
import {datesSelector} from '@src/modules/lessons/store/selectors';

interface Props {
  date: string;
  time: string;
  language: string;
  price: string;
}

export const ButtonAddLesson: React.FC<Props> = ({
  date,
  time,
  language,
  price,
}) => {
  const currentUser = useAppSelector(currentUserSelector);
  const currentDate = useAppSelector(datesSelector).find(
    item => item.date === date,
  );
  const dispatch = useAppDispatch();
  const animatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedScale.setValue(1);
  }, []);

  const onPressAddLessonButton = () => {
    AnimationScale();
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
    }
  };

  const AnimationScale = () => {
    animatedScale.setValue(0.8);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 24,
      speed: 50,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      style={ButtonAddLessonStyle.AddLessonButtonField}
      onPress={onPressAddLessonButton}>
      <Animated.View style={{transform: [{scale: animatedScale}]}}>
        <Text style={ButtonAddLessonStyle.AddLessonButtonText}>+</Text>
      </Animated.View>
    </Pressable>
  );
};
