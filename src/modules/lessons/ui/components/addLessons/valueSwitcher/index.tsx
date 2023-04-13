import { Animated } from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import DatePicker from 'react-native-date-picker';
import * as S from '@src/modules/lessons/ui/components/addLessons/valueSwitcher/style';
import { PRICES } from '@src/modules/core/constants';

type TypeSwitcher = 'time' | 'language' | 'price';

interface Props {
  type: TypeSwitcher;
  value: string;
  getValue: (value: string) => void;
}

export const ValueSwitcher: React.FC<Props> = ({ type, value, getValue }) => {
  const [open, setOpen] = useState(false);
  const nowTime = new Date();

  const [countPriceArr, setCountPriceArr] = useState(0);

  const animatedScale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    animatedScale.setValue(1);
  }, []);

  const makeAnimation = () => {
    animatedScale.setValue(0.95);
    Animated.spring(animatedScale, {
      toValue: 1,
      bounciness: 24,
      speed: 50,
      useNativeDriver: true,
    }).start();
  };

  const onPressSwitcher = () => {
    if (type === 'time') {
      setOpen(true);
    } else if (type === 'language') {
      getValue(value === 'Turkish' ? 'English' : 'Turkish');
    } else if (type === 'price') {
      setCountPriceArr(countPriceArr + 1);
      if (countPriceArr > PRICES.length - 1) {
        setCountPriceArr(0);
      }
      getValue(PRICES[countPriceArr]);
    }
    makeAnimation();
  };

  return (
    <S.SwitcherWrapper type={type}>
      <S.TypeText>{type}</S.TypeText>
      <S.Container onPress={() => onPressSwitcher()}>
        <Animated.View style={{ transform: [{ scale: animatedScale }] }}>
          <S.SwitcherText>{value}</S.SwitcherText>
        </Animated.View>

        {type === 'time' && (
          <DatePicker
            modal
            open={open}
            date={nowTime}
            mode="time"
            minuteInterval={10}
            theme="light"
            onConfirm={value => {
              setOpen(false);
              getValue(String(value).substring(15, 20) + '0');
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        )}
      </S.Container>
    </S.SwitcherWrapper>
  );
};
