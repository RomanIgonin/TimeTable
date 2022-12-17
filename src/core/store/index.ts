import {configureStore} from '@reduxjs/toolkit';
import usersSlice from '@src/users/store/index';
import lessonsSlice from '@src/modules/lessons/store/index';

export const store = configureStore({
  reducer: {
    users: usersSlice,
    lessons: lessonsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
