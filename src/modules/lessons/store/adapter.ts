import { createEntityAdapter } from '@reduxjs/toolkit';
import { Dates } from '@src/modules/lessons/domain/interfaces/Dates';

export const lessonsAdapter = createEntityAdapter<Dates>({
  selectId: date => date.id,
});

export default lessonsAdapter;
