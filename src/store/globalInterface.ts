export interface Lessons {
  id: string;
  time: string;
  language: string;
  price: string;
}

export interface Dates {
  id: string;
  userId: string;
  date: string;
  lessons: Lessons[];
}

type Gender = 'Male' | 'Female' | '';

export interface User {
  id: string | undefined;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: Gender;
  phoneNumber: string;
  profileImage: any;
}

export interface userInitialState {
  currentUser: undefined | User;
  isUserLoading: boolean;
}

export interface lessonsInitialState {
  dates: Dates[];
  viewedMonth: string;
  viewedYear: string;
}
