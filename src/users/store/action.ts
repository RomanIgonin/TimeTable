import {createAsyncThunk} from '@reduxjs/toolkit';
import usersServices from '@src/users/services/usersServices';
import {UserType} from './index';

const PREFIX = 'users';

// export const getUsers = createAsyncThunk(`${PREFIX}/getUsers`, async () => {
//   return await usersServices.getUsersService();
// });

export const postUserOnServer = createAsyncThunk<undefined, UserType>(
  `${PREFIX}/postUserOnServer`,
  async newUser => {
    return await usersServices.postUserService(newUser);
  },
);

export const postCurrentUserOnServer = createAsyncThunk<undefined, UserType>(
  `${PREFIX}/postCurrentUserOnServer`,
  async currentUser => {
    return await usersServices.postCurrentUserService(currentUser);
  },
);

export const deleteCurrentUserOnServer = createAsyncThunk<undefined, UserType>(
  `${PREFIX}/postCurrentUserOnServer`,
  async currentUser => {
    return await usersServices.deleteCurrentUserService(currentUser);
  },
);
