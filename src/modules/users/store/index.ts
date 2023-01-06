import {AnyAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getUser, patchUser, postUser} from './action';
import {usersInitialStateType} from '@src/store/globalTypes';

const initialState: usersInitialStateType = {
  currentUser: undefined,
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
    builder.addCase(postUser.fulfilled, (state, {payload}) => {
      state.currentUser = payload;
      console.log('postUser done: ' + state.currentUser);
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
