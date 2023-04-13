import { AddLessons } from '@src/modules/lessons/ui/components/addLessons';
import { LessonsList } from '@src/modules/lessons/ui/components/lessonsList';
import { MONTHS } from '@src/modules/core/constants';
import { useAppSelector } from '@src/hooks';
import { viewedMonthSelector } from '@src/modules/lessons/store/selectors';
import * as S from '@src/modules/lessons/ui/screens/styles';

export default function Lessons({ route }: any) {
  const viewedMonth = useAppSelector(viewedMonthSelector);
  const selectDay = route.params.selectDay;
  const addZero = selectDay.month < 10 ? '0' : '';
  const date = String(
    selectDay.day + '.' + addZero + selectDay.month + '.' + selectDay.year,
  );
  const month = MONTHS[parseInt(viewedMonth)];

  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.HeaderText>{selectDay.day + ' ' + month}</S.HeaderText>
      </S.HeaderWrapper>
      <AddLessons date={date} />
      <S.LessonsList>
        <LessonsList date={date} />
      </S.LessonsList>
    </S.Container>
  );
}
