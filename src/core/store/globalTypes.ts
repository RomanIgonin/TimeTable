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
// export type LessonsType = {
//   id: string;
//   date: string;
//   lessonsList: LessonsListType[];
// };

export type UserType = {
  id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  profileImage: string;
};

export type usersInitialStateType = {
  // users: UserType[];
  currentUser: undefined | UserType;
  dates: DatesType[];
  isUsersLoading: boolean;
};

export type lessonsInitialStateType = {
  lessons: LessonsType[];
};
