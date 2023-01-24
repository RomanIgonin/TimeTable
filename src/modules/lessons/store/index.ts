import {
  AnyAction,
  createSlice,
  EntityState,
  PayloadAction,
} from '@reduxjs/toolkit';
import { Dates, lessonsInitialState } from '@src/store/globalInterface';
import {
  deleteLesson,
  getDates,
  postDateAndLesson,
  postLesson,
} from '@src/modules/lessons/store/action';
import lessonsAdapter from '@src/modules/lessons/store/adapter';

// const initialState: lessonsInitialState = {
//   dates: [],
//   // переделать слайс в ентити адаптер
//   viewedMonth: '',
//   viewedYear: '',
// };
type StateSlice = {
  viewedMonth: string;
  viewedYear: string;
} & EntityState<Dates[]>;

const lessonsSlice = createSlice<StateSlice, {}>({
  name: 'lessons',
  initialState: lessonsAdapter.getInitialState({
    viewedMonth: '',
    viewedYear: '',
  }),
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
    });
    builder.addCase(postLesson.fulfilled, (state, { payload }) => {
      state.dates = state.dates?.filter(date => date.id !== payload.id);
      state.dates?.push(payload);
    });
    builder.addCase(postDateAndLesson.fulfilled, (state, { payload }) => {
      state.dates?.push(payload);
    });
    builder.addCase(deleteLesson.fulfilled, (state, { payload }) => {
      state.dates = state.dates?.filter(date => date.id !== payload.id);
      state.dates?.push(payload);
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
