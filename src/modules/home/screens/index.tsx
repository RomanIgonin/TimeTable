import HomeCalendar from '@src/modules/home/components/calendar';
import MonthSalary from '@src/modules/home/components/monthSalary';
import * as S from '@src/modules/home/screens/styles';

export default function Home() {
  return (
    <S.Container>
      <HomeCalendar />
      <S.Salary>
        <MonthSalary />
      </S.Salary>
    </S.Container>
  );
}
