import { Animated, Pressable, Text } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-native-date-picker';
import { TimeSwitchStyle } from '@src/modules/lessons/ui/components/addLessons/timeSwitch/style';

interface Props {
  time: string;
  getTime: (value: string) => void;
}

export const TimeSwitch: React.FC<Props> = ({ time, getTime }) => {
  const [open, setOpen] = useState(false);
  const nowTime = new Date();

  const animatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedScale.setValue(1);
  }, []);

  const onPressAddLessonButton = () => {
    animatedScale.setValue(0.95);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 24,
      speed: 50,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Pressable
      style={TimeSwitchStyle.main}
      onPress={() => {
        setOpen(true);
        onPressAddLessonButton();
      }}>
      <Animated.View style={{ transform: [{ scale: animatedScale }] }}>
        <Text style={TimeSwitchStyle.nameLessonInputText}>{time}</Text>
      </Animated.View>
      <DatePicker
        modal
        open={open}
        date={nowTime}
        mode="time"
        minuteInterval={10}
        theme="light"
        onConfirm={value => {
          setOpen(false);
          getTime(String(value).substr(15, 6));
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </Pressable>
  );
};
