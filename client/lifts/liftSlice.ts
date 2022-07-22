import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import dummyState from './dummyData';
import type {
  SetRecord,
  Routine,
  Session,
} from '../../types';
// import type { RootState } from '../store';

const initialState: Session = dummyState;

export const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    START_WORKOUT: (state, action: PayloadAction<Routine[]>) => {
      state.itinerary = action.payload;
      state.startTime = (new Date()).toISOString();
    },
    END_WORKOUT: () => {
    },
    ADD_EXERCISE: () => {
    },
    REMOVE_EXERCISE: (state, action: PayloadAction<number>) => {
      state.itinerary.splice(action.payload, 1);
    },
    ADJUST_SET: (state, action: PayloadAction<SetRecord & { index: number }>) => {
      const target = state.itinerary[action.payload.index];
      if (target) {
        target.reps = action.payload.reps;
        target.weight = action.payload.weight;
      }
    },
    LOG_SET: (state, action: PayloadAction<number>) => {
      const lift = state.itinerary[action.payload];
      if (lift) {
        lift.record.push({
          reps: lift.reps,
          weight: lift.weight,
        });
      }
    },
  },
});

export const {
  LOG_SET,
  ADJUST_SET,
  REMOVE_EXERCISE,
  ADD_EXERCISE,
  END_WORKOUT,
  START_WORKOUT,
} = workoutSlice.actions;

export default workoutSlice.reducer;
