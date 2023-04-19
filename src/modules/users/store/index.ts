import { AnyAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getUser, patchUser, postUser } from './action';
import { UserInitialState } from '@src/modules/users/domain/interfaces/UserInitialState';

const initialState: UserInitialState = {
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
