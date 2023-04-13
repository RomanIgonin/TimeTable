import { AddLessons } from '@src/modules/lessons/ui/components/addLessons';
import { LessonsList } from '@src/modules/lessons/ui/components/lessonsList';
import { MONTHS } from '@src/constants/index';
import { useAppSelector } from '@src/hooks';
import { viewedMonthSelector } from '@src/modules/lessons/store/selectors';
import * as S from '@src/modules/lessons/ui/screens/styles';
import { ARROW_LEFT } from '@src/constants/imagePaths';
import { useNavigation } from '@react-navigation/native';

export default function Lessons({ route }: any) {
  const navigation = useNavigation<any>();
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
        <S.ArrowWrapper onPress={() => navigation.goBack()}>
          <S.ArrowBack source={ARROW_LEFT} />
        </S.ArrowWrapper>
        <S.HeaderText>{selectDay.day + ' ' + month}</S.HeaderText>
        <S.EmptyField></S.EmptyField>
      </S.HeaderWrapper>
      <AddLessons date={date} />
      <LessonsList date={date} />
    </S.Container>
  );
}
