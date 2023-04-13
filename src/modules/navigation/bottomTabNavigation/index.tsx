import * as React from 'react';
import { View, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationStyle } from '@src/modules/navigation/style';

import Home from '@src/modules/home/screens';
import Profile from '@src/modules/profile';
import Settings from '@src/modules/settings/ui';

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
                source={require('@src/assets/icons/profile.png')}
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
                source={require('@src/assets/icons/calendar.png')}
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
                source={require('@src/assets/icons/settings.png')}
                style={NavigationStyle.iconTabNavigator}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
