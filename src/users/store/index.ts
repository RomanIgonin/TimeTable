import {AnyAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  deleteLesson,
  getDates,
  getUser,
  patchUser,
  postDateAndLesson,
  postLesson,
  postProfileImage,
  postUser,
} from './action';
import {usersInitialStateType} from '@src/core/store/globalTypes';

const initialState: usersInitialStateType = {
  currentUser: undefined,
  dates: [],
  isUsersLoading: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUser.pending, state => {
      state.isUsersLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, {payload}) => {
      state.currentUser = payload;
      state.isUsersLoading = false;
      console.log('currentUser in state: ' + state.currentUser?.email);
    });
    builder.addCase(getDates.fulfilled, (state, {payload}) => {
      state.dates = payload;
      console.log('getDates done');
    });
    builder.addCase(postUser.fulfilled, (state, {payload}) => {
      state.currentUser = payload;
      console.log('postUser done: ' + state.currentUser);
    });
    builder.addCase(postLesson.fulfilled, (state, {payload}) => {
      state.dates?.filter(date => date.id !== payload.id);
      state.dates?.push(payload);
    });
    builder.addCase(postDateAndLesson.fulfilled, (state, {payload}) => {
      state.dates?.push(payload);
      console.log('postDateAndLesson done');
    });
    builder.addCase(deleteLesson.fulfilled, (state, {payload}) => {
      console.log('Payload: ' + payload.id);
      state.dates?.filter(date => date.id !== payload.id);
      state.dates?.push(payload);
    });
    builder.addCase(patchUser.fulfilled, (state, {payload}) => {
      state.currentUser = payload;
      console.log('State profileImage: ' + state.currentUser);
    });

    builder.addMatcher(isError, (state, action: PayloadAction<string>) => {
      console.log(action.payload);
    });
  },
});

export default usersSlice.reducer;
export const usersActions = usersSlice.actions;

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}
