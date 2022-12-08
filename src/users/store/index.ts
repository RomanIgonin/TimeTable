import {createSlice} from '@reduxjs/toolkit';
import {postCurrentUserOnServer, postUserOnServer} from './action';

export type UserType = {
  id: string | undefined;
  email: string | null | undefined;
  password: string;
  firstName: undefined | string;
  lastName: undefined | string;
};

type initialStateType = {
  users: UserType[];
  currentUser: undefined | UserType;
  isUsersLoading: boolean;
};

const initialState: initialStateType = {
  users: [],
  currentUser: undefined,
  isUsersLoading: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser: (state: initialStateType, {payload}) => {
      state.currentUser = payload;
    },
    setNewUser: (state: initialStateType, {payload}) => {
      state.users = payload;
    },
  },
  extraReducers: builder => {
    builder.addCase(postUserOnServer.pending, state => {
      state.isUsersLoading = true;
    });
    builder.addCase(postUserOnServer.fulfilled, (state, {payload}) => {
      state.currentUser = payload;
      state.isUsersLoading = false;
    });
    builder.addCase(postCurrentUserOnServer.fulfilled, (state, {payload}) => {
      state.currentUser = payload;
      console.log(state.currentUser);
    });
    builder.addCase(deleteCurrentUserOnServer.fulfilled, state => {
      state.currentUser = undefined;
    });
  },
});

export default usersSlice.reducer;
export const usersActions = usersSlice.actions;
