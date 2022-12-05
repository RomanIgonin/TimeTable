import {createSlice} from '@reduxjs/toolkit';
import {postUser} from './action';

export type UserType = {
  id: string;
  email: string;
  password: string;
  firstName: undefined | string;
  lastName: undefined | string;
};

type initialStateType = {
  // users: UserType[];
  currentUser: undefined | UserType;
  isUsersLoading: boolean;
};

const initialState: initialStateType = {
  // users: [],
  currentUser: undefined,
  isUsersLoading: false,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setCurrentUser: (state: initialStateType, {payload}) => {
      state.currentUser = payload;
      console.log(state.currentUser);
    },
  },
  extraReducers: builder => {
    builder.addCase(postUser.pending, state => {
      state.isUsersLoading = true;
    });
    builder.addCase(postUser.fulfilled, (state, {payload}) => {
      state.currentUser = payload;
      state.isUsersLoading = false;
    });
  },
});

export default usersSlice.reducer;
export const usersActions = usersSlice.actions;
