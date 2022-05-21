import { configureStore } from '@reduxjs/toolkit';
import values from './values';

export const store = configureStore({
  reducer: { values },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
