import { createEntityAdapter } from '@reduxjs/toolkit';
import { Dates } from '@src/store/globalInterface';

export const lessonsAdapter = createEntityAdapter<Dates>({
  selectId: date => date.id,
});

export default lessonsAdapter;
