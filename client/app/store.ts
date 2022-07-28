import { configureStore } from '@reduxjs/toolkit';
import exercisesReducer from '../features/exercises/exercisesSlice';
import programsReducer from '../features/programs/programsSlice';
import routinesReducer from '../features/routines/routinesSlice';
import routineSetsReducer from '../features/routineSets/routineSetsSlice';

const store = configureStore({
  reducer: {
    exercises: exercisesReducer,
    programs: programsReducer,
    routines: routinesReducer,
    routineSets: routineSetsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
