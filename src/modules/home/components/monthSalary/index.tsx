import { useAppSelector } from '@src/hooks';
import {
  datesSelector,
  viewedMonthSelector,
  viewedYearSelector,
} from '@src/modules/lessons/store/selectors';
import { MONTHS } from '@src/constants/index';
import * as S from '@src/modules/home/components/monthSalary/styles';

export default function MonthSalary() {
  const viewedMonth = useAppSelector(viewedMonthSelector);
  const viewedYear = useAppSelector(viewedYearSelector);
  const currentMonth = MONTHS[parseInt(viewedMonth)];
  const dates = useAppSelector(datesSelector);

  // Отбираем даты с уроками в выбранном месяце в календаре
  const datesThisMonth = dates.filter(item => {
    const splitDate = item.date.split('.');
    return viewedMonth == splitDate[1] && viewedYear == splitDate[2];
  });
  // Суммируем цены за уроки в отобранных днях
  const allSalaryMoney = datesThisMonth.reduce(
    (a, b) => a + b.lessons.reduce((c, d) => c + Number(d.price), 0),
    0,
  );

  return (
    <S.Container>
      <S.Month>Salary for {currentMonth}:</S.Month>
      <S.Rubles>{allSalaryMoney} rubles</S.Rubles>
    </S.Container>
  );
}
