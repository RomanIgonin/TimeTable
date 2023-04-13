import React, { useState } from 'react';
import { ButtonAddLesson } from '@src/modules/lessons/ui/components/addLessons/buttonAddLesson';
import * as S from '@src/modules/lessons/ui/components/addLessons/styles';
import { ValueSwitcher } from '@src/modules/lessons/ui/components/addLessons/valueSwitcher';

interface Props {
  date: string;
}
export const AddLessons: React.FC<Props> = ({ date }) => {
  const [time, setTime] = useState('');
  const [language, setLanguage] = useState('Turkish');
  const [price, setPrice] = useState('');

  const getTime = (value: string) => {
    setTime(value);
  };
  const getLanguage = (value: string) => {
    setLanguage(value);
  };
  const getPrice = (value: string) => {
    setPrice(value);
  };

  return (
    <S.Container>
      <S.AllInputsWrapper>
        <ValueSwitcher type={'time'} value={time} getValue={getTime} />
        <ValueSwitcher
          type={'language'}
          value={language}
          getValue={getLanguage}
        />
        <ValueSwitcher type={'price'} value={price} getValue={getPrice} />
      </S.AllInputsWrapper>

      <S.ButtonWrapper>
        <ButtonAddLesson
          date={date}
          time={time}
          language={language}
          price={price}
        />
      </S.ButtonWrapper>
    </S.Container>
  );
};
