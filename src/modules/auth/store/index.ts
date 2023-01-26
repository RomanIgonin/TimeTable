import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { deleteUser, getUser, patchUser, postUser } from './action';
import { userInitialState } from '@src/store/globalInterface';

const initialState: userInitialState = {
  currentUser: undefined,
  isUserLoading: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userSignOut(state, { payload }) {
      state.currentUser = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUser.pending, state => {
      state.isUserLoading = true;
    });
    builder.addCase(getUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
      state.isUserLoading = false;
      console.log('currentUser in state: ' + state.currentUser?.email);
    });

    builder.addCase(postUser.pending, state => {
      state.isUserLoading = true;
    });
    builder.addCase(postUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
      state.isUserLoading = false;
    });

    builder.addCase(patchUser.fulfilled, (state, { payload }) => {
      state.currentUser = payload;
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
