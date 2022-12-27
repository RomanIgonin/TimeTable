export type LessonsType = {
  id: string;
  time: string;
  language: string;
  price: string;
};

export type DatesType = {
  id: string;
  userId: string;
  date: string;
  lessons: LessonsType[];
};

export type UserType = {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  gender: 'Male' | 'Female' | '';
  phoneNumber: string;
  profileImage: any;
};

export type usersInitialStateType = {
  currentUser: undefined | UserType;
  dates: DatesType[];
  isUsersLoading: boolean;
  viewedMonth: string;
};

export type lessonsInitialStateType = {
  lessons: LessonsType[];
};
