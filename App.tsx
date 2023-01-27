import React from 'react';
import MainStack from '@src/modules/navigation';
import { Provider } from 'react-redux';
import { store } from '@src/store';
import { SafeAreaView, StatusBar } from 'react-native';
import { ThemeProvider } from '@emotion/react';
import { index } from '@src/styles/theme';
import auth from '@react-native-firebase/auth';
import { getUser } from '@src/modules/users/store/action';
import { getDates } from '@src/modules/lessons/store/action';

export default function App() {
  const currentUserId = auth().currentUser?.uid;
  if (currentUserId) {
    store.dispatch(getUser(currentUserId));
    store.dispatch(getDates(currentUserId));
  }
  return (
    <ThemeProvider theme={index}>
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
          <StatusBar barStyle="dark-content" />
          <MainStack />
        </SafeAreaView>
      </Provider>
    </ThemeProvider>
  );
}
