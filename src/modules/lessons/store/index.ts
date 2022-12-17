import {AnyAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {lessonsInitialStateType} from '@src/core/store/globalTypes';
import {
  postLessonOnServer,
  getLessonsFromServer,
  postDateAndLessonsOnServer,
  getUsersFromServer,
} from '@src/modules/lessons/store/action';

const initialState: lessonsInitialStateType = {
  lessons: [],
};

const lessonsSlice = createSlice({
  name: 'lessons',
  initialState,
  reducers: {},
  extraReducers: builder => {
    // builder.addCase(getLessonsFromServer.fulfilled, (state, {payload}) => {
    //   // state.lessons = payload;
    // });
    // builder.addCase(
    //   postDateAndLessonsOnServer.fulfilled,
    //   (state, {payload}) => {
    //     // state.lessons = payload;
    //   },
    // );
    // builder.addCase(postLessonOnServer.fulfilled, (state, {payload}) => {
    //   // state.lessons = payload;
    // });
    // builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
    //   console.log(action.payload);
    // });
  },
});

export default lessonsSlice.reducer;
export const lessonsActions = lessonsSlice.actions;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
