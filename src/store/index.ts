import {configureStore} from '@reduxjs/toolkit';
import usersSlice from '@src/modules/users/store';
import lessonsSlice from '@src/modules/lessons/store';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    lessons: lessonsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
