import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '@src/hooks';
import {currentUserSelector, datesSelector} from '@src/users/store/selectors';
import {getDates} from '@src/users/store/action';
import {Text, View} from 'react-native';
import {MONTHS} from '@src/core/constants';
import {MonthSalaryStyle} from '@src/modules/profile/components/monthSalary/style';

export default function MonthSalary() {
  const dates = useAppSelector(datesSelector);
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(currentUserSelector);
  const day = new Date().toISOString().slice(8, 10);
  const month = new Date().toISOString().slice(5, 7);
  const currentMonth = MONTHS[parseInt(month)];

  useEffect(() => {
    dispatch(getDates(currentUser?.id));
  }, []);

  let salaryMoney = 0;
  let allSalaryMoney = 0;
  dates.forEach(item => {
    const arrayMonth = item.date.split('.');
    // console.log('day: ' + arrayMonth[0] + '.' + arrayMonth[1]);
    item.lessons.forEach(lesson => {
      let buff = Number(lesson.price);
      if (month === arrayMonth[1]) {
        allSalaryMoney += buff;
        if (parseInt(day) >= parseInt(arrayMonth[0])) {
          salaryMoney += buff;
        }
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
          <Text>{salaryMoney} rubles</Text>
        </View>
      </View>
      {/*<View style={MonthSalaryStyle.infoElement}>*/}
      {/*  <View style={MonthSalaryStyle.infoElementTitle}>*/}
      {/*    <Text style={MonthSalaryStyle.infoElementTitleText}>*/}
      {/*      Salary for {currentMonth}:*/}
      {/*    </Text>*/}
      {/*  </View>*/}
      {/*  <View style={MonthSalaryStyle.infoElementTextRight}>*/}
      {/*    <Text>{allSalaryMoney} rubles</Text>*/}
      {/*  </View>*/}
      {/*</View>*/}
    </View>
  );
}
