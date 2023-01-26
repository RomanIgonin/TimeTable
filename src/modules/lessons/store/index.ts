import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  deleteLesson,
  getDates,
  postDateAndLesson,
  postLesson,
} from '@src/modules/lessons/store/action';
import lessonsAdapter from '@src/modules/lessons/store/adapter';

// Пока не подключил интерфейс для initialState
const lessonsSlice = createSlice({
  name: 'lessons',
  initialState: {
    dates: lessonsAdapter.getInitialState(),
    viewedMonth: '',
    viewedYear: '',
    isLoading: false,
  },
  reducers: {
    removeDates(state, { payload }) {
      lessonsAdapter.setAll(state.dates, payload);
    },
    setViewedMonth(state, { payload }) {
      state.viewedMonth = payload;
    },
    setViewedYear(state, { payload }) {
      state.viewedYear = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getDates.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(getDates.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      lessonsAdapter.setAll(state.dates, payload);
    });

    builder.addCase(postLesson.fulfilled, (state, { payload }) => {
      lessonsAdapter.setOne(state.dates, payload);
    });
    builder.addCase(postDateAndLesson.fulfilled, (state, { payload }) => {
      lessonsAdapter.addOne(state.dates, payload);
    });
    builder.addCase(deleteLesson.fulfilled, (state, { payload }) => {
      lessonsAdapter.setOne(state.dates, payload);
    });
    builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
      console.log(action.payload);
    });
  },
});

export default lessonsSlice.reducer;
export const lessonsActions = lessonsSlice.actions;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
