import { RootState } from '@src/store';
import { createSelector } from '@reduxjs/toolkit';

const usersModuleSelector = (state: RootState) => state.users;

export const currentUserSelector = createSelector(
  usersModuleSelector,
  state => state.currentUser,
);

export const isUserLoadingSelector = createSelector(
  usersModuleSelector,
  state => state.isUserLoading,
);
