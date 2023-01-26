import { RootState } from '@src/store';
import { createSelector } from '@reduxjs/toolkit';
import lessonsAdapter from '@src/modules/lessons/store/adapter';

const lessonsModuleSelector = (state: RootState) => state.lessons;

export const datesSelector = createSelector(lessonsModuleSelector, state =>
  lessonsAdapter.getSelectors().selectAll(state.dates),
);

// export const lessonsSelector = lessonsAdapter.getSelectors<RootState>(
//   state => state.lessons,
// );
// const globalizedSelectors = booksAdapter.getSelectors((state) => state.books)

// const lessonsSelector = lessonsModuleSelector.selectAll();

// const allDates = globalLessonsSelector.selectAll(store.getState());
// export const datesSelector = createSelector(
//   lessonsModuleSelector,
//   state => state.dates,
// );
// export const datesSelector = createSelector(
//   lessonsModuleSelector,
//   state => state.dates,
// );

export const viewedMonthSelector = createSelector(
  lessonsModuleSelector,
  state => state.viewedMonth,
);

export const viewedYearSelector = createSelector(
  lessonsModuleSelector,
  state => state.viewedYear,
);
