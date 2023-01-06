import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { lessonsInitialStateType } from '@src/store/globalTypes';
import {
  deleteDateAndLesson,
  deleteLesson,
  getDates,
  postDateAndLesson,
  postLesson,
} from '@src/modules/lessons/store/action';

const initialState: lessonsInitialStateType = {
  dates: [],
  viewedMonth: '',
  viewedYear: '',
};

const lessonsSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {
    setViewedMonth(state, action) {
      state.viewedMonth = action.payload;
    },
    setViewedYear(state, action) {
      state.viewedYear = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getDates.fulfilled, (state, { payload }) => {
      state.dates = payload;
      console.log('getDates done');
    });
    builder.addCase(postLesson.fulfilled, (state, { payload }) => {
      state.dates = state.dates?.filter(date => date.id !== payload.id);
      state.dates?.push(payload);
      console.log('postLesson done');
    });
    builder.addCase(postDateAndLesson.fulfilled, (state, { payload }) => {
      state.dates?.push(payload);
      console.log('postDateAndLesson done');
    });
    builder.addCase(deleteLesson.fulfilled, (state, { payload }) => {
      state.dates = state.dates?.filter(date => date.id !== payload.id);
      state.dates?.push(payload);
      console.log('deleteLesson done');
    });
    // после удаления всех уроков в дне, не может отрендерить скрин lesson
    builder.addCase(deleteDateAndLesson.fulfilled, (state, { payload }) => {
      console.log('deleteDateAndLesson done');
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
