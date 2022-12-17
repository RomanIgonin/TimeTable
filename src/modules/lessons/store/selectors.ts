import {RootState} from '@src/core/store';
import {createSelector} from '@reduxjs/toolkit';

const lessonsModuleSelector = (state: RootState) => state.lessons;

// export const lessonsSelector = createSelector(
//   lessonsModuleSelector,
//   state => state.lessons,
// );
