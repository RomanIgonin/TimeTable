import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type SelectDay = {
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
  Lessons: { selectDay: SelectDay };
  Profile: undefined;
  EditProfile: undefined;
  Salary: undefined;
  Settings: undefined;
};

export type Login = NativeStackScreenProps<RootStackParamList, 'Login'>;
export type SignUp = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
export type Home = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type Lessons = NativeStackScreenProps<RootStackParamList, 'Lessons'>;
export type Profile = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type EditProfile = NativeStackScreenProps<
  RootStackParamList,
  'EditProfile'
>;
export type Settings = NativeStackScreenProps<RootStackParamList, 'Settings'>;
