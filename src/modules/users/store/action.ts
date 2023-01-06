import {createAsyncThunk} from '@reduxjs/toolkit';
import usersServices from '@src/modules/users/services/usersServices';
import {UserType} from '@src/store/globalTypes';

const PREFIX = 'users';

export const getUser = createAsyncThunk<UserType, string>(
  `${PREFIX}/getUser`,
  async id => {
    return await usersServices.getUserService(id);
  },
);
export const postUser = createAsyncThunk<UserType, UserType>(
  `${PREFIX}/postUser`,
  async newUser => {
    return await usersServices.postUserService(newUser);
  },
);
export const patchUser = createAsyncThunk<UserType, UserType>(
  `${PREFIX}/patchUser`,
  async currentUser => {
    return await usersServices.patchUserService(currentUser);
  },
);
export const deleteUser = createAsyncThunk<undefined, string>(
  `${PREFIX}/deleteUser`,
  async currentUserId => {
    return await usersServices.deleteUserService(currentUserId);
  },
);
