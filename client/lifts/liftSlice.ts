import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type {
  SetRecord,
  Routine,
  Session,
} from '@shared/types';
import dummyState from './dummyData';
// import type { RootState } from '../store';

interface Index {
  index: number,
}

const initialState: Session = dummyState;

export const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    startWorkout: (state, action: PayloadAction<Routine[]>) => {
      state.itinerary = action.payload;
      state.startTime = (new Date()).toISOString();
    },
    endWorkout: () => {
    },
    addExercise: () => {
    },
    removeExercise: (state, action: PayloadAction<number>) => {
      state.itinerary.splice(action.payload, 1);
    },
    logSet: (state, action: PayloadAction<SetRecord & Index>) => {
      const lift = state.itinerary[action.payload.index];
      if (lift) {
        lift.record.push({
          reps: action.payload.reps,
          weight: action.payload.weight,
        });
      }
    },
  },
});

export const {
  startWorkout,
  endWorkout,
  addExercise,
  removeExercise,
  logSet,
} = workoutSlice.actions;

export default workoutSlice.reducer;
