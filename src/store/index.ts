import { configureStore } from '@reduxjs/toolkit';

import teamReducer from '../slices/teamSlice';

const appStore = configureStore({
  reducer: {
    teams: teamReducer,
  },
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
