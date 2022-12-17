import {createAsyncThunk, createSelector} from '@reduxjs/toolkit';
import {UserType} from '@src/users/store';
import lessonsService from '@src/modules/lessons/services/lessonsService';
import {LessonsListType, LessonsType} from '@src/core/store/globalTypes';

const PREFIX = 'lessons';

// export const getUsersFromServer = createAsyncThunk<UserType[], undefined>(
//   `${PREFIX}/getUsersFromServer`,
//   async () => {
//     return await lessonsService.getUsersService();
//   },
// );
//
// export const getLessonsFromServer = createAsyncThunk<LessonsType[], string>(
//   `${PREFIX}/getLessonsFromServer`,
//   async id => {
//     return await lessonsService.getLessonsService(id);
//   },
// );
//
// export const postDateAndLessonsOnServer = createAsyncThunk<
//   undefined,
//   LessonsType
// >(`${PREFIX}/postDateAndLessonsOnServer`, async newDateAndLesson => {
//   return await lessonsService.postDateAndLessonService(newDateAndLesson);
// });
//
// export const postLessonOnServer = createAsyncThunk<undefined, LessonsListType>(
//   `${PREFIX}/postLessonOnServer`,
//   async newLesson => {
//     return await lessonsService.postLessonService(newLesson);
//   },
// );
