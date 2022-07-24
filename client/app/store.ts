import { configureStore } from '@reduxjs/toolkit';
import programReducer from '../features/programs/programSlice';

const store = configureStore({
  reducer: {
    programs: programReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
