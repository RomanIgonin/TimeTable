import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type SelectDay = {
  day: number;
  month: number;
  year: number;
  timestamp: number;
  dateString: string;
};

export type RootStackParamList = {
  LoginType: undefined;
  SignUpType: undefined;
  HomeType: undefined;
  HomeTabsType: undefined;
  LessonsType: { selectDay: SelectDay };
  ProfileType: undefined;
  EditProfileType: undefined;
  SalaryType: undefined;
  SettingsType: undefined;
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
export type SettingsType = NativeStackScreenProps<
  RootStackParamList,
  'Settings'
>;
