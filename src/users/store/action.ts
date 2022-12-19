import {createAsyncThunk} from '@reduxjs/toolkit';
import usersServices from '@src/users/services/usersServices';
import {DatesType, UserType} from '@src/core/store/globalTypes';

const PREFIX = 'users';

export const getUser = createAsyncThunk<UserType, string>(
  `${PREFIX}/getUser`,
  async id => {
    return await usersServices.getUserService(id);
  },
);
// export const getUserLessons = createAsyncThunk<LessonsType[], string>(
//   `${PREFIX}/getUserLessons`,
//   async date => {
//     return await usersServices.getUserLessonsService(date);
//   },
// );
export const getDates = createAsyncThunk<DatesType[], string | undefined>(
  `${PREFIX}/getDates`,
  async userId => {
    return await usersServices.getDatesService(userId);
  },
);
export const postUser = createAsyncThunk<UserType, UserType>(
  `${PREFIX}/postUser`,
  async newUser => {
    return await usersServices.postUserService(newUser);
  },
);
export const postLesson = createAsyncThunk<DatesType, DatesType>(
  `${PREFIX}/postLesson`,
  async patchDate => {
    return await usersServices.postLessonService(patchDate);
  },
);
export const postDateAndLesson = createAsyncThunk<DatesType, DatesType>(
  `${PREFIX}/postDateAndLesson`,
  async newLesson => {
    return await usersServices.postDateAndLessonService(newLesson);
  },
);
export const deleteLesson = createAsyncThunk<DatesType, DatesType>(
  `${PREFIX}/deleteLesson`,
  async patchDate => {
    return await usersServices.deleteLessonService(patchDate);
  },
);
export const deleteDateAndLesson = createAsyncThunk<undefined, DatesType>(
  `${PREFIX}/deleteDateAndLesson`,
  async patchDate => {
    return await usersServices.deleteDateAndLessonService(patchDate);
  },
);
export const patchUser = createAsyncThunk<UserType, UserType>(
  `${PREFIX}/patchUser`,
  async currentUser => {
    return await usersServices.patchUserService(currentUser);
  },
);
//
// export const postCurrentUserOnServer = createAsyncThunk<undefined, UserType>(
//   `${PREFIX}/postCurrentUserOnServer`,
//   async currentUser => {
//     return await usersServices.postCurrentUserService(currentUser);
//   },
// );
//
// export const deleteCurrentUserOnServer = createAsyncThunk<undefined, UserType>(
//   `${PREFIX}/deleteCurrentUserOnServer`,
//   async currentUser => {
//     return await usersServices.deleteCurrentUserService(currentUser);
//   },
// );
