import { createAsyncThunk } from '@reduxjs/toolkit';
import usersServices from '@src/modules/auth/services/usersServices';
import { User } from '@src/store/globalInterface';

const PREFIX = 'users';

export const getUser = createAsyncThunk<User, string>(
  `${PREFIX}/getUser`,
  async id => {
    return await usersServices.getUser(id);
  },
);
export const postUser = createAsyncThunk<User, User>(
  `${PREFIX}/postUser`,
  async newUser => {
    return await usersServices.postUser(newUser);
  },
);
export const patchUser = createAsyncThunk<User, User>(
  `${PREFIX}/patchUser`,
  async currentUser => {
    return await usersServices.patchUser(currentUser);
  },
);
export const deleteUser = createAsyncThunk<undefined, string>(
  `${PREFIX}/deleteUser`,
  async currentUserId => {
    return await usersServices.deleteUser(currentUserId);
  },
);
