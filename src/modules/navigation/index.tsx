import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import {
  currentUserSelector,
  isUserLoadingSelector,
} from '@src/modules/users/store/selectors';

import Login from '@src/modules/auth/ui/screens/login';
import SignUp from '@src/modules/auth/ui/screens/signUp';
import Lessons from '@src/modules/lessons/ui/screens';
import EditProfile from '@src/modules/profile/editProfile';
import HomeTabs from '@src/modules/navigation/bottomTabNavigation';
import { useAppSelector } from '@src/hooks';
import LoaderScreen from '@src/modules/auth/ui/components/loaderScreen';

const Stack = createNativeStackNavigator();

export default function Navigate() {
  const currentUser = useAppSelector(currentUserSelector);
  const isUserLoading = useAppSelector(isUserLoadingSelector);

  // Render Navigation происходит 2 раза, при этом isUserLoading оба раза false
  console.log('render in navigation: ', currentUser, isUserLoading);

  if (isUserLoading) {
    return <LoaderScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        {!currentUser ? (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ gestureEnabled: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="HomeTabs"
              component={HomeTabs}
              options={{ gestureEnabled: false }}
            />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="Lessons" component={Lessons} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
