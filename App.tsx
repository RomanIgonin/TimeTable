import React from 'react';
import MainStack from '@src/modules/navigation';
import {Provider} from 'react-redux';
import {store} from '@src/store';
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
