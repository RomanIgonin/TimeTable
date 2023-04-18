import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducers from '@src/store/reducers';

export const rootReducer = combineReducers(reducers);

const middlewares: any = [];

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat([...middlewares]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
