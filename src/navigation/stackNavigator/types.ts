import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type SelectDayType = {
  day: number;
  month: number;
  year: number;
  timestamp: number;
  dateString: string;
};

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  HomeTabs: undefined;
  Lessons: {selectDay: SelectDayType};
  Profile: undefined;
  EditProfile: undefined;
  Salary: undefined;
  Settings: undefined;
};

export type LoginType = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type SignUpType = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
export type HomeType = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type LessonsType = NativeStackScreenProps<RootStackParamList, 'Lessons'>;
export type ProfileType = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type EditProfileType = NativeStackScreenProps<
  RootStackParamList,
  'EditProfile'
>;
export type SalaryType = NativeStackScreenProps<RootStackParamList, 'Salary'>;
export type SettingsType = NativeStackScreenProps<
  RootStackParamList,
  'Settings'
>;
