import { createEntityAdapter } from '@reduxjs/toolkit';
import { Dates } from '@src/store/globalInterface';

export const lessonsAdapter = createEntityAdapter<Dates>({
  sortComparer: (a, b) => {
    return +b.date.split('.').join('') - +a.date.split('.').join('');
  },
});

export default lessonsAdapter;
