import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import type { RootState } from '../store';

interface LiftSet {
  _id?: string,
  reps: number,
  weight: number,
  exercise_id?: string,
  workout_id?: string,
}

interface IndexedSet extends LiftSet {
  index: number,
}
interface Exercise {
  name: string,
  id: string,
  sets: number,
  weight: number,
  reps: number,
  record: LiftSet[]
}
interface Workout {
  _id: string,
  username: string,
  start_time: string,
  end_time: string,
}

interface LiftState {
  active: boolean,
  browsing: boolean,
  startTime: null | string,
  lifts: Exercise[],
}

const initialState: LiftState = {
  active: false,
  browsing: false,
  startTime: null,
  lifts: [],
};

export const workoutSlice = createSlice({
  name: 'workout',
  initialState,
  reducers: {
    START_WORKOUT: (state, action: PayloadAction<Exercise[]>) => {
      state.lifts = action.payload;
      state.active = true;
      state.startTime = (new Date()).toISOString();
    },
    END_WORKOUT: (state) => {
      state.active = false;
      state.browsing = false;
    },
    ADD_EXERCISE: () => {

    },
    REMOVE_EXERCISE: (state, action: PayloadAction<{ index: number }>) => {
      state.lifts.splice(action.payload.index, 1);
    },
    UPDATE_SET: (state, action: PayloadAction<IndexedSet>) => {
      const target = state.lifts[action.payload.index];
      if (target) {
        target.reps = action.payload.reps;
        target.weight = action.payload.weight;
      }
    },
    LOG_SET: (state, action: PayloadAction<{
      index: number, weight: number, reps: number, sets: number
    }>) => {
      const lift = state.lifts[action.payload.index];
      if (lift) {
        lift.sets = action.payload.sets;
        lift.reps = action.payload.reps;
        lift.weight = action.payload.weight;
        lift.record.push({
          reps: lift.reps,
          weight: lift.weight,
        });
      }
    },
    VIEW_HISTORY: (state /* action: PayloadAction<Workout[]> */) => {
      state.browsing = true;
      // state.lifts = action.payload;
    },
    VIEW_DETAILS: (state, action: PayloadAction<Exercise[]>) => {
      state.active = true;
      state.lifts = action.payload;
    },
  },
});

export const {
  VIEW_HISTORY,
  VIEW_DETAILS,
  LOG_SET,
  UPDATE_SET,
  REMOVE_EXERCISE,
  ADD_EXERCISE,
  END_WORKOUT,
  START_WORKOUT,
} = workoutSlice.actions;

export default workoutSlice.reducer;
