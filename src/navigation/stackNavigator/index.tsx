import * as React from 'react';
import {View, Image} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {RootStackParamList} from './types';

import Login from '../../auth/ui/screens/login';
import SignUp from '../../auth/ui/screens/signUp';
import Home from '../../modules/home/screens';
import Lessons from '../../modules/lessons/ui/screens';
import Profile from '../../modules/profile/profile';
import Settings from '../../modules/settings/ui';
import EditProfile from '@src/modules/profile/editProfile';
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
          tabBarIcon: () => (
            <View>
              <Image
                source={require('src/assets/icons/profile.png')}
                style={NavigationStyle.iconTabNavigator}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'Home'}
        component={Home}
        options={{
          tabBarIcon: () => (
            <View>
              <Image
                source={require('src/assets/icons/calendar.png')}
                style={NavigationStyle.iconTabNavigator}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'Settings'}
        component={Settings}
        options={{
          tabBarIcon: () => (
            <View>
              <Image
                source={require('src/assets/icons/settings.png')}
                style={NavigationStyle.iconTabNavigator}
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
        <Stack.Screen
          name="HomeTabs"
          component={HomeTabs}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen name="EditProfile" component={EditProfile} />
        <Stack.Screen name="Lessons" component={Lessons} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
