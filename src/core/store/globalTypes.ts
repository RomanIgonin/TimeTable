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
  phoneNumber: string;
  profileImage: any;
};

export type usersInitialStateType = {
  currentUser: undefined | UserType;
  dates: DatesType[];
  isUsersLoading: boolean;
};

export type lessonsInitialStateType = {
  lessons: LessonsType[];
};
