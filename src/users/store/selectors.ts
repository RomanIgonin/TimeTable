import {RootState} from '@src/core/store';
import {createSelector} from '@reduxjs/toolkit';

const usersModuleSelector = (state: RootState) => state.users;

export const currentUserSelector = createSelector(
  usersModuleSelector,
  state => state.currentUser,
);

export const datesSelector = createSelector(
  usersModuleSelector,
  state => state?.dates,
);

// export const lessonssSelector = createSelector(
//   datesSelector,
//   state => state?.lessons,
// );
