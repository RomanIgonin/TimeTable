import {AnyAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  deleteDateAndLesson,
  deleteLesson,
  getDates,
  getUser,
  patchUser,
  postDateAndLesson,
  postLesson,
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
      // console.log('state.dates before: ' + JSON.stringify(state.dates));
      // console.log('Payload: ' + JSON.stringify(payload));
      state.dates = state.dates?.filter(date => date.id !== payload.id);
      state.dates?.push(payload);
      console.log('postLesson done');
      // console.log('state.dates after: ' + JSON.stringify(state.dates));
    });
    builder.addCase(postDateAndLesson.fulfilled, (state, {payload}) => {
      // console.log('state.dates before: ' + JSON.stringify(state.dates));
      state.dates?.push(payload);
      console.log('postDateAndLesson done');
      // console.log('state.dates: ' + JSON.stringify(state.dates));
    });
    builder.addCase(deleteLesson.fulfilled, (state, {payload}) => {
      // console.log('state.dates before: ' + JSON.stringify(state.dates));
      // console.log('Payload: ' + JSON.stringify(payload));
      state.dates = state.dates?.filter(date => date.id !== payload.id);
      state.dates?.push(payload);
      // console.log('state.dates: ' + JSON.stringify(state.dates));
      // console.log('state.dates before: ' + JSON.stringify(state.dates));
      // state.dates?.filter(date => date.id !== payload.id);
      // console.log('state.dates after: ' + JSON.stringify(state.dates));
      // state.dates?.push(payload);
    });
    builder.addCase(patchUser.fulfilled, (state, {payload}) => {
      state.currentUser = payload;
      console.log('State profileImage: ' + JSON.stringify(state.currentUser));
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
