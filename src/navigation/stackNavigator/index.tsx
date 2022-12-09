import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './types';

import Login from '../../auth/ui/screens/login/ui/screens';
import SignUp from '../../auth/ui/screens/signUp/ui/screens';
import Home from '../../modules/home/ui/screens';
import Lessons from '../../modules/lessons/ui/screens';
import Profile from '../../modules/profile/ui/screens';
import Salary from '../../modules/salary/ui/screens';
import Settings from '../../modules/settings/ui/screens';
import {View, Text, Pressable, Image} from 'react-native';
import {NavigationStyle} from '@src/navigation/stackNavigator/style';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={'Profile'}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('src/assets/icons/profile.png')}
                style={NavigationStyle.profile}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('src/assets/icons/calendar.png')}
                style={NavigationStyle.calendar}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'Settings'}
        component={Settings}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <Image
                source={require('src/assets/icons/settings.png')}
                style={NavigationStyle.settings}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="Lessons" component={Lessons} />
        <Stack.Screen name="Salary" component={Salary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
