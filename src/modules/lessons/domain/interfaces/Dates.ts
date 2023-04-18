import { Lessons } from '@src/modules/lessons/domain/interfaces/Lessons';

export interface Dates {
  id: string;
  userId: string | undefined;
  date: string;
  lessons: Lessons[];
}
