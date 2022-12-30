import { configureStore } from '@reduxjs/toolkit';

import teamReducer from '../slices/teamSlice';
import overlayReducer from '../slices/overlaySlice';

const appStore = configureStore({
  reducer: {
    teams: teamReducer,
    overlay: overlayReducer,
  },
});

export default appStore;

export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
