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
export type SignUp = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
export type Home = NativeStackScreenProps<RootStackParamList, 'Home'>;
export type Lessons = NativeStackScreenProps<RootStackParamList, 'Lessons'>;
export type Profile = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type Salary = NativeStackScreenProps<RootStackParamList, 'Salary'>;
export type Settings = NativeStackScreenProps<RootStackParamList, 'Settings'>;
