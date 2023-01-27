export interface Lessons {
  id: string;
  time: string;
  language: string;
  price: string;
}

export interface Dates {
  id: string;
  userId: string | undefined;
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

// Пока не подключил интерфейс для initialState в lessonsSlice
// export interface lessonsInitialState {
//   dates: Dates[];
//   viewedMonth: string;
//   viewedYear: string;
//   isLoading: boolean;
// }
