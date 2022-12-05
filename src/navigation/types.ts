import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Home: undefined;
  Lessons: undefined;
  Profile: undefined;
  Salary: undefined;
  Settings: undefined;
};

export type LoginType = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type SignUpType = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
export type HomeType = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type LessonsType = NativeStackScreenProps<RootStackParamList, 'Lessons'>;
export type ProfileType = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type SalaryType = NativeStackScreenProps<RootStackParamList, 'Salary'>;
export type SettingsType = NativeStackScreenProps<
  RootStackParamList,
  'Settings'
>;
