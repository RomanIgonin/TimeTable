import React from 'react';
import {View, Text} from 'react-native';
// import {Provider} from 'react-redux';
import GeneralStatusBarColor from './src/core/statusBar';
import MainStack from './src/navigation';
import LogIn from './src/modules/logIn/ui/screens';

export default function App() {
  return (
    // <Provider store={store}>
    // <View>
    //   <GeneralStatusBarColor
    //     backgroundColor="#000a15"
    //     barStyle="light-content"
    //   />
    <MainStack />
    // </View>
    // </Provider>
  );
}
