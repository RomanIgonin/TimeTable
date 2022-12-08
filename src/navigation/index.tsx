import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './types';

import Login from '../auth/ui/screens/login/ui/screens/index';
import SignUp from '../auth/ui/screens/signUp/ui/screens';
import Home from '../modules/home/ui/screens';
import Lessons from '../modules/lessons/ui/screens';
import Profile from '../modules/menu/profile/ui/screens';
import Salary from '../modules/menu/salary/ui/screens';
import Settings from '../modules/menu/settings/ui/screens';
import {View, Text} from 'react-native';

const Stack = createNativeStackNavigator<RootStackParamList>();
// const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      // screenOptions={{
      //   headerStyle: {
      //     backgroundColor: '#849ab2',
      //   },
      //   headerTintColor: '#ea7171',
      //   headerTitleStyle: {fontWeight: 'bold'},
      //   headerBackTitleVisible: false,
      //   headerShown: false,
      // }}>
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        {/*<RootStack.Screen*/}
        {/*  name="Lessons"*/}
        {/*  component={Lessons}*/}
        {/*  options={{title: ''}}*/}
        {/*/>*/}
        {/*<RootStack.Screen*/}
        {/*  name="Profile"*/}
        {/*  component={Profile}*/}
        {/*  options={{title: ''}}*/}
        {/*/>*/}
        {/*<RootStack.Screen*/}
        {/*  name="Salary"*/}
        {/*  component={Salary}*/}
        {/*  options={{title: ''}}*/}
        {/*/>*/}
        {/*<RootStack.Screen*/}
        {/*  name="Settings"*/}
        {/*  component={Settings}*/}
        {/*  options={{title: ''}}*/}
        {/*/>*/}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
