import React from 'react';
import MainStack from '@src/navigation/stackNavigator';
import {Provider} from 'react-redux';
import {store} from './src/core/store/index';
import {SafeAreaView, StatusBar} from 'react-native';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <StatusBar barStyle="dark-content" />
        <MainStack />
      </SafeAreaView>
    </Provider>
  );
}
