import {RootState} from '@src/core/store';
import {createSelector} from '@reduxjs/toolkit';

const usersModuleSelector = (state: RootState) => state.users;

export const usersSelector = createSelector(
  usersModuleSelector,
  state => state.users,
);

export const currentUserSelector = createSelector(
  usersModuleSelector,
  state => state.currentUser,
);
