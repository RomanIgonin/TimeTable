import { createAsyncThunk } from '@reduxjs/toolkit';
import lessonsServices from '@src/modules/lessons/services/lessonsService';
import { Dates } from '@src/store/globalInterface';

const PREFIX = 'lessons';

export const getDates = createAsyncThunk<Dates[], string | undefined>(
  `${PREFIX}/getDates`,
  async userId => {
    return await lessonsServices.getDates(userId);
  },
);
export const postLesson = createAsyncThunk<Dates, Dates>(
  `${PREFIX}/postLesson`,
  async patchDate => {
    return await lessonsServices.postLesson(patchDate);
  },
);
export const postDateAndLesson = createAsyncThunk<Dates, Dates>(
  `${PREFIX}/postDateAndLesson`,
  async newLesson => {
    return await lessonsServices.postDateAndLesson(newLesson);
  },
);
export const deleteLesson = createAsyncThunk<Dates, Dates>(
  `${PREFIX}/deleteLesson`,
  async patchDate => {
    return await lessonsServices.deleteLesson(patchDate);
  },
);
export const deleteDateAndLesson = createAsyncThunk<undefined, Dates>(
  `${PREFIX}/deleteDateAndLesson`,
  async patchDate => {
    return await lessonsServices.deleteDateAndLesson(patchDate);
  },
);
