import { createAsyncThunk } from '@reduxjs/toolkit';
import usersServices from '@src/modules/users/domain/services/usersServices';
import { User } from '@src/modules/users/domain/interfaces/User';

const PREFIX = 'users';

export const getUser = createAsyncThunk<User, string | undefined>(
  `${PREFIX}/getUser`,
  async id => {
    return await usersServices.getUser(id);
  },
);
export const postUser = createAsyncThunk<User, User>(
  `${PREFIX}/postUser`,
  async newUser => {
    try {
      return await usersServices.postUser(newUser);
    } catch (error: any) {
      console.warn(error);
    }
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
