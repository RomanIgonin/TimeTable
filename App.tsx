import React from 'react';
import GeneralStatusBarColor from './src/core/statusBar';
import MainStack from '@src/navigation/stackNavigator';
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
