import React from 'react';
import {View, Text} from 'react-native';
// import {Provider} from 'react-redux';
import GeneralStatusBarColor from './src/core/statusBar';
import MainStack from './src/navigation';
import LogIn from './src/auth/ui/screens/login/ui/screens';
import {Provider} from 'react-redux';
import {store} from './src/core/store';

export default function App() {
  return (
    <Provider store={store}>
      <GeneralStatusBarColor
        backgroundColor="#000a15"
        barStyle="light-content"
      />
      <MainStack />
    </Provider>
  );
}
