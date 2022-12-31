import {Animated, Pressable, Text, View} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {LessonSwitchStyle} from '@src/modules/lessons/ui/components/addLessons/lessonSwitch/style';

interface Props {
  language: string;
  getLanguage: (lesson: string) => void;
}
export const LessonSwitch: React.FC<Props> = ({language, getLanguage}) => {
  const animatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedScale.setValue(1);
  }, []);

  const onPressAddLessonButton = () => {
    getLanguage(language === 'Turkish' ? 'English' : 'Turkish');
    animatedScale.setValue(0.95);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 24,
      speed: 50,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View>
      <Pressable onPress={onPressAddLessonButton}>
        <Animated.View style={{transform: [{scale: animatedScale}]}}>
          <Text style={LessonSwitchStyle.nameLessonInputText}>{language}</Text>
        </Animated.View>
      </Pressable>
    </View>
  );
};
