import {createAsyncThunk} from '@reduxjs/toolkit';
import lessonsServices from '@src/modules/lessons/services/lessonsService';
import {DatesType} from '@src/store/globalTypes';

const PREFIX = 'lessons';

export const getDates = createAsyncThunk<DatesType[], string | undefined>(
  `${PREFIX}/getDates`,
  async userId => {
    return await lessonsServices.getDatesService(userId);
  },
);
export const postLesson = createAsyncThunk<DatesType, DatesType>(
  `${PREFIX}/postLesson`,
  async patchDate => {
    return await lessonsServices.postLessonService(patchDate);
  },
);
export const postDateAndLesson = createAsyncThunk<DatesType, DatesType>(
  `${PREFIX}/postDateAndLesson`,
  async newLesson => {
    return await lessonsServices.postDateAndLessonService(newLesson);
  },
);
export const deleteLesson = createAsyncThunk<DatesType, DatesType>(
  `${PREFIX}/deleteLesson`,
  async patchDate => {
    return await lessonsServices.deleteLessonService(patchDate);
  },
);
export const deleteDateAndLesson = createAsyncThunk<undefined, DatesType>(
  `${PREFIX}/deleteDateAndLesson`,
  async patchDate => {
    return await lessonsServices.deleteDateAndLessonService(patchDate);
  },
);
