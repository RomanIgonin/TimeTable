import {createAsyncThunk} from '@reduxjs/toolkit';
import usersServices from '../services/usersService';
import {UserType} from './index';

const PREFIX = 'users';

// export const getUsers = createAsyncThunk(`${PREFIX}/getUsers`, async () => {
//   return await usersServices.getUsersService();
// });

export const postUser = createAsyncThunk<undefined, UserType>(
  `${PREFIX}/postUser`,
  async newUser => {
    return await usersServices.postUserService(newUser);
  },
);
