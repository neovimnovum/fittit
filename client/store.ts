import { configureStore } from '@reduxjs/toolkit';
import workoutReducer from './lifts/liftSlice';

const store = configureStore({
  reducer: {
    workout: workoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
