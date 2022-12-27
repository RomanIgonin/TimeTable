import {useAppSelector} from '@src/hooks';
import {datesSelector, viewedMonthSelector} from '@src/users/store/selectors';
import {Text, View} from 'react-native';
import {MONTHS} from '@src/core/constants';
import {MonthSalaryStyle} from '@src/modules/profile/components/monthSalary/style';

export default function MonthSalary() {
  const dates = useAppSelector(datesSelector);
  const viewedMonth = useAppSelector(viewedMonthSelector);
  const currentMonth = MONTHS[parseInt(viewedMonth)];

  let allSalaryMoney = 0;

  dates.forEach(item => {
    const monthInDate = item.date.split('.');
    item.lessons.forEach(lesson => {
      let buff = Number(lesson.price);
      if (viewedMonth == monthInDate[1]) {
        allSalaryMoney += buff;
        // if (parseInt(day) >= parseInt(arrayMonth[0])) {
        //   salaryMoney += buff;
        // }
      }
    });
  });

  return (
    <View style={MonthSalaryStyle.main}>
      <View style={MonthSalaryStyle.infoElement}>
        <View style={MonthSalaryStyle.infoElementTitle}>
          <Text style={MonthSalaryStyle.infoElementTitleText}>
            Salary for {currentMonth}:
          </Text>
        </View>
        <View style={MonthSalaryStyle.infoElementTextRight}>
          <Text>{allSalaryMoney} rubles</Text>
        </View>
      </View>
    </View>
  );
}
