import * as React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationStyle } from '@src/modules/navigation/style';

import Home from '@src/modules/home/screens';
import Profile from '@src/modules/profile';
import Settings from '@src/modules/settings/ui';
import { CALENDAR, PROFILE, SETTINGS } from '@src/constants/imagePaths';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
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
                source={PROFILE}
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
                source={CALENDAR}
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
                source={SETTINGS}
                style={NavigationStyle.iconTabNavigator}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
